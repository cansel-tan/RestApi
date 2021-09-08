/*var p= new Promise(function(resolve,reject) {
    if(false){
        resolve('success');
    }
    else{
        reject('failed');
    }

});

p.then(function(data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
})*/

let myObj={
    //method:"POST",
    url:"https://randomuser.me/api/?results=5", //5 bilgi getirir
   // headers:{"content-type":"application/json"}
   //body:{"name":"cansel"}
}

let request=obj =>{
    return new Promise((resolve,reject)=>
    {
        let xhr = new XMLHttpRequest();
        xhr.open(obj.method || "GET", obj.url); //objenin içi boş değilse belirtilmişse o çalışır veya versayılan GET metodu
        
       /* if(xhr.header){
            Object.keys[obj.headers].forEach(key => {
                xhr.setRequestHeader(key,obj.headers[key]); //obje içerisinde headers bilgisi verildiyse if kontrolü gerçekleştirilir.
            });
        }*/

        xhr.onload=()=>{
            if(xhr.status>=200 && xhr.status<300){
                resolve(xhr.response);
            }
            else{
                reject(xhr.statusText);
            }
        }

        xhr.onerror=()=>{
            reject(xhr.statusText);
        }
        
        xhr.send(obj.body);
    });
}

//html işleminin ardışık işlemle yapımı
//alınan userler bu fonksiyona gelir.
let buildHtml=function(data){
    let users=JSON.parse(data);
    let html="";//ekrana 5 kullanıcı getirir.
    users.results.forEach(user => {
        html+=`
                <div>
                <img src="${user.picture.medium}">
                <div>${user.name.title}</div>
                <div>${user.name.first}</div>
                <div>${user.name.last}</div>
                </div>      
            `;
        document.querySelector('#users').innerHTML=html;
    })
    return Promise.resolve("Html is loaded"); //geriye parametre göndererek promise ile başarılı sonuç döndürür.
}

request(myObj)
    .then(buildHtml)
    .then(msg=>{
        console.log(msg);
    })
    .catch(error=>{
        console.log(error);
    })
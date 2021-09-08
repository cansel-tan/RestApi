function getExternalApi(){
    fetch("https://randomuser.me/api/?results=7")
    .then (data=>{
        return data.json()//gelen veriyi json bilgisine çevirir.
    }).then(users=>{

        var html="";
        users.results.forEach(user => {
            html+=`
            <div>
            <img src="${user.picture.medium}">
            <div> ${user.name.first}</div>
            <div> ${user.name.last}</div>
            </div>  
        
        `;

        });
       
        document.querySelector('#users').innerHTML=html;
        //Fonksiyonlardan geriye promise döndürmek zorunda değiliz.
        //fechApi kullanımı ile hazır promise geldiği için kullanımına gerek yoktur.
    }).catch(error=>{
        console.log(error);
    })
}

//getExternalApi();

function postExternalApi(){
   
    var data={
        method:"POST",
        body:JSON.stringify({
            userid:1,
            title:"sample title",
            body:"sample body"
        }),
        headers: new Headers({
            'content-type':'application/json'
        })
    }
    fetch("https://jsonplaceholder.typicode.com/todos/",data)
    .then(res=>{
        console.log(res);
    })
    .catch(error=>{
        console.log(error);
    })

}
postExternalApi();
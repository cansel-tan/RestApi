var products=[
    {id:1, name:'Iphone 7',price:4000},
    {id:2, name:'Iphone 8',price:5000},
    {id:3, name:'Iphone 11',price:8000}
]
    
function addProduct(prd,callback) { //veritabanına product eklenir.
    //promise ile asenkron programlama
    return new Promise(function (resolve,reject) {
        setTimeout(()=>{
            products.push(prd);
            let added=true;
            if(added){
                resolve();
            }
            else{
                reject('hata: !!');
            }
        });
    });
   /*if(added){
    setTimeout(()=>{
        products.push(prd);
        callback(null,prd);
    },2000);
   }
   else{
       callback('!!',prd);
   }*/
}

function getProducts() { //products içerisinden gelen her bir p objesinin name yazılır.
    setTimeout(()=>{
        products.forEach(p => {
            console.log(p.name);
        });
    },1000);
}

addProduct({id:4,name:'Iphone 6',price:2000}).then(getProducts).catch(
    function (err) {
    console.log(err);
});

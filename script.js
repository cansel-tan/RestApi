document.querySelector('#getOne').addEventListener('click',getOne);
document.querySelector('#getAll').addEventListener('click',getAll);
document.querySelector('#post').addEventListener('click',getPost);

function getOne() {
  /*var id =document.getElementById('postid').value;//inputtan id alınır.
  var url="https://jsonplaceholder.typicode.com/posts/"+id; //id numarasına göre post bilgileri gelir.
  var xhr=new XMLHttpRequest();
  xhr.open('GET',url,true);  //Asenkron sorgu ile veri alınır

  xhr.onload= function() {//sorgunun sonlandığını gösterir.Yani response geriye dönmüştür.Ancak başarılı olup olmadığınının kontrolü gerçekleştirilir.
      if(this.status===200){
          var post=JSON.parse(this.responseText);
          var html="";
          html+=`

          <div class="card mb-2">
          <div class="card-header">
          ${post.id}-${post.title}
          </div>
          <div class="card-body">
            
            <p>${post.body} </p>
            
          </div>
        </div>
          `;
    
          document.querySelector('#results').innerHTML=html;
      }
  } 

  xhr.send();*/
}

function getAll() {
    /*var url="https://jsonplaceholder.typicode.com/posts";
    var xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);  //Asenkron sorgu ile veri alınır

    xhr.onload= function() {//sorgunun sonlandığını gösterir.Yani response geriye dönmüştür.Ancak başarılı olup olmadığınının kontrolü gerçekleştirilir.
        if(this.status===200){
            var posts=JSON.parse(this.responseText);
            var html="";

            posts.forEach(post => {
            html+=`

            <div class="card mb-2">
            <div class="card-header">
              ${post.title}
            </div>
            <div class="card-body">
              
              <p>${post.body} </p>
              
            </div>
          </div>
            `;
        });
            document.querySelector('#results').innerHTML=html;
        }
    } 

    xhr.send();*/
    
}

function getPost() {
  //bilgileri text şeklinde atmak için 

    const post={
      userıd:1,
      title:'new title',
      body:'new body'
    }

    var json=JSON.stringify(post);
    var url="https://jsonplaceholder.typicode.com/posts";
    var xhr=new XMLHttpRequest();
    xhr.open('POST',url,true); //Bilgi gönderilir.
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8'); //Gönderilen httprequest'in header bilgisinde servera tip bilgisi verilir.

    xhr.onload=function() {
      
    if(xhr.status===201 && xhr.readyState===4){

      var post= xhr.responseText;
      console.log(post);
    }
    
    }
    xhr.send(json);
}
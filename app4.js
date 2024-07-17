//ASENKRON & SENKRON PROGRLAMA 


//Js senkron çalışan bir programlama dilidir.

//console.log("1")
//console.log("2")
//console.log("Goksu")

//function selamla(){
//console.log("selam")

// }

//selamla()




//Js nerede asenkron çalışır?
//1-Timing işlemleri
//2-Event(Olay)
//3-Http isteklerinde


//setTimeout(() =>
// }, timeout);


//web api tarafında yönetilen her şey asenkron çalışır. (developer.mozilla.org)


//fetch metodu da asenkron çalışır.


//console.log("Goksu");
//setTimeout(() => {
    //console.log("Süre doldu ve çalıştı")
    // }, 1000);

    //setTimeout(() => {
    //console.log("500 ms doldu ve çalıştı")
    // }, 500);

    //console.log("Ayaz");

    //setTimeout asenkron olduğundan isim ve soyisim senkron çalışıyor, Önce isim, sonra soyisim çalışacak sonra 
    //asenkron olanlar çalışmaya başlayacak. Önce 500 ms sonra 1000 ms çalışır.


//Normalde belli bir sıraya göre yazıyoruz. Ama asenkronlarda sıra problemi oluyor.


//callback-promise-async & await ile asenkron yapıları senkrona çevirip yönetiyoruz.



//ASENKRON PROBLEMİ

//http istekleri

//const users =[
//{ 
//userId:5, post: "Enes  Post 1"
//},
//{ 
//userId:6, post: "Ali  Post 2"
//},
//{ 
//userId:7, post: "Goksu  Port 3"
//}

//]


//post lar user id ye göre bulunacak

//function getUserId(){
//setTimeout(() => {
    //servise gittik ve cevabı aldık.
    //return 5;

//}, 1000);
//}

//function getPostByUserId(userId){
//gerçek bir rest api ya istek atılacak
//setTimeout()) => 
//users.forEach(user)=>{
    //if(user.userId === userId){
    //console.log(user.post);
    
// }
// })
//}, 500);    


// }


//let userId = getUserId();
//getPostByUserId(userId);




//ilk başta userİd metoduna gitti sosnra getUserId ye gitti sonrasında userId ye gidip metotta 5 tanımlayıp users ları forEach le döneriz,
//hiç bir çıktı alamadık. setTimeout asenkron yukarıdaki setTimeoutta  let userId ve userId aynı anda çalıştı metotlara gittiler userId yi alamadı
//aynı anda çalıştığından userId undefined kaldı, alamadı.
//function getUserId metodunun senkrona çevireceğiz.






//CALLBACK 


//timing-event-http istekleri


//callback-promise-async await 

//calback : bir fonksiyonun bir fonksiyona parametre geçerek asenkron yapıyı senkrona çevrilir.

//bir yerde asenkron problemi varsa kullanılanlardan birisi callback eski bir yöntem, kullanılmıyor.

//function getName(){
//setTimeout(() => {
    //servisten ismi 1 saniyede getir
    //console.log("Goksu");
// }, 1000);
// }


//function getSurname(){
//setTimeout(() => {
    //console.log("Ayaz")

// }, 500);

// }

//getName();
//getSurname();


//önce Soyad sonrasında isim geldi.




//asenkronu senkrona çevireceğiz, 



//function getName(callback){
//setTimeout(() => {
    //servisten ismi 1 saniyede getir.
    //let name = "Goksu"; //web servisten geldi.
    //console.log("Goksu");
    //calback("Goksu");
// }, 1000);
// }


//function getSurname(){
//setTimeout(() => {
    //let surname = "Ayaz";//web servisten geldi
    //console.log("name, surname")

// }, 500);

// }

//getName(getSurname); 

//1.5 saniyede İsim soyismi getirir.

//callback ile getSurname metodu çalıştırılıyor. Bi fonksiyonu bir fonksiyona parametre geçiyoruz.




//function getUserId(callback){
//setTimeout(()=> {
//let userId = 7;
//calback(userId);
// }, 1000);

// }

//function getPostByUserId(userId){

//setTimeout(() => {
    //if(user.userId===userId)
 //console.log(user.post);  
// }
// }) 
// },500);
// }


//getUserId(getPostByUserId);





//AJAX

//tarayici ve server arasını bağlayan AJAX

//function prepareURL(url, id){
//if(id ===null){
//return url;
// }
//return `${url}? postId=${id}`

// }


//const xhr = mew XMLHttpRequest();
//console.log(xhr);


//function getComments(url, id){
//let newURL = prepareURL(url, id);
//const xhr = mew XMLHttpRequest();
//xhr.addEventListener("readystatechange", ()=> {
// if(xhr.readyState===4 && xhr.status===200){
//console.log(xhr.responseText);  //type ı string
//console.log(JSON.parse(xhr.responseText)); JSON formatına cevırebılırız.
// }
    

// })


//xhr.open("GET", newURL )
//xhr.send();



// }

//function getData(url){

//const xhr = new XMLHttpRequest();
//xhr.addEventListener("readystatechange", () => {
//if(xhr.readyState=== 4 & xhr.status===200){
//console.log(JSON.parse.(xhr.response));
// }    
// })




//xhr.open("GET", url);
//xhr.send();

// }    



//getData("https://jspnplaceholder.typicode.com/users"); //users yerine posts ta kullanabilirsin.
//getComments("https://jsonplaceholder.typicode.com/comments", null) 






//- PROMISE -

//1-pending
//2-fulfilled
//3-rejected

//Başarılı çıktı olursa resolve
//resolve u yakalayabilmek için .then function ını kullanıyoruz.
//reject ile sonlanırsa(başarısız olursa) .catch ile yakalanır.


//Başarılı olursa resolve .then, başarısız olursa reject .catch ile.



//let check = true;

//const promise1 = new Promise((resolve, reject) =>{
    //if(check){
    //resolve("Promise Başarılı")
    // }else{
        //reject("Promise Başarısız...");
    // }


// })


//console.log(promise1)

//function createPromise(){
//return new Promise((resolve, reject) => {

    // if(check){
    //resolve("Promise te herhangi bir sıkınt yok")
    // }else{
        // reject("Sıkıntı var")
    // }
// })
// }

//function createPromise(); Promise<any>



//createPromise()
//.then((response) =>{
    //console.log(response);
    
// })


//catch((error) =>{
    //console.log(error)
    // })

    //.finally(() => console.log("Her zaman çalışır"))


//buraya resolve lu döndü .then e geldi, resolve un içindeki değer buraya geçti ve console a yazdı.

//resolve u .then ile reject i catch ile yakalarız.


//Asenkron yapıları senkrona çevirmek için kullanıyoruz. Callback yerine.


//PROMİSE + XMLHTTREQUEST



//function readStudents(url){

//return new Promise((resolve, reject) =>{
    //const xhr = new XMLHttpRequest();
    //xhr.addEventListener("readystatechange", ()=> {

        //if(xhr.readyState===4 && xhr.status===200){
        //try{
        //xhr.addEventListener("readystatechange", ()=> {
        //if(xhr.readyState===4 && xhr.status===200){
        //resolve(JSON.parse(xhr.responseText));
        
    
    // }    
        // })
        
    // }catch(error){
    //reject(error);

    // }

    //xhr.open("GET", url);
    //xhr.send();
        
    
    // })
        
    
    // }

    //readStudents("students.json")
    //.then((data) => console.log(data))
    //.catch((err) => console.log(err))


//.then çalıştı.

//function getUsers(url){

// return new Promise((resolve, reject)=>{
//const xhr = new XMLHttpRequest();
//xhr.addEventListener("readystatechange", () => {
    //try{
//if(xhr.readyState===4 && xhr.status===200){
//resolve(JSON.parse(xhr.responseText));
// }     
// }catch(error){
//reject(error);
// }   
// })

//xhr.open("GET", url)
//xhr.send();
// })
// }


//getUsers("https://........../users/3")
//.then((data) =>{
//console.log(data)
//return getCommentsByUserID(`https://........../users/${data.id}`) 
// });

//.then((res) => console.log(res))
//.catch((err) => console.log((err))
//.finally(() =>{

// });

// }


    //data.forEach((user) => {
        ///console.log(user.name)
    //console.log(data.name)
    //console.log("Daha sonra")
//.catch((err) => console.log((err))
//.finally(() =>{

// });


//const p1 = Promise.resolve("Birinci Promise Başarılı")
//const p2 = Promise.resolvr("İkinci Promise Başarılı")
//const p3 = new Promise((resolve, reject) =>{
//resolve("Üçüncü Promise Başarılı")    

// })

//Promise.all([p1,p2,p3])
//.then((res)=>{
    //for(let value of res){
    //console.log(value)    
// }

// })

// .catch()



























    





























































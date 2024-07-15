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
















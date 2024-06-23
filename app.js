




//console.log("Goksu");


// let a=11;
// let b=21;

// alert("İki sayının toplamı :" + (a+b));


// console.log("window");
// console.log(location.port);

// console.error("Hata oluştu");
// console.warn("Hata");

// console.log(location.port);
// debugger;
// console.log(location.port);
// console.log("Var");

/*

! Dikkat dikkat
? Öyle mi
TODO: Ya ben
*Burası çok önemli

*/


// let yas = Number(prompt("Yaşınız :"));
// console.log(typeof yas);
// let para = Number(prompt("Bütçeniz :"));

// if(yas>=18 && para>= 3000){
//     alert("Ehliyet sınavına katılabilirsiniz");

// }else{
//     alert("Ehliyet sınavına katılamazsınız...")
// }


// let vize1= Number(prompt("Vize 1 notunuzu giriniz :"));
// let vize2 = Number(prompt("Vize 2 notunuzu giriniz :"));
// let final = Number(prompt("Final notunuzu giriniz : "));

// let average = (vize1*0.3) + (vize2*0.3) + (final*0.4);


// if(average >=60){
//     alert("Dersten geçtiniz tebrikler :)) " + average);
//     console.log("Dersten geçtiniz tebrikler :)) ");
// }else{
//     alert("Kaldınız, geçmiş olsun : ( " + average);
//     console.log("Kaldınız geçmiş olsun :( ");

// }


// let secilenYol= prompt("Lütfen gitmek istediğiniz yolu seçiniz : ");

// if(secilenYol == 1){
//     alert("Seçilen yol " + secilenYol + ". yoldur.");

// }else if(secilenYol == 2){
//     alert("Seçilen yol " + secilenYol + ". yoldur.");

// } else if(secilenYol == 3){
//     alert("Seçilen yol " + secilenYol + ". yoldur.");
// }else{
//     alert("Lütfen geçerli bir yol seçiniz !");
// }




// let ad=prompt("İsminizi giriniz :");
// let tckn = prompt("TCKN giriniz :");


// kontrolEt2(ad, tckn);





// function kontrolEt(ad, tckn){

//     if(ad!=""){
//     if(tckn.length == 11){

//         console.log("İsim ve tckn başarılı girildi");

//     }else{
//         console.log("Lütfen tc nizi 11 karakter olarak giriniz ");

//         }



//     }else{
//         console.log("Lütfen isim alanını boş bırakmayın!!");

//     }
// }



// function kontrolEt2(ad, tckn){
//     if(ad == ""){
//         console.log("Lütfen isim alanını boş bırakmayın!!");
//         return;
//     }

//     if(tckn.length!=11){
//         console.log("Lütfen tc nizi 11 karakter olarak giriniz ");
//         return;
//     }

//     console.log("İsim ve tckn başarılı girildi ");

// }


// let kg = Number(prompt("Kilonuzu kg cinsinden giriniz :"));
// let boy = Number(prompt("Boyunuzu metre cinsinden giriniz :"));


// let vki = kg/(boy*boy);

// if(vki < 18.5){
//     console.log("İdeal kilonun altında" + vki);
// }else if(vki >= 18.5 && vki <= 24.9){
//         console.log("İdeal kiloda" + vki);
//     }else if(vki >=25 && sonuc <= 29.9){
//         console.log("İdeal kilonun üstünde" + vki);

//     }else if(vki > 30 && vki < 39.9){
//         console.log("İdeal kilonun çok üstünde" + vki);
//     }else if(vki >=40){
//         console.log("İdeal kilonun çok çok üstünde" + vki);

//     }


// let dizel = 24.53, benzin = 22.25, lpg= 11.1;

// const yeniSatir = "\r\n";

// const yakitMetni = "1-Dizel" + yeniSatir + "2-Benzin" + yeniSatir + "3-Lpg" + yeniSatir + "Yakıt türünüzü seçiniz";

//prompt(yakitMetni);

// let yakitTipi = prompt(yakitMetni);
// if(yakitTipi == "1" || yakitTipi == "2" ||  yakitTipi == "3"){
// let yakitLitresi = Number(prompt("Yakıt litresini giriniz"));
// let bakiye = Number(prompt("Bakiyenizi giriniz"));

// if(yakitTipi =="1"){
//     let odenecekTutar = dizel*yakitLitresi;

//     if(odenecekTutar <bakiye){
//         alert("Yakıt alma işlemi başarılı");

//     }else{
//         alert("Bakiyeniz yeterli değildir " + yeniSatir
//             +"Ödenecek tutar : " + odenecekTutar + yeniSatir
//             +"Bakiye " + bakiye + yeniSatir
//             +"Eksik tutar : " + (odenecekTutar - bakiye));
//     }


// }else if(yakitTipi == "2"){

//     let odenecekTutar = benzin*yakitLitresi;
//     if(odenecekTutar <bakiye){
//         alert("Yakıt alma işlemi başarılı");

//     }else{
//         alert("Bakiyeniz yeterli değildir " + yeniSatir
//             +"Ödenecek tutar : " + odenecekTutar + yeniSatir
//             +"Bakiye " + bakiye + yeniSatir
//             +"Eksik tutar : " + (odenecekTutar - bakiye));
//     }


// }else if(yakitTipi =="3"){
//     let odenecekTutar = lpg*yakitLitresi;
//     if(odenecekTutar <bakiye){
//         alert("Yakıt alma işlemi başarılı");

//     }else{
//         alert("Bakiyeniz yeterli değildir " + yeniSatir
//             +"Ödenecek tutar : " + odenecekTutar + yeniSatir
//             +"Bakiye " + bakiye + yeniSatir
//             +"Eksik tutar : " + (odenecekTutar - bakiye));
//     }


// }else{
//     alert("Lütfen geçerli bir yakıt tipi giriniz!");

// }
// }


// let sayi = prompt("Lütfen 1 ile 5 arasında bir sayı giriniz");

// switch(sayi){
//     case "1":

//     console.log("Girilen sayı 1'dir");
//     break;

//     case "2":
//         console.log("Girilen sayı 2'dir");
//         break;

//    case "3":
//     console.log("Girilen sayı 3'tür");
//     break; 
    
//     case "4":
//         console.log("Girilen sayi 4'tür");
//     break;
    
//     case "5":
//         console.log("Girilen sayı 5'tir");
//     break;
    
//     default:
//         console.log("Girilen sayı 1 ile 5 arasında olmalıdır!");
//         break;

// }


// ATM Uygulaması


// let bakiye=1000;
// let yeniSatir="\r\n";


// let metin="1-Bakiye Görüntüleme "+ yeniSatir
// +"2-Para Çekme " + yeniSatir
// + "3-Para Yatırma" + yeniSatir
// +"4-Çıkış" + yeniSatir
// +"Lütfen bir değer seçiniz.";


// let secim=prompt(metin);
// switch(secim){
//     case "1":
//         alert("Bakiyeniz : " + bakiye);
//         break;

//     case "2":
//         let cekilecekTutar= Number(prompt("Çekmek istediğiniz tutarı giriniz :"));
//         if(cekilecekTutar < bakiye){
//             bakiye = bakiye-cekilecekTutar;
//             alert("Kalan bakiye :" + bakiye);
//         }else{
//             alert("Bakiyenizden fazla para çekemezsiniz!" +yeniSatir
//                 + "Bakiyeniz : " + bakiye + " " + "Cekilecek Tutar : " + cekilecekTutar);

//         }
//         break;


//      case "3":
//         let yatirilacakTutar = Number(prompt("Yatırmak istediğiniz tutarı giriniz :"));
        
//         bakiye = bakiye+yatirilacakTutar;

//         alert("Güncel bakiyeniz :" + bakiye);
//         break;


//      case "4":
//         alert("İyi günler");
//         break;   

//     default:
//         alert("Lütfen 1-4 arasında bir seçim yapınız.");
//         break;


// }

//TYT PUAN HESAPLAMA

// let turkceDogru, turkceYanlis = 0;

// let matematikDogru, matematikYanlis=0;

// let sosyalDogru, sosyalYanlis = 0;

// let fenDogru, fenYanlis=0;

// let puan=0;
// let okulPuani=0;



// let yeniSatir = "\r\n";

// let mesaj = "TYT Puan Hesaplama uygulamasına hoşgeldiniz!"+ yeniSatir
// + "1-Puan hesapla" + yeniSatir
// +"2-Çıkış yap";

//alert(mesaj);

// let secim = prompt(mesaj);

// switch(secim){
//     case "1":

   
//         turkceDogru = Number(prompt("Türkçe Doğru Sayısı :"));
//         turkceYanlis = Number(prompt("Türkçe Yanlış Sayısı: "));
        

//         matematikDogru = Number(prompt("Mat Doğru Sayısı :"));
//         matematikYanlis = Number(prompt("Mat Yanlış Sayısı: "));


//         sosyalDogru = Number(prompt("Sosyal Doğru Sayısı :"));
//         sosyalYanlis = Number(prompt("Sosyal Yanlış Sayısı: "));

//         fenDogru = Number(prompt("Fen Doğru Sayısı :"));
//         fenYanlis = Number(prompt("Fen Yanlış Sayısı: "));

//         okulPuani = Number(prompt("Okul Puanı :"));


//        let dogruSayisi = turkceDogru+matematikDogru+fenDogru+sosyalDogru;
//        let yanlisSayisi = turkceYanlis+matematikYanlis+fenYanlis+sosyalYanlis;

//        let net = dogruSayisi - (yanlisSayisi/4);

//        puan = (net*4) + 100 + okulPuani;

//        alert("TYT Puanınız : " + puan);

//        break;

//      case "2":
//         alert("Sistemden çıkış yapıldı...");
//         break;
        
//      default:
//         alert("Lütfen geçerli aralıkta değer giriniz! ");
//         break;   

// }


//TÜR DÖNÜŞÜMLERİ


// let a = 5;

// let b = "10";

// let c = Number(b);

// console.log(typeof c);

// console.log(a+c);

//veya let b= Number("10");


//parseInt()

//console.log(window);

// let a = 8;
// let b = "12";

//let b = parseInt("12"); olarak yazılabilir.
// console.log(a+b);

// parseInt noktadan sonrasını atıyor, parseFloat noktadan sonrasını da alıyor.


//Number tipinden string veri tipine dönüştürme

// let x = 55;

// let x = String(55);

// console.log(typeof x);


// veya let x = (55).toString();


// Boolean dan String e dönüştürme

// let sonuc = true;
// let sonuc = String(true);


// Object i String e dönüştürme

// let rakamlar = [1,2,3,4]; 
// let rakamlar = String([1,2,3,4]);

// console.log(typeof rakamlar);


// let rakamlar = Number([1,2,3,4]);  

// console.log(rakamlar); -> NaN(not a number)




// let a = 5;
// debugger;  -> sources kısmında tek tek kodları incelemeni sağlar.

// let b= 15;



// for(let i=1; i<=10; i++){
//     if(i%2==1){

//         console.log("Goksu");
//     }else{
//         console.lof("Ayaz");


//     }
// }



// let toplam = 0;

// for(i=50; i>=1;i--){
//     toplam +=i;
//     console.log(i);
// }

// console.log("Toplam : ", toplam);





































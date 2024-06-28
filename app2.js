//String Sınıfı Metotları


//charAt(): verdiğin indekse göre karakter dönen metot



// let kurs = "Modern Web Geliştirme Kursu";
// let tarih = "2024";


// let index = kurs.charAt(5);

// console.log(karakter);




//concat(): iki tane string ifadeyi birleştirir

// let sonuc = kurs.concat(" ",tarih, " Goksu");
// console.log(sonuc);



//indexOf(): vermiş olduğun değerin indeksini döner

// let index= kurs.indexOf("n");
// console.log(index);



//lastIndexOf(): vermiş olduğumuz kelimenin indeksini döner

// let index = kurs.lastIndexOf("Kursu");
// console.log(index);



//toUpperCase: yazdığını büyük harfe çevirir

// let sonuc= kurs.toUpperCase();
// console.log(kurs);
// console.log(sonuc);




//toLowerCae(): yazdığını küçük harfe çevirir

// let sonuc = kurs.toLowerCase();
// console.log(sonuc);



//trim(): tüm boşlukları siler

// console.log(kurs.trim());



//slice(): indekse göre dilimler. (baslangıc indeksi, bitis endeksi ama dahil değil).
// console.log(kurs.slice(22, 27));


//substring(): 
// console.log(kurs.substring(0,6));


//replace(): İstediğimiz kelimeyi değiştirir.
// console.log(kurs.replace("Modern", "Güncel"));



//split(): verdiğin özelliğe göre kelimeleri ayırır.
// let dizi = kurs.split(" ");
// console.log(dizi);



//valueOf():
// console.log(kurs.valueOf());


//startsWith(): verdiğin karakterde başlıyor mu true yada false döner.
// console.log(kurs.startsWith("M"));

// if(kurs.startsWith("M")){
//     console.log("M harfi ile başlamaktadır.");
// }



//endsWith(): sonu verdiğin karakterde mi bitiyor true yada false döner.İki kelimede, harfte verebilirsin.
// console.log(kurs.endsWith("Kursu"));




//Math Sınıfı Metotları

//floor() : verdiğin sayının noktadan sonrasını atıyor.

// let a= 3.15;
// let b= -12;

// console.log(Math.floor(a));


//ceil(): noktadan sonrasını direk bir üst sayıya yuvarlar.
// console.log(Math.ceil(a));


//round(): noktadan sonrasını en yakın integer değere yuvarlar.
// console.log(Math.round(a));



//max(): en büyük değeri döner.
// console.log(Math.max(1,2,5,7,9));
// console.log(Math.min(9,5,3));


//abs(): Mutlak değer almak için kullanılır.
// console.log(Math.abs(b));



//Sqrt: Karekök almak için kullanılır.
// console.log(Math.sqrt(9));


//pow(): üssünü almak için kullanılır.
// console.log(Math.pow(12,2));



//PI(): bu bir property.Pi sayısını verir.

// console.log(Math.PI);



//random(): rastgele 0 ila 1 arasında değer döndürür.

// let randomDeger = Math.random();
// let sonuc = randomDeger*100;
// let sonucYuvarla = Math.floor(sonuc);
// console.log(sonucYuvarla);
// console.log(randomDeger);
// console.log(sonuc);

// console.log(Math.random()*100);
// console.log(Math.floor(Math.random()));






//Date Metotları

// let tarih = new Date();
//console.log(typeof tarih); object
// tarih.toString(); string formatına çevirir
// console.log(tarih);

//get metotları
// console.log(tarih.getFullYear());
// console.log(tarih.getDate());
// console.log(tarih.getDay());
// console.log(tarih.getHours());
// console.log(tarih.getMilliseconds());
// console.log(tarih.getMinutes());
// console.log(tarih.getMonth()+1);
//console.log(tarih.getSeconds());
//console.log(tarih.toLocaleDateString()); gün ay yıl
// console.log(tarih.toLocaleTimeString());  saat dakika saniye
// console.log(tarih.toLocaleString()); ikisini birleştiriyor


//set metotları
// console.log(tarih);
// console.log(tarih.setDate(24)); yazdığın tarihi baz alır.
// tarih.setHours(15); yazdığın saate alınır.
// tarih.setMonth(11);  aylar 0 dan başlar. yazdığın aya alınır.
// tarih.setMinutes(50); 
// tarih.setHours(tarih.getHours()+2);  şu anki saatin üzerine 2 saat daha ekle.

// let tarih = new Date(1992,02,31,19,00,40);
// console.log(tarih);



//DEĞER VE REFERANS TİPLER

// Diziler: referans tip
// Obje: Referans tip
// Function: Referans tip


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






//Selectors

// console.log(button.className);

// const classListesi = button.classList;
// console.log(classListesi);     (tüm classları getiriyor)


// const classListesi = button.classList[3]; (kacıncı indeksindeki class ı getirsin)

// classListesi.forEach(function(className)){
//     console.log(className);
// }
// console.log(classListesi);



// let buttonText = button.textContent; (String i alıyor)
// let buttonText2 = button.innerHTML;()
// console.log(buttonText);
// console.log(buttonText2);

// button.textContent="<b> Todo Ekleyin </b>";(html etiketini algılamıyor)

//button.innterHTML="<b> Todo Ekleyin </b>";(html etiketi olarak algıladı)


// const button = document.getElementById("todoAddButton"); (html etiketini çekp içindeki etiketleri vs oynayabiliriz)



//getElementById : id ye göre elementi yakalar.
// getElementByClassName : class ismine göre yakalar.
// get ElementByTagName : etiket ismine göre yakalar.




// const todoList = Array.from(document.getElementsByClassName("list-group-item"));
// list group item sınıflarını döndürür
// console.log(todoList);
// todoList.forEach(function(todo)){
//     console.log(todo);
// }

// console.log(todoList);


// const forms = document.getElementsByTagName("form");
// console.log(forms); (form etiketlerini yakalar)


// console.log(gorms[0]); (ilk indeksteki form gelir)

// console.lof(froms[0]name); (ismini alabilirsin)


//const forms = Array.from(document.getElementsByTagName("form"));

// forms.forEach(function(form){
//     console.log(form);
// })
// console.log(forms[1]);



// const todoList = document.getElementsByTagName("li");

// console.log(todoList);



//querySelector - querySelectorAll adında iki metot var 3 unun yaptıgını yapıyor



// const clearButton = document.querySelector("#todoClearButton");
// console.log(clearButton);


// console.log(document.getElementById("todoClearButton")));




// const todoList = document.querySelector(".list-group"); (nokta koyarak secıyoruz)(class ı yazıyoruz)
// console.log(todoList);


// const todoList = document.querySelectorAll(".list-group-item");  (class lar birden fazla yerde kullanılmıssa querySelectoAll kullanılmalı)

// console.log(todoList);



//const todoList = document.querySelectorAll("li:first-child");(li nin first child ı)(last child da diyebilirsin)
// console.log(todoList);


// const todoList = Array.from(document.querySelectorAll("li:nth-child(odd"));

// todoList.forEach(function(todo)){
//     todo.style.backgroundColor = "lightgrey";
// })

// console.log(todoList);




//Style

// const todo = document querySelector(".list-group-item")[0];
//const todoList = document.querySelector(".list-group");
// const clearButton = document.querySelector("#todoClearButton");


// console.log(todoList);

// todo.styleSheets.color="red"; (todo nun style diye objesi var bunun bir çok özelliği var)(rengini kırmızı yaptık)



//todo.style.backgroundColor="purple";
 //todo.style.fontWeight="bold";

 //todo.style.paddingTop="20px";


 //todo.style.marginLeft="70px";


//  clearButton.style.backgroundColor="yellow";

//  clearButton.stylele.fontWeight="bold";

//  clearButton.style.marginTop="20px";

//  clearButton.style.borderRadius="50px";


// const todo = document.querySelector(".list-group-item");
// const todoList = document.querySelector(".list-group");
// const card = document.getElementsByClassName("card")[0];

// const card = document.querySelector(".card");

// let value;


//parent tan children lara erişmek
// value=todoList;
// value=todoList.children[0];
// value=todoList.children[1];
// value=todoList.children[todoList.children.length-1]; (sonuncu child)

// value = todoList.children[3].textContent = "Değişti";

// value = Array.from(todoList.children);

// value.forEach(function(todo){
//     console.log(todo.textContent);

// })





// console.log(value);


//child dan parent a erişmek


// value = todo;
// value = todo.parentElement.parentElement.parentElement;(parent ın parent ı)
// value = value.parentElement;(bu sekılde de bir uste gecebilirsin)

// console.log(value);


// value=todo;
// let ul = todo.parentElement;
// let cardBody = ul.parentElement;
// let card = cardBody.parentElement;
// let row = cardElement.parenElement;
// let container = row.parenElement;

// console.log(container);



// childdan child a erişmek

// value = todo;
// value = todo.nextElementSibling.nextElementSibling; (bir sonraki kardesini getir)(baska bir kardes yoksa null döner)



// console.log(value);


// const todoLastChild = document.querySelectorAll(".list-group-item:nth-child(4)");


// value=todoLastChild;
// value=todoLastChild.previousElementSibling.previousElementSibling.previousElementSibling.nextElementSibling;(bir önceki)
// console.log(todoLastChild);




//Class ismi row olanı yakalayalım
// const row = document.querySelector(".row");

// value = row; (value ya row u atadık)

// value=row.children;(row un child ları)

// value = row.children[0];(ilk child ını getir)


// value=row.children[0].children[3].children[0];( card bodyn in childlarından ilk child ı)

// value=row.children[0].children[3].children[0].textContent="Todo Listesi Başlığı"; (baslıgını degıstırırız)


// console.log(value);






//Element Olusturma

// const cardBody = document.querySelectorAll(".card-body")[1];
// const todoList = document.querySelector(".list-group");
// console.log(cardBody);

// const link = document.createElement("a");
// link.id="goBlogWebSite";

// link.className="btn btn-dark btn-sm mt-3";


// link.href="http://...";
// link target="_blank"; (linki acarken ayrı bi sekmede ac)
// link.innerHTML="Kişisel Websiteme Git";

// cardBody.appendChild(link); (childların en sonuna ekle)

// const todo= document.createElement("li");
// const todoLink = document.createElement("a");
// const i = document.createElement("i");



// todo.className = "list-group-item";
// todo.innerHTML = "Todo 5";
// todoLink.href="#";
// todoLink.className="delete-item";
// i.className = "fa-fa";
// todoLink.appendChild(i); (a etkiketinin içerisine i yi koyduk)

// todo.appendChild(todoLink);

// todoList.appendChild(todo);

// console.log(link);


//Element Silmek


// const todoList = document.querySelector(".list-group");

// const todos = document.querySelectorAll(".list-group-item");
//const todo1 = document.querySelector(".list-group-item");

// console.log(todos);

//todos[0].remove(); (0 ı sil)
//todos[1].remove();

// console.log(todos);

// todos[todos.length-1].remove();

//todo1.remove();  (direk sectiğim elementi silebilirim)

//todoList.removeChild()

//let todo1 = todos[0];
// todoList.removeChild(todo1);


//todoList.removeChils(todos[todos.length-1]);

//todoList.removeChild(todoList.lastElementChild);



//Elementleri Yer Değiştirmek

// const cardBody = document.querySelectorAll(".card-body")[1];


// const newTitle = document.createElement("h2");

// newTitle.className="card-title";
// newTitle.textContent="Todo Listesi - Yeni";


// cardBody.replaceChild(newTitle, cardBody.childNodes[1]);   (yeni etiketimi al childNodes 1.indeks yerine koy)






//EVENTS

//addEventListener()


// const clearButton = document.querySelector("#todoClearButton");

// clearButton.addEventListener("click", changeTitle);   (clearbutton a click eventı eklemek istiyorum, click event ı tetiklendiğinde changetitle adlı metodu cagır dıyorum)
// (function changeTitle metodunu calıstırır)


// clearButton.addEventListener("click", function(){
//     document.querySelectorAll('.card-title')[1].textContent="Todo Başlığı";

//     alert("Merhaba");

// });

// function changeTitle(e){
//     console.log(e);
// console.log(e.target);
// console.log(e.type);
// console.log(e.target.textContent);
// console.log(e.target.className);


// }















































console.log(ul);




































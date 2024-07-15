// console.log("berkant")  //yazdırılanı terminalde görmek için node yazıp projenin ismi yazıp enter a basılır.

//const, let, var

// const name = "Berkant Kaya";
//name = " deneme deneme"
//const değiştirilemez.
// var veya let kullanabilirsin.

// let name ="Berkant Kaya"
// const age=26;
// console.log(age)
// console.log(name, age)
//console.log(name)
// string, number, boolean

//const result = true;

//console.log(typeof name)
//console.log(typeof age)

// console.log((4*4)*3)
//string + number birleştirme işlemi yapar

//const number1="10"
// console.log(typeof Number(number1)) //içerideki string bile olsa number olur

//console.log(Number(number1) + age.toString())
//console.log(Number(name))


//const number1=10.6666666666
//console.log(number1.toFixed(2))  virgülden sorna iki kısmını alır.

// let name ="Goksuayaz"
// console.log(name.concat('2222')) (ikisini birleştirir)

//console.log(name.replaceAll('e', 'E')) //tum kucuk e lerin yerine buyuk E olarak donusturur.

//Console.log(name.split(''))  array e donusturur
//console.log(name.split('')).join('')) arraye dönüştürdüğünü eski haline getirir.

//console.log(name.substr(0,2))  arraydaki aralık indexi

//console.log(name.toLowerCase()) tüm harfleri küçük harfe çevirir
//console.log(name.toUpperCase()) tüm harfleri büyük harfe çevirir

//console.log(name.trim()) boslukları alır
//console.log(name.includes('e')) ismin içinde e var mı içeriyor mu ona bakar true yada false döndürür

//console.log(name.search('o')) kelimeye bakıp varsa 1 yoksa 2 döner

//console.log(name.charAt(2).toUpperCase()) almasını istediğimiz harfi charAt e atıyoruz.



//const age = 26
//const name = age === 26 ? "Berkant Kaya" : "Deneme deneme" evetse 1 değilse 2. yi ayzdırır
// console.log(name)


// === burada tip kontrolunu de yaptırır. 


//Const age =21
//const name = age>26 ? "Berkant" :"deneme" ikinciyi yazdırır



//const age=25

//switch(age){
// case 25:
//     console.log("sonucc")
//     break;
// case 26:
//     console.log("sss")    
//     break;
// default:
//     break;
// }





//const nameFunc =()=>{
    // console.log("goksu")
    
// }

// nameFunc()


//const nameFunc =()=>{
// let age=26;

// if(age===26){
//     console.log("yas 26")
// }
// }
// nameFunc()





// let num1 = 10;
//let num2 = 20

// const nameFunc=(a,b) =>{


//     console.log(a)
// }

// nameFunc(num1, num2)



// let num1 = 10;
//let num2 = 20
//let num3=30

//const nameFunc=(a,b,c)=>{
//     return a+b+c
// }
// console.log(nameFunc(num1,num2,num3))




//const firstArr=["1","2","3","4"]

//console.log(firstArr.map(fs=> fs * 2)) tüm elemanları 2 yle çarpar.


//console.log(firstArr.concat(["5", "6"])) ıcıne yazdıklarımızı bırlestırır

//console.log(firstArr.filter(fd=> fd == "4"))  4 ü gosterır sadece

//console.log(firstArr.every(fs=> fs == "4")) tüm elemanlar 4 eşit mi false döner

//console.log(firstArr.filter)

//firstArr.push("5") 5 i ekler
//firstArr.pop()   sondaki elemanları siler
//firstArr.unshift('0') arrayin basına 0 i ekler.
//console.log(firstArr)


//const obj={
// name: "Goksu",
// age: 26
// }
// console.log(obj)




//Const arr=[
// {
//     name:"Berkant",
//     age: 26
// },

// {

//     name:"Berkant1",
//     age: 27
// },

// ]

// console.log(arr.length)  array uzunlugunu verir.



//for(let i=0; i<10; i++){
// console.log(i)

// }




// ["1","2","3","4","5"].forEach(fs=> {
//     console.log(fs)
// })




// let count = 10
// while(count > 0){
 //count--
     //console.log(count)
//     console.log(count)

// }




// const newFunc=()=>{
// let arr = ["1","2","3","4","5","6"]
// for(let i=0; i<arr.length; i++){
//     if(i===5){
//         break;
//     }
//     console.log(i) 
// }
// }



// newFunc()






//const b = new Map([ ["a",5] ])
//b.set('b', 6)
//console.log(b.size)
//console.log(b.delete("a"))


// console.log(b)   a=> 5 b=>6






// setTimeout(()=> {

// console.log("gksu")
// }, timeout);  timeout yerine sayı girilir. sayı kadar sonra işlem gerçekleştirilir.



// setInterval(()=> {
//     console.log("goksu")
// }, 1000); burada yazan sure boslugu kadar bekler sonra tekrardan o surede yazdırmaya devam eder. 


//let count=60
//setInterval(()=> {
//     count--
// console.log(count)
// }, 1000);
//60 dan bir azalarak 1 saniye aralıklarla yazdırır.




//let number=10.99999


// console.log(Math.floor(number)   kucuk olan sayıya yuvarlar.



// console.log(Math.ceil(number)) bir uste yuvarlar



// console.log(Math.abs(number)) mutlak değerli alır.

//console.log(Math.random() * 9) random sayı üretir fakat kusuratlı olur onune Math.floor dersek 0 9 arasında sayı uretır.


//console.log(Math.pow(2,3)) 2 ustu 3 alır.


//Console.log(Math.sqrt(16)) karekökünü alır.


//console.log(new Date()) şu anki zamanı verir.

//console.log(new Date(2025,10,19).getMonth())


//axios? farklı bir sayfadan endpointler üzerinden verileri sayfama çekmek için kullanılabilir.

//axios u once tanımlamak gerekiyor. 


//terminale npm init -y dediğimizde package.json adında bir sayfa açar. npm i axios diyoruz daha sonrasında npm i nodemon yazıyoruz.

//npm paketi indirdiğinde kaydetme işlemiyle birlikte kullanabiliyorsun.

//console.log("1")
// setTimeout(()=>{
//     console.log("2")

// }, 2000);
//Consoole.log("3")



//call back

// console.log("1")
// const functOne=(a,cb)=> {
//     setTimeout(()=>
//         cb(a)
// },2000)

// let val = funcOne("2", (val) => {
//     console.log(val)


// })

// console.log("3")



//Promise

//const funcOne=(a)=>{
//     return new Promise((resolve, reject) => {
//         let status=true
//         setTimeout(() =>{
//             if(status) resolve(a)
//                 reject("hata")

//         },2000)
//     })
// }

// let val=funcOne("2")

// val.then((result) => {

// }).catch((err) => {

// }).catch((err) => {
//     console.log(err)
// });


// console.log("3")

//çıktı olarak 1 3 2 şeklinde gelir.

//restcountries.com dan api ler alınabilir.




//Spread

//let numbers=[10,20,30,40]
//function add(a,b,c,d){

// console.log(a+b+c+d)
// }

//add(10,20,30,40)

//Eski Yöntem
//add(numbers[0], numbers[1], numbers[2], numbers[3])


//Yeni Yöntem
//add(...numbers)
//...numbers ---numbers[0], numbers[1], numbers[2], numbers[3]



//const diller1 =["Java", "C#"]
//const diller2 =["Php", "Phyton", diller1[0], diller1[1]]

//const diller2=["Php", "Phyton", ...diller1]

//console.log(diller2)

//const numbers = [1,2,3,4,5,6,7,8,9]

//let[a,b, ...kalanSayilar] = numbers
//console.log(a,b, kalanSayilar)

//const array1 = ["G", "O", "K", "S", "U"]
//let array2 = []


//array2[0] = array1[0]
//array2[1] = array1[1]
//array2[2] = array1[2]
//array1[3] = array1[3]



//const array2=[array1[0], array1[1], array1[2], array1[3]] yerine

//const array2=[...array1] bu kullanım spread

//array2=[...array1]
//console.log(array2)


//For in-For of

//let names =["E", "F", "G", "H", "C"];

//names.forEach(function(name)){
// console.log(name)

// })
//aynısı
 //names.forEach((name) =>{
//     console.log(name)
// })


//tek satırdan olusuyorsa suslu parantezlerı sileriz, oval parantezleri de.
//names.forEach(name=> console.log(name)) kısa yazımı



//For in Döngüsü
//index numarası lazımsa
//degiskenTanimlama, in, diziİsmi
//for(let name in names){  names içindeki name ler
// console.log(name, names[name])
// }

//For of Döngüsü
//değeri lazımsa 
//for(let isim of names){
//console.log(isim)
// }

//indexini de almak istiyorsan console.log(isim, names.indexOf(isim))








//MAP KULLANIMI


//const map1=new Map();

//SET
//map1.set(1,"Goksu")
//map1.set(true,5)
//map1.set([1,2,3],{firstName : "Gks", lastName:"Bayram"})
//map1.set(true,"5")


//map1.set(34,"İstanbul")
//map1.set(35,"İzmir")
//map1.set(06,"Ankara")
//map.set(01,"Adana")




//GET  (key istiyor ve değer dönüyor)

//console.log(map1.get(6))
//console.log(map1.get(34))  - Istanbul

//const donenDeger = map1.get(35)
//console.log(donenDeger)
//console.log(map1.get(35)



//Size
//value = map1.size;
// console.log(value); -4




//DELETE ( key veriliyor ve siliyor boolean döndürüyor)

//value = map1.delete(34)
// console.log(map1.size)  -3
//console.log(value); -true




//HAS
//console.log(map1.has(55)) -false



//For OF map üzerinde dönebiliriz.

//for(let [key, value] of map1){
// console.log(key,value)
// }


//for(let value of map1){
// console.log(value)
// }


//let array = [34, 'İstanbul'];

//let [a,b] = array;

// console.log(a,b)



//for(let [key, value] of map1){   Destructing
// console.log(key, value)
// }


//let array =[34,'İstanbul'];
//let [a,b]=array;
//console.log(a,b)


//const keys = map1.keys();
//arraya cevirmek için const keys = Array.from(map1.keys())
//console.log(keys)


//keys.forEach((key)=>{
    // console.log(key, map1.get(key))
    // })


//for(let key of map1.keys()){
// console.log(key)
// }



//for(let value of map1.values()){
//console.log(value)
// }


// let array = [1,2,3,4,5,6];


//Mapten array'e çevirmek


//const array2=[
// [34,"İstanbul"],
// [35, "İzmir"],
// [06,"Ankara"],
// [01, "Adana"]
// ]   asagıdakının cıktısı bu sekılde oluyor.


//const array = Array.from(map1);
//console.log(map1)    

//array.forEach((value)=>{
    
    // console.log(value[0], value[1])
// })


//Array'i mape çevirme

//const array2 = [
// [34,"İstanbul"],
// [35,"İzmir"],
// [06,"Ankara"],
// [01,"Adana"]

// ]

//const myMap = new Map(array2)
//console.log(myMap)

//const myArray = Array.from(myMap);
//console.log(myArray)



//map1.set(34,"İstanbul")
//map1.set(35,"İzmir")
//map1.set(06,"Ankara")
//map.set(01,"Adana")
//map1.set([1,2,3], "Array")

//console.log(map1.get([1,2,3]))   -undefined
//tekrardan array olusturunca farklı yerleri gösterirler bu yüzden undefined.

//let key=[1,2,3];
//console.log(map1.get(key))  bunu bulur cunku aynı degıskenı kullanıyorsun.

//mapler array lerin alternatifidir. key value değeri kullanılması map i farklı kılar. 



//SET: birden fazla değeri tutamıyor.

//Const set = new Set();

//add metodu

//set.add(true)
//set.add(3.14)
//set.add("Enes")
//set.add(7)
//set.add({username:"enes", password:"1"});
// setInterval.add([1,2,3,4])




//Size
// console.log(set.size)


//delete
//Set.delete("Enes")
//Set.delete(7)
// set.delete([1,2,3,4]) bunu silemezsin referans tipli
// console.log(set.size)



//HAS
//console.log(set.has("Enes")) Enes diye bir değer var mı true yada false döndürür.



//For of döngüsü
//for(let value of set){
// console.log(value)
// }



//const values= Array.from(set);
//values.forEach((value)=>{
   
//console.log(values)
// })


//const values = Array.from(set);


//ARRAY DEN SET OLUŞTURMAK

//let array = [1,"Enes", true, "Mustafa", 15, [1,2,3]]

//Const newSet = new Set(array);

// console.log(newSet)  
//bir seti array e bir array i set e çevirebiliriz.
//setlerin dizilerden farkı yok bir dizi çeşidi sadece alternatif olarak kullanılır.





//Template Literals 

//function write(firstName, lastName){
// console.log("isim : " + firstName + " " + "Soyisim :" + lastName)

//onun yerine
//console.log(`İsim : ${firstName} Soyisim: ${lastName}`)
// }

//write("Enes", "Bayram")


//function getUserById(userId){
// console.log(`http://localhost:8080/users/${userId}`)
// }

//getUserById(10)




//OOP

//class Insan{

//1- özellikler 2- yapıcı metot 3-function

//constructor(isim, soyisim, yas, maas){ //yapıcı metot
//this.isim = isim;
// this.soyisim = soyisim;

// }


//bilgileriGoster(){
//console.log(`İsim : ${this.isim} 
//Soyisim: ${this.soyisim}
//Yaş :  ${this.yas}
//Maaş:  ${this.maas}`
// )
// }

// }

//const insan1 = new Insan("Enes","Bayram", 23, 10000);
//insan1.bilgileriGoster()

//console.log(insan1.isim)
//Console.log(insan2.isim)







//Static



//class Insan{
//static languagesCount=10;

//constructor(firstName, lastName, salary){
//this.firstName = firstName;
//this.lastName = lastName;
//this.salary = salary;
// }

// }

//writeInfo(){
//console.log(this.firstName, this.lastName, this.salary, this.languagesCount)

// }
//}

//Const insan1 = new Insan("Goksu", "Ayaz", "10000");

//insan1.writeInfo();
//languagesCount static olduğundan çıktıda göremeyiz.
//nesneler static i göremiyor. 



//console.log(Insan.languagesCount);  static olduğundan class ismi üzerinden eriştik.


//class Matematik{
// static topla(a,b){
//console.log(a+b)
// }
//class Matematik{
//cikar(a,b){
//console.log(a-b)
// }
//class Matematik{
//carp(a,b){
//console.log(a*b)
// }
//class Matematik{
//bol(a,b){
//console.log(a/b)
// }


// }




//const matematik = new Matematik();
//matematik.topla(5,3)
//matematik.carp(5,7)


//static olarak tanımlanmıssa nesne üzerinden erişemezsin
//sınıf ismi üzerinden erişilir. statick'lere.

//Matematik.topla(10,7);

//static olarak tanımlanmamışsa nesne üzerinden erişilir.
//Static ise class ismi üzerinden erişilir.
//Nesne türetmek maliyetli olduğundan static ler utility paketler altında tanımlanır. Date işlemleri yapıyorsun.

//Bir function veya özellik static ise Class a özgüdür. Değilse nesneye özgüdür.




//Inheritance

//class Person{

//firstName ="Enes";

//write(){
//console.log(this.firstName);
// }
// }



//class Student{
//firstName = "Enes";

// }

//class Engineer{

// }

//class Farmer{



// }



//const person = new Person();
//person.write();



//Bir sınıfı miras aldığında özelliklerini ve metotlarını miras almış olursun.


//class Student extends Person{


//write(){
//console.log(this.firstName)
//super.write();
// }


// }

//const student1 = new Student();
//student1.write();






//This&Super&Super()
//super: üst sınıfı gösterir.
//super()


//console.log(this)
//class Person{

//constructor(firstName){
// this.firstName = firstName;

// }

//write(){
//console.log(this);
//console.log(toString())
// }

// }

//const person = new Person("Goksu");
//person.write();



//console.log(this)
//class Person{
//firstName = "Goksu";

//write(){
//console.log(this.firstName);

// }

// }



//class Student extends Person{
//write(){
//console.log(this)  buradaki this student ı gösteriyor.
//super.write();
//bir üst sınıfa gidip write metoduna erişir.

// }

// }

//const student1 = new Student();
//student1.write();


//super miras almış olduğum sınıfı gösteriyor.





//class Person{
//constructor(firstName, lastName, salary){
//this.firstName = firstName;
//...

// }

//writeInfo(){
//console.log(this.firstName, this.lastName, this.salary)

// }
// }


//class Student extends Person{
//constructor(firstName, lastName, salary){
//super(firstName, lastName, salary);

// }
//writeInfo(){
//super.writeInfo();
// }



// }

//const student1 = new Student("Goksu", "Ayaz", "50000");
//student1.writeInfo();




//class Engineer extends Person{
//constructor(firstName, lastName, salary){
//super(firstName, lastName, salary);
// }

//writeInfo(){
//super.writeInfo();
// }
// }

//const student1 = new Student("Goksu", "Ayaz", 100000);
//const engineer1 = new Engineer("Enes", "Bayram", 1000);


//student1.writeInfo();
//engineer1.writeInfo();

































































































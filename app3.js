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



































































// const g6 = [
//     {
//         id: 1,
//         name: 'Elyorbek',
//         age: 16,
//         job: "developer"
//     },
//     {
//         id: 2,
//         name: 'Abdulaziz',
//         age: 17,
//         job: "developer"
//     },
//     {
//         id: 3,
//         name: 'Begzod',
//         age: 25,
//         job: "developer"
//     },

//     {
//         id: 4,
//         name: 'Munisa',
//         age: 14,
//         job: "developer"
//     },

//     {
//         id: 5,
//         name: 'Dilshoda',
//         age: 15,
//         job: "developer"
//     },

//     {
//         id: 6,
//         name: 'Javohir',
//         age: 19,
//         job: "developer"
//     },

//     {
//         id: 7,
//         name: 'Kamoliddin',
//         age: 22,
//         job: "developer"
//     },

//     {
//         id: 8,
//         name: 'Husniddin',
//         age: 16,
//         job: "developer"
//     },
// ]


// let f =  g6.filter ((v) => {
//   return v.age > 15
// })
// console.log(f);


// let f = g6.filter((v)=>v.name.includes('a'))

// console.log(f);








///////////////////////// barcha masalalar funksiyada bolsin
// no1
// let arr=[2,3,4,5,2,1]
// raqamlar toqlarini toping
// [4,9,16,25,4,1]
// let arr=[2,3,4,5,2,1]
//     if(arr % 2 == 0){
//         console.log(true);
//     }else{
//         console.log(false);
//     }



// no2
// let arr=['salom','dunyo','hello','world']
// massiv elementlarini length (uzunligi) 5 ga teng bolganlarini chiqazing

// let arr=['salom','dunyo','hello','world']

// let x = arr.filter((v) => {
//     if(arr.length == 5){
//         console.log(x);
//     }else{
//         console.log(false);
//     }
// })












// let arr2 = arr.toString()
// if(arr2.length == 23){
//     console.log(arr);
// }else{
//     console.log(arr2);
// }
// if(arr.length == 5){
//     console.log(true);
// }else{
//     console.log(false); 
// }
// console.log(arr);


// no3
// let arr=[1,2,3,true,'true'] 
// qiymati Boolean bolganlarini toping
// let arr=[1,2,3,true,'true'] 

// if(arr == Boolean){
//     console.log(true);
// }else{
//     console.log(false);
// }




// no4@@@@@@@@@@@@@@@@@@@@
// stringda 'a' bor yoqligini tekshiring
// let str='salom'
// true
// function find(str){

//     let x = str.includes('a')
    
//     console.log(x);
// }
// find('qwertyu')


// no5@@@@@@@@@@@@@@@@@@@@
// let arr=['salom','dunyo','faang']
// a harfi borlarini chiqazing
// ['salom','faang']
// function m(arr){

    
//     let x = arr.filter((v)=>v.includes('a'))
    
//     console.log(x);
// }
// m(['salom','dunyo','faang'])


// no6@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// let obj={
//     id:1,
//     name:'Ali',
//     add:'Mirzo Ulugbek'
// }
// obj ichidagi nameda 'a' harfini bor yoqligini tekshirng

// let obj={
//     id:1,
//     name:'Ali',
//     add:'Mirzo Ulugbek'
// }

// let x = obj.name.includes('A')

// console.log(x);

// no7
// songi masala
// g6 dagi userlarning ismida a harfi borlarini chiqazing
// (1 va 6ni birlashmasi )







// NO1@@@@@@@@@@@@@@@@@
// let arr=[1,2,4,56,'1']
// // agar massiv elementi string bolib qolsa uni numberga otkazing
// [1,2,4,56,1]

// let arr=[1,2,4,56,'1']
// console.log(arr.join(',').split());


// no2
// let arr=[1,2,3,4,56,21]
// massivning elementi juft bolib qolsa yoniga juft,toq bolib qolsa toq sozini qoshing
// ['1 toq','2 juft','3 toq','4 juft','56 juft','21 toq']

// no3@@@@@@@@@@@@@@@@
// let obj={
//     id:1,
//     name:'Umar',
//     job:"bekorchi"
// }
// obj ning job qiymatini ozgartiring
// obj={
//     id:1,
//     name:'Umar',
//     job:"developer"
// }
// obj.map((v)=> {
//   if(v.job == 'bekorchi'){
//     v.job == 'developer'
//     console.log(v);
//   }
// })



// no3@@@@@@@@@@@@@@@@@@@@@@@@@
// agar objning job qiymati "bekorchi" ga teng bo'lsa salary:0
// developerga teng  bolsa salary:300$ bolsin 
// let obj={
//     id:1,
//     name:'Umar',
//     job:"bekorchi"
// } 
// chiqish
// obj={
//     id:1,
//     name:'Umar',
//     job:"bekorchi",
//     salary:0
// } 
// let obj2={
//     id:1,
//     name:'Umar',
//     job:"developer"
// } 
// chiqish
// obj2={
//     id:1,
//     name:'Umar',
//     job:"developer",
//     salary:'300$'
// } 

// let obj={
//     id:1,
//     name:'Umar',
//     job:"developer"
// }
// if(obj.job == 'bekorchi'){
//     obj.salary = 0
//     console.log(obj);
// }else if(obj.job == 'developer'){
//     obj.salary = '300$'
//     console.log(obj);
// }else{
//     console.log(obj);
// }


// no4 @@@@@@@@@@@@@@@@@@@@@@@
// obj dan clone oling
// let food = {beef: 'beef',
//             bacon: 'bacon',
//             soup: 'soup'
//             }

// let food2 = {...food}
// food2.beef = 'cabbage'

// console.log(food);
// console.log(food2);
// no5@@@@@@@@@@@@@@@@@@@@
// obj ning faqat name ni ozgartirib qolgan qiymatlariga
//  tegilmagan holda yangi obj qaytaring

// let data = { name: "Alice", age: 26 }
// let dataCopy = { ...data }
// data.name = 'John'
// console.log(data.name)
// console.log(dataCopy.name)










// no1 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// let arr=[1,2,4,5,6]
// massivga yangi element qoshing
// [1,2,4,5,6,'salom']

// let arr=[1,2,4,5,6]

// let x = arr.concat('salom')

// console.log(x);

// no2@@@@@@@@@@@@@@@@@@@@
// let arr=[
//     {url:'https://scrollrevealjs.org/',name:'scrollrevealjs'},
//     {url:'https://javascript.info/',name:'javascript.info'},
//     {url:'https://greensock.com/',name:'js animation libraries'},
// ]

// // massivga yangi obj qoshing
// // arr=[
// //     {url:'https://scrollrevealjs.org/',name:'scrollrevealjs'},
// //     {url:'https://javascript.info/',name:'javascript.info'},
// //     {url:'https://greensock.com/',name:'js animation libraries'},
// //     {url:'https://animejs.com/',name:'animejs.com'},
// // ]

// arr.push ({url:'http://pixabay.com/',name:'pixabay'})

// console.log(arr);
// songisi
// no3@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// g6 massivga yangi qoymat qoshing
// g6.pop ({id:g6.length+1, name:'Lochinbek', age:19, job:'Developer' })


// console.log(g6);
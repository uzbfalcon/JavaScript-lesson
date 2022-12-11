// // Class OOP - 

// class Person{
//   constructor(name, age){
//     this.name = name,
//     this.age = age
//   }
// }

// let person1 = new Person('Lochinbek', 19)
// let person2 = new Person('Odina', 17)

// console.log(person1)
// console.log(person2)




// let obj = {
//   name:'Kevin',
//   age: 15
// }
// /////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\

// class Person{
//   constructor(name, age, job){
//     this.name=name,
//     this.age=age,
//     this.job=job
//   }
// }


// let person1 = new Person('sdfg', 45, 'deveolper')
// let person2= new Person('qwerty', 34, 'deveolper')
// let person3= new Person('zxcvbn', 34, 'deveolper')

// console.log(person1)
// console.log(person2)
// console.log(person3)



// class Robot {
//   constructor(id, name){
//     this.id = id,
//     this.name = name
//   }
// }
// class KattaRobot extends Robot {
//   constructor(){
//     super(id, name,status)

//   }
// }
// let Robot1 = new Robot(1, 'Robot1')
// let kattaRobot1 = new Robot(1, 'Robot2', 4)


// console.log(kattaRobot1)

// let robot1 = new Robot (1, 'Robot1')

// function add(a){
//     return (b) => {
//         return (c) => {
//             return a+b+c
//         }
//     }
// }

// let inc1  = add(3)



// console.log(inc1(6)(4));





// function del(){
//     return [1,2,3]
// }
// if(del().length == 3){
//     console.log('o`chirildi');
// }
// else{
//     console.log('o`chirilmadi');
// }




// function add(name){
//     return (surname) => {
//         return (age) => {
//             return name: ${name}, surname: ${surname}, age: ${age}
//         }
//     }
// }


// let inc1  = add('Lochinbek')

// console.log(inc1('Khujamov')(19));





// function ages(){
// var user = {
//     name :'Oleg',
//     surname: 'adreyiveech',
//     age: 59,
//     children: [
//         {
//         name: 'Vasilia',
//         surname: 'Olegova',
//         age: 22,
//         children: [ 
//             {name: 'Misha', surname: 'Vasileyova', age: 22},
//             {name: 'Vladimir', surname: 'Vasileyov', age: 15},
//         ],
//     },
//     {
//         name: 'Amir',
//         surname: 'Olegov',
//         age: 22,
//         children:[{name: 'Temur', surname: 'Amirov', age: 10}],
//     },
// ],
// }
// return user
// }





// let user2 = user1(ages.children.age)
// let user3 = user2(ages.children.children.age)
// let user4 = user3(ages.children)

// console.log(user(4));



// let search = document.getElementById('search')
// let block = document.getElementById('block')

// const address = [
//     'nimadir',
//     {
//         name : 'Abdulla',
//         town : 'Yakkasaroy',
//         street : 'Abdulla Qahhor',
//         homenumber:4
//     },
//     {
//         name : 'Ali',
//         town : 'Uchtepa',
//         street : 'Islom Karimov',
//         homenumber:8
//     },
//     {
//         name : 'Umar',
//         town : 'Olmazor',
//         street : 'Qahhor',
//         homenumber:1
//     },
//     {
//         name : 'Olim',
//         town : 'Chilonzor',
//         street : 'Cho`lpon',
//         homenumber:6
//     },
//     {
//         name : 'Ilyos',
//         town : 'Sergeli',
//         street : 'Temur Malik',
//         homenumber:5
//     },
// ]


// function User(){
//     let strHtml = ''
//     address.map((v) => {
//         strHtml += <h1>${v.name}</h1><p>${'Town:' +v.town}</p><p>${'Street: '+v.street}</p><p>${'Homenumber: ' + v.homenumber}</p>

//     })
//     block.innerHTML = strHtml
// }
// User()


// function add(){
//     address.push({name:'Lochinbek', town:'Uchtepa', street:'Farkhad', homenumber:'34'})
//     return new Promise((res, rej) => {
//         if(address.includes('nimadir')){
//             res()
//         }else{
//             rej()
//         }
//     })
// }
// add().then(User).catch((e) => console.log(e));
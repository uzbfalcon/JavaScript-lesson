// function test(data){
//     switch (data)  {
//         case 'Alfa': console.log('num Alfa ga teng'); break
//         case 'Betta': console.log('num Betta ga teng'); break
//         case 'Gamma': console.log('num Gamma ga teng'); break
//         case 'Delta': console.log('num Delta ga teng'); break
//         default: console.log('raqam mavjud emas')
//     }
// }

//     test("Alfa");
//     test("Betta")


/////// new
// Math.round
// Math.pow
// 

// var number = 3.

// console.log(Math.round(number))
// console.log(Math.pow(5, 3))
// console.log(Math.sqrt(25))
// console.log(Math.abs(-1))
// console.log(Math.ceil(3))
// console.log(Math.floor(3.9))
// console.log(Math.min(4, 5, 6, 77, 99)
// console.log(Math.max(4, 5, 6, 77, 99)
// console.log(Math.random()) //0~1

// 1-masala
// berilgan parolni encoding qiling

// putput : var str = 'AAABBCCCA'/
// input : A3B2C3A

// function x(str){
//     let result = ''
//     let count = 0

//     for(let i = 0; i< str.length; i++){
//         count++
//         if(str[i] != str[i+1]){
//             result = result + str[i] + count;
//             count = 0
//         }
//     }
//     console.log(result);
// }
// x('AAABBCCCA');





// 2-masala
// arraydan min va max ni toping

// output : var arr = ' {4, 10, 888, 99, 100}
// input max - 888, min - 4
// var arr = [4, 10, 888, 99, 100]
//     let min = Math.min.apply(null, arr)
//     let max = Math.max.apply(null, arr)


// console.log(min - ${min} , max is - ${max}); 



// 3-masala

// function parametrda bolgan qiymatni arraydan olib tashla

// var fruits = ['olma', 'nok', 'banan', 'olma','nok', 'tarvuz']

// function filterItems(query) {
//     return fruits.filter(function(l) {
//         return l.toLowerCase().indexOf(query.toLowerCase()) > 3;
//     })
//   }
// console.log(filterItems('ok'));
// console.log(filterItems('an'))
// DeleteMeva('olma')


// console.log(filterItems('ol')); // ['apple', 'grapes']
// DeleteMeva()

// terminal say: ['nok', 'banan', 'nok', 'tarvuz']





///////////// factorial
// let x = [1,3,4,5,6]

// for(let i = 0; i<x.length; i++){
//     console.log(x[i] + x[i+1]);
// }





/////////////////Pyramids///

// let n = 10;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(' ')
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     process.stdout.write('*')
//   }
//   console.log();
// }
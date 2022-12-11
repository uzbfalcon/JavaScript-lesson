// # //////////////////////number//////////////////////////////////////
  // No1!@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // bu uchburchakmi? a,b,c ozgaruvchilar berilgan a va b ning yigindisi c dan katta bolsa uchburchak aks holda uchburchak emas
  
  // let a = 5, b = 4 , c = 6
  
  // if((a+b) > c ) {
  //     console.log('uchburchak')
  // }else{
  //     console.log('uchburchak emas');
  // }
  
  
  // No2@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // #3 ta a,b,c stringlar berilgan ularni raqamga o'tkazing(kamida 2ta usul  bn)
  // kirish
  // let a='1'
  // let b='34'
  // let c='67'
  // Chiqish
  // a=1,b=34,c=67
  
  // let a='1'
  // let b='34'
  // let c='67'
  // // 1-usul
  // console.log(parseFloat(a))
  // console.log(parseFloat(b))
  // console.log(parseFloat(c))
  
  // 2-usul
  // console.log(+a, +b, +c);
  
  
  // #No3@@@@@@@@@@@@@@@@@@@@@@@@
  // #sonlarni yaxlitlang (2 usul bn)
  // kirish
  // let a='45.78'
  // let b='34.56'
  // let c='64.12'
  // Chiqish
  // a=45,b=34,c=64
  
  // let a='45.78'
  // let b='34.56'
  // let c='64.12'
  
  // let a2 = Math.ceil(a)
  // let b2 = Math.ceil(b)
  // let c2 = Math.floor(c)
  // // 1-usul
  // console.log(a2);
  // console.log(b2);
  // console.log(c2);
  
  // 2-usul
  // console.log(parseInt(a));
  // console.log(parseInt(b));
  // console.log(parseInt(c));
  
  // #No4@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // # sonlarni butunlikka tekshiring 
  // kirish
  // let a=45.2
  // let b=34
  // let c=64.4
  // Chiqish
  // false,true,false
  
  // let a=45.2
  // let b=34
  // let c=64.4
  
  // if(a == Number){
  //     console.log(true);
  // }else{
  //     console.log(false);
  // }
  // if(b == Number){
  //     console.log(false);
  // }else{
  //     console.log(true);
  // }
  // if(c == Number){
  //     console.log(true);
  // }else{
  //     console.log(false);
  // }
  
  
  // #No5@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // # sonlarni butunlikka tekshiring agar butun bolmasa ularni yaxlitlang
  // kirish
  // let a=45.2
  // let b=34
  // let c=64.4
  // Chiqish
  // true,true,true
  // let a=45.2
  // let b=34
  // let c=64.4
  
  // let  a2 = parseInt(a) , b2 = parseInt(b), c2  =parseInt(c)
  
  // if((a2 && b2 && c2) == Number){
  //     console.log(false, false, false);
  // }else{
  //     console.log(true, true, true);
  // }
  
  
  // #No6@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // #sonlarni yaxlitlang.agar u string holatida kelsa ularni numberga o'tkazing (2 usul bn)
  // kirish
  // let a='45.78$'
  // let b=34.56
  // let c='64.12'
  // Chiqish
  // a=45,b=34,c=64
  
  // let a='45.78$'
  // let b=34.56
  // let c='64.12'
  
  // // 1-usul
  // let x = Math.floor(parseInt(a))
  // let y = Math.floor(b)
  // let z = Math.floor(c)
  
  // console.log(x, y, z);
  
  // 2-usul
  // let x = parseInt(a)
  // let z = parseInt(b)
  // let y = parseInt(c)
  
  // console.log(x, y , z);
  
  // #No7@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // #sonlarni kub ildizdan chiqazing
  // kirish
  // let a=1
  // let b=125
  // let c=8
  // Chiqish
  // a=1,b=5,c=2
  // let a=1
  // let b=125
  // let c=8
  
  // console.log(Math.cbrt(a , 3) , Math.cbrt(b , 3) , Math.cbrt(c , 3));
  
  // # No8@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // #sonlarni yaxlitlang va ularga 1 ni qoshing
  // kirish
  // let a='45.78'
  // let b='34.56'
  // let c='64.12'
  // Chiqish
  // a=46,b=35,c=65
  
  // let a='45.78'
  // let b='34.56'
  // let c='64.12'
  
  // let a2 = parseInt(a)
  // let b2 = parseInt(b)
  // let c2 = parseInt(c)
  
  // console.log(a2+1 , b2+1, c2 + 1);
  // # No9@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // a soni berilgan sonning a^2,a^4,a^8 darajalari topilsin 
  // kirish 
  // let a=2
  // Chiqish
  // 4,16,256
  
  // let a = 2
  // let a2 = a**2, a4 = a**4, a8 = a**8
  // console.log(a2, a4, a8);
  
  
  // let a = 2;
  // console.log((${a ** 2}, ${a ** 4}, ${a **8}));
  
  // #No10@@@@@@@@@@@@@@@@@@@@@@
  // a burchak gradusda berilgan.radianga o'tkazuvchi kod yozing (x/180)
  // kirish
  // let a=45
  // chiqish
  // 1/4
  // let a=45
  
  // console.log(a/180);
  
  // #No11
  // 3 xonalik son berilgan uning yuzlar onlar birlar xonasidagi raqamlarni topuvchi programma tuzilsin
  // let n=153
  // chiqish
  // yuzlik 1,o'nlik 5, birlik 3
  // let n=153
  // function room(y , o, b){
  //     if(y%100) {
  //         console.log( 'yuz');
  //     }else{
  //         return 'uiop'
  //     }
  // }
  // console.log('yuz');
  
  
  
  
  
  
  // #No12
  // 3 xonalik son berilgan uning o'ngdan birinchi raqamini o'chirib chapga yozishdan hosil bolgan raqam qaytarilsin
  // let n=153
  // chiqish
  // 315
  
  // #No13
  // 2 xonalik son berilgan uning raqamlari o'rni almashishdan hosil bo'lgan raqamni toping
  // let n=13
  // chiqish
  // 31
  // #No14@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // og'irligi m kilogram massa berilgan.Tonnaga o'tkzish kk . (1t=1000kg)
  // let n='1234'
  // chiqish
  // 1 t 234kg
  // let n='7890'
  // let x = n.slice(0,1)
  // if(n%1000 != 0){
  //     console.log( x + ' t ' + ${ n%1000} kg);
  // }else{
  //     console.log(false);
  // }
  
  // #No15
  // kun davomida n sekund vaqt o'tdi. ayni vaqtgacha nechi soat minut sekund o'tganini aniqlovchi programma tuzilsin va kun tugashiga qancha qolgan
  // let s=3600
  // chiqish
  // 2 soat bolgan 22 soat qolgan
  // #No16
  // 999 dan katta son berilgan.bir marta bolib qoldiqni va butuni olish yordamida mingliklardagi sonni aniqlang
  // let c=2341
  // Chiqish
  // # No17 
  // berilgan songa eng yaqin kub darajani toping
  // let a=25 => 27 
  // a=125 => 125
  // no18
  // 2 ta son berilgan soning raqamlari kvadratlari yigindisi bir briga teng bolsa true aks holda false
  // a=34,b=43 true  
  // a=67,b=32 false  
  // no19@@@@@@@@@@@@@@@
  // togri tortburchak tomonlari berilgan.yuzini peremetrini toping
  // let a = 4, b = 7
  // let P = (a + b) *2
  // let S = a * b
  
  // console.log(P , S);
  
  // no20@@@@@@@@@@@@@@@@@@@@
  // oquvchi 15min da 2 km yol yuradi. uning tezligini toping (km/soat)
  
  // let t = 15
  // let S = 2
  // let V = S/t
  
  // console.log(V);
  
  // No21@@@@@@@@@@@@@@@@@@@@
  // a va b son berilgan a soni b soniga bolinishini tekshiring
  // a=4,b=13 bolinmaydi
  // a=7,b=49 bolinadi
  // let a = 7, b = 49
  
  // if(b%a == 0){
  //     console.log(true);
  // }else{
  //     console.log(false);
  // }
  
  // No22
  // berilgan soning faktarialini toping 
  // n=5 =>1*2*3*4*5
  
  // no23@@@@@@@@@@@@@@@@@@@@@@@@@
  // n gacha bolgan sonlar yigindisini toping
  // let n = 10
  // let x = (n-9) + (n-8) + (n-7) + (n-6) + (n-5) + (n-4) + (n-3) + (n-2) + (n-1) + n 
  // console.log(x);
  // no24@@@@@@@@@@@@@@@@@@@@@@@@@
  // sonlar o'qida A va B nuqtalar berilgan. shunday C nuqta bor u A va B nuqtalar markazida yotadi. AC va BC kesmalar uzunligini toping 
  // let AB = 29
  // let BC = AB / 2
  
  // console.log(BC);
  
  
  // no25
  // kuchli raqamlarni toping. agar soning raqamlari faktarila yigindisi oziga teng bolsa kuchli raqam aks holda kuchsiz
  // let n=145 => 1!+4!+5!=1+24+120=145 kuchli raqam
  // let 132=> 1!+3!+2!=1+6+2=9 kuchsiz raqam
  // no26@@@@@@@@@@@@@@@@@@
  // sonlar berilgan raqamga aylantirib bolmaydigan sonlarni chiqaring
  // a='42',b='2$3', c='a2' => c='a2' noto'g'ri qiymat kiritdingiz
  // let a='42',b='2$3', c='a2'
  // if(parseFloat(c)){
  //     console.log('raqam');
  // }else{
  //     console.log('noto`g`ri qiymat kiritdingiz');
  // }
  
  
  // no27
  // ava b sonlari berilgan a ga ham b ga ham bolinuvchi sonlarni toping
  // no28@@@@@@@@@@@@@@@@
  // Sutkaning qolgan qismi o`tgan qismidan besh marta ko`p bo`lsa, hozir vaqt qancha?
  // 20:00
  
  // no29@@@@@@@@@@@@@@@@
  // Onasining yoshi qizining yoshidan uch marta katta, otasi esa, onasi bilan qizining yoshi birgalikda qancha bo`lsa, shuncha yoshda,
  // agar har uchalasining yoshini birga olganda hosil bo`lgan son eng kichik uch honali son bilan to`rtning yig`indisiga teng bo`lsa, 
  // ularning har biri necha yoshda bo`ladi?
  // onasi = x, qizi = x/3, otasi = (x +x/3) 
  // let onasi = 39, qizi = 13, otasi = 52
  
  // console.log(onasi+qizi+otasi);
  
  // no30@@@@@@@@@@@@@@@@@@@
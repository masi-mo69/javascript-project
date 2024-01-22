
// var num1 = prompt('Please Insert Num1?');
// var num2 = prompt('Please Insert Num2?');

// var num1DataType = +num1
// var num2DataType = +num2

// var plusResult = num1DataType + num2DataType
// var subResult = num1DataType - num2DataType
// var multiResult = num1DataType * num2DataType
// var divResult = num1DataType / num2DataType
// alert(divResult);

// var num = prompt('Please Insert Num?',0);


// if(num % 2 == 0){
//     alert("Odd Num");
// }
// else{
//     alert("Even Num");
// }
// var num1 = Number(prompt('Please Insert Num1?',0));
// var num2 = Number(prompt('Please Insert Num2?',0));
// var num3 = Number(prompt('Please Insert Num3?',0));

// var result = (num1 + num2 + num3)/ 3 ;
// alert(result);

// var age = Number(prompt('Please Insert Your Age?',0));
// if(age<18){
//     alert('شما مجاز به ورود نیستید');
// }
// else{
//     alert('ورود به پنل');
//     }

// var FirstNum = Number(prompt('Please Insert Num1?',0));
// var SecondNum = Number(prompt('Please Insert Num2?',0));

// var result = FirstNum ** SecondNum;
// alert(result);

// var userBirthDate = prompt('Enter Your Birthday,Please:',1370);

// var userAge = 1402 - userBirthDate;

// if(isNaN(userAge)) {
//     alert('تاریخ تولد وارد شده معتبر نمی باشد');
// }else{
//     alert('Your Age is:'+ userAge);
// }

// var timeMinute = prompt('Please Insert Minute',0);

// var timeHour = timeMinute / 60;

// if(isNaN(timeHour)){
//     alert('عدد وارد شده صحیح نیست');
// }
// else{
//     alert(timeHour + "Hours");
// }

// var userGender = prompt('Please Insert Your Gender?(male,female)','');
// var userAge = prompt('Please Enter Your Age?',0);

// if(userGender == 'female' || userAge < 18){
//     alert('Error');
// }else{
//     alert('Ok')
// }

// var userAverage = prompt('Please Insert Your Average?',0);

// switch(userAverage){
//     case "12":
//     case "13":
//     case "14":
//         alert('class A');
//         break;
//     case "15":
//     case "16":
//     case "17":
//         alert('class B');
//         break;
//     case "18":
//     case "19":
//     case "20":
//         alert('class C');
//         break;
//         default:
//         alert('شما مشروط هستید');
// }

// function IsOddOrEven(Number){

//     if(Number % 2 == 0){
//         alert('عدد زوج است' + Number);
//     }else{
//         alert('عدد فرد است' + Number);
//     }
// }

// IsOddOrEven(12);

// function IsAverage(Num1,Num2,Num3){
//    var average = (Num1 + Num2 + Num3)/3;
//     alert('میانگین اعداد :' + average);
// }

// IsAverage(12,3,5);
// var UserNmae = prompt('Please Enter Your Username?');
// var PassWord = prompt('Please Enter Your Password?');

// if(UserNmae.length<3 || PassWord.length<8){
//     alert('یوزرنیم باید حداقل 3 کاراکتر و پسورد باید حداقل 8 کاراکتر داشته باشد')
// }else{
//     alert('ثبت نام با موفقیت انجام شد')
// }

// var UserNmae = prompt('Please Enter Your Username?');

// if(UserNmae.toLowerCase() == 'ali'){
//     alert('کاربر با موفقیت لاگین شد')
// }else{
//     alert('کاربر اجازه ورود ندارد')
// }

// var firstRandomNumber = Math.random() * 100000 
// var firstCapthaCode = Math.floor(firstRandomNumber);
// console.log('Your Captca Code:',firstCapthaCode);

// for(var i=0;i<=100;i+=2){
//     console.log(i);
// }
//     sumallPrice = 0;
// for(var i=0;i<5;i++){
//     sumallPrice = sumallPrice + Number(prompt("Enter Your Price?"));
// }
// alert("All Price On Your Basket:" +sumallPrice);
// avarageNums = null;
// sum =0;

// for(i=0;i<5;i++){
//    avarageNums = Number(prompt("Enter Your Num:"));
//    sum = sum + avarageNums;
// }
// alert("Average Is:" + sum / 5);


// var userNumber = Number(prompt("Enter your Num?"));
// var sum = 0;

// for(var i=0;(userNumber / 10)!=0;i++){

//    sum = sum + (userNumber % 10);
//    userNumber = Math.floor(userNumber /10);
// }
// console.log("Sum Of Digits :",sum);

// var userNumber = Number(prompt("Enter your Num?"));
// var sum = 0;

// while((userNumber / 10)!=0){

//    sum = sum + (userNumber % 10);
//    userNumber = Math.floor(userNumber /10);
// }
// console.log("Sum Of Digits :",sum); 



// var userNumber = Number(prompt("Enter your Num?"));
// var count = 0;

// if(userNumber ==0){
// count = 1;
// }else{

//    for(var i=0;(userNumber / 10)!=0;i++){

//       count++;
//       userNumber = Math.floor(userNumber /10);
//    }
// }

// alert("Count Of Digits :" + count);


// var userNumber = Number(prompt("Enter your Num?"));
// var sum = 0;
// var count = 0;

// while((userNumber / 10)!=0){

//    sum = sum + (userNumber % 10);
//    userNumber = Math.floor(userNumber /10);
//    count++;
// }
// alert("Sum Of Digits :" + sum + ' \n ' + "Count of Digits :" + count); 

/*var userFirstNum = Number(prompt("Enter First Num"));
var userSecondNum = Number(prompt("Enter Second Num"));
if(userFirstNum % 2 ==0){
   while(userFirstNum < userSecondNum){
      userFirstNum +=2;
      console.log(userFirstNum);
   }
}else{
   userFirstNum++;
   while(userFirstNum < userSecondNum){
      userFirstNum +=2;
      console.log(userFirstNum);
   }
}*/

/*var userNumber = Number(prompt("Enter Your UserNumber?"));
var sum =0;
var count=0;

while(userNumber != -1){
   sum += userNumber;
   userNumber = Number(prompt("Enter Tne Number: \n If you dont have a number,Enter -1"));
   count ++;
}
// console.log("sum",sum);
// console.log("count",count);
console.log("average :",sum / count);*/


// var userFirstNum = Number(prompt("Enter FirstNum"));
// var userSecondNum = Number(prompt("Enter Second Num"));

// var power =1;

// for(i=0;i<userSecondNum;i++){
//    power = power * userFirstNum;
// }

// alert("Power : " + power);


// var userFirstNum = Number(prompt("Enter FirstNum"));
// var userSecondNum = Number(prompt("Enter Second Num"));

// var power =1;
// var i=0;

// while(i<userSecondNum){
//    i++;
//    power = power * userFirstNum;
// }

// alert("Power : " + power);


/*var userFirstNum = Number(prompt("Enter FirstNum"));
var userSecondNum = Number(prompt("Enter Second Num"));

var power =1;
var i=0;
do{
   power = power * userFirstNum;
   i++;
}while(i<userSecondNum)

alert("Power : " + power);*/

/*userNumbers = [];
userNumber = 0;
var sum = 0;
while(userNumber !=-1){
   userNumber = Number(prompt("Enter Your Number \n Enter -1 if you dont enter any Number"));
   if(userNumber !=-1){
      userNumbers.push(userNumber);
   }
}
for(var i=0;i<userNumbers.length;i++){
   sum += userNumbers[i];
}
console.log(userNumbers);
console.log("Average :",sum / userNumbers.length);*/

/*var users =[
   {id:1, name:'ali',family:'ahmadi',age:25,email:'ali@gmail.com'},
   {id:2, name:'ahmad',family:'abbasi',age:28,email:'ahmad@gmail.com'},
   {id:3, name:'zahra',family:'karami',age:23,email:'zahra@gmail.com'}]

var userName = prompt("Enter Your Name?");
var userFamily = prompt("Enter Your Family?");
var userAge = prompt("Enter Your Age?");
var userEmail = prompt("Enter Your Email?");

if(userName.length <3 || userName.length >10){
   alert("نام حداقل باید 3 کاراکتر و حداکثر 10 کاراکتر داشته باشد");
}else if(userFamily.length <3 || userFamily.length >15){
   alert("نام خانوادگی حداقل باید 3 کاراکتر و حداکثر باید 15 کاراکتر داشته باشد");
}else if(isNaN(userAge) || userAge.length > 3){
   alert("سن حتما باید عدد بوده و حداکثر 3 رقم باشد");
}else{
   var newUser = {
      id : 4,
      name: userName,
      family: userFamily,
      age: userAge,
      email: userEmail
   }
   users.push(newUser);
   console.log(users);
}*/

// var user = [18,20,17,35,42];
// user.forEach(function(number){
//    console.log(number);
// });

/*var users =[
   {id:1, name:'ali',family:'ahmadi',age:25,email:'ali@gmail.com'},
   {id:2, name:'ahmad',family:'abbasi',age:28,email:'ahmad@gmail.com'},
   {id:3, name:'zahra',family:'karami',age:23,email:'zahra@gmail.com'}];

   users.forEach(function (data) {
      console.log("Name :" + data.name +' '+"Family :" + data.family);
     })*/

     /*var ProductCart =[
      {id:1, name:'cake', price:250000},
      {id:2, name:'ice-cream', price:500000},
      {id:3, name:'shampoo', price:300000}
     ];

     ProductCart.some(function(product){
      console.log(product);
      return 
     })*/

     /*var AllProducts = [
   {id:1 , name:'water', price:12000},
   {id:2 , name:'pencil' , price:8000},
   {id:3 , name:'shampoo' , price:45000},
   {id:4 , name:'milk' , price:20000},
   {id:5 , name:'mobile' , price:7000000},
   {id:6 , name:'cake' , price:15000},
]

var UserBasket = [
   {id:1 , name:'water', price:12000},
   {id:2 , name:'cake' , price:15000}
]

var UserProduct = prompt('Enter your product :');
var RequestProduct;

var isInShop = AllProducts.some(function(product){
   if(product.name === UserProduct){
      RequestProduct = product
      return true;
   }
})

if(isInShop === true ){
   var newProduct = {
      id:3,
      name:RequestProduct.name ,
      price:RequestProduct.price
   }
   UserBasket.push(newProduct);

   var sum = 0;
   UserBasket.forEach(function(product){
      sum = sum + product.price;
   })
   console.log(UserBasket);
   alert("Total Price :" + sum)
}else{
   console.log('موجود نیست');
}*/


/*var groupUsers =[
   {id:1, name:'ali',family:'ahmadi',age:25,email:'ali@gmail.com'},
   {id:2, name:'ahmad',family:'abbasi',age:28,email:'ahmad@gmail.com'},
   {id:3, name:'zahra',family:'karami',age:23,email:'zahra@gmail.com'},
   {id:4, name:'eli',family:'sharifi',age:19,email:'eli@gmail.com'},
   {id:5, name:'masi',family:'khani',age:19,email:'masi@gmail.com'}]

   var isAll = groupUsers.every(function (user){
      return user.age > 18     
   })
 

   if (isAll === true) {
      console.log('شما می توانید تماس کنفرانسی خود را استارت بزنید')
   } else {
      console.log("شما مجاز به ایجاد تماس کنفرانسی نیستید")
   }*/


   /*var AllProduct = [
      {id:1 , name:'labtop',price:'7000000'},
      {id:2 , name:'phone',price:'5000000'},
      {id:3 , name:'pen',price:'6000'},
      {id:4 , name:'milk',price:'12000'},
      {id:5 , name:'water',price:'9000'},
      {id:6 , name:'cake',price:'20000'}
   ]

   var userBasket = [
      {id:1 , name:'labtop' ,price:'7000000'},
      {id:2 , name:'milk',price:'12000'}
   ]

   var userRequest = prompt("1. Add Product \n 2.Remove Produce");

   if(userRequest === "1"){
      var userProductName = prompt("Enter Your Name: ");
      var productData;

      var Isinshop = AllProduct.some(function(product){
         if(product.name === userProductName){
            productData = product;
            return true;
         }
      });
      if(Isinshop === true){
         var newProduct = {
            id:3,
            name:productData.name,
            price:productData.price
         };
         userBasket.push(newProduct);
         console.log("Basket :", userBasket)
      }else {
         alert("همچین محصولی موجود نمیباشد")
      }
   }else if(userRequest === "2"){
      var userProductName = prompt("Enter Your Name: ");
      var userProductIndex = userBasket.findIndex(function(product){
         return product.name === userProductName;
      });
      userBasket.splice(userProductIndex, 1);
      console.log("Basket :", userBasket);
   }else{
      alert('لطفا گزینه صحیح را ارسال کنید');
   }*/


 /*  var word = prompt("Enter Your Word?");
   var charectersArray = word.split('');
   var reverseCharacters = charectersArray.reverse();
   var reverseWord = reverseCharacters.join('');


   if(word === reverseWord ){
      console.log('از هر دو جهت به یک شکل خوانده می شود')
   }else{
      console.log('از هر دو جهت به یک شکل خوانده نمی شود')
   }
  */

   /*var todosArray = [
      {id:1, title:'learn js', isdoing:false},
      {id:2, title:'make footer', isdoing:true},
      {id:3, title:'design', isdoing:false},
      {id:4, title:'Vue js', isdoing:false}
   ];

   var userMenu = prompt("Choose your Item: \n 1.Add Todo \n 2.Remove Todo \n 3.Do Todo");

   if(userMenu === '1'){
      // alert("Add")
      var newTodoName = prompt('Enter the New todo Name: ','')
      var newTodoObject = {
         id:todosArray.length +1,
         title:newTodoName,
         isdoing:false
      }
      todosArray.push(newTodoObject);
      console.log("Todo Array: ",todosArray)

   }else if(userMenu === '2'){
      // alert("Remove")
      var RemoveTodoName = prompt('Enter the Removable todo Name: ','')
      var RemovableTodoIndex = todosArray.findIndex(function(todo){
         return todo.title === RemoveTodoName
      })
      todosArray.splice(RemovableTodoIndex,1);
      console.log("Todo Array: ",todosArray)

   }else if(userMenu === '3'){
      // alert("Doing")
      var EditTodoName = prompt('Enter the Editable todo Name: ','')
      todosArray.forEach(function(todo){
         if(todo.title === EditTodoName){
            todo.isdoing = true
         }
      })
      console.log("Todo Array: ",todosArray)
   }else{
      alert("کد وارد شده صحیح نمی باشد")
   }*/

   /*var tasksArray = {
      ali: ['html','css','java'],
      amin: ['react','vue','angular'],
      ahmad:['asp','c#'],
      nima: ['admin','contant']
   }

   var newTaskName = prompt('Enter the New task: ')
   var employName = prompt('Enter the Employ Name: ')
   
   var employTasks = tasksArray[employName];
   employTasks.push(newTaskName);
   console.log(tasksArray)*/

   /*var cities = {
      Tehran: ['teh1','teh2','teh3','teh4'],
      Arak: ['arak1','arak2','arak3','arak4'],
      Qhom: ['qhom1','qhom2','qhom3','qhom4'],
      Tabriz: ['tabriz1','tabriz2','tabriz3','tabriz4']
   }

   var startProvine = prompt("Enter The Provine: ")
   var mainProvineCities = cities[startProvine];

   mainProvineCities.forEach(function(city){
      console.log(city)
   });*/

   var allQuedtions = [
      {id:1 , title:'2 + 2', answer:'4'},
      {id:2 , title:'4 * 2', answer:'8'},
      {id:3 , title:'4 ** 2', answer:'16'},
      {id:4 , title:'25 / 5', answer:'5'},
      {id:5 , title:'7 * 4', answer:'28'},
      {id:6 , title:'100 / 2', answer:'50'},
      {id:7 , title:'Capital of Iran', answer:'Tehran'}
   ]

   var score = 0;
   var mainAnswer = '';

   allQuedtions.forEach(function(question){
      mainAnswer = prompt(question.title + '?')

      if(mainAnswer == question.answer){
         score ++;
      }
   })
   alert("Enter Final Score :" + score)
   
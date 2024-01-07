// sign        up     section


let supSection = document.getElementById('signup-sec')
let UPBtn  = document.getElementById('upBtn')
let userName = document.getElementById('sup-name');
let userMail = document.getElementById('sup-mail');
let userPW = document.getElementById('sup-pw');
let errorMsg = document.getElementById("msg1");
let tryBtn  =document.getElementById('trybtn');
let loggin =document.querySelector('#signup-sec p .loggin');
let users=[];

if(localStorage.getItem("udata") != null){
   users = JSON.parse(localStorage.getItem("udata"))
}
else {
   users = [];
}

function  createUser(){
if(userName.value == "" || userMail.value == "" || userPW.value  == ""){
      //  console.log("Error");
       errorMsg.classList.replace('d-none' , 'd-block');
       supSection.classList.replace('d-block' , 'd-none');
       return
           }  
      else {
         let userData = {
             uName : userName.value , 
             uEmail: userMail.value ,
             uPassword :userPW.value,
          }

          users.push(userData);
          localStorage.setItem("udata", JSON.stringify(users));
          console.log(users);
          location.href = "../signin/login.html";


      }
   }
loggin.addEventListener('click' ,function(){
   location.href = '../signin/login.html';
})
tryBtn.addEventListener('click' ,function(){
   errorMsg.classList.replace('d-block' , 'd-none');
   supSection.classList.replace('d-none' , 'd-block');
});




//  let nameRegex = /^[A-Za-z_]/;
//  function isNameValid(){
//    if(nameRegex.test(userName.value)){
//     return  true ; }
//     else{
//       return false;
//     }
//    }
// let mailRegex = /^(https:\/\/)?(www\.)?[A-Za-z0-9_\.]{1,}\.[a-z]{3}$/
// // console.log(mailRegex.test("www.google.com"))
// function isMailvalid(){
//    if (mailRegex.test(userMail.value)){
//       return true ;
//    }
//    else{
//       return false;
//    }
// }
// let pwRegex = /^[A-Z][a-z_]{7,}[1-9]{1,}/;
// // console.log(pwRegex.test("Faaatmaa1"))

// function isPwValid (){
//    if(pwRegex.test(userPW.value)){
//       return true;
//    }
//    else{
//       return false ;
//    }
// }
// UPBtn.addEventListener("click" , function(){
// if (isMailvalid() && isNameValid() && isPwValid){
//   for(let i =0 ; i<users.length; i++) {
//    if(users[i].userMail == userMail.value) {
//       console.log("Your Email is already exist");
//    }
//    else{
//    createUser();
//    }
//   }

// }
// else {
//    console.log("Enter Avalid inputs")
// }

// });


// let signIn = document.querySelector(".signin-sec");
// let INBtn  = document.getElementById('inBtn');

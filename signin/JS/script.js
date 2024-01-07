

// Log    in    Section

let  logSec = document.getElementById('signin-sec');
let  logMail = document.getElementById('log-email');
let  logPW = document.getElementById('log-pw');
let  errorMsg = document.getElementById("msg1");
let  logBtn =  document.getElementById('inBtn');
let tryBtn  =document.getElementById('trybtn');
let creating = document.querySelector('#signin-sec p .creating');
let users = [];
users = JSON.parse(localStorage.getItem('udata'));

function isExistUr(){
   for(let i=0 ; i<users.length; i++){
      if(logMail.value  == users[i].uEmail && logPW.value == users[i].uPassword){
         let user = users[i].uName ;
         localStorage.setItem('userName' , user) ;
         location.href = '../home/html.html';
         console.log("hi");
         break;
      }
   }
 }
logBtn.addEventListener('click' ,  function(){
if( logMail.value == '' || logPW.value == ''){
   errorMsg.classList.replace('d-none' , 'd-block');
   logSec.classList.replace('d-block' , 'd-none');
   return;
}
else {
   isExistUr()
}

 

})

creating.addEventListener('click' ,function(){
   location.href = '../signup/up.html';
})
tryBtn.addEventListener('click' ,function(){
   errorMsg.classList.replace('d-block' , 'd-none');
});

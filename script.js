import {getDatabase,ref,get,set,update,remove} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
   
 const db=getDatabase();
  
 var txtV,emailV,numV,subV,msgV

 function sendMsg(event)
{
    event.preventDefault();
    readFormData();
    //code to send data to database

    set(ref(db,"data/" + numV),{
        txt:txtV,email:emailV,num:numV,
        sub:subV,
        msg:msgV
    }).then(()=>{
        alert("data stored")
    }).catch((error)=>{
        alert("Unsuccessful",error);
    });

    clearFormData();
}



let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let register=document.querySelector('.register-form');


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});


//fireBase code for contact

//getting data from i/p

var txtBox=document.getElementById('txt');
var emailBox=document.getElementById('email');
var numBox=document.getElementById('num');
var subBox=document.getElementById('sub');
var msgBox=document.getElementById('msg');

//getting refrences from button
// var btns=document.getElementById('btn').onclick=sendMsg;
document.getElementById("fff").addEventListener("submit",sendMsg);



//read data from form
function readFormData()
{
    txtV=txtBox.value;
    emailV=emailBox.value;
    numV=numBox.value;
    subV=subBox.value;
    msgV=msgBox.value;
    console.log(txtV,emailV,numV,subV,msgV);
}

//clear data from form

function clearFormData()
{
    txtBox.value="";
    emailBox.value="";
    numBox.value="";
    subBox.value="";
    msgBox.value="";
}
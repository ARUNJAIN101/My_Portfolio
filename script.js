// WAIT UNTIL DOM LOADS

document.addEventListener("DOMContentLoaded", function(){

// TYPING EFFECT

const typingElement = document.getElementById("typing");

if(typingElement){

const text = ["Software Developer", "Backend Engineer", "Problem Solver"];

let index = 0;
let charIndex = 0;

function typeEffect(){

if(charIndex < text[index].length){

typingElement.textContent += text[index].charAt(charIndex);
charIndex++;

setTimeout(typeEffect,100);

}else{

setTimeout(() => {

typingElement.textContent="";
charIndex=0;
index = (index+1)%text.length;
typeEffect();

},1500);

}

}

typeEffect();

}


// DARK / LIGHT MODE TOGGLE

const toggleBtn = document.getElementById("themeToggle");

if(toggleBtn){

if(localStorage.getItem("theme") === "dark"){
document.body.classList.add("dark-mode");
toggleBtn.textContent = "☀️";
}

toggleBtn.onclick = () => {

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
localStorage.setItem("theme","dark");
toggleBtn.textContent = "☀️";
}else{
localStorage.setItem("theme","light");
toggleBtn.textContent = "🌙";
}

};

}


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Message Sent Successfully!");

this.reset();

});
}
});
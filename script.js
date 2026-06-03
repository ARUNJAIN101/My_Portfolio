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
});

// CONTACT FORM EMAILJS

emailjs.init("tAGIIQG3sWUORy9t4");

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.send(
            "service_j2fygrc",
            "template_bq50r5q",
            {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value
            }
        )
        .then(() => {

            showNotification("Message sent successfully!", "success");

            contactForm.reset();

        })
        .catch((error) => {

            console.error(error);

           showNotification("Failed to send message!", "error");

        });

    });

}
function showNotification(message, type) {

    const notification = document.createElement("div");

    notification.className = `notification ${type}`;

    notification.innerText = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add("show");
    }, 100);

    setTimeout(() => {

        notification.classList.remove("show");

        setTimeout(() => {
            notification.remove();
        }, 300);

    }, 3000);
}
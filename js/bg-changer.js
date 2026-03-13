const body=document.body;
const redButton= document.getElementById("red-btn");
const blueButton= document.getElementById("blue-btn");
const greenButton= document.getElementById("emerald-btn");
const resetButton= document.getElementById("reset-btn");
const display1= document.getElementById("display");
const randomButton= document.getElementById("random-btn");
const hexDisplay= document.getElementById("hex-display");

function change1(){
    body.style.backgroundColor = "";
    body.classList.remove("bg-slate-300", "bg-blue-300", "bg-emerald-300");
    body.classList.add("bg-red-300");
    hexDisplay.textContent= "Red";
}

function change2(){
    body.style.backgroundColor = "";
    body.classList.remove("bg-slate-300", "bg-red-300", "bg-emerald-300");
    body.classList.add("bg-blue-300");
    hexDisplay.textContent= "Blue";
}

function change3(){
    body.style.backgroundColor = "";
    body.classList.remove("bg-slate-300", "bg-red-300", "bg-blue-300");
    body.classList.add("bg-emerald-300");
   hexDisplay.textContent= "Green";
}

function reset(){
    body.classList.remove("bg-red-300", "bg-blue-300", "bg-emerald-300");
    body.classList.add("bg-slate-300");
    body.style.backgroundColor="";
    hexDisplay.textContent= "Default Color";
}

const colors= ["#fca5a5", "#93c5fd", "#6ee7b7", "#d4d4d4", "#d6d3d1", "#fde047", "#fdba74"];

function random(){
   const randomIndex= Math.floor(Math.random() * colors.length);
   const randomColors= colors[randomIndex];

    body.classList.remove("bg-red-300", "bg-blue-300", "bg-emerald-300");
    body.style.backgroundColor= randomColors;
    hexDisplay.textContent= randomColors;

}

function copyHex(){
const hexValue= hexDisplay.textContent;
navigator.clipboard.writeText(hexValue);
alert("co[ied: " + hexValue);
}
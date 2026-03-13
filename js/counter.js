const display1= document.getElementById("display");
const Button1 = document.getElementById("btn-1");
const Button2 = document.getElementById("btn-2");
const Button3 = document.getElementById("btn-3");
let count = 0
function increment(){
    if(count >= 50 ){
        count=50;
    }else{
count++
display1.textContent = count;
    }
}

function decrement(){
    if(count <= 0){
        count=0;
    }
    else{
count--
display1.textContent = count;
    }
}

function reset(){
count=0;
display1.textContent = count;
}


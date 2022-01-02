const flip = document.querySelector(".flip");
const coin = document.querySelector(".coin");
const head = document.querySelector(".head");
const tail = document.querySelector(".tail");

let headTimes = 0;
let tailTimes = 0;

flip.addEventListener("click", () =>{
    let headOrTail = Math.trunc(Math.random() * 3) == 1? true:false;
    coin.src = headOrTail? "img/head.png":"img/tail.png";
    if(headOrTail){
        headTimes += 1;
    } else{
        tailTimes += 1;
    }
    
    head.textContent = `head: ${headTimes}`;
    tail.textContent = `tail: ${tailTimes}`;
})
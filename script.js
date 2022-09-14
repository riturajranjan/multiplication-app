const rendom = Math.ceil(Math.random()*100);
const rendom2 = Math.ceil(Math.random()*100);

var formEl = document.getElementById("form");
var inputEl = document.getElementById("input");
var scoreEl = document.getElementById("score");

let score =JSON.parse(localStorage.getItem("score"));
console.log(score);

if(!score){
    score = 0;
}

scoreEl.innerText = `Score: ${score}`;

var que = document.getElementById("question");

que.innerText = `Waht is ${rendom} multiply by ${rendom2}?`;


const ans = rendom*rendom2;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value; 
    
    if(ans == userAns){
        score++;
        updateLocalStorage();
    }
    else{
        score--;
        updateLocalStorage();
        
    }
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}
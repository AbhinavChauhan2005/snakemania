let inputdir = {x:0,y:0};
const foodsound = new Audio("food.mp3");
const gameoversound = new Audio("gameover.mp3");
const movesound = new Audio("move.mp3");
const musicsound = new Audio("music.mp3");
let speed = 5;
let score = 0;
let lastpaintTime = 0;
let snakeArr = [{x:13,y:15}]
food = {x:7, y:8};



function main(ctime){

    window.requestAnimationFrame(main);
    if((ctime - lastpaintTime)/1000<1/speed){
        return;
    }
    lastpaintTime = ctime;
    gameEngine();
}
function iscollide(snake){
    for(let i=1;i < snakeArr.length; i++){
        if(snake[i].x === snake[0].x && snake[i].y ===snake[0].y){
            return true;
        }
    }
        if(snake[0].x >=18 || snake[0].x <=0 || snake[0].y >=18 || snake[0].x <=0){
            return true;
        }
        return false;
    }

function gameEngine(){
if(iscollide(snakeArr)){
    gameoversound.play();
    musicsound.pause();
    inputdir ={x:0,y:0};
    alert("game over press any key to play again")
     snakeArr = [{x:13,y:15}];
    musicsound.play();
    score = 0;

}
if(snakeArr[0].y===food.y && snakeArr[0].x ===food.x){
    foodsound.play();
    score +=1;
    scoreBox.innerHTML = "score:" + score;

    snakeArr.unshift({x:snakeArr[0].x+inputdir.x,y:snakeArr[0].y+inputdir.y});
    let a = 2;
    let b = 16;
    food = {x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}
}
for(let i = snakeArr.length -2; i>=0; i--){
    
    snakeArr[i+1] = {...snakeArr[i]};
}
snakeArr[0].x +=inputdir.x;

snakeArr[0].y +=inputdir.y;


board.innerHTML ="";
snakeArr.forEach((e,index)=>{
    snakeElement= document.createElement('div');
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    
    if(index===0){
        snakeElement.classList.add('head');
    }
    else{
        snakeElement.classList.add('snake');
    }

    board.appendChild(snakeElement);
});

foodElement= document.createElement('div');
foodElement.style.gridrowStart = food.y;
    foodElement.style.gridcolumnStart = food.x;
    foodElement.classList.add("food");
    board.appendChild(foodElement);


}


let hiscore = localStorage.getItem("highscore");
if(hiscore ===null){
    hiscoreval = 0;
    localStorage.setItem("highscore",JSON.stringify(hiscoreval))
}else{
    hiscoreval = JSON.parse(hiscore);
    hiscore
}




window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputdir = {x:0,y:1}
    movesound.play();
    switch(e.key){
        case "ArrowUp":
     console.log("ArrowUp")
     inputdir.x = 0 ;
     inputdir.y = -1;
        break;
        case "ArrowDown":
    console.log("ArrowDown")
    inputdir.x =0 ;
    inputdir.y = 1;
        break;
        case "ArrowLeft":
   console.log("ArrowLeft")
   inputdir.x = -1;
   inputdir.y = 0;
        break;
        case "ArrowRight":
   console.log("ArrowRight")
   inputdir.x = 1;
   inputdir.y = 0;
        break;
    
    default:
        break;
    }
})













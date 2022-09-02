console.log("paras");

let game=new Audio("gamemusic.mp3")
let turn ="X";
let gameover=false;
// function to change turn 
const changeturn=()=>{
    return turn==="X"?"O":"X"
}
// function to check for a win
const checkwin = ()=>{
    boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2,1.5,5,0],
        [3,4,5,1.5,15,0],
        [6,7,8,1.5,25,0],
        [0,3,6,-8,15,90],
        [1,4,7,1.5,15,90],
        [2,5,8,11,15,90],
        [0,4,8,1.5,15,45],
        [2,4,6,1.5,15,135],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!=0)){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText + " Won "
            gameover=true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
            document.querySelector('.line').style.width="27vw";
            document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            
        }
    })
}

//Game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText=turn;
            turn=changeturn();
            checkwin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
            }
        }
    })
})

// event listener for reset
reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll(".boxtext")
    Array.from(boxtext).forEach(element=>{
        element.innerText=""
    });
    turn="X";
    gameover=false;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"
    document.querySelector('.line').style.width="0vw";
})


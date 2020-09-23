var playerPanels=document.querySelectorAll(".top-row");
var grids=document.querySelectorAll('.grid');
var playerMoveBtn=document.querySelector(".playermovebtn");
var playerDOM=document.querySelector(".player")
var currentPlayer=1;


togglePlayer()

let currentChip;



playerPanels.forEach((panel)=>{
    panel.onclick=(e)=>{
        playerPanels.forEach(p=>{
            p.style.backgroundColor="white"
        })
        e.target.style.backgroundColor='green'
        currentChip=e.target;
    }
})




function togglePlayer(){
    if(currentPlayer === 1){
    playerDOM.innerHTML=currentPlayer;
    }
    else{
        playerDOM.innerHTML='Computers turn';

    }

    if(currentPlayer === 1){
        currentPlayer = 2
    }
    else{
        currentPlayer = 1
    }
}



playerMoveBtn.onclick=dropChip;



function dropChip(){
    if(currentChip === undefined){
        document.querySelector(".playermovebtn").innerHTML="Pick a column!"
        setTimeout(()=>{
            document.querySelector(".playermovebtn").innerHTML="Drop chip"
        },1000)
        return;
    }
    console.log("drop chip fired")
    // console.log(currentChip)
    // console.log(grids)
    grids=Array.from(grids)
    var idx = grids.findIndex(c=>c === currentChip)
    console.log(idx)
    console.log(grids[idx + 8])

   


   
    //set the search at bottom of grid
        idx += 56
        let foundHome=false; 

    while(!foundHome){
        if(grids[idx].classList.contains("populated")){
            idx-=8
        }
        else{
            grids[idx].classList.add("populated");
            if(currentPlayer === 1){
            grids[idx].classList.add("red");
            }
            else{
                grids[idx].classList.add("blue");

             }
            foundHome=true;
        }
    }
    
    togglePlayer()
if(currentPlayer === 1){
    console.log("Its computer turn");
    opponentsTurn()
}
    checkForWinner()
}




function checkForWinner(){
    let teams=['red','blue']
    teams.forEach((t,i)=>{
    grids.forEach((grid,idx)=>{
        if(grid.classList.contains("populated")){
                if(grids[idx].classList.contains(teams[i]) &&
                   grids[idx-1].classList.contains(teams[i]) &&
                   grids[idx-2].classList.contains(teams[i]) &&
                   grids[idx-3].classList.contains(teams[i])
                 ){
                     console.log("winner!")
                     console.log(teams[i] + "/" + currentPlayer + "  has won!")
                     if(currentPlayer === 2){
                        alert("Computer won!")
                        return;
                    }
                    else if(currentPlayer === 1){
                        alert("Congrats, you won!!")
                    }

                 }

                 if(grids[idx].classList.contains(teams[i]) &&
                 grids[idx-8].classList.contains(teams[i]) &&
                 grids[idx-16].classList.contains(teams[i]) &&
                 grids[idx-24].classList.contains(teams[i])
               ){
                   console.log("winner!")
                   console.log(teams[i] + "/" + currentPlayer + "  has won!")
                   if(currentPlayer === 2){
                    alert("Computer won!")
                    return
                }
    
                else if(currentPlayer === 1){
                    alert("Congrats, you won!!")
                }
               }
               if(grids[idx].classList.contains(teams[i]) &&
               grids[idx-7].classList.contains(teams[i]) &&
               grids[idx-14].classList.contains(teams[i]) &&
               grids[idx-21].classList.contains(teams[i])
             ){
                 console.log("winner!")
                 console.log(teams[i] + "/" + currentPlayer + "  has won!")
                 console.log("Diagonal Win")
                 if(currentPlayer === 2){
                     alert("Computer won!")
                     return;
                 }
                 else if(currentPlayer === 1){
                     alert("Congrats, you won!!")
                 }
             }
        }
    })
})
}



function opponentsTurn(){
    let columnPick=Math.random() * 7 | 0;

    currentChip = grids[columnPick];

    // console.log(currentChip)
    setTimeout(()=>{
        console.log("computer played")
        dropChip()
    },2000)


}



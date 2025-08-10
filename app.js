let userscore = 0;
let compscore = 0;
let message = document.getElementById("msg")
let user = document.getElementById("user")
let computer = document.getElementById("comp")
let win_lose = document.getElementById("win-lose")
let compremove = document.getElementById("compremove")
let uremove = document.getElementById("uremove")

const choices = document.querySelectorAll(".choice");

choices.forEach((choice)=>{
choice.addEventListener("click" , ()=>{
  const userchoice = choice.getAttribute("Id")
playgame(userchoice);
})
})

const playgame = (userchoice)=>{
    console.log("User choice is "+ userchoice)
    let compchoice = gencompchoice();
   console.log("Computer choice is " +compchoice)

   if(userchoice === compchoice){
    draw();
   }else{
   let UserWin = true;
   if(userchoice === "rock"){
    //scissor, paper
    UserWin = compchoice === "scissor" ? true : false
   }
   else if(userchoice === "paper"){
    //rock,scissor
    UserWin = compchoice === "rock" ? true : false
   }
   else{
    //rock , paper
    UserWin = compchoice === "paper" ? true : false
   }
   win(UserWin , userchoice , compchoice);
}
}
 
const win = (UserWin , userchoice , compchoice)=>{
    if(UserWin){
        userscore++
        user.innerHTML = userscore
        message.innerHTML = `You Win 🥳!! ${userchoice} beats ${compchoice}`
        message.style.backgroundColor = "green";
    }else{
        compscore++
        computer.innerHTML = compscore
        message.innerHTML = `You Lost 😕!! ${compchoice} beats ${userchoice}`
         message.style.backgroundColor = "red";
    }
}

const draw = ()=>{
    message.innerHTML = "Its a Draw 🫱🏻‍🫲🏻"
     message.style.backgroundColor = "rgb(37, 63, 63)";
}
  
const gencompchoice = ()=>{
     const options = ["rock", "paper" , "scissor"]
    let randIndx = Math.floor(Math.random()*3)
    let compchoice = options[randIndx];
    return compchoice;
}

const regame = document.getElementById("restart")
regame.addEventListener("click" , ()=>{
    window.location.reload()
})


const endgame = document.getElementById("end")
endgame.addEventListener("click" , ()=>{
    if(userscore > compscore){
        const audio = document.getElementById("winaud")
        audio.play()
         win_lose.innerHTML = "YOU WON 🥳!!"
    }else if(userscore === compscore){
        const audio = document.getElementById("winaud")
        audio.play()
         win_lose.innerHTML = "Its a Draw 🫱🏻‍🫲🏻"
    }
    else{
        const audiolose = document.getElementById("loseaud")
        audiolose.play()
        win_lose.innerHTML = "YOU LOST 😕!!"
    }
         user.innerHTML = "";
         computer.innerHTML = "";
          compremove.innerHTML = ""
          uremove.innerHTML = ""
         message.innerHTML = "Click Restart Game to play again"
         message.style.backgroundColor = "rgb(37, 63, 63)"
})

//<video autoplay muted loop playsinline id="greenScreenVideo">
//   <source src="your-greenscreen-video.mp4" type="video/mp4">
//   Your browser does not support the video tag.
// </video>

//#greenScreenVideo {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   z-index: -1;
// }











// logic used :
// const playgame = (userchoice)=>{
//     let compchoice = Math.floor(Math.random() * 3) + 1;
// let message = document.getElementById("msg");
// let comp = document.getElementById("comp")
// let user = document.getElementById("user")

//     if(compchoice == 1 && userchoice == "rock"){
//         compchoice = 'rock'
//         console.log("computer choice rock")
//         console.log("Draw")
// message.innerHTML = "Its a Draw";
//     }
//     else if(compchoice == 1 && userchoice == "paper"){
//         compchoice = 'rock'
//          console.log("computer choice rock")
//         console.log("Paper/user wins")
//         message.innerHTML = "Congragulations! You Won";
//         userscore++
//         user.innerHTML = userscore;
//     }
//     else if(compchoice == 1 && userchoice == "scissor") {
//         compchoice = 'rock'
//          console.log("computer choice rock")
//         console.log("rock/comp wins")
//         message.innerHTML = "You Lost! Better luck next time"
//         compscore++
//         comp.innerHTML = compscore;
//     }
//     else if(compchoice == 2 && userchoice == "paper"){
//         compchoice = 'paper'
//         console.log("computer choice paper")
//         console.log("Draw")
//         message.innerHTML = "Its a Draw";
//     }
//     else if(compchoice == 2 && userchoice == "rock"){
//         compchoice = 'paper'
//          console.log("computer choice paper")
//         console.log("Paper/comp wins")
//         message.innerHTML = "You Lost! Better luck next time"
//         compscore++
//          comp.innerHTML = compscore;
//     }
//     else if(compchoice == 2 && userchoice == "scissor") {
//         compchoice = 'paper'
//          console.log("computer choice paper")
//         console.log("scissor/user wins")
//  message.innerHTML = "Congragulations! You Win";
//   userscore++
//         user.innerHTML = userscore;
//     }
//     else if(compchoice == 3 && userchoice == "scissor"){
//         compchoice = 'scissor'
//         console.log("computer choice scissor")
//         console.log("Draw")
//         message.innerHTML = "Its a Draw";
//     }
//     else if(compchoice == 2 && userchoice == "rock"){
//         compchoice = 'scissor'
//          console.log("computer choice scissor")
//         console.log("rock/user wins")
//          message.innerHTML = "Congragulations! You Win";
//           userscore++
//         user.innerHTML = userscore;
//     }else {
//         compchoice = 'scissor'
//          console.log("computer choice scissor")
//         console.log("scissor/comp wins")
//         message.innerHTML = "You Lost! Better luck next time"
//         compscore++
//          comp.innerHTML = compscore;
//     }
// }



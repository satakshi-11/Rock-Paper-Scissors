let userscore=0;
let botscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const user_display_score=document.querySelector("#user_score");
const bot_display_score=document.querySelector("#bot_score");

const generatebotChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomindex=Math.floor(Math.random()*3);
    return options[randomindex];
};

const Draw = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor="purple";
  };

const showWinner=(userWin, userChoice, botChoice)=>{
    if(userWin){
        userscore++;
        user_display_score.innerText=userscore;
        msg.innerText = `You win! Your ${userChoice} beats ${botChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
       botscore++;
       bot_display_score.innerText=botscore;
       msg.innerText = `You lost. ${botChoice} beats your ${userChoice}`;
       msg.style.backgroundColor = "red";
    }
};

const PlayGame=(userChoice)=>{
    //generate bot choice
    const botChoice=generatebotChoice();
    
    if(userChoice === botChoice){
        //match draw
        Draw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
           userWin=botChoice=="paper"?false:true;
        }
        else if(userChoice=="paper"){
            userWin=botChoice=="scissors"?false:true;
        }
        else{
            userWin=botChoice=="rock"?false:true;
        }
        showWinner(userWin, userChoice, botChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>
    {
        const userChoice=choice.getAttribute("id");
        PlayGame(userChoice);
    });
});

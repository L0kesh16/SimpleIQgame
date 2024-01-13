
var count=0;
var color = ["red","blue","green","yellow"];
var gamepatter=[];
var st=1;

// var first=localStorage.getItem("first");
// var second=localStorage.getItem("second");
// var third=localStorage.getItem("third");
// A to Start


function go(){
   
    if(st ==1)
    {
        document.querySelector("h1").innerHTML="Level "+count;
        count++;
        st=0;
        nextsequence();
        
    }
};

// Clicking Animation and Sound

var audio;
function anime(c)
{
    document.getElementById(c).classList.add("pressed");
    var audio = new Audio("sounds/"+c+".mp3");
    audio.play();
    
    setTimeout(function()
    {
        document.getElementById(c).classList.remove("pressed");
    },100);
}
function clickanime(c)
{
document.getElementById(c).classList.add("pressed");
setTimeout(function()
    {
    document.getElementById(c).classList.remove("pressed");
    },100);
    audio = new Audio("sounds/"+c+".mp3");
    audio.play();
}

//Generation of Random Buttons 


function nextsequence(){
    rn=Math.random();
    rn=rn*4;
    rn=Math.floor(rn); 
    gamepatter.push(color[rn]);
    anime(color[rn]);  
}
var userarr= [];

//Button Clicking

function userclick(event){
    
  
    var uc =document.getElementById(event.target.id);
    ucc=uc.id;
    userarr.push(ucc);
    clickanime(ucc);
 
    if(userarr.length==count)
    {
        gamewin();
    }
}

//Checking Whether the User clicks the button on Correct Order or not

function gamewin(){
    var z=0;
  
    for(var i =0;i<count;i++)
    {
        if(userarr[i]===gamepatter[i])
        {
            z++;
        }
        else{
        userarr= [];
        document.querySelector("body").classList.add("game-over");
        setTimeout(function(){ document.querySelector("body").classList.remove("game-over");},100);
        document.querySelector("h1").innerHTML="you Lost!, Try Again 😕"
    //     if(localStorage.getItem("first")<count){
    //         localStorage.setItem("third",localStorage.getItem("second"));
    //         document.getElementById("3").innerHTML=localStorage.getItem("third");
    //         third=second;
    //         localStorage.setItem("second",localStorage.getItem("first"));
    //         document.getElementById("2").innerHTML=localStorage.getItem("second");
    //         second=first;
    //         localStorage.setItem("first",count);
    //         document.getElementById("1").innerHTML=localStorage.getItem("first");    
    //         first=count;
    //     }
    //    else if(localStorage.getItem("second")<count && count <localStorage.getItem("first")){
       
    //         localStorage.setItem("third",localStorage.getItem("second"));
    //         document.getElementById("3").innerHTML=localStorage.getItem("third");
    //         third=second;
    //         localStorage.setItem("second",count);
    //         document.getElementById("2").innerHTML=localStorage.getItem("second");
    //         second=count;
    //     }
    //     else if(localStorage.getItem("third")<count && count<localStorage.getItem("second") ){
    //         localStorage.setItem("third",count);
    //         document.getElementById("3").innerHTML=localStorage.getItem("third");
    //         third=count;
    //     }
        
        setTimeout(function(){
        location.reload();
        },1500);     
    }
    }    
    if(z==count)
    {
        userarr= [];
        st=1;
       
        document.querySelector("h1").innerHTML="You win! and press Go to continue" 
    }  
}
        
    





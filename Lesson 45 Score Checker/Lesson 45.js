function CS(){
    let Score = document.getElementById('inputValue').value;
    console.log(Score);
    
    // if(Score=0){
    //     document.getElementById("score").innerHTML= "FAILURE a big fat 0";
    //     document.getElementById("comment").innerHTML= "... u should feel ashamed of yourself";
    //     alert("a big fat 0, GET OUT OF MY SCHOOL, NOW")
    // } 
    if(Score>100||Score<1){
        alert('stop playing')


        // if(Score>=101 && Score <= 110){
        //     document.getElementById("score").innerHTML= "You gotta be joking";
        //     document.getElementById("comment").innerHTML= "im not stupid";
        // }
        // if(Score>=110){
        //     alert("Stop the CAP")
        //     document.getElementById("score").innerHTML= "bro be honest";
        //     document.getElementById("comment").innerHTML= "... really";
        // }
        // if(Score>=9999999999999999n){
        //     alert("what is this??? the IQ ur missing?")
        //     document.getElementById("score").innerHTML= "bruh";
        //     document.getElementById("comment").innerHTML= "joblessness";
        // }
        // else{
        //     document.getElementById("score").innerHTML= "You think ur smart huh, failing with a " + Score;
        //     document.getElementById("comment").innerHTML= "well ur not if u actually somehow got this score";
        // }


    }
    // else if(Score=0){
    //     document.getElementById("score").innerHTML= "FAILURE a big fat 0";
    //     document.getElementById("comment").innerHTML= "... u should feel ashamed of yourself";
    //     alert("a big fat 0, GET OUT OF MY SCHOOL, NOW")
    // } 
    else if(Score>=1 && Score<= 10){
        document.getElementById("score").innerHTML= "You got "+Score + " out of 100, like how";
        document.getElementById("comment").innerHTML= "ur a FAILURE"
        alert("drop out of school and save ur money");
    }

    else if(Score>=11 && Score <=19){
        document.getElementById("score").innerHTML= "You got "+Score;
        document.getElementById("comment").innerHTML = "just how, HOW, out of 100";
        alert("how is this even possible????");
    }
    else if(Score>= 21&& Score <=29 ){
        document.getElementById("score").innerHTML= "You got "+Score;
        document.getElementById("comment").innerHTML = "aint now way u got this low";
        alert("this is just SAD");
    }
    else if(Score>= 30&& Score <=39){
        document.getElementById("score").innerHTML= "You got "+Score;
        document.getElementById("comment").innerHTML = "u can do better than this, hopefully";
    }
    else if(Score>= 40&& Score <=49){
        document.getElementById("score").innerHTML= "You got "+Score;
        document.getElementById("comment").innerHTML= "u were probably prcastinating on not studying, didnt study and now u barely failed";
    }
    else if(Score>= 50&& Score <=59){
        document.getElementById("score").innerHTML= "You got "+Score;
        document.getElementById("comment").innerHTML= "u BARELY passed, like as thin as ice";
    }    
    else if(Score>= 60 && Score <=69){
        document.getElementById("score").innerHTML= "You got "+Score;
        document.getElementById("comment").innerHTML= "u barely passed, try harder next time";
    }    
    else if(Score>= 70&& Score <=79){
        document.getElementById("score").innerHTML= "You got "+Score;
        document.getElementById("comment").innerHTML= "ur trying, and its enough to pass";
    }    
    else if(Score>= 80&& Score <=89){
        document.getElementById("score").innerHTML= "You got "+Score;
        document.getElementById("comment").innerHTML= "not bad, not bad";
    }    
    else if(Score>= 90&& Score <=99){
        document.getElementById("score").innerHTML= "You got "+Score;
        document.getElementById("comment").innerHTML= "u got very high, nice";
    }    
    else if(Score>= 100){
        document.getElementById("score").innerHTML= "You got "+Score;
        document.getElementById("comment").innerHTML= "u really studied huh";
    }    



}
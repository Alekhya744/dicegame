//mouseclick
document.querySelector("button").addEventListener("click", function(){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    
    var firstImagesrc = "dice" + randomNumber1 + ".png";
    
    document.querySelectorAll("img")[0].setAttribute("src", firstImagesrc);
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    var secondImagesrc = "dice" + randomNumber2 + ".png";
    
    document.querySelectorAll("img")[1].setAttribute("src", secondImagesrc);
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="🚩player 1 wins!";
    }else if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML="player 2 wins!🚩";
    }else{
        document.querySelector("h1").innerHTML="🚩Draw🚩";
    }
    
    });
    
//keyboard
document.querySelector("button").addEventListener("keydown", function(event){
    if(event.key === "s") {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    
    var firstImagesrc = "dice" + randomNumber1 + ".png";
    
    document.querySelectorAll("img")[0].setAttribute("src", firstImagesrc);
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    var secondImagesrc = "dice" + randomNumber2 + ".png";
    
    document.querySelectorAll("img")[1].setAttribute("src", secondImagesrc);
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="🚩player 1 wins!";
    }else if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML="player 2 wins!🚩";
    }else{
        document.querySelector("h1").innerHTML="🚩Draw🚩";
    }
    }
    });



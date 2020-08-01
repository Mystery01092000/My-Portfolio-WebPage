var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for( var i=0; i < squares.length; i++){
    // For adding initial colors
    squares[i].style.backgroundColor = colors[i];

    //add click listner to squares
    squares[i].addEventListener("click", function(){
         //Grab color of clicked square
         var clickedColor = this.style.backgroundColor;

         //compare picked color 
         if(clickedColor === pickedColor){
             messageDisplay.textContent = "Correct! ";
             changeColors(clickedColor);
         } else{
             this.style.backgroundColor = "#232323";
             messageDisplay.textContent = "Try Again!";
         }
    });
}

function changeColors(color){
    //change color of all the squares to one
    for(var i=0 ; i < squares.length ; i++){
        
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length );
    return colors[random];
}

function generateRandomColors(num){
    //Make an array of size num
    var arr = [];
    //Add num random colors to array
    for(var i = 0 ; i < num ; i++){
        //Get random color and push into the array
        arr.push(randomColor());

    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 to 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r +", "+ g + ", " + b +")";

}
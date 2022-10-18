var current =  document.querySelector(".current"); 
var next = document.querySelector(".next"); 
console.log("current", current); 
console.log("next", next); 
var number;
var interval;
function startCounter(){
   number = parseInt(document.getElementById("number").value); 
   console.log("number", number); 
   if(isNaN(number)){
     window.alert("Please enter a number to begin");
     return;  
   }
   if(number < 1 || number > 9){
     window.alert("Please enter a number within range (0-9)"); 
     return; 
   }

   interval = setInterval(animate, 1000, interval); 
   console.log("interval", interval); 
}

function animate(){

    var currNum = parseInt(current.innerHTML); 
    var nextNum = parseInt(next.innerHTML); 
    console.log(currNum); 

    if(currNum == number){
        clearInterval(interval);
        current.innerHTML = 0; 
        next.innerHTML = 1;
        document.getElementById("number").value = ''; 
        window.alert("Counter reaches the given value");  
        return; 
    }


    next.classList.add("animate"); 
    console.log("next", next); 
    setTimeout(function(){
       next.classList.remove("animate");
       current.innerHTML = nextNum; 
       next.innerHTML = nextNum + 1;  
    }, 500); 
}

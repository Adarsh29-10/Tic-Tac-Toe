var boxes = document.querySelectorAll(".div");

var currentPlayer = 'O';
var count=0;

var result = 'waiting for result';

boxes.forEach(function(box) {
    box.addEventListener("click", function() {
        if (!box.innerText.trim()) { 
            box.innerText = currentPlayer; 
            // currentPlayer = currentPlayer === 'O' ? 'E' : 'O'; 
            
            if(currentPlayer == 'O'){
                currentPlayer = 'X';
                count++;
            }
            else{
                currentPlayer = 'O';
                count++;
            }

            

        }
        console.log(result)
    });
});


var a = document.querySelector(".a").innerText;
var b = document.querySelector(".b").innerText;
var c = document.querySelector(".c").innerText;

if(a == "O" || b == "O" || c == "O"){
    result = "win"
}

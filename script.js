
var result = document.querySelector(".gameResult");
var boxes = document.querySelectorAll(".div");

var currentPlayer = 'O';
var count=0;
var gameIsOn = true

function winner(){

    var a = document.querySelector(".a").innerText;
    var b = document.querySelector(".b").innerText;
    var c = document.querySelector(".c").innerText;
    var d = document.querySelector(".d").innerText;
    var e = document.querySelector(".e").innerText;
    var f = document.querySelector(".f").innerText;
    var g = document.querySelector(".g").innerText;
    var h = document.querySelector(".h").innerText;
    var i = document.querySelector(".i").innerText;

    if(count == 9){
        result.innerText = "Match Draw"
    }

    if(a == "O" && b ==  "O" && c == "O"){
        result.innerText = "O Win the match"
    }

    if(a == "X" && b ==  "X" && c == "X"){
        result.innerText = "X Win the match";
    }

    if(d == "O" && e ==  "O" && f == "O"){
        result.innerText =  "O Win the match";
    }

    if(d == "X" && e ==  "X" && f == "X"){
        result.innerText = "X Win the match";   
    }
    if(g == "O" && h ==  "O" && i == "O"){
        result.innerText =  "O Win the match";
    }

    if(g == "X" && h ==  "X" && i == "X"){
        result.innerText = "X Win the match";
    }

    if(a == "O" && d ==  "O" && g == "O"){
        result.innerText =  "O Win the match";
    }

    if(a == "X" && d ==  "X" && g == "X"){
        result.innerText = "X Win the match";
    }

    if(b == "O" && e ==  "O" && h == "O"){
        result.innerText =  "O Win the match";
    }

    if(b == "X" && e ==  "X" && h == "X"){
        result.innerText = "X Win the match";
    }

    if(c == "O" && f ==  "O" && i == "O"){
        result.innerText =  "O Win the match";
    }

    if(c == "X" && f ==  "X" && i == "X"){
        result.innerText = "X Win the match";
    }

    if(a == "O" && e ==  "O" && i == "O"){
        result.innerText =  "O Win the match";
    }

    if(a == "X" && e ==  "X" && i == "X"){
        result.innerText = "X Win the match";
    }

    if(c == "O" && e ==  "O" && g == "O"){
        result.innerText =  "O Win the match";
    }

    if(c == "X" && e ==  "X" && g == "X"){
        result.innerText = "X Win the match";
    }
}

boxes.forEach(function(box) {
    box.addEventListener("click", function() {
        if(result.innerText == "X Win the match" || result.innerText == "O Win the match"){
            gameIsOn = false;
        }
        if (!box.innerText.trim() && gameIsOn) { 
            box.innerText = currentPlayer; 
            // currentPlayer = currentPlayer === 'O' ? 'X' : 'O'; 
            
            if(currentPlayer == 'O'){
                currentPlayer = 'X';
                count++;
            }
            else{
                currentPlayer = 'O';
                count++;
            }
            winner();
            
            
        }
    });
});

function restart(){
    boxes.forEach(function(box){
        box.innerText = '';
        currentPlayer = "O"
        count = 0;
        result.innerText='';
        gameIsOn = true;
    })
}

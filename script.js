var boxes = document.querySelectorAll(".cell");
var player1;
var player2;
var numberOfPlayer = 1;
var box_counter = 0;
// var scoreBoard = 0;
var Player1Score_counter = 0;
var Player2Score_counter = 0;
let winCheck = false;

var select_hide = document.getElementById ("select");
var lose = document.getElementById("lose_display");
var home = document.getElementById("my_div");

function playWith(event){

	console.log("event.target.innerHTML");
	var selection = event.target.innerHTML;
	console.log(selection);
	
	if(selection === "X") {
		
		player1 = selection
		player2 = "O"
	}else{
		player1 = selection
		player2 = "X"

	}
		game.style.display = "block";
		select_hide.style.display = "none";

		win.style.display = "none";
		home.style.display = "none";


}

function backPage(){
	select_hide.style.display = "block";
	game.style.display = "none";
	win.style.display = "none";
	home.style.display = "none";

}

function playerSelection(event){
	var player_selection_id = event.target.id;
	console.log("hfhfhfh", event.target.id);
	home.style.display = "none";
	select_hide.style.display = "block";
	console.log(player_selection_id);

	if(player_selection_id === "player2Selection"){
		console.log("hello");
		numberOfPlayer = 2;
		
	}
	winStatement()
	console.log("wonnn");
console.log("Player2", numberOfPlayer);
   

}



// console.log(boxes);
Array.from(boxes).forEach(function (box) {
	box.addEventListener("click", function (event) {
		box_counter++;
		console.log(box_counter);
		console.log(event.target);
		event.target.innerHTML = player1;
		box.style = "color: black";
		console.log(numberOfPlayer);

		winStatement()
		

		if (numberOfPlayer === 1 && winCheck === false){
			console.log("We knw");
			generateRandomnumber()
			
			
		
		}
		else{
			if(player1 === "X"){
				player1 = "O"
				winStatement()
			}else{
				player1 = "X";
				winStatement()
			}
		}

		
		
		

		
		


	})
	
        
});



function generateRandomnumber() {
	
	var computerSelect = Math.floor(Math.random() * 8) + 0;
	var a = boxes[computerSelect];
	

	if (a.innerHTML === "") {
		box_counter++;
        console.log("count 1 " ,box_counter);
		a.innerHTML = player2;
		a.style = "font-size: 100px";
		a.style = "color: black";

	}

	

	else {
		console.log("error");
		if(box_counter < 9){
			generateRandomnumber();
		    return

		}
		
	}

	winStatement();
	
}

function winStatement(){
	console.log(boxes[0].innerHTML);
		
	
	if(boxes[0].innerHTML === player1 && boxes[1].innerHTML === player1 && boxes[2].innerHTML === player1){
	console.log("win");
	
	win.style.display = "block";
	select.style.display = "none";
	game.style.display = "none";
	home.style.display = "none";
	Player1Score_counter += 1;
	document.getElementById("score1").innerHTML = Player1Score_counter;
	console.log("Player1Score_counter");
	winCheck = true;
	
	
	
	
}else if(boxes[3].innerHTML === player1 && boxes[4].innerHTML === player1 && boxes[5].innerHTML === player1){
	console.log("win");
	win.style.display = "block";
	select.style.display = "none";
	game.style.display = "none";
	home.style.display = "none";
	Player1Score_counter += 1;
	document.getElementById("score1").innerHTML = Player1Score_counter;
	console.log(Player1Score_counter);
	winCheck = true;
}else if(boxes[6].innerHTML === player1 && boxes[7].innerHTML === player1 && boxes[8].innerHTML === player1){
	console.log("win");
	win.style.display = "block";
	select.style.display = "none";
	game.style.display = "none";
	home.style.display = "none";
	Player1Score_counter++;
	document.getElementById("score1").innerHTML = Player1Score_counter;
	winCheck = true;
}else if(boxes[0].innerHTML === player1 && boxes[3].innerHTML === player1 && boxes[6].innerHTML === player1){
	console.log("win");
	win.style.display = "block";
	select.style.display = "none";
	game.style.display = "none";
	home.style.display = "none";
	Player1Score_counter++;
	document.getElementById("score1").innerHTML = Player1Score_counter;
	winCheck = true;
}else if(boxes[1].innerHTML === player1 && boxes[4].innerHTML === player1 && boxes[7].innerHTML === player1){
	console.log("win");
	win.style.display = "block";
	select.style.display = "none";
	game.style.display = "none";
	home.style.display = "none";
	Player1Score_counter++;
	document.getElementById("score1").innerHTML = Player1Score_counter;
	winCheck = true;
}else if(boxes[2].innerHTML === player1 && boxes[5].innerHTML === player1 && boxes[8].innerHTML === player1){
	console.log("win");
	win.style.display = "block";
	select.style.display = "none";
	game.style.display = "none";
	home.style.display = "none";
	Player1Score_counter ++;
	document.getElementById("score1").innerHTML = Player1Score_counter;
	winCheck = true;
}else if(boxes[8].innerHTML === player1 && boxes[4].innerHTML === player1 && boxes[0].innerHTML === player1){
	console.log("win");
	win.style.display = "block";
	select.style.display = "none";
	game.style.display = "none";
	home.style.display = "none";
	Player1Score_counter++;
	document.getElementById("score1").innerHTML = Player1Score_counter;
	winCheck = true;
}else if(boxes[2].innerHTML === player1 && boxes[4].innerHTML === player1 && boxes[6].innerHTML === player1){
	console.log("win");
	win.style.display = "block";
	select.style.display = "none";
	game.style.display = "none";
	home.style.display = "none";
	Player1Score_counter++;
	document.getElementById("score1").innerHTML = Player1Score_counter;
	winCheck = true;

	// Player2 win statement
					
}else if(boxes[0].innerHTML === player2 && boxes[1].innerHTML === player2 && boxes[2].innerHTML === player2){
	console.log(" computer wins");
	lose.style.display = "block";
	win.style.display = "none";
	select.style.display = "none";
	game.style.display = "none";
	home.style.display = "none";
	Player2Score_counter++;
	document.getElementById("score2").innerHTML = Player2Score_counter;
}else if(boxes[3].innerHTML === player2 && boxes[4].innerHTML === player2 && boxes[5].innerHTML === player2){
	console.log(" computer wins");
	lose.style.display = "block";
	win.style.display = "none";
	select.style.display = "none";
	game.style.display = "none"
	home.style.display = "none";
	home.style.display = "none";
	Player2Score_counter++;
	document.getElementById("score2").innerHTML = Player2Score_counter;
}else if(boxes[6].innerHTML === player2 && boxes[7].innerHTML === player2 && boxes[8].innerHTML === player2){
	console.log(" computer wins");
	lose.style.display = "block";
	win.style.display = "none";
	select.style.display = "none";
	game.style.display = "none";
	home.style.display = "none";
	Player2Score_counter++;
	document.getElementById("score2").innerHTML = Player2Score_counter;
}else if(boxes[0].innerHTML === player2 && boxes[3].innerHTML === player2 && boxes[6].innerHTML === player2){
	console.log(" computer wins");
	lose.style.display = "block";
	win.style.display = "none";
	select.style.display = "none";
	game.style.display = "none"
	home.style.display = "none";
	Player2Score_counter++;
	document.getElementById("score2").innerHTML = Player2Score_counter;
}else if(boxes[1].innerHTML === player2 && boxes[4].innerHTML === player2 && boxes[7].innerHTML === player2){
	console.log(" computer wins");
	lose.style.display = "block";
	win.style.display = "none";
	select.style.display = "none";
	game.style.display = "none";
	home.style.display = "none";
	home.style.display = "none";
	Player2Score ++;
}else if(boxes[2].innerHTML === player2 && boxes[5].innerHTML === player2 && boxes[8].innerHTML === player2){
	console.log(" computer wins");
	lose.style.display = "block";
	win.style.display = "none";
	select.style.display = "none";
	game.style.display = "none";
	home.style.display = "none";
	Player2Score_counter++;
	document.getElementById("score2").innerHTML = Player2Score_counter;
}else if(boxes[0].innerHTML === player2 && boxes[4].innerHTML === player2 && boxes[8].innerHTML === player2){
	console.log(" computer wins");
	lose.style.display = "block";
	win.style.display = "none";
	select.style.display = "none";
	game.style.display = "none";
	home.style.display = "none";
	Player2Score_counter++;
	document.getElementById("score2").innerHTML = Player2Score_counter;
}else if(boxes[2].innerHTML === player2 && boxes[4].innerHTML === player2 && boxes[6].innerHTML === player2){
	console.log(" computer wins");
	lose.style.display = "block";
	win.style.display = "none";
	select.style.display = "none";
	game.style.display = "none";
	home.style.display = "none";
	Player2Score_counter++;
	document.getElementById("score2").innerHTML = Player2Score_counter;

}else{
	var tie = 0;
	if(tie < boxes.length){
		for(i = 0; i < boxes.length; i++) {
			if(boxes[i].innerHTML != ""){
				tie += 1;
			}
			
		}

	}
	if(tie === 9){
		alert("Draw");
		console.log("draw");

		playAgain()
	}
	
}
}


function playAgain(){
	box_counter = 0;
	win.style.display = "none";
	lose.style.display = "none";
	game.style.display = "block";
	for(i = 0; i < boxes.length; i++){
		boxes[i].innerHTML = "";
	}

}

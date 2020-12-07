var player1;
var player2;
var select_hide = document.getElementById ("select");

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


}

function backPage(){
	select_hide.style.display = "block";
	game.style.display = "none";
 
	win.style.display = "none";


	

}


var boxes = document.querySelectorAll(".cell");
// console.log(boxes);
Array.from(boxes).forEach(function (box) {
	box.addEventListener("click", function (event) {
		console.log(event.target);
		event.target.innerHTML = player1;
		box.style = "color: black";

		generateRandomnumber();

		winner_X();
		winner_O();


	})
});



function generateRandomnumber() {
	var computerSelect = Math.floor(Math.random() * 8) + 0;
	var a = boxes[computerSelect];

	if (a.innerHTML === "") {
		a.innerHTML = player2;
		a.style = "font-size: 100px";
		a.style = "color: black";

	}


	else {
		generateRandomnumber();
		return
	}

	winner_X();
	winner_O();
}

function winner_X(){
	console.log(boxes[0].innerHTML);

	
		
	
	if(boxes[0].innerHTML === player1 && boxes[1].innerHTML === player1 && boxes[2].innerHTML === player1){
	console.log("win");
	win.style.display = "block";
	select.style.display = "none";
	game.style.display = "none";
	
	
}else if(boxes[3].innerHTML === player1 && boxes[4].innerHTML === player1 && boxes[5].innerHTML === player1){
	console.log("win");
	win.style.display = "block";
	select.style.display = "none";
	game.style.display = "none";
}else if(boxes[6].innerHTML === player1 && boxes[7].innerHTML === player1 && boxes[8].innerHTML === player1){
	console.log("win");
	win.style.display = "block";
	select.style.display = "none";
	game.style.display = "none";
}else if(boxes[0].innerHTML === player1 && boxes[3].innerHTML === player1 && boxes[6].innerHTML === player1){
	console.log("win");
	win.style.display = "block";
	select.style.display = "none";
	game.style.display = "none";
}else if(boxes[1].innerHTML === player1 && boxes[4].innerHTML === player1 && boxes[7].innerHTML === player1){
	console.log("win");
	win.style.display = "block";
	select.style.display = "none";
	game.style.display = "none";
}else if(boxes[2].innerHTML === player1 && boxes[5].innerHTML === player1 && boxes[8].innerHTML === player1){
	console.log("win");
	win.style.display = "block";
	select.style.display = "none";
	game.style.display = "none";
}else if(boxes[0].innerHTML === player1 && boxes[4].innerHTML === player1 && boxes[8].innerHTML === player1){
	console.log("win");
	win.style.display = "block";
	select.style.display = "none";
	game.style.display = "none";
}else if(boxes[2].innerHTML === player1 && boxes[4].innerHTML === player1 && boxes[6].innerHTML === player1){
	console.log("win");
	win.style.display = "block";
	select.style.display = "none";
	game.style.display = "none";
	
}
}
function winner_O(){

	console.log(boxes[0].innerHTML);
	
	if(boxes[0].innerHTML === player2 && boxes[1].innerHTML === player2 && boxes[2].innerHTML === player2){
	console.log(" computer wins");
	alert("computer wins");
}else if(boxes[3].innerHTML === player2 && boxes[4].innerHTML === player2 && boxes[5].innerHTML === player2){
	console.log(" computer wins");
	alert("computer wins");
}else if(boxes[6].innerHTML === player2 && boxes[7].innerHTML === player2 && boxes[8].innerHTML === player2){
	console.log(" computer wins");
	alert("computer wins");
}else if(boxes[0].innerHTML === player2 && boxes[3].innerHTML === player2 && boxes[6].innerHTML === player2){
	console.log(" computer wins");
	alert("computer wins");
}else if(boxes[1].innerHTML === player2 && boxes[4].innerHTML === player2 && boxes[7].innerHTML === player2){
	console.log(" computer wins");
	alert("computer wins");
}else if(boxes[2].innerHTML === player2 && boxes[5].innerHTML === player2 && boxes[8].innerHTML === player2){
	console.log(" computer wins");
	alert("computer wins");
}else if(boxes[0].innerHTML === player2 && boxes[4].innerHTML === player2 && boxes[8].innerHTML === player2){
	console.log(" computer wins");
	alert("computer wins");
}else if(boxes[2].innerHTML === player2 && boxes[4].innerHTML === player2 && boxes[6].innerHTML === player2){
	console.log(" computer wins");
	alert("computer wins");
}
}

function playAgain(){
	win.style.display = "none";
	game.style.display = "block";

}

function restart(){
	win.style.display = "none";
	select_hide.style.display = "block";

}



var winningMessage;
var drawMessage;

var winningConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],

];

function Result() {
	
	for (var i = 0; i < winningConditions.length; i++) {
		var win = winningConditions[i];

		
		var e = win[0];
		var b = win[1];
		var c = win[2];
		if (e === b && b === c) {
			console.log(Win);
			alert("You Win");
			break;
		}
	}
			
	// 	}else if (e === b && b === c) {
	// 		roundWon = true;
	// 		alert("You Win");
	// 		break;
	// 	}
	// }if (roundWon) {
	// 	statusDisplay.innerHTML = winningMessage();
	// 	gameActive = true;
	// 	return;
	// }
	// let roundDraw = !game.gameState.includes("");
	// if (roundWon) {
	// 	statusDisplay.innerHTML = drawMessage();
	// 	gameActive = false;
	// 	return;
	// }

}




var gameField = document.querySelectorAll(".cell");
Array.from(gameField).forEach(function(j){
	j.addEventListener("click", function(l){
		j.innerHTML = "X";
		j.style = "font-size: 100px";
		j.style = "color: black";
		
		generateRandomnumber();
		
		
	})
});

function generateRandomnumber() {
	var computerSelect = Math.floor(Math.random()*8)+0;
	var a = gameField[computerSelect];
	
	if(a.innerHTML === ""){
		a.innerHTML = "O";
		a.style = "font-size: 100px";
		a.style = "color: black";
		
	}


	else{
		generateRandomnumber();
		return
	}
} 



function results(){
	if(box0 == box1 == box2){
		document.getElementById("winningMessage").innerHTML = "You Win"
		console.log(win);
	}
// 	}else if(box3 === box4 === box5){
// 		document.getElementById("winningMessage").innerHTML = "You Win"

// }else if(box6 === box7 === box8){
// 	document.getElementById("winningMessage").innerHTML = "You Win"
// }else if(box6 === box4 === box2){
// 	document.getElementById("winningMessage").innerHTML = "You Win"
// }else if(box0 === box3 === box6){
// 	document.getElementById("winningMessage").innerHTML = "You Win"
// }else if(box2 === box5 === box8){
// 	document.getElementById("winningMessage").innerHTML = "You Win"
// }else if(box0 === box4 === box8){
// 	document.getElementById("winningMessage").innerHTML = "You Win"
// }else if(box1 === box4 === box7){
// 	document.getElementById("winningMessage").innerHTML = "You Win"
// }
}
results();




function restart(){
	var restart = document.querySelectorAll(".cell");
	location.reload();
	
}

 
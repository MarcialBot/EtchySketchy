const grid = document.querySelector('#grid');
const resetButton = document.querySelector('#reset');
const randomButton = document.querySelector('#random');
let randomColor = "";
let input = 16;

// creates Grid
function createGrid () {
	for (let i = 0; i < input; i++) {
		grid.innerHTML += '<div class="row"></div>';
	}
	const rows = document.querySelectorAll('.row');
	rows.forEach((row) => {
		for (let j = 0; j < input; j++) {
			row.innerHTML += '<div class="grid-cell" onmouseover="colorise(this)"></div>';
			console.log("Grid cell created");
		}
	});	
}

// grid-cells change color on mouse hover
function colorise(x) {
	if (randomColor != "") {
		x.classList.remove('black');
		x.style.background = randomColor;
	} else {
		x.classList.add('black');
	}
}

// randomize colors
randomButton.addEventListener('click', function randomRGBA() {
	var color = ['#F64747','#663399','#4183D7','#22313F','#9A12B3','#03A678']; /* Use hex colors. They're pretty */
	randomColor = color[Math.floor(Math.random()*color.length)];/* Choose random color from the array: color */
	//document.getElementByClass('btn').style.color = color; CAN'T CHANGE BUTTON COLORS LOL
	 
});

// clearing and getting input
resetButton.addEventListener('click', function getInput() {
  input = prompt("Please, input new size of board (1-64)", 14);
  grid.innerHTML = "";
  if (input <= 64) {
  	createGrid();
  } else {
  	createGrid(16);
  } 
});

createGrid();
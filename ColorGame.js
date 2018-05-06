let squaresNum = 6;
let colorPicker = randomColorGenerator(squaresNum);
const squares = document.querySelectorAll(".square");
let titleColor = document.querySelector("h1 span");
let pickedColor = choosingRandColor();
const message = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#resetButton");
const easyMode = document.querySelector("#easyMode");
const hardMode = document.querySelector("#hardMode");

titleColor.textContent = pickedColor;

easyMode.addEventListener("click", function () {
	this.classList.add("active");
	hardMode.classList.remove("active");
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "Change colors";
	squaresNum = 3;

	// losujemy tylko 3 kolory
	colorPicker = randomColorGenerator(squaresNum);

	// picked kolor z tych 3
	pickedColor = choosingRandColor();
	// wkładamy je w kwadraty
	for (let i = 0; i < squares.length; i++) {
		if (i < 3) {
			squares[i].style.backgroundColor = colorPicker[i];
		} else {
			// 3 ostatnie kwadraty - display: none
			squares[i].style.display = "none";
		}
	}
	// wrzucamy do góry i porównujemy
	titleColor.textContent = pickedColor;

});
hardMode.addEventListener("click", function () {
	this.classList.add("active");
	easyMode.classList.remove("active");
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "Change colors";
	squaresNum = 6;
	colorPicker = randomColorGenerator(squaresNum);
	pickedColor = choosingRandColor();
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colorPicker[i];
		squares[i].style.display = "block";
		titleColor.textContent = pickedColor;
	}
});

resetButton.addEventListener("click", function () {
	// losujemy nowe kolory
	colorPicker = randomColorGenerator(squaresNum);
	// wkładamy kolory w kwadraty
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colorPicker[i];
	}
	// wybieramy kolor do porównania
	pickedColor = choosingRandColor();
	// wrzucamy go w H1
	titleColor.textContent = pickedColor;
	//resetujemy Span 
	message.textContent = "";
	//resetujemy background h1
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "Change colors";
});



for (let i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colorPicker[i];
	squares[i].addEventListener("click", function () {
		let clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			changingAllSquares(pickedColor);
			h1.style.backgroundColor = pickedColor;
			message.textContent = "Good Job!";
			resetButton.textContent = "Play Again ?";
		} else {
			this.style.backgroundColor = "#232323";
			message.textContent = "Wrong!";
		}
	});

}

function changingAllSquares(color) {
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function choosingRandColor() {
	let randomNum = Math.floor(Math.random() * colorPicker.length);
	return colorPicker[randomNum];

}

function randomColorGenerator(num) {
	let arr = [];
	for (i = 0; i < num; i++) {
		arr.push(randomRgb());
	}
	return arr;

}

function randomRgb() {
	r = Math.floor(Math.random() * 256);
	g = Math.floor(Math.random() * 256);
	b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
}

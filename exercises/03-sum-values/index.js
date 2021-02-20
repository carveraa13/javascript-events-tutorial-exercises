window.calculateSumListener = function calculateSumListener() {
	//Return the value of the input #firstNumber
	let stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	let stringB = document.getElementById("secondNumber").value;
	let sum = parseInt(stringA) + parseInt(stringB);
	//your code goes here
	document.getElementById("resultNumber").value = sum;
};

var buttonArray = [1, 'add', 2, 'multiply', 3, 'divide', 6, 'add', 7, 'subtract', 4, 'modulus', 4, 'multiply', 2];

var calculate = function(buttonArray) {
	var newNumber;
	
	var processOperation = function(newNumber) {
		buttonArray[i - 1] = newNumber;
		buttonArray.splice(i, 2);
		i--;
	};
	
	for (var i = 0; i < buttonArray.length; i++) {
		switch (buttonArray[i]) {
			case 'multiply':
				newNumber = buttonArray[i - 1] * buttonArray[i + 1];
				processOperation(newNumber);
				break;
			case 'divide':
				newNumber = buttonArray[i - 1] / buttonArray[i + 1];
				processOperation(newNumber);
				break;
			case 'modulus':
				newNumber = buttonArray[i - 1] % buttonArray[i + 1];
				processOperation(newNumber);
				break;
		}
	}
	
	for (i = 0; i < buttonArray.length; i++) {
		switch (buttonArray[i]) {
			case 'add':
				newNumber = buttonArray[i - 1] + buttonArray[i + 1];
				processOperation(newNumber);
				break;
			case 'subtract':
				newNumber = buttonArray[i - 1] - buttonArray[i + 1];
				processOperation(newNumber);
				break;
		}
	}
	
	return buttonArray[0];
};

console.log(calculate(buttonArray));
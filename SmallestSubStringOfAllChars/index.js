function smallestSubstring(chars, string) {
	var found = false;
	var smallest = string;
	var validChars = {};
	for (var i=0; i < chars.length; i++) {
		validChars[chars[i]] = true;
	}
	var repeatIndex = 0;
	var start = 0, end = string.length;
}
function PossibleSubString(start, end) {
	this.start = start;
	this.end = end;
	this.length = end - start;
}

function getShortestUniqueSubstring(arr, str) {
	var charHash = {};
	for (var i = 0; i<arr.length; i++) {
		charHash[arr[i]] = true;
	}
	var shortest = null;
	for (var i = 0; i<str.length; i++) {
		var foundChars = {};
		var foundCharsCount = 0;
		for (var j=i; j<str.length; j++) {
			var c = str.charAt(j);
			if (charHash[c] && !foundChars[c]) {
				foundChars[c] = true;
				foundCharsCount++;
			}
			if (foundCharsCount === arr.length) {
				var current = new PossibleSubString(i, j+1);
				if (shortest === null || current.length < shortest.length) {
					shortest = current;
				}
				break;
			}
		}
	}
	if (shortest === null) {
		return "";
	} else {
		return str.substring(shortest.start, shortest.end);
	}
}

function getShortestUniqueSubstringFast(arr, str) {
	let charHash = {};
	for (let i = 0; i<arr.length; i++) {
		charHash[arr[i]] = true;
	}
	let shortest = null;
	let foundChars = {};
	let foundCharsArray = [];
	for (let i = 0; i<str.length; i++) {
		let startIndex = i;
		if (foundCharsArray.length > 0) {
			let c = foundCharsArray[0];
			startIndex = foundChars[c];
		}
		while (foundCharsArray.length < arr.length &&
			i<str.length) {
			let c = str.charAt(i);
			if (charHash[c]) {
				if (!foundChars.hasOwnProperty(c)) {
					foundCharsArray.push(c);
				}
				foundChars[c] = i;
			}
			i++;
			if (foundCharsArray.length > 0 &&
				c===foundCharsArray[0]) {
				foundCharsArray.push(c);
				foundCharsArray.shift(1);
				break;
			}
		}
		if (foundCharsArray.length >= arr.length) {
			let current = new PossibleSubString(startIndex, i);
			if (shortest === null || current.length < shortest.length) {
				shortest = current;
			}
			let firstChar = foundCharsArray.shift(1);
			delete foundChars[firstChar];
		}
		i--;
	}
	if (shortest === null) {
		return "";
	} else {
		return str.substring(shortest.start, shortest.end);
	}
}







/****
xyxyzy



  x y y z y y z y x
x 1 0 0 0 0 0 0 0 1
y 0 1 1 0 1 1 0 1 0
z 0 0 0 1 0 0 1 0 0


***/

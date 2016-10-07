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

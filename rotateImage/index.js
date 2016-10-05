function rotateImage90clockwise(image, width) {
	var output = [];
	for (var x=0; x<width; x++) {
		for (var y=0; y<width; y++) {
			var sourceIndex = getCoordinateOffset(width, x, y);
			var outputIndex = getCoordinateOffset(width, width - 1 - y, x);
			output[outputIndex] = image[sourceIndex];
		}
	}
	return output;
}

function getCoordinateOffset(width, x, y) {
	return x + y * width;
}

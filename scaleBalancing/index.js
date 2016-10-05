function scaleBalancing(text) {
}

function findNextClosestValue(a, n) {
    var iMin = 0,
    	iMax = a.length -1,
    	iMid = 0;
    while (iMin <= iMax) {
        iMid = Math.floor((iMax - iMin)/2)+iMin;
	if (a[iMid] === n) {
    		return iMid;
	} else if (n<a[iMid]) {
            iMax = iMid -1;
        } else {
            iMin = iMid +1;
        }
    }
    if (n>a[iMid]) {
	    return iMid;
    } else {
	    return iMid -1;
    }
}

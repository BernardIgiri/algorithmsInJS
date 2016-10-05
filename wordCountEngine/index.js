function wordCountEngine(text) {
	var counts = {};
	var words = text.replace(/[^A-Za-z ]/g,'').split(' ');
	for (var i=0; i<words.length; i++) {
		var w=words[i];
		if (counts.hasOwnProperty(w)) {
			counts[w]++;
		} else {
			counts[w]=1;
		}
	}
	var sorted = [];
	for (var w in counts) {
		sorted.push({w:w,c:counts[w]});
	}
	sorted.sort(function (a,b){ return b.c - a.c; });
	var out = {};
	for (var i=0;i<sorted.length;i++) {
		var e = sorted[i];
		out[e.w] = e.c;
	}
	return out;
}

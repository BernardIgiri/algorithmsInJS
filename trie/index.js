function TrieNode() {
	this.children = {};
	this.isEnd = false;
}

function buildTrieTree(words) {
	var root = new TrieNode();
	for (var i=0; i<words.length; i++) {
		addNode(words[i].split(""), root);
	}
	function addNode(word, node) {
		var c = word.shift(1);
		if (!node.children.hasOwnProperty(c)) {
			node.children[c] = new TrieNode();
		}
		if (word.length < 1) {
			node.children[c].isEnd = true;
		} else {
			addNode(word, node.children[c]);
		}
	}
	return root;
}

function autocomplete(fragment, tree) {
	return search(fragment, 0, tree);
	function search(word, index, node) {
		if (index < word.length) {
			var c = word.charAt(index);
			if (node.children.hasOwnProperty(c)) {
				return search(word, index + 1, node.children[c]);
			} else {
				return [];
			}
		} else {
			var results = [];
			if (node.isEnd) {
				results.push(word);
			}
			for (var c in node.children) {
				results = results.concat(search(word + c, index +1, node.children[c]));
			}
			return results;
		}
	}
}
/*
cup
cop
corn

                 c
           u          o
          p         p   r
	                  n



*/

var words = [
	"apple",
	"bannana",
	"banner",
	"bandana",
	"band",
	"boat",
	"barbie",
	"biscuit",
	"orange",
	"car",
	"cob",
	"cop",
	"marble"
];

var trieTree = buildTrieTree(words);

console.log(trieTree);

console.log(autocomplete("ba", trieTree));

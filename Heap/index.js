function BinaryHeap() {
	this.heap = [];
	this.d = 2;
}

BinaryHeap.prototype.empty() {
	return this.heap.length < 1;
}

BinaryHeap.prototype.clear() {
	this.heap = [];
}

BinaryHeap.prototype.parent(i) {
	return (i - 1)/this.d;
}

BinaryHeap.prototype.kthChild(i, k) {
	return d * i + k;
}

BinaryHeap.prototype.insert(x) {
	this.heap.push(x);
	this.heapifyUp(this.heap.length - 1);
}

BinaryHeap.prototype.findMin() {
	return this.heap[o];
}

BinaryHeap.prototype.deleteMin() {
	return this.heap.shift();
}

BinaryHeap.prototype.delete(index) {
	var item = this.heap.splice(index, 1)[0];
	this.heapifyDown(index);
	return item;
}

BinaryHeap.prototype.heapifyUp(index) {
	var tmp = this.heap[index];
	while (index > 0 && tmp < heap[this.parent(index)]) {
		var parentIndex = this.parent(index);
		this.heap[index] = this.heap[parentIndex];
		index = parentIndex;
	}
	this.heap[index] = tmp;
}

BinaryHeap.prototype.heapifyDown(index) {
	var child, tmp = this.heap[index];
	while (this.kthChild(index, 1) < this.heap.length) {
		child = this.minChild(index);
		if (this.heap[child] < tmp) {
			this.heap[index] = this.heap[child];
		} else {
			break;
		}
		index = child;
	}
	this.heap[index] = tmp;
}

BinaryHeap.prototype.minChild(index) {
	var bestChild = this.kthChild(index, 1);
	var k = 2;
	var pos = this.kthChild(index, k);
	while ((k<=d) && (pos<this.heap.length)) {
		if (this.heap[pos] < this.heap[bestChild]) {
			bestChild = pos;
		}
		pos = this.kthChild(index, k++);
	}
	return bestChild;
}

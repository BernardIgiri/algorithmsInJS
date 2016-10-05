function displaySolution(getAll, n) {
	var solver = getAll === true ? solveNQueen : solveNQueenOneSolution;
	var solutions = solver(parseInt(n));
	return getSolutionsText(n, solutions);
}

function getSolutionsText(n, solutions) {
	var output = " " + n + " Queens on a " + n + "x" + n + " board.\n";
	var prefix = "No solutions for";
	for (var s=0; s<solutions.length; s++) {
		prefix = "Solutions for";
		positions = solutions[s];
		var grid = [];
		for (var r=0; r<n; r++) {
			grid[r]=[];
			for (var c=0; c<n; c++) {
				grid[r][c] = "O";
			}
		}
		for (var i=0; i<positions.length; i++) {
			var p = positions[i];
			grid[p.row][p.col]="X";
		}
		var sout = "";
		for (var r=0;r<n;r++) {
			sout+=grid[r].join("")+"\n";
		}
		output += "Solution #" + (s+1) + "\n" + sout;
	}
	return prefix + output;
}

function solveNQueen(n) {
	var solutions = [];
	var currentSolution = [];
	function getSolution(row) {
		if (n === row) {
			solutions.push(currentSolution);
			currentSolution = currentSolution.slice(0);
			return;
		}
		for (var col = 0; col<n; col++) {
			var foundSafe = true;
			for (var placedQueen = 0; placedQueen < row; placedQueen++) {
				var p = currentSolution[placedQueen];
				if (p.col === col ||
					(p.row - p.col) === (row-col) ||
					(p.row + p.col) === (row+col)) {
					foundSafe = false;
					break;
				}
			}
			if (foundSafe) {
				currentSolution[row] = {
					row: row,
					col: col,
				};
				getSolution(row + 1);
			}
		}
	}
	getSolution(0);
	return solutions;
}

function solveNQueenOneSolution(n) {
	var positions = [];
	function solveNQueenOneSolutionUtil(row) {
		if (n === row) {
			return true;
		}
		for (var col = 0; col < n; col++) {
			var foundSafe = true;
			for (var queen =0; queen < row; queen++) {
				var p = positions[queen];
				if (p.col === col ||
					(p.row - p.col) === (row-col) ||
					(p.row + p.col) === (row+col)) {
					foundSafe = false;
					break;
				}
			}
			if (foundSafe) {
				positions[row] = {
					row: row,
					col: col,
				};
				if (solveNQueenOneSolutionUtil(row + 1)) {
					return true;
				}
			}
		}
		return false;
	}
	solveNQueenOneSolutionUtil(0);
	return [positions];
}

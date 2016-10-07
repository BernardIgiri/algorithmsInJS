function awardBudgetCuts(grants, budget) {
	var partialSums = [], total = 0;
	for (var i=0; i<grants.length; i++) {
		total+= grants[i];
		partialSums[i] = total;
	}
	var grantIndex = grants.length -1;
	var previousIndex = grantIndex;
	var cap = grants[grantIndex];
	var proposedTotal = total;
	while (proposedTotal > budget) {
		var leftSum = partialSums[grantIndex-1];
		var remainingGrants = grants.length - grantIndex;
		if ((budget - leftSum) >= grants[grantIndex]) {
			cap = Math.floor((budget - leftSum)/remainingGrants);
			proposedTotal = cap * remainingGrants + leftSum;
			previousIndex = grantIndex;
		}
		grantIndex--;
		if (grantIndex < 0) {
			cap = Math.floor(budget/grants.length);
			break;
		}
	}
	return cap;
}

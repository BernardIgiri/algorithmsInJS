function awardBudgetCuts(grants, budget) {
	var partialSums = [], total = 0;
	for (var i=0; i<grants.length; i++) {
		total+= grants[i];
		partialSums[i] = total;
	}
	var grantIndex = grants.length -1;
	var cap = grants[grantIndex];
	var proposedTotal = total;
	while (proposedTotal > budget) {
		var leftSum = partialSums[grantIndex-1];
		var remainingGrants = grants.length - grantIndex;
		var currentGrant = grants[grantIndex];
		var nextGrant = grants[grantIndex-1];
		if ((budget - leftSum) >= currentGrant - nextGrant) {
			cap = Math.floor((budget - leftSum)/remainingGrants);
			proposedTotal = cap * remainingGrants + leftSum;
		}
		grantIndex--;
		if (grantIndex === 0) {
			cap = Math.floor(budget/grants.length);
			break;
		}
	}
	return cap;
}

// 170
// 100

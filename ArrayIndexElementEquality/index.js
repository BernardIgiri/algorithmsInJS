function arrayIndexElementEquality(array) {
   var iMin = 0, iMax = array.length -1;
   while (iMin <= iMax) {
      var iMid = Math.floor((iMax - iMin)/2 + iMin);
      var value = array[iMid];
      var left = Math.abs(array[iMin] - iMin);
      var right = Math.abs(array[iMax] - iMax);
      if (value === iMid) {
         return iMid;
      } else if (left > right) {
         iMin = iMid + 1;
      } else {
         iMax = iMid -1;
      }
   }
   return -1;
}

module.exports = function longestConsecutiveLength(array) {
	if (array.length == 0) {
        return 0;
    }
 
    var tmpArr = [];
    var max = 1;
 
    for (var i=0; i<array.length; i++)
        tmpArr.push(array[i]);
 
    for (var i=0; i<array.length; i++) {
        var left = array[i] - 1;
        var right = array[i] + 1;
        var count = 1;
 
        while (tmpArr.indexOf(left) != -1) {
            count++;
            tmpArr.splice(tmpArr.indexOf(left), 1);
            left--;
        }
 
        while (tmpArr.indexOf(right) != -1) {
            count++;
            tmpArr.splice(tmpArr.indexOf(right), 1);
            right++;
        }
 
        max = Math.max(count, max);
    }
 
    return max;
}

module.exports = function longestConsecutiveLength(array) {
	if (array.length == 0) {
        return 0;
    }
 
    var set = [];
    var max = 1;
 
    for (var i=0; i<array.length; i++)
        set.push(array[i]);
 
    for (var i=0; i<array.length; i++) {
        var left = array[i] - 1;
        var right = array[i] + 1;
        var count = 1;
 
        while (set.indexOf(left) != -1) {
            count++;
            set.splice(set.indexOf(left), 1);
            left--;
        }
 
        while (set.indexOf(right) != -1) {
            count++;
            set.splice(set.indexOf(right), 1);
            right++;
        }
 
        max = Math.max(count, max);
    }
 
    return max;
}

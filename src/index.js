module.exports = function longestConsecutiveLength(array) {
    var sequence = 2;
    var sum = 1;

    if (array.length === 0) {
        return 0;
    }else if (array.length === 1) {
        return 1;        
    }else {
        array.sort(function (a, b) {
            return a - b;
        });

        for (var i = 0; i < array.length; i++) {
            if (array[i] === array[i+1]-1) {
                sum++;
            }else {
                if (sum > sequence) {
                    sequence = sum;
                    sum = 0;
                }
            }
        }        
    }

    return sequence;  
}

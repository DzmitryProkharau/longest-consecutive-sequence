module.exports = function longestConsecutiveLength(array) {
    if (array.length === 0) {
        return 0;
    }else if (array.length === 1) {
        return 1;        
    }
    array.sort(function (a, b) {
        return a - b;        
    });

    var step = 1;
    var tempSeq = 1;
    var sequence = 2;   

    for (var i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1] - step) {
            tempSeq++;
        }else {
            if (tempSeq > sequence) sequence = tempSeq;
            tempSeq = 2;
            step = array[i + 1] - array[i];
        }
    }

    return sequence;
}

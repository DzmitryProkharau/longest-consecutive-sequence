module.exports = function longestConsecutiveLength(array) {
  if (array.length === 0) {
      return 0;
  }
  array.sort(function (a, b) {
      return a - b;
  });

  var sequence = 1;
  var tmpSequence = 1;

  for (var i = 1; i < array.length; i++) {
      if (array[i] !== array[i - 1]) {
          if (array[i] === array[i - 1] + 1) {
            tmpSequence += 1;
          }else {
            sequence = Math.max(sequence, tmpSequence);
            tmpSequence = 1;
          }
      }
  }

  return Math.max(sequence, tmpSequence);
}

var gimme = function (inputArray) {
  var ar = [];
  for(var i = 0; i < 3; i++){
    ar[i] = inputArray[i];  
  }
  ar.sort(function(a, b) {
    return a - b;
  });
  return inputArray.indexOf(ar[0])
};

console.log(gimme([5, 10, 14]));

function squareDigits(num){
  var resultat = '';
  var result = String(num);
  for(i = 0; i < result.length; i++){
    resultic = String((Number(result.charAt(i)))**2);
    resultat += resultic;
  }
  return Number(resultat);
}

console.log(squareDigits(3234));
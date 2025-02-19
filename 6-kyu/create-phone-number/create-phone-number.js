function createPhoneNumber(numbers){
  var str = '(';
  var i = 0;
  while (i < numbers.length)
    {
      str += numbers[i];
      if (i == 2)
        str += ") ";
      else if (i == 5)
        str += "-";
      i ++;
    }
  return str;
}
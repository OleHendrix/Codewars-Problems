function openOrSenior(data){
  var out = [];
  for (let i = 0; i < data.length; i ++)
    {
      if (data[i][0] >= 55 && data[i][1] > 7)
        out[i] = 'Senior';
      else
        out[i] = 'Open';
    }
  return (out);
}
function humanReadable (seconds)
{
  const arr = [0, 0, 0];
  for (let i = seconds; i > 0; i --)
    {
      arr[2]++;
      if (arr[2] > 59)
      {
        arr[1]++;
        arr[2] = 0;
      }
      if (arr[1] > 59)
        {
          arr[0]++;
          arr[1] = 0;
        }
      if (arr[0] > 99)
          return ('99:59:59');
    }
  for (let i = 0; i < arr.length; i ++)
      arr[i] < 10 ? arr[i] = '0' + arr[i].toString() : arr[i] = arr[i].toString();
  return (arr.join(':'));
}
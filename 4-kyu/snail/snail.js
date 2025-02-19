function snail(arr)
{
  if (arr.length === 1 && arr[0].length === 1)
      return [arr[0][0]]; // Retourneer het enige element als een array
  let endx = arr[0].length - 1;
  let endy = arr.length - 1;
  let newarr = [];
  let i = 0, starti = 0, j = 0, startj = 0;
​
  while (endx > (endx / 2) && endy > (endy / 2))
    {
      i = starti;
      j = startj;
      while (i < endx)
        {
          newarr.push(arr[j][i]);
          i ++;
        }
      while (j < endy)
        {
          newarr.push(arr[j][i]);
          j ++;
        }
      while (i > starti)
        {
          newarr.push(arr[j][i]);
          i --;
        }
      while (j > startj)
        {
          newarr.push(arr[j][i]);
          j --;
        }
      starti++, startj++, endx--, endy--;
      if (starti === endx && startj === endy)
        newarr.push(arr[startj][starti]);
    }
  return (newarr);
}
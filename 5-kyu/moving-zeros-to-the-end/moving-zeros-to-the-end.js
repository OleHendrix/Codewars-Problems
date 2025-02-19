function moveZeros(arr)
{
  for (let i = 0; i < arr.length; i ++)
    {
      for (let i = 0; i < arr.length - 1; i ++)
        {
          if (arr[i] === 0)
            {
              const temp = arr[i + 1];
              arr[i + 1] = arr[i];
              arr[i] = temp;
            }
        }
    }
  return arr;
}
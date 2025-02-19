function spinWords(string)
{
  const words = string.split(' ');
  for (var i = 0; i < words.length; i ++)
    {
      if (words[i].length >= 5)
          words[i] = words[i].split('').reverse().join('');
    }
  return (words.join(' '));
}
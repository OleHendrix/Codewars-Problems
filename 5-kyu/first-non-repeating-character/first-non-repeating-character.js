function firstNonRepeatingLetter(s)
{
  let chars = '';
  for (let i = 0; i < s.length; i++)
    {
      let repeat = false;
      for (let j = i + 1; j < s.length; j ++)
        {
          if (s[i] === s[j] || s[i].toUpperCase() === s[j] || s[i] === s[j].toUpperCase())
            repeat = true;
        }
      if (!repeat && !chars.includes(s[i]))
        return (s[i]);
      chars += s[i];
    }
  return "";
}
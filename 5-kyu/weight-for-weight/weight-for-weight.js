function orderWeight(strng)
{
  const arr = strng.split(" ");
  arr.sort((a, b) => {
  const anum = a.split("").map(Number).reduce((acc, cum) => acc += cum, 0);
  const bnum = b.split("").map(Number).reduce((acc, cum) => acc += cum, 0);
    if (anum === bnum)
      return a.localeCompare(b);
    else
      return (anum - bnum);
    }
  );
  return arr.join(" ");
}
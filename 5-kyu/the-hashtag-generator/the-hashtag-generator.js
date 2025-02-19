function generateHashtag (str)
{
  str = str.trim();
  if (!str)
    return false;
  let arr = str.split(" ");
  arr = arr.filter(sub => sub !== "")
  arr = arr.map((arr) => arr[0].toUpperCase() + arr.slice(1));
  arr.unshift('#')
  const hash = arr.join("");
  if (!hash || hash.length > 140)
    return false;
  return hash;
}
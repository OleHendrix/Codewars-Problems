function narcissistic(value)
{
  return [...value.toString()].map(Number).reduce((acc, cum) => (acc + (cum ** value.toString().length)), 0) === value;
}
​
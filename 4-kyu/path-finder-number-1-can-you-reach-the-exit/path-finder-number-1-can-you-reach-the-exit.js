function getArr(maze)
{
  let arr = [[]];
  let y = 0;
  let x = 0
  for (let i = 0; i < maze.length; i++)
    {
      if (maze[i] != '\n')
      {
        if (!arr[y]) arr[y] = [];
        arr[y][x] = maze[i];
        x++;
      }
      else
        {
          y++;
          x = 0;
        }
    }
  return arr;
}
​
function pathFinder(maze)
{
  let arr = getArr(maze);
  let visited = arr.slice();
  return (ft_recursion(arr, 0, 0, visited));
}
​
function ft_recursion(arr, x, y, visited)
{
  if (y == arr.length - 1 && x == arr[0].length - 1)
    return (true)
  if (x < 0 || x >= arr[0].length || y < 0 || y >= arr.length)
    return (false);
  if (arr[x][y] == 'W' || visited[x][y] == 'X')
    return (false)
  visited[x][y] = 'X';
  if (ft_recursion(arr, x + 1, y, visited) === true)
    return (true);
  if (ft_recursion(arr, x - 1, y, visited) === true)
    return (true);
  if (ft_recursion(arr, x, y + 1, visited) === true)
    return (true);
  if (ft_recursion(arr, x, y - 1, visited) === true)
    return (true);
  return (false);
}
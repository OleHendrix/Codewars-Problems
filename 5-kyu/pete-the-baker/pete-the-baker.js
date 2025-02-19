function cakes(recipe, available)
{
  let cakes = 0;
  while (1)
    {
      for (const [ingredient, amount] of Object.entries(recipe))
        {
          if (!available[ingredient])
            return cakes;
          available[ingredient] -= amount;
          if (available[ingredient] < 0)
            return cakes;
        }
      cakes ++;
    }
}
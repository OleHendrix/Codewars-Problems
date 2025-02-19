function findOutlier(integers)
{
    let even = 0, odd = 0;
    for (let i = 0; i < 3; i++) {
        integers[i] % 2 === 0 ? even++ : odd++;
    }
​
    const lookForEven = odd > even;
    for (let num of integers) {
        if ((num % 2 === 0) === lookForEven) {
            return num;
        }
    }
}
​
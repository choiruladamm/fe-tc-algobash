// matrix difference

function solution(a: number[][]): number {
  const n: number = a.length;
  let leftToRight = 0;
  let rightToLeft = 0;

  for (let i = 0; i < n; i++) {
    leftToRight += a[i][i];
    rightToLeft += a[i][n - i - 1];
  }

  return Math.abs(leftToRight - rightToLeft);
}

const data = [
  [3, 1, 2],
  [5, 6, 4],
  [7, 9, 8],
];

const data1 = [
  [10, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(solution(data));
console.log(solution(data1));

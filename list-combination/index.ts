// list combination

console.log('list combination');

function solution(l1: number[], l2: number[]): number[] {
  const result: number[] = [];
  let carry = 0;
  let i = 0,
    j = 0;

  while (i < l1.length || j < l2.length || carry > 0) {
    const num1 = i < l1.length ? l1[i] : 0;
    const num2 = j < l2.length ? l2[j] : 0;

    const sum = num1 + num2 + carry;
    result.push(sum % 10);
    carry = Math.floor(sum / 10);

    i++;
    j++;
  }

  return result;
}

// sample input
const l11 = [2, 4, 3];
const l12 = [5, 6, 4];
// expectation output = [7,0,8]

const l3 = [0];
const l4 = [0];
// expectation output = [0]

const l5 = [9, 9, 9, 9, 9, 9, 9];
const l6 = [9, 9, 9, 9];
// expectation output = [8,9,9,9,0,0,0,1]

console.log(solution(l11, l12)); // output = [ 7, 0, 8 ]
console.log(solution(l3, l4)); // output = [ 0 ]
console.log(solution(l5, l6)); // output = [ 8, 9, 9, 9, 0, 0, 0, 1 ]

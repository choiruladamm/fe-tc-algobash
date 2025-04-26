console.log('vacation cost');

// parsing data input
function parsing(input: string) {
  const lines = input.trim().split('\n');

  const numbers = lines[1]
    .trim()
    .split(' ')
    .map((num) => parseInt(num, 10));
  return numbers;
}

function findAnswer(array: number[]) {
  // let minValue = array[0];
  // let minIndex = 0;

  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] < minValue) {
  //     minValue = array[i];
  //     minIndex = i;
  //   }
  // }

  // return [minIndex + 1, minValue];

  // const sort = Array.from(new Set(array)).sort((a, b) => a - b);

  // const secondMin = sort[1];
  // const idx = array.indexOf(secondMin);
  // return [idx + 1, secondMin];

  // const minValue = Math.min(...array);
  // const filtered = array.filter((num) => num !== minValue);

  // const secondMin = Math.min(...filtered);
  // const index = array.indexOf(secondMin);

  // return [index + 1, secondMin];

  let firstMin = Math.min(...array);
  let fisrtMinIndex = array.indexOf(firstMin);

  let secondMinValue = Infinity;
  let secondMinIndex = -1;

  for (let i = 0; i < array.length; i++) {
    if (i !== fisrtMinIndex) {
      if (
        array[i] < secondMinIndex || (array[i] === secondMinValue && i < secondMinIndex)
      ) {
        secondMinValue = array[i];
        secondMinIndex = i;
      }
    }
  }

  return [secondMinIndex + 1, secondMinValue];

  // const firstMin = Math.min(...array)
  // const secondMin = Math.min(...array.filter(num => num !== firstMin))
  // const index = array.indexOf(secondMin) + 1

  // return [index, secondMin]
}

// simulate input
const example1 = `6
25 28 21 25 22 30`; // expected output = 3 22

const example2 = `5
25 31 22 30 25`; // expected ouput = 1 25

const parsingDataExample1 = parsing(example1);
console.log(findAnswer(parsingDataExample1));

const parsingDataExample2 = parsing(example2);
console.log(findAnswer(parsingDataExample2));

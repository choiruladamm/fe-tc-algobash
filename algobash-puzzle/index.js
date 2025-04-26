console.log('algobash puzzle');

function findAnswer(array) {
  const n = parseInt(array[0], 10);
  const data = array.slice(1);

  let algoCount = 0;
  let score = 0;

  for (let i = 0; i < n; i++) {
    if (data[i] === 'ALGO') {
      algoCount++;
    } else if (data[i] === 'BASH') {
      score += algoCount;
    }
  }

  return score;
}

const example1 = ['3', 'ALGO', 'BASH', 'ALGO'];
const example2 = ['4', 'BASH', 'ALGO', 'ALGO', 'BASH'];

console.log(findAnswer(example1));
console.log(findAnswer(example2));

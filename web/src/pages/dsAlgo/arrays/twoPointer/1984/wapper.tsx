import Problem from '../../../../../components/problem';

const title = '1984. Minimum Difference Between Highest and Lowest of K Scores';
const description = `
Your are given a 0-indexed integer array nums, where nums[i] represents the score ith student. You are also given an integer k

Pick the score of any k students and from the array so what the difference beweent the hight and the lowest of the k score is minimized

return the minimum possible difference

`;

const constraints = ['1  <= k <= nums.length <= 1000', '0 <= nums[i] <= 10^5'];

const ideas = [
  {
    title: 'Sort',
    timeComplexity: 'O(n * log(n))',
    spaceComplexity: 'O(1)',
    steps: [
      `Sort array ascending`,
      `take k elemtns and get the difference`,
      'return the difference',
    ],
  },

  /* { */
  /*   title: 'loop', */
  /*   timeComplexity: 'O(n)', */
  /*   spaceComplexity: 'O(1)', */
  /*   steps: [ */
  /*     ``, */
  /*     'return split[split.length-1].length' */
  /*   ], */
  /* }, */
];

const tests = [
  {
    input: `nums = [90], k = 1`,
    output: `0`,
    explanation: `theres is one way to pick scores of one student`,
    inputVal: { nums: [90], k: 1 },
    outputVal: 0,
  },
];

function minimumDifference(nums: number[], k: number): number {
  let sorted = nums.sort((a, b) => a - b);

  if (k === 1) {
    return 0;
  }

  let i = 0;
  let j = 1;

  let minK = sorted[j] - sorted[i];
  while (j < sorted.length) {
    let k = sorted[j] - sorted[i];
    if (k < minK) {
      minK = k;
    }

    i++;
    j++;
  }

  return minK;
}

const code = [
  `function lengthOfLastWord(s: string): number {`,
  `let words = s.split(' ');`,
  `words = words.filter((w) => w !== '')`,
  `return words[words.length - 1].length;`,
  `}`,
];

//TODO tester
const variables: any = {};
function* tester() {
  variables.nums = [1, 2, 3, 4, 1];
  yield ['function name, initialize nums', 0];

  variables.found = new Map<number, boolean>();
  yield ['Initialzeed vriable found to a new Map type <number, boolean>', 1];

  yield ['initialze for loop with x variable, x is of the valie nums[i]', 2];
  variables.x = 0;
  variables.i = 0;
  for (let i = 0; i < variables.nums.length; i++) {
    let x = (variables.x = variables.nums[i]);
    variables.i = i;
    yield [`Checking if "found" contains x ${variables.found.has(x)}`, 3];
    if (variables.found.has(x)) {
      yield [`return true`, 4];
    } else {
      yield [`if value of x: ${x} is not found else runs`, 5];
      yield [`set the value of x = ${x} to true in the map called found`, 6];
      variables.found.set(x, true);
    }
  }

  yield ['return false', 9];
}

const testerString = tester.toString();

export default function Wrapper() {
  return (
    <Problem
      title={title}
      description={description}
      constraints={constraints}
      ideas={ideas}
      tests={tests}
      code={code}
      variables={variables}
      tester={tester}
    ></Problem>
  );
}

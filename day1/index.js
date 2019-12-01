const getFuel = n => {
  const val = Math.floor(n / 3) - 2;
  if (val < 0) return 0;
  return val + getFuel(val);
};

const part1 = inp => inp.split('\n').reduce((a, v) => (a += Math.floor(Number(v) / 3) - 2), 0);
const part2 = inp => inp.split('\n').reduce((a, v) => (a += getFuel(Number(v))), 0);

module.exports = {
  part1,
  part2,
};

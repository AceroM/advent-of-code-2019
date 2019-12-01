const fs = require('fs');
const path = require('path');

module.exports = (day, part) => {
  day = parseInt(day);
  part = parseInt(part);

  const input = fs.readFileSync(path.join(__dirname, `/day${day}/input`), 'utf8');
  const func = require(`./day${day}/`);

  if (part === 1 && func.part1) {
    return func.part1(input);
  } else if (part === 2 && func.part2) {
    return func.part2(input);
  } else {
    console.log('An error has occured');
    return;
  }
};

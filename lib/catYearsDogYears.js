/**
 *
 */

export default function humanYearsCatYearsDogYears(humanYears) {
  let catYears = 0;
  let dogYears = 0;

  for (let i = 0; i < humanYears; i++) {
    if (i === 0) {
      catYears += 15;
      dogYears += 15;
    }

    if (i === 1) {
      catYears += 9;
      dogYears += 9;
    }

    if (i > 1) {
      catYears += 4;
      dogYears += 5;
    }
  }

  return [humanYears, catYears, dogYears];
}

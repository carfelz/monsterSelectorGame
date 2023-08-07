
export const diceFacesCalculator = (
  dice1: number,
  dice2: number,
  dice3: number
): number | undefined=> {
  const numbersArray = [dice1, dice2, dice3]
  for(let num of numbersArray) {
    if(!diceRange(num)) {
      throw('Dice out of number range');
    }
  }
  const sameValue: Set<number> = new Set(numbersArray);
  if(sameValue.size === 1) {
    return dice1 * 3
  }

  if(dice1 === dice2 || dice1 === dice3) {
    return dice1 * 2
  } else if(dice2 === dice3) {
    return dice2 * 2
  }
  

  return _biggestNumber(numbersArray);
};

const _biggestNumber = (numbers: number[]): number => {
  return Math.max(...numbers);
}

const diceRange = (num: number): boolean => num > 0 && num <= 6
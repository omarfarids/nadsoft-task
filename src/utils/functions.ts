export const numberFormater = (num: string | number) => {
  let numberString = String(num);

  // Use a regular expression to add commas every three digits from the right
  numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return numberString;
};

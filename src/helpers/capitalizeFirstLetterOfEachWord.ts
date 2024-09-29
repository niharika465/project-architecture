export const capitalizeFirstLetterOfEachWord = (sentence: string): string => {
  return sentence
    .split(' ') // Split the sentence into words
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1) // Capitalize the first letter and combine with the rest
    )
    .join(' '); // Join the words back into a sentence
};

// Host URL constant
const HOST_URL = 'https://fakestoreapi.com';

// Function to construct the complete URL
export const createCompleteUrl = (baseUrl: string): string => {
  return `${HOST_URL}${baseUrl}`;
};

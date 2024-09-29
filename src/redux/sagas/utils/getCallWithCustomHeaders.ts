import axios from 'axios';
import { createCompleteUrl } from './conputerUrl';

// Function to perform a GET request with custom headers
export const getCallWithCustomHeaders = async (baseUrl: string) => {
  const completeUrl = createCompleteUrl(baseUrl);

  try {
    const response = await axios.get(completeUrl, {
      headers: {
        // Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
    console.log(response);
    return response; // Return data for further processing if needed
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error for handling in the calling component if needed
  }
};

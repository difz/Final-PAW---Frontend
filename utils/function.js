// utils/api.js
import backendAPI from './backendAPI'; // Your Axios instance

export const fetchTransactions = async () => {
  try {
    const transactions = await backendAPI.get('/transaction'); // Backend endpoint
    console.log(transactions);
    return transactions;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};

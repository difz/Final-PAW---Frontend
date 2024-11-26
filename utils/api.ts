import axios from "axios";

const backendAPI = axios.create({
  baseURL: "http://localhost:5000", // Replace with your backend's base URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

type Transaction = {
    _id: string;
    account: string;
    type: "income" | "expense";
    category: string;
    amount: number;
    date: string; // ISO date string
    description?: string; // Optional field
  };

export const fetchTransactions = async (): Promise<Transaction[]> => {
  const response = await backendAPI.get("/transaction/history");
  return response.data.transactions;
};

export default backendAPI;
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Transaction = {
  _id: string;
  account: string;
  type: "income" | "expense";
  category: string;
  amount: number;
  date: string;
  description?: string;
};

export default function Histori() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const response = await fetch("http://localhost:5000/transaction/history", {
          method: "GET",
          credentials: "include", // Ensures cookies are sent with the request
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setTransactions(data.transactions);
      } catch (error: any) {
        console.error("Failed to fetch transactions", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadTransactions();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-100 p-4">
        <div className="mb-8">
          <Image
            src="https://assets.maia.id/1e81b035-1ab1-47f6-a8ff-fdbb079120e7.png"
            alt="Logo"
            width={50}
            height={50}
          />
          <h1 className="text-lg font-bold">Money+</h1>
        </div>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link href="/">
                <span className="cursor-pointer">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/grafik">
                <span className="cursor-pointer">Grafik</span>
              </Link>
            </li>
            <li className="text-blue-600 font-bold">Histori</li>
            <li>
              <Link href="/plan">
                <span className="cursor-pointer">Plan</span>
              </Link>
            </li>
            <li>
              <Link href="/akun">
                <span className="cursor-pointer">Akun</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Histori Cash Flow</h2>
          <div className="bg-orange-200 px-4 py-2 rounded">{new Date().toLocaleString("en-US", { month: "long", year: "numeric" })}</div>
        </header>

        <section className="space-y-4">
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <div
                key={transaction._id}
                className={`flex justify-between p-4 rounded ${
                  transaction.type === "income" ? "bg-green-100" : "bg-red-100"
                }`}
              >
                <span>{transaction.category}</span>
                <span>{new Date(transaction.date).toLocaleDateString()}</span>
                <span>Rp.{transaction.amount.toLocaleString()}</span>
              </div>
            ))
          ) : (
            <div>No transactions found.</div>
          )}
        </section>
      </main>
    </div>
  );
}

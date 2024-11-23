"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

type HistoryItem = {
  type: string; // "income" atau "spending"
  categoryName: string;
  dateReceived: string;
  amount: number;
};

export default function Dashboard() {
  const [historyData, setHistoryData] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const response = await fetch("/api/history");
        if (!response.ok) {
          throw new Error("Failed to fetch history data");
        }
        const data = await response.json();

        const sortedData = data
          .sort((a: HistoryItem, b: HistoryItem) => {
            const [dayA, monthA, yearA] = a.dateReceived.split("/");
            const [dayB, monthB, yearB] = b.dateReceived.split("/");

            const dateA = new Date(`${yearA}-${monthA}-${dayA}`);
            const dateB = new Date(`${yearB}-${monthB}-${dayB}`);

            return dateB.getTime() - dateA.getTime();
          })
          .slice(0, 5); // Ambil 3 data terbaru

        setHistoryData(sortedData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHistoryData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const formatRupiah = (amount: number): string => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
    }).format(amount);
  };

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
            <li className="text-blue-600 font-bold">Dashboard</li>
            <li>
              <Link href="/grafik">
                <span className="cursor-pointer">Grafik</span>
              </Link>
            </li>
            <li>
              <Link href="/histori">
                <span className="cursor-pointer">Histori</span>
              </Link>
            </li>
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
        <header className="mb-8">
          <div className="flex space-x-4">
            {["Pengeluaran", "Pemasukan", "Transfer", "Planning", "Akun"].map((item) => (
              <button key={item} className="bg-orange-200 px-4 py-2 rounded">
                {item}
              </button>
            ))}
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold">Histori Cash Flow</h2>
          <div className="bg-blue-100 p-4 mt-4">
            {/* Placeholder for chart */}
            <div className="h-48 bg-white">Chart Placeholder</div>
          </div>
        </section>

        <section>
          <div className="space-y-4">
            {historyData.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between p-4 rounded ${
                  item.type === "income" ? "bg-green-100" : "bg-red-100"
                }`}
              >
                <span className="flex-1">{item.categoryName}</span>
                <span className="flex-1 text-center">{item.dateReceived}</span>
                <span className="flex-1 text-right">{formatRupiah(item.amount)}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

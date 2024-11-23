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

export default function Histori() {
  const [historyData, setHistoryData] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const currentDate = new Date();
  const [selectedMonth, setSelectedMonth] = useState<string>(
    (currentDate.getMonth() + 1).toString().padStart(2, "0")
  ); 
  const [selectedYear, setSelectedYear] = useState<string>(
    currentDate.getFullYear().toString()
  ); 

  const months = [
    { value: "01", label: "Januari" },
    { value: "02", label: "Februai" },
    { value: "03", label: "Maret" },
    { value: "04", label: "April" },
    { value: "05", label: "Mey" },
    { value: "06", label: "Juni" },
    { value: "07", label: "Juli" },
    { value: "08", label: "Agustus" },
    { value: "09", label: "September" },
    { value: "10", label: "Oktober" },
    { value: "11", label: "November" },
    { value: "12", label: "Desember" },
  ];

  function generateYears(startYear: number, endYear: number): { value: string; label: string }[] {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push({ value: year.toString(), label: year.toString() });
    }
    return years;
  }

  const years = generateYears(new Date().getFullYear() - 2, new Date().getFullYear() + 3);

  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const response = await fetch("/api/history");
        if (!response.ok) {
          throw new Error("Failed to fetch history data");
        }
        const data = await response.json();

        const sortedData = data.sort((a: HistoryItem, b: HistoryItem) => {
          const [dayA, monthA, yearA] = a.dateReceived.split("/");
          const [dayB, monthB, yearB] = b.dateReceived.split("/");

          const dateA = new Date(`${yearA}-${monthA}-${dayA}`);
          const dateB = new Date(`${yearB}-${monthB}-${dayB}`);

          return dateB.getTime() - dateA.getTime();
        });

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

  const filteredData = historyData.filter((item) => {
    const [day, month, year] = item.dateReceived.split("/");
    return month === selectedMonth && year === selectedYear;
  });

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
          <div className="flex space-x-4">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="bg-orange-200 px-4 py-2 rounded"
            >
              {months.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-orange-200 px-4 py-2 rounded"
            >
              {years.map((year) => (
                <option key={year.value} value={year.value}>
                  {year.label}
                </option>
              ))}
            </select>
          </div>
        </header>

        <section className="space-y-4">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between p-4 rounded ${
                  item.type === "income" ? "bg-green-100" : "bg-red-100"
                }`}
              >
                <span className="flex-1">{item.categoryName}</span>
                <span className="flex-1 text-center">{item.dateReceived}</span>
                <span className="flex-1 text-right inline-flex justify-end">
                  <span>{formatRupiah(item.amount)}</span>
                </span>
              </div>
            ))
          ) : (
            <div>Tidak ada data untuk bulan ini.</div>
          )}
        </section>
      </main>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import ExpenseModal from '../popups/pengeluaran';
import Pemasukan from '../popups/pemasukan';
import Transfer from '../popups/Transfer';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPemasukanOpen, setIsPemasukanOpen] = useState(false);
  const [isTransferOpen, setIsTransferOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    fetch('http://localhost:5000/transaction/history/label', {
      method: 'GET',
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        const dates = data.map((item: any) => item.date);
        const income = data.map((item: any) => item.income);
        const expenses = data.map((item: any) => item.expenses);

        setChartData({
          labels: dates,
          datasets: [
            {
              label: 'Income',
              data: income,
              borderColor: 'green',
              fill: false,
            },
            {
              label: 'Expenses',
              data: expenses,
              borderColor: 'red',
              fill: false,
            },
          ],
        });
      })
      .catch(error => console.error('Error fetching chart data:', error));
  }, []);

  const handleButtonClick = (item: string) => {
    if (item === "Pengeluaran") {
      setIsModalOpen(true);
    } else if (item === "Pemasukan") {
      setIsPemasukanOpen(true);
    } else if (item === "Transfer") {
      setIsTransferOpen(true);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-100 p-4">
        <div className="mb-8">
          <Image src="https://assets.maia.id/1e81b035-1ab1-47f6-a8ff-fdbb079120e7.png" alt="Logo" width={50} height={50} />
          <h1 className="text-lg font-bold">Money+</h1>
        </div>
        <nav>
          <ul className="space-y-4">
            <li className="text-blue-600 font-bold">Dashboard</li>
            <li>
              <Link href='/grafik'>
                <span className="cursor-pointer"> Grafik</span>
              </Link>
            </li>
            <li>
              <Link href='/histori'>
                <span className="cursor-pointer"> Histori</span>
              </Link>
            </li>
            <li>
              <Link href='/plan'>
                <span className="cursor-pointer"> Plan</span>
              </Link>
            </li>
            <li>
              <Link href='/akun'>
                <span className="cursor-pointer"> Akun</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="mb-8 flex justify-between">
          <div className="flex space-x-4">
            {["Pengeluaran", "Pemasukan", "Transfer", "Planning", "Akun"].map((item) => (
              <button
                key={item}
                className="bg-orange-200 px-4 py-2 rounded"
                onClick={() => handleButtonClick(item)}
              >
                {item}
              </button>
            ))}
            <Link href="/pembayaran" className="bg-orange-200 px-4 py-2 rounded">
              Pembayaran
            </Link>
          </div>
          <div className="flex items-center">
            <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="p-2">
              <Image src="" alt="Profile" width={32} height={32} />
            </button>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold">Histori Cash Flow</h2>
          <div className="bg-blue-100 p-4 mt-4">
            {chartData ? (
              <Line data={chartData} />
            ) : (
              <div className="h-48 bg-white">Loading chart...</div>
            )}
          </div>
        </section>

        <section>
          <div className="space-y-4">
            <div className="flex justify-between bg-green-100 p-4 rounded">
              <span>Nama Pemasukan</span>
              <span>1/1/2024</span>
              <span>Rp.100.000</span>
            </div>
            <div className="flex justify-between bg-red-100 p-4 rounded">
              <span>Nama Pengeluaran</span>
              <span>1/1/2024</span>
              <span>Rp.100.000</span>
            </div>
            <div className="flex justify-between bg-green-100 p-4 rounded">
              <span>Nama Pemasukan</span>
              <span>1/1/2024</span>
              <span>Rp.100.000</span>
            </div>
          </div>
        </section>

        <Pemasukan isOpen={isPemasukanOpen} onClose={() => setIsPemasukanOpen(false)} />
        <ExpenseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <Transfer isOpen={isTransferOpen} onClose={() => setIsTransferOpen(false)} />

        {isProfileOpen && (
          <div className="fixed top-16 right-16 bg-white p-4 shadow-lg rounded">
            <h3 className="font-bold">Profile</h3>
            <p>Profile details go here...</p>
            <button onClick={() => setIsProfileOpen(false)} className="mt-2 bg-red-500 text-white px-2 py-1 rounded">
              Close
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

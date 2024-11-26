"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BuatAkun from '../popups/buatAkun'; // Ensure the import path is correct

interface Account {
  accountName: string;
  amount: number;
}

export default function Akun() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await fetch('http://localhost:5000/account/all', {
          credentials: 'include', // Include credentials to send cookies
        });
  
        const data = await response.json();
  
        if (data && Array.isArray(data.accounts)) {
          setAccounts(data.accounts);
        } else {
          console.error('Invalid accounts data:', data);
        }
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };
  
    fetchAccounts();
  }, []);
  

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-100 p-4">
        <div className="mb-8">
          <Image src="/logo.svg" alt="Logo" width={50} height={50} />
          <h1 className="text-lg font-bold">Money+</h1>
        </div>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link href='/dashboard'>
                <span className="cursor-pointer">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href='/grafik'>
                <span className="cursor-pointer">Grafik</span>
              </Link>
            </li>
            <li>
              <Link href='/histori'>
                <span className="cursor-pointer">Histori</span>
              </Link>
            </li>
            <li>
              <Link href='/plan'>
                <span className="cursor-pointer">Plan</span>
              </Link>
            </li>
            <li className="text-blue-600 font-bold">Akun</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Akun</h2>
          <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white p-2 rounded">
            Tambah Akun
          </button>
        </header>

        <section className="space-y-4">
          {accounts.length > 0 ? (
            accounts.map((account, index) => (
              <div key={index} className="bg-blue-100 p-4 rounded flex justify-between">
                <span>{account.accountName}</span>
                <span>{`Rp.${account.amount.toLocaleString()}`}</span>
              </div>
            ))
          ) : (
            <p>No accounts available</p>
          )}
        </section>

        <BuatAkun isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </main>
    </div>
  );
}

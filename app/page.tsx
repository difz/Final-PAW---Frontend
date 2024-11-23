"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';


import PlanPopup from "./popups/CreatePlanPopup";

export default function Dashboard() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const openPopup = () => setIsPopupVisible(true);
  const closePopup = () => setIsPopupVisible(false);

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
          <Link href='/grafik' >
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="mb-8">
          <div className="flex space-x-4">
            {["Pengeluaran", "Pemasukan", "Transfer", "Planning", "Akun"].map((item) => (
              <button key={item} className="bg-orange-200 px-4 py-2 rounded" onClick={openPopup}>
                {item}
              </button>
            ))}
            <Link href="/pembayaran" className="bg-orange-200 px-4 py-2 rounded">
            Pembayaran
          </Link>
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
        {isPopupVisible && <PlanPopup onClose={closePopup} />}
      </main>
    </div>
  );
}

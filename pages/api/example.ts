// pages/api/cashflow.ts

import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';
import mongoose from 'mongoose';
import Income from '../../app/models/income';

import Spending from '../../app/models/spending';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await clientPromise; // memastikan MongoDB terkoneksi

  // Mengambil data dari koleksi Income dan Spending
  try {
    // Menyambung ke database menggunakan Mongoose
    await mongoose.connect(process.env.MONGODB_URI as string);

    // Ambil data Income dan Spending
    const incomeData = await Income.find({}).sort({ dateReceived: 1 });
    const spendingData = await Spending.find({}).sort({ dateReceived: 1 });

    // Format data untuk grafik
    const formattedData = {
      income: incomeData.map((item) => ({
        date: item.dateReceived,
        amount: item.amount,
      })),
      spending: spendingData.map((item) => ({
        date: item.dateReceived,
        amount: item.amount,
      })),
    };

    res.status(200).json(formattedData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

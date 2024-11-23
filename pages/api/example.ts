// pages/api/example.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await clientPromise;
    const db = client.db('mydatabase'); // Ganti dengan nama database Anda

    const data = await db.collection('mycollection').find({}).toArray(); // Ganti dengan nama koleksi Anda

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

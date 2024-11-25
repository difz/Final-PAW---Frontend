"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

type CashFlowData = {
  income: { date: string; amount: number }[];
  spending: { date: string; amount: number }[];
};

export default function Grafik() {
  const [cashFlowData, setCashFlowData] = useState<CashFlowData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/history');
      if (res.ok) {
        const data = await res.json();
        setCashFlowData(data);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!cashFlowData) {
    return <div>Error: Unable to load data</div>;
  }

  const lineChartData = {
    labels: cashFlowData.income.map((item) =>
      new Date(item.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    ),
    datasets: [
      {
        label: 'Income',
        data: cashFlowData.income.map((item) => item.amount),
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'Spending',
        data: cashFlowData.spending.map((item) => item.amount),
        borderColor: 'yellow',
        fill: false,
      },
    ],
  };

  const totalIncome = cashFlowData.income.reduce((acc, item) => acc + item.amount, 0);
  const totalSpending = cashFlowData.spending.reduce((acc, item) => acc + item.amount, 0);

  const pieChartData = {
    labels: ['Income', 'Spending'],
    datasets: [
      {
        data: [totalIncome, totalSpending],
        backgroundColor: ['blue', 'yellow'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-100 p-4">
        <div className="mb-8">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <h1 className="text-lg font-bold">Money+</h1>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="mb-2">
              <Link href='/'>
                <span className='cursor-pointer'>Dashboard</span>
              </Link>
            </li>
            <li className="mb-2 text-blue-600 font-bold">Grafik</li>
            <li className="mb-2">
              <Link href='/histori'>
                <span className="cursor-pointer">Histori</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link href='/plan'>
                <span className="cursor-pointer">Plan</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link href='/akun'>
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
        </header>

        <section className="mb-8">
          <div className="bg-blue-100 p-8 rounded">
            {/* Line Chart */}
            <div className="h-48 bg-white">
              <Line data={lineChartData} />
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-4">Breakdown</h3>
          <div className="bg-blue-100 p-8 rounded">
            {/* Pie Chart */}
            <div className="h-48 bg-white">
              <Pie data={pieChartData} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

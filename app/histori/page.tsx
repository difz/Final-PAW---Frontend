import Image from 'next/image';
import Link from 'next/link';

export default function Histori() {
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
                <Link href = '/'>
                    <span className="cursor-pointer">Dashboard</span>
                </Link>
            </li>
            <li>
                <Link href = '/grafik'>
                    <span className="cursor-pointer">Grafik</span>
                </Link>
            </li>
            <li className="text-blue-600 font-bold">Histori</li>
            <li>
                <Link href = '/plan'>
                    <span className="cursor-pointer">Plan</span>
                </Link>
            </li>
            <li>
                <Link href = '/akun'>
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
          <div className="bg-orange-200 px-4 py-2 rounded">Feb 2025</div>
        </header>

        <section className="space-y-4">
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
          <div className="flex justify-between bg-red-100 p-4 rounded">
            <span>Nama Pengeluaran</span>
            <span>1/1/2024</span>
            <span>Rp.100.000</span>
          </div>
        </section>
      </main>
    </div>
  );
}

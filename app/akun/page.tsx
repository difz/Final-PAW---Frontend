import Image from 'next/image';
import Link from 'next/link';

export default function Akun() {
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
            <li>
                <Link href = '/histori'>
                    <span className="cursor-pointer">Histori</span>
                </Link>
            </li>
            <li>
                <Link href = '/plan'>
                    <span className="cursor-pointer">Plan</span>
                </Link>
            </li>
            <li className="text-blue-600 font-bold">Akun</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="mb-8">
          <h2 className="text-2xl font-bold">Akun</h2>
        </header>

        <section className="space-y-4">
          <div className="bg-blue-100 p-4 rounded flex justify-between">
            <span>Nama Akun</span>
            <span>Rp.100.000.000</span>
          </div>
          <div className="bg-blue-100 p-4 rounded flex justify-between">
            <span>Nama Akun</span>
            <span>Rp.100.000.000</span>
          </div>
          <div className="bg-blue-100 p-4 rounded flex justify-between">
            <span>Nama Akun</span>
            <span>Rp.100.000.000</span>
          </div>
        </section>
      </main>
    </div>
  );
}

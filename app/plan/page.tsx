import Image from 'next/image';
import Link from 'next/link';

export default function Plan() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-100 p-4">
        <div className="mb-8">
        <Image
            src="https://drive.google.com/file/d/108lJAEo0QTPflvZoM4nxeR-l6sT7eBob/view?usp=sharing" // Ganti FILE_ID dengan ID file Anda
            alt="Logo"
            width={50}
            height={50}
          />
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
            <li className="text-blue-600 font-bold">Plan</li>
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
        <header className="mb-8">
          <h2 className="text-2xl font-bold">Plan</h2>
        </header>

        <section className="space-y-4">
          <div className="bg-blue-100 p-4 rounded">
            <div className="flex justify-between">
              <span>Nama Plan</span>
              <span>Rp.50.000.000 / Rp.100.000.000</span>
            </div>
            <div className="flex justify-between">
              <span>1/1/2024</span>
              <span className="text-green-600">On Track</span>
            </div>
          </div>
          <div className="bg-blue-100 p-4 rounded">
            <div className="flex justify-between">
              <span>Nama Plan</span>
              <span>Rp.50.000.000 / Rp.100.000.000</span>
            </div>
            <div className="flex justify-between">
              <span>1/1/2024</span>
              <span className="text-red-600">Off Track</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

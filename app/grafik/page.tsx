import Image from 'next/image';
import Link from 'next/link';

export default function Grafik() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-100 p-4">
        <div className="mb-8">
          <Image src="https://drive.google.com/file/d/108lJAEo0QTPflvZoM4nxeR-l6sT7eBob/view?usp=sharing" alt="Logo" width={50} height={50} />
          <h1 className="text-lg font-bold">Money+</h1>
        </div>
        <nav>
          <ul className="space-y-4">
            <li>
                <Link href = '/'>
                    <span className='cursor-pointer'>Dashboard</span>
                </Link>
            </li>
            <li className="text-blue-600 font-bold">Grafik</li>
            <li>
                <Link href = '/histori'>
                    <span className='cursor-pointer'>Histori</span>
                </Link>
            </li>
            <li>
                <Link href = '/plan'>
                    <span className='cursor-pointer'>Plan</span>
                </Link>
            </li>
            <li>
                <Link href = '/akun'>
                    <span className='cursor-pointer'>Akun</span>
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

        <section className="mb-8">
          <div className="bg-blue-100 p-8 rounded">
            {/* Placeholder for line chart */}
            <div className="h-48 bg-white flex items-center justify-center">
              Ini grafik line chart
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-4">Breakdown</h3>
          <div className="bg-blue-100 p-8 rounded">
            {/* Placeholder for pie chart */}
            <div className="h-48 bg-white flex items-center justify-center">
              Ini grafik pie chart
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

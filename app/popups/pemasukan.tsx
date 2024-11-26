import React, { useState } from 'react';
import KategoriPemasukan from './kategoriPemasukan';

interface PemasukanProps {
  isOpen: boolean;
  onClose: () => void;
}

const Pemasukan: React.FC<PemasukanProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Makan');
  const [account, setAccount] = useState('Mandiri');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [categories, setCategories] = useState(['Gaji', 'Freelance', 'Investasi', 'Hadiah']);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setAmount(formatNumber(value));
  };

  const formatNumber = (value: string) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const handleSubmit = async () => {
    const data = {
      name,
      amount: parseInt(amount.replace(/\./g, ''), 10),
      category,
      account,
      type: 'income',
    };

    try {
      const response = await fetch('http://localhost:5000/transaction/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
      });

      if (response.ok) {
        alert('Pemasukan berhasil disimpan');
        onClose();
      } else {
        const errorData = await response.json();
        alert(`Gagal menyimpan pemasukan: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-96 p-6 rounded shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Catat Pemasukan</h2>
          <button onClick={onClose} className="text-red-500">X</button>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Nama</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="masukkan nama Pemasukan"
              className="bg-blue-100 p-2 rounded"
            />
          </div>
          <div className="flex justify-between items-center">
            <span>Jumlah</span>
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              placeholder='masukkan nominal Pemasukan'
              className="bg-blue-100 p-2 rounded"
            />
          </div>
          <div className="flex justify-between items-center">
            <span>Kategori</span>
            <div>
              <span>{category}</span>
              <button onClick={() => setIsCategoryOpen(true)} className="ml-2 bg-orange-200 px-2 py-1 rounded">Ubah</button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span>Akun</span>
            <div>
              <span>{account}</span>
              <button className="ml-2 bg-orange-200 px-2 py-1 rounded">Ubah</button>
            </div>
          </div>
        </div>
        <button onClick={handleSubmit} className="mt-6 w-full bg-orange-200 p-2 rounded">Catat Pemasukan</button>
      </div>

      {isCategoryOpen && (
        <KategoriPemasukan
          currentCategory={category}
          categories={categories}
          onAddCategory={(newCategory) => setCategories([...categories, newCategory])}
          onSelectCategory={(selectedCategory) => {
            setCategory(selectedCategory);
            setIsCategoryOpen(false);
          }}
          onClose={() => setIsCategoryOpen(false)}
        />
      )}
    </div>
  );
};

export default Pemasukan;

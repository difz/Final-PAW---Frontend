import React from 'react';

interface ExpenseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExpenseModal: React.FC<ExpenseModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-96 p-6 rounded shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Catat Pengeluaran</h2>
          <button onClick={onClose} className="text-red-500">X</button>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Nama</span>
            <input type="text" placeholder="masukkan nama pengeluaran" className="bg-blue-100 p-2 rounded" />
          </div>
          <div className="flex justify-between items-center">
            <span>Jumlah</span>
            <input type="text" value="Rp.10.000.000" className="bg-blue-100 p-2 rounded" readOnly />
          </div>
          <div className="flex justify-between items-center">
            <span>Kategori</span>
            <div>
              <span>Makan</span>
              <button className="ml-2 bg-orange-200 px-2 py-1 rounded">Ubah</button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span>Akun</span>
            <div>
              <span>Mandiri</span>
              <button className="ml-2 bg-orange-200 px-2 py-1 rounded">Ubah</button>
            </div>
          </div>
        </div>
        <button className="mt-6 w-full bg-orange-200 p-2 rounded">Catat Pengeluaran</button>
      </div>
    </div>
  );
};

export default ExpenseModal;

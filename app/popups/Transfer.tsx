import React, { useState } from 'react';

interface TransferProps {
  isOpen: boolean;
  onClose: () => void;
}

const Transfer: React.FC<TransferProps> = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState('100000'); // Default amount
  const [fromAccount, setFromAccount] = useState('Cash');
  const [toAccount, setToAccount] = useState('Mandiri');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    setAmount(formatNumber(value));
  };

  const formatNumber = (value: string) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Add thousand separators
  };

  const handleEdit = (currentValue: string, callback: (value: string) => void, label: string) => {
    const newValue = prompt(`Ubah ${label}:`, currentValue);
    if (newValue !== null && newValue.trim() !== '') {
      callback(newValue);
    }
  };

  const handleSubmit = () => {
    alert(`Transfer Rp.${amount} dari ${fromAccount} ke ${toAccount} berhasil dicatat.`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-96 p-6 rounded shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Transfer Antar Akun</h2>
          <button onClick={onClose} className="text-red-500">X</button>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Jumlah</span>
            <div>
              <span className="mr-2">Rp.{amount}</span>
              <button
                onClick={() => handleEdit(amount.replace(/\./g, ''), (val) => setAmount(formatNumber(val)), 'Jumlah')}
                className="bg-orange-200 px-2 py-1 rounded"
              >
                Ubah
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span>Akun</span>
            <div>
              <span>{fromAccount}</span>
              <button
                onClick={() => handleEdit(fromAccount, setFromAccount, 'Akun Sumber')}
                className="ml-2 bg-orange-200 px-2 py-1 rounded"
              >
                Ubah
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span>Akun</span>
            <div>
              <span>{toAccount}</span>
              <button
                onClick={() => handleEdit(toAccount, setToAccount, 'Akun Tujuan')}
                className="ml-2 bg-orange-200 px-2 py-1 rounded"
              >
                Ubah
              </button>
            </div>
          </div>
        </div>
        <button onClick={handleSubmit} className="mt-6 w-full bg-orange-200 p-2 rounded">
          Catat Transfer
        </button>
      </div>
    </div>
  );
};

export default Transfer;

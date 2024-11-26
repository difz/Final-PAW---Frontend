import React, { useState } from 'react';

interface BuatAkunProps {
  isOpen: boolean;
  onClose: () => void;
}

const BuatAkun: React.FC<BuatAkunProps> = ({ isOpen, onClose }) => {
  const [accountName, setAccountName] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleCreateAccount = async () => {
    try {
      const response = await fetch('http://localhost:5000/account/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accountName, amount }),
        credentials: 'include', // Include credentials (cookies)
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create account');
      }
  
      const data = await response.json();
      console.log(data.message); // Optional: Log success message
  
      // Close the modal and reset fields
      onClose();
      setAccountName('');
      setAmount('');
    } catch (error: any) {
      setError(error.message || 'An error occurred');
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Buat Akun</h2>
          <button onClick={onClose} className="text-red-500">X</button>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Nama</span>
            <input
              type="text"
              placeholder="masukkan nama akun"
              className="bg-blue-100 p-2 rounded"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center">
            <span>Jumlah</span>
            <input
              type="text"
              placeholder="Rp.0"
              className="bg-blue-100 p-2 rounded"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button onClick={handleCreateAccount} className="mt-6 w-full bg-orange-200 p-2 rounded">
          Buat Akun
        </button>
      </div>
    </div>
  );
};

export default BuatAkun;

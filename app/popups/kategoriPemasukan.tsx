import React, { useState } from 'react';

interface KategoriPemasukanProps {
  currentCategory: string;
  categories: string[];
  onAddCategory: (newCategory: string) => void;
  onSelectCategory: (category: string) => void;
  onRemoveCategory: (category: string) => void; // Function to remove category
  onClose: () => void;
}

const KategoriPemasukan: React.FC<KategoriPemasukanProps> = ({
  currentCategory,
  categories,
  onAddCategory,
  onSelectCategory,
  onRemoveCategory,
  onClose,
}) => {
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-96 p-6 rounded shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Pilih Kategori Pemasukan</h2>
          <button onClick={onClose} className="text-red-500">X</button>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((cat) => (
            <div key={cat} className="flex items-center">
              <button
                onClick={() => onSelectCategory(cat)}
                className={`px-4 py-2 rounded ${cat === currentCategory ? 'bg-orange-200' : 'bg-blue-100'}`}
              >
                {cat}
              </button>
              <button
                onClick={() => onRemoveCategory(cat)}
                className="text-red-500 ml-2"
              >
                x
              </button>
            </div>
          ))}
          <button onClick={() => setIsAddCategoryOpen(true)} className="px-4 py-2 bg-orange-200 rounded">+</button>
        </div>
        <button onClick={onClose} className="w-full bg-orange-200 p-2 rounded">Pilih</button>
      </div>

      {isAddCategoryOpen && (
        <TambahKategori onAddCategory={onAddCategory} onClose={() => setIsAddCategoryOpen(false)} />
      )}
    </div>
  );
};

interface TambahKategoriProps {
  onAddCategory: (newCategory: string) => void;
  onClose: () => void;
}

const TambahKategori: React.FC<TambahKategoriProps> = ({ onAddCategory, onClose }) => {
  const [newCategory, setNewCategory] = useState('');

  const handleAdd = () => {
    if (newCategory.trim() !== '') {
      onAddCategory(newCategory.trim());
      setNewCategory('');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-80 p-6 rounded shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Tambah Kategori</h2>
          <button onClick={onClose} className="text-red-500">X</button>
        </div>
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Nama kategori baru"
          className="w-full mb-4 p-2 rounded bg-blue-100"
        />
        <button onClick={handleAdd} className="w-full bg-orange-200 p-2 rounded">Tambah</button>
      </div>
    </div>
  );
};

export default KategoriPemasukan;

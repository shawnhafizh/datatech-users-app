import React from "react";

function ModalForm({ isEditing, formData, errors, handleChange, handleSubmit, toggleModal }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md text-surface dark:bg-surface-dark dark:text-black shadow-secondary-1">
        <h2 className="text-xl font-medium mb-4">{isEditing ? 'Edit User' : 'Tambah User'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">Nama</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onInvalid={(e) => e.target.setCustomValidity("Nama tidak boleh kosong!")}
              onInput={(e) => e.target.setCustomValidity("")}
              className="w-full px-4 py-2 mt-1 border rounded"
              placeholder="Nama"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onInvalid={(e) => {
                if (!e.target.validity.valid) {
                  if (!e.target.value) {
                    e.target.setCustomValidity("Email tidak boleh kosong!");
                  } else {
                    e.target.setCustomValidity("Format email tidak valid!");
                  }
                }
              }}
              onInput={(e) => e.target.setCustomValidity("")}
              className="w-full px-4 py-2 mt-1 border rounded"
              placeholder="your@email.com"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">Umur</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              onInvalid={(e) => e.target.setCustomValidity("Umur minimal 1 tahun!")}
              onInput={(e) => e.target.setCustomValidity("")}
              min="1"
              className="w-full px-4 py-2 mt-1 border rounded"
              placeholder="Umur"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">Status Keanggotaan</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              onInvalid={(e) => e.target.setCustomValidity("Tolong pilih status!")}
              onInput={(e) => e.target.setCustomValidity("")}
              className="w-full px-4 py-2 mt-1 border rounded"
              required
            >
              <option value="active">Aktif</option>
              <option value="not-active">Tidak Aktif</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={toggleModal}
              className="px-4 py-2 mr-2 text-white bg-gray-500 rounded hover:bg-gray-600"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalForm;
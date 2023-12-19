"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Category = {
  id: number;
  nama: string;
};

const API_URL = "http://127.0.0.1:8000/api";
const EditCategory = (category: Category) => {
  const [modal, setModal] = useState(false);
  const [nama, setNama] = useState(category.nama);
  const router = useRouter();
  function handleChange() {
    setModal(!modal);
  }
  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();

    let endpoint = `${API_URL}/category/${category.id}`;
    const data = { nama: nama };
    await axios.patch(endpoint, data);
    setNama("");
    router.refresh();
    setModal(false);
  };

  return (
    <div>
      <button className="btn" onClick={handleChange}>
        Edit
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Tambah Kategori</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label font-bold">Nama Kategori</label>
              <input
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                type="text"
                className="input w-full input-bordered"
                placeholder="add category"
              />
            </div>

            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleUpdate}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCategory;

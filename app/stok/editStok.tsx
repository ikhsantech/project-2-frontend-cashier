"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Stok = {
  id: number;
  menu_id: number;
  jumlah: number;
};

const API_URL = "http://127.0.0.1:8000/api";
const EditStok = (stok: Stok) => {
  const [modal, setModal] = useState(false);
  const [menu_id, setMenuId] = useState(stok.menu_id);
  const [jumlah, setJumlah] = useState(stok.jumlah);
  const router = useRouter();

  function handleChange() {
    setModal(!modal);
  }

  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();

    let endpoint = `${API_URL}/stok/${stok.id}`;
    const data = {
      menu_id: menu_id,
      jumlah: jumlah,
    };

    await axios.patch(endpoint, data);
    setMenuId(Number);
    setJumlah(Number);

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
          <h3 className="font-bold text-lg">Edit Stok</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label font-bold">Stok</label>
              <input
                value={menu_id}
                onChange={(e) => setMenuId(Number(e.target.value))}
                type="text"
                className="input w-full input-bordered"
                placeholder="Menu id"
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Jumlah</label>
              <input
                value={jumlah}
                onChange={(e) => setJumlah(Number(e.target.value))}
                type="text"
                className="input w-full input-bordered"
                placeholder="jumlah"
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
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditStok;

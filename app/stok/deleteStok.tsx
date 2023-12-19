"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

type Stok = {
  id: number;
  menu_id: number;
  jumlah: number;
};

const API_URL = "http://127.0.0.1:8000/api";

const DeleteStok = (stok: Stok) => {
  const [modal, setModal] = useState(false);
  const [menu_id, setMenuId] = useState("");
  const [jumlah, setJumlah] = useState("");
  const router = useRouter();

  function handleChange() {
    setModal(!modal);
  }

  const handleDelete = async (stokId: Number) => {
    let params = { id: stokId };
    let endpoint = `${API_URL}/stok/${stokId}`;
    const data = {
      menu_id: menu_id,
      jumlah: jumlah,
    };
    await axios.delete(endpoint);
    router.refresh();
    setModal(false);
  };

  return (
    <div>
      <button className="btn" onClick={handleChange}>
        Delete
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">HAPUS {stok.menu_id}</h3>

          <div className="modal-action">
            <button type="button" className="btn" onClick={handleChange}>
              Close
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleDelete(stok.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteStok;

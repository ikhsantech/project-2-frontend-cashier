"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API_URL = "http://127.0.0.1:8000/api";

type Jenis = {
  id: number;
  nama_jenis: string;
  kategori_id: number;
};

const DeleteJenis = (jenis: Jenis) => {
  const [modal, setModal] = useState(false);
  const [nama_jenis, setNamaJenis] = useState("");
  const [kategori_id, setKategoriId] = useState("");
  const router = useRouter();

  function handleChange() {
    setModal(!modal);
  }

  const handleDelete = async (jenisId: Number) => {
    let params = { id: jenisId };
    let endpoint = `${API_URL}/jenis/${jenisId}`;
    const data = {
      nama_jenis: nama_jenis,
      kategori_id: kategori_id,
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
          <h3 className="font-bold text-lg">HAPUS {jenis.nama_jenis}</h3>

          <div className="modal-action">
            <button type="button" className="btn" onClick={handleChange}>
              Close
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleDelete(jenis.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteJenis;

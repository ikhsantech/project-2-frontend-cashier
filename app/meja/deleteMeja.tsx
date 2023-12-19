"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API_URL = "http://127.0.0.1:8000/api";

type Meja = {
  id: number;
  nomor_meja: string;
  kapasitas: number;
  status: string;
};

const DeleteMeja = (meja: Meja) => {
  const [modal, setModal] = useState(false);
  const [nomor_meja, setNomorMeja] = useState("");
  const [kapasitas, setKapasitas] = useState("");
  const [status, setStatus] = useState("");
  const router = useRouter();

  function handleChange() {
    setModal(!modal);
  }

  const handleDelete = async (mejaId: Number) => {
    let params = { id: mejaId };
    let endpoint = `${API_URL}/meja/${mejaId}`;
    const data = {
      nomor_meja: nomor_meja,
      kapasitas: kapasitas,
      status: status,
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
          <h3 className="font-bold text-lg">HAPUS {meja.nomor_meja}</h3>

          <div className="modal-action">
            <button type="button" className="btn" onClick={handleChange}>
              Close
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleDelete(meja.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeleteMeja;

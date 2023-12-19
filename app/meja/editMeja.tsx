"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Meja = {
  id: number;
  nomor_meja: string;
  kapasitas: number;
  status: string;
};

const API_URL = "http://127.0.0.1:8000/api";

const EditMeja = (meja: Meja) => {
  const [modal, setModal] = useState(false);
  const [nomor_meja, setNomorMeja] = useState(meja.nomor_meja);
  const [kapasitas, setKapasitas] = useState(meja.kapasitas);
  const [status, setStatus] = useState(meja.status);
  const router = useRouter();

  function handleChange() {
    setModal(!modal);
  }

  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();

    let endpoint = `${API_URL}/meja/${meja.id}`;
    const data = {
      nomor_meja: nomor_meja,
      kapasitas: kapasitas,
      status: status,
    };

    await axios.patch(endpoint, data);
    setNomorMeja("");
    setKapasitas(Number);
    setStatus("");

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
          <h3 className="font-bold text-lg">Edit Meja</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label font-bold">Nomor Meja</label>
              <input
                value={nomor_meja}
                onChange={(e) => setNomorMeja(e.target.value)}
                type="text"
                className="input w-full input-bordered"
                placeholder="Nomor Meja"
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Kapasitas</label>
              <input
                value={kapasitas}
                onChange={(e) => setKapasitas(Number(e.target.value))}
                type="text"
                className="input w-full input-bordered"
                placeholder="Kapasitas"
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Status</label>
              <input
                value={nomor_meja}
                onChange={(e) => setStatus(e.target.value)}
                type="text"
                className="input w-full input-bordered"
                placeholder="Status"
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

export default EditMeja;

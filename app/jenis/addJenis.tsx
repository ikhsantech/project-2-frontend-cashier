"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API_URL = "http://127.0.0.1:8000/api";

const addJenis = () => {
  const [modal, setModal] = useState(false);
  const [nama_jenis, setNamaJenis] = useState("");
  const [kategori_id, setKategoriId] = useState("");
  const router = useRouter();

  function handleChange() {
    setModal(!modal);
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    let endpoint = `${API_URL}/jenis`;
    const data = {
      nama_jenis: nama_jenis,
      kategori_id: kategori_id,
    };

    await axios.post(endpoint, data);
    setNamaJenis("");
    setKategoriId("");
    router.refresh();
    setModal(false);
  };

  return (
    <>
      <button className="btn" onClick={handleChange}>
        Add new
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Jenis</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label font-bold">Nama Jenis</label>
              <input
                type="text"
                className="input w-full input-bordered"
                placeholder="Nama Jenis"
                value={nama_jenis}
                onChange={(e) => setNamaJenis(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Kategori Id</label>
              <input
                type="number"
                className="input w-full input-bordered"
                placeholder="Kategori Id"
                value={kategori_id}
                onChange={(e) => setKategoriId(e.target.value)}
              />
            </div>

            <div className="modal-action">
              <button className="btn" type="button" onClick={handleChange}>
                Close
              </button>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default addJenis;

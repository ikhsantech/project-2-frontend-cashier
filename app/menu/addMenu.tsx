"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API_URL = "http://127.0.0.1:8000/api";
const AddMenu = () => {
  const [modal, setModal] = useState(false);
  const [nama_menu, setNamaMenu] = useState("");
  const [harga, setHarga] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [jenis_id, setJenisId] = useState("");
  const router = useRouter();

  function handleChange() {
    setModal(!modal);
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    let endpoint = `${API_URL}/menu`;
    const data = {
      nama_menu: nama_menu,
      harga: harga,
      deskripsi: deskripsi,
      jenis_id: jenis_id,
    };
    await axios.post(endpoint, data);
    setNamaMenu("");
    setHarga("");
    setDeskripsi("");
    setJenisId("");
    router.refresh();
    setModal(false);
  };

  return (
    <div>
      <button className="btn" onClick={handleChange}>
        add New
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add new Menu</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label font-bold">Nama Menu</label>
              <input
                type="text"
                className="input w-full input-bordered"
                placeholder="Tambah Menu"
                value={nama_menu}
                onChange={(e) => setNamaMenu(e.target.value)}
              />

              <label className="label font-bold">Harga</label>
              <input
                type="number"
                className="input w-full input-bordered"
                placeholder="Harga"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
              />

              <label className="label font-bold">Deskripsi</label>
              <input
                type="text"
                className="input w-full input-bordered"
                placeholder="tambahkan Deskripsi Menu"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
              />

              <label className="label font-bold">Jenis</label>
              <input
                type="number"
                className="input w-full input-bordered"
                placeholder="Jenis"
                value={jenis_id}
                onChange={(e) => setJenisId(e.target.value)}
              />
            </div>

            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Add Menu
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMenu;

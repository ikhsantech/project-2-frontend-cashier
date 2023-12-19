"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API_URL = "http://127.0.0.1:8000/api";
const addCategory = () => {
  const [modal, setModal] = useState(false);
  const [nama, setNama] = useState("");
  const router = useRouter();
  function handleChange() {
    setModal(!modal);
  }
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    let endpoint = `${API_URL}/category`;
    const data = { nama: nama };
    await axios.post(endpoint, data);
    setNama("");
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
          <h3 className="font-bold text-lg">Tambah Kategori</h3>
          <form onSubmit={handleSubmit}>
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
                onClick={handleSubmit} >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default addCategory;

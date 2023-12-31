"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API_URL = "http://127.0.0.1:8000/api";

const addPelanggan = () => {
  const [modal, setModal] = useState(false);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nomor_telepon, setNomorTelepon] = useState("");
  const [alamat, setAlamat] = useState("");
  const router = useRouter();

  function handleChange() {
    setModal(!modal);
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    let endpoint = `${API_URL}/pelanggan`;
    const data = {
      nama: nama,
      email: email,
      nomor_telepon: nomor_telepon,
      alamat: alamat,
    };

    await axios.post(endpoint, data);
    setNama("");
    setEmail("");
    setNomorTelepon("");
    setAlamat("");
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
          <h3 className="font-bold text-lg">Add New pelanggan</h3>
          <form>
            <div className="form-control">
              <label className="label font-bold">Nama</label>
              <input
                type="text"
                className="input w-full input-bordered"
                placeholder="Nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Email</label>
              <input
                type="email"
                className="input w-full input-bordered"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Nomor Telepon</label>
              <input
                type="number"
                className="input w-full input-bordered"
                placeholder="Nomor Telepon"
                value={nomor_telepon}
                onChange={(e) => setNomorTelepon(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Alamat</label>
              <input
                type="text"
                className="input w-full input-bordered"
                placeholder="Alamat"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
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

export default addPelanggan;

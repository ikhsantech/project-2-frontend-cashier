"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API_URL = "http://127.0.0.1:8000/api";

const addMeja = () => {
  const [modal, setModal] = useState(false);
  const [nomor_meja, setNomorMeja] = useState("");
  const [kapasitas, setKapasitas] = useState("");
  const [status, setStatus] = useState("");
  const router = useRouter();

  function handleChange() {
    setModal(!modal);
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    let endpoint = `${API_URL}/meja`;
    const data = {
      nomor_meja: nomor_meja,
      kapasitas: kapasitas,
      status: status,
    };

    await axios.post(endpoint, data);
    setNomorMeja("");
    setKapasitas("");
    setStatus("");
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
          <h3 className="font-bold text-lg">Add New Meja</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label font-bold">Nomor Meja</label>
              <input
                type="text"
                className="input w-full input-bordered"
                placeholder="Nomor Meja"
                value={nomor_meja}
                onChange={(e) => setNomorMeja(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Kapasitas</label>
              <input
                type="text"
                className="input w-full input-bordered"
                placeholder="kapasitas"
                value={kapasitas}
                onChange={(e) => setKapasitas(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Status</label>
              <input
                type="text"
                className="input w-full input-bordered"
                placeholder="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
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
export default addMeja;

"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API_URL = "http://127.0.0.1:8000/api";

const addStok = () => {
  const [modal, setModal] = useState(false);
  const [menu_id, setMenuId] = useState("");
  const [jumlah, setJumlah] = useState("");
  const router = useRouter();

  function handleChange() {
    setModal(!modal);
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();


    let endpoint = `${API_URL}/stok`;
    const data = {
      menu_id: menu_id,
      jumlah: jumlah,
    };

    await axios.post(endpoint, data);
    setMenuId("");
    setJumlah("");
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
          <h3 className="font-bold text-lg">Add New</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label font-bold">Menu Id</label>
              <input
                type="number"
                className="input w-full input-bordered"
                placeholder="menu Id"
                value={menu_id}
                onChange={(e) => setMenuId(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Jumlah</label>
              <input
                type="number"
                className="input w-full input-bordered"
                placeholder="Jumlah"
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
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
export default addStok;

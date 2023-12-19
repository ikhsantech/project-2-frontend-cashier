"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Menu = {
  id: number;
  nama_menu: string;
  harga: number;
  deskripsi: string;
  jenis_id: number;
};

const API_URL = "http://127.0.0.1:8000/api";
const DeleteMenu = (menu: Menu) => {
  const [modal, setModal] = useState(false);
  const [nama_menu, setNama_menu] = useState("");
  const [harga, setHarga] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [jenis_id, setJenis_id] = useState("");
  const router = useRouter();

  function handleChange() {
    setModal(!modal);
  }

  const handleDelete = async (menuId: Number) => {
    let params = { id: menuId };
    let endpoint = `${API_URL}/menu/${menuId}`;
    const data = {
      nama_menu: nama_menu,
      harga: harga,
      deskripsi: deskripsi,
      jenis_id: jenis_id,
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
          <h3 className="font-bold text-lg">HAPUS {menu.nama_menu}</h3>

          <div className="modal-action">
            <button type="button" className="btn" onClick={handleChange}>
              Close
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleDelete(menu.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteMenu;

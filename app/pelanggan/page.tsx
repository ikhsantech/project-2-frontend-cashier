import React from "react";
import axios from "axios";
import AddPelanggan from "./addPelanggan";
import DeletePelanggan from "./deletePelanggan";
import EditPelanggan from "./editPelanggan";

type Pelanggan = {
  id: number;
  nama: string;
  email: string;
  nomor_telepon: number;
  alamat: string;
};

const getPelanggan = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/pelanggan");

  return res.data.data;
};

const pelanggan = async () => {
  const pelanggan: Pelanggan[] = await getPelanggan();
  return (
    <>
      <div className="overflow-x-auto">
        <div>
          <AddPelanggan />
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Nomor Telepon</th>
              <th>Alamat</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {pelanggan.map((pelanggan, index) => (
              <tr
                key={pelanggan.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <th>{index + 1}</th>
                <td>{pelanggan.nama}</td>
                <td>{pelanggan.email}</td>
                <td>{pelanggan.nomor_telepon}</td>
                <td>{pelanggan.alamat}</td>
                <td className="flex">
                  <div className="mr-1">
                    <DeletePelanggan {...pelanggan} />
                  </div>
                  <EditPelanggan {...pelanggan} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default pelanggan;

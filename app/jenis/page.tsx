import React from "react";
import axios from "axios";
import AddJenis from "./addJenis";
import DeleteJenis from "./deleteJenis";
import EditJenis from "./editJenis";

type Jenis = {
  id: number;
  nama_jenis: string;
  kategori_id: number;
};

const getJenis = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/jenis");

  return res.data.data;
};

const jenis = async () => {
  const jenis: Jenis[] = await getJenis();
  return (
    <div className="overflow-x-auto">
      <div>
        <AddJenis />
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Jenis</th>
            <th>Kategori Id</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {jenis.map((jenis, index) => (
            <tr
              key={jenis.id}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
            >
              <th>{index + 1}</th>
              <td>{jenis.nama_jenis}</td>
              <td>{jenis.kategori_id}</td>
              <td className="flex">
                <div className="mr-1">
                  <DeleteJenis {...jenis} />
                </div>
                <EditJenis {...jenis} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default jenis;

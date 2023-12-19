import React from "react";
import axios from "axios";
import AddMeja from "./addMeja";
import DeleteMeja from "./deleteMeja";
import EditMeja from "./editMeja";

type Meja = {
  id: number;
  nomor_meja: string;
  kapasitas: number;
  status: string;
};

const getMeja = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/meja");

  return res.data.data;
};

const meja = async () => {
  const meja: Meja[] = await getMeja();
  return (
    <>
      <div className="overflow-x-auto">
        <div>
          <AddMeja />
        </div>

        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>meja Id</th>
              <th>Nomor Meja</th>
              <th>Kapasitas</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {meja.map((meja, index) => (
              <tr
                key={meja.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <th>{index + 1}</th>
                <td>{meja.nomor_meja}</td>
                <td>{meja.kapasitas}</td>
                <td>{meja.status}</td>
                <td className="flex">
                  <div className="mr-1">
                    <DeleteMeja {...meja} />
                  </div>
                  <EditMeja {...meja} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default meja;

import React from "react";
import axios from "axios";
import AddStok from "./addStok";
import DeleteStok from "./deleteStok";
import EditStok from "./editStok";

type Stok = {
  id: number;
  menu_id: number;
  jumlah: number;
};

const getStok = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/stok");

  return res.data.data;
};

const stok = async () => {
  const stok: Stok[] = await getStok();
  return (
    <>
      <div className="overflow-x-auto">
        <div>
          <AddStok />
        </div>

        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Stok Id</th>
              <th>Menu Id</th>
              <th>Jumlah</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {stok.map((stok, index) => (
              <tr
                key={stok.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <th>{index + 1}</th>
                <td>{stok.menu_id}</td>
                <td>{stok.jumlah}</td>
                <td className="flex">
                  <div className="mr-1">
                    <DeleteStok {...stok} />
                  </div>
                  <EditStok {...stok} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default stok;

import React from "react";
import axios from "axios";
import AddMenu from "./addMenu";
import DeleteMenu from "./deleteMenu";
import EditMenu from "./editMenu";

type Menu = {
  id: number;
  nama_menu: string;
  harga: number;
  deskripsi: string;
  jenis_id: number;
};

const getMenu = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/menu");

  return res.data.data;
};

const Menu = async () => {
  const menu: Menu[] = await getMenu();
  return (
    <>
      <AddMenu />

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>NO</th>
              <th>Nama Menu</th>
              <th>Harga</th>
              <th>Deskripsi</th>
              <th>Jenis</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menu.map((menu, index) => (
              <tr
                key={menu.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <th>{index + 1}</th>
                <td>{menu.nama_menu}</td>
                <td>{menu.harga}</td>
                <td>{menu.deskripsi}</td>
                <td>{menu.jenis_id}</td>
                <td className="flex">
                  <div className="mr-1">
                    <DeleteMenu {...menu} />
                  </div>
                  <EditMenu {...menu} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Menu;

import React from "react";
import axios from "axios";
import AddCategory from "./addCategory";
import DeleteCategory from "./deleteCategory";
import EditCategory from "./editCategory";

type Category = {
  id: number;
  nama: string;
};

const getCategory = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/category");

  return res.data.data;
};

const Category = async () => {
  const category: Category[] = await getCategory();
  return (
    <>
      <div className="overflow-x-auto">
        <div>
          <AddCategory />
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Kategori</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {category.map((category, index) => (
              <tr
                key={category.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <td>{index + 1}</td>
                <td>{category.nama}</td>
                <td className="flex">
                  <div className="mr-1">
                    <DeleteCategory {...category} />
                  </div>
                  <EditCategory {...category} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Category;

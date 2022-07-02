import React from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";

const Table = () => {
   return (
      <table className="min-w-full table-auto">
         <thead>
            <tr className="bg-gray-700">
               <th className="px-16 py-2 text-gray-200">Name</th>
               <th className="px-16 py-2 text-gray-200">Email</th>
               <th className="px-16 py-2 text-gray-200">Salary</th>
               <th className="px-16 py-2 text-gray-200">Birthday</th>
               <th className="px-16 py-2 text-gray-200">Status</th>
               <th className="px-16 py-2 text-gray-200">Actions</th>
            </tr>
         </thead>
         <tbody className="bg-gray-100">
            <tr>
               <td className="px-16 py-2">
                  <img src="#" alt="" />
                  <span className="ml-2 font-semibold">{"asdf"}</span>
               </td>
               <td className="px-16 py-2">asdf@gmail.com</td>
               <td className="px-16 py-2">$25000</td>
               <td className="px-16 py-2">27-10-1990</td>
               <td className="px-16 py-2">
                  <button className="bg-green-600 hover:bg-green-700 active:bg-green-600 ease-in duration-150 text-white px-5 py-1 rounded-full shadow">
                     Active
                  </button>
               </td>
               <td className="px-16 py-2 space-x-4">
                  <button className="text-amber-600 text-lg">
                     <BiEdit />
                  </button>
                  <button className="text-red-600 text-lg">
                     <BiTrashAlt />
                  </button>
               </td>
            </tr>
         </tbody>
      </table>
   );
};

export default Table;

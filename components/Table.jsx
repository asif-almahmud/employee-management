import React from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";

const Table = () => {
   return (
      <>
         <table className="min-w-full table-auto text-xs sm:text-base bg-gray-100">
            <tr className="bg-gray-700">
               <th className="px-1 py-1 text-gray-200">Name</th>
               <th className="px-1 py-1 text-gray-200">Email</th>
               <th className="px-1 py-1 text-gray-200">Salary</th>
               <th className="px-1 py-1 text-gray-200">Birthday</th>
               <th className="px-1 py-1 text-gray-200">Status</th>
               <th className="px-1 py-1 text-gray-200">Actions</th>
            </tr>
            <tr>
               <td className="px-1 py-1 text-center">
                  <img src="#" alt="" />
                  <span className="ml-2 font-semibold">{"asdf"}</span>
               </td>
               <td className="px-1 py-1 text-center">asdf@gmail.com</td>
               <td className="px-1 py-1 text-center">$25000</td>
               <td className="px-1 py-1 text-center">27-10-1990</td>
               <td className="px-1 py-1 text-center">
                  <button className="bg-green-600 hover:bg-green-700 active:bg-green-600 ease-in duration-150 text-white px-4 py-px rounded-full shadow">
                     Active
                  </button>
               </td>
               <td className="px-1 py-1 space-x-4 text-center">
                  <button className="text-amber-600 text-lg">
                     <BiEdit />
                  </button>
                  <button className="text-red-600 text-lg">
                     <BiTrashAlt />
                  </button>
               </td>
            </tr>
         </table>
      </>
   );
};

export default Table;

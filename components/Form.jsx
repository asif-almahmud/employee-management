import { useEffect, useRef } from "react";

const Form = () => {
   const ref = useRef();

   return (
      <div className="w-full flex flex-row justify-center">
         <form className="w-full space-y-4 sm:w-3/4 md:w-1/2">
            <input
               autoFocus
               type="text"
               name="firstname"
               placeholder="First Name"
               className="input-type border w-full border-gray-200/80 px-4 py-2 focus:outline-3 focus:outline-green-300/80 rounded-md"
            />
            <input
               type="text"
               name="lastname"
               placeholder="Last Name"
               className="input-type border w-full border-gray-200/80  px-4 py-2 focus:outline-3 focus:outline-green-300/80 rounded-md"
            />
            <input
               type="text"
               name="email"
               placeholder="Email"
               className="input-type border w-full border-gray-200/80  px-4 py-2 focus:outline-3 focus:outline-green-300/80 rounded-md"
            />
            <input
               type="text"
               name="salary"
               placeholder="Salary"
               className="input-type border w-full border-gray-200/80  px-4 py-2 focus:outline-3 focus:outline-green-300/80 rounded-md"
            />

            <input
               type="date"
               name="date"
               placeholder="Date"
               className="border px-5 py-3 focus:outline-none rounded-md"
            />

            <div className="space-y-1">
               <div className="form-check flex flex-row items-center space-x-3">
                  <input
                     id="radio-button-1"
                     type="radio"
                     name="status"
                     value="active"
                     className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-gray-50 checked:bg-green-500 checked:border-none ease-in duration-300 mb-[3px] cursor-pointer"
                  />
                  <label htmlFor="radio-button-1" className="cursor-pointer">
                     Active
                  </label>
               </div>
               <div className="form-check inline-flex flex-row items-center space-x-3">
                  <input
                     id="radio-button-2"
                     type="radio"
                     name="status"
                     value="inactive"
                     className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-gray-50 checked:bg-green-500 checked:border-none ease-in duration-300 mb-[3px] cursor-pointer"
                  />
                  <label htmlFor="radio-button-2" className="cursor-pointer">
                     Inactive
                  </label>
               </div>
            </div>
            <button className="w-full px-6 pt-2 pb-1 border bg-green-500 rounded-md font-semibold text-white hover:bg-green-600 active:bg-green-500 ease-in duration-300">
               Add
            </button>
         </form>
      </div>
   );
};

export default Form;

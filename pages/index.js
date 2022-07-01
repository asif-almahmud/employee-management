import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { BiUserPlus } from "react-icons/bi";

export default function Home() {
   return (
      <div>
         <Head>
            <title>Employee Management</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className="py-5 ">
            <h1 className="text-xl md:text-5xl text-center font-bold py-10">
               Employee Management
            </h1>
            <div className="container mx-auto flex justify-between py-5 border-b">
               <div className="left flex gap-3">
                  <button className="flex gap-2 items-center bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-indigo-600 hover:text-gray-50 active:bg-indigo-800 drop-shadow-md hover:drop-shadow-xl ease-in duration-200">
                     Add Employee <BiUserPlus size={20} />
                  </button>
               </div>

               {/* collapsible form */}

               {/* table */}
            </div>
         </main>
      </div>
   );
}

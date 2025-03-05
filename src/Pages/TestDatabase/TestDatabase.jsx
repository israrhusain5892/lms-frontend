import { PiHandWavingBold } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import profile from "../../assets/images/profile.png"
import {  FiGrid,FiFileText } from "react-icons/fi";
import { FaRegFile } from "react-icons/fa";
import { IoClipboardOutline } from "react-icons/io5";
import { VscFileSubmodule } from "react-icons/vsc";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { GoBook } from "react-icons/go";
import "./testdatabase.css"

export default function Dashboard() {
  return (
    <div className="h-screen w-full bg-blue-50 flex flex-col">
    
      {/* Top Bar */}
      <div className="w-full bg-blue-50 p-4 flex justify-between items-center">
        <h1 className="text-4xl font-bold flex items-center Raleway">
          Hello Ibrahim <span className="ml-2"><PiHandWavingBold className="text-4xl transform scale-x-[-1] ml-2"/></span>
        </h1>
        <div className="flex items-center space-x-4">
          
          <img src={profile} alt="profile"/>
          <IoMdNotificationsOutline className="text-3xl cursor-pointer" />
        </div>
      </div>

      {/* Main Container (Sidebar + Content) */}
      <div className="flex flex-1 p-4 bg-blue-50">
      
        {/* Sidebar */}
        <aside className="w-64 bg-white  p-5 flex flex-col rounded-lg">
          <h2 className="text-xl font-bold text-[#2556eb]">Web Developing</h2>
          <nav className="mt-4 flex-1">
            <ul className="space-y-2 text-[#1B2128] text-lg font-medium">
              {[
                { name: "Dashboard", icon: <FiGrid/> },
                { name: "Announcements", icon: <MdOutlineNotificationsActive/> },
                { name: "Sessions", icon: <GoBook/> },
                { name: "Videos", icon: <VscFileSubmodule/>},
                { name: "Task", icon: <IoClipboardOutline/> },
                { name: "Test", icon:<FaRegFile/>, active: true },
                { name: "Article", icon:<FiFileText/> },
              ].map((item, index) => (
                <li
                  key={index}
                  className={`p-2 flex items-center rounded-md cursor-pointer ${
                    item.active ? "bg-blue-100 text-blue-600 font-semibold" : "hover:bg-gray-100"
                  }`}
                >
                  <span className="mr-2">{item.icon}</span> {item.name}
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-white rounded-lg ">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold Raleway">Test Database</h2>
            <button className="bg-[#3B76F6] text-white px-10 Inter font-semibold py-3 rounded-md">Add</button>
          </div>

          {/* Table Container */}
          <div className="bg-white p-4 rounded-lg ">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#F3F6F9] border-[#F0F0F0] text-left ">
                  {["S.NO", "Name", "Email", "Date", "Result"].map((head, index) => (
                    <th key={index} className="p-3 font-bold border">{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["1", "Stephanie Sharkey", "kurt_bates@outlook.com", "Aug 2, 2024", "30/30"],
                  ["2", "Jerry Helfer", "r.g.rhodes@aol.com", "Jul 16, 2024", "12/30"],
                  ["3", "Kenneth Allen", "rodger913@aol.com", "Jul 25, 2024", "15/30"],
                  ["4", "Rodger Struck", "james_hall@gmail.com", "Jul 29, 2024", "18/30"],
                  ["5", "Stephanie Nicol", "dennis416@gmail.com", "Jul 28, 2024", "9/30"],
                  ["6", "Chris Glasser", "Daniel_hamilton@aol.com", "Aug 2, 2024", "19/30"],
                  ["7", "Autumn Phillips", "eddie_lake@gmail.com", "Aug 6, 2024", "17/30"],
                  ["8", "Ricky Smith", "judith403@gmail.com", "Jul 18, 2024", "14/30"],
                  ["9", "Alex Buckmaster", "c.a.glasser@outlook.com", "Jul 28, 2024", "11/30"],
                  ["10", "Mary Freund", "r.m.smith@gmail.com", "Jul 25, 2024", "22/30"],
                ].map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-b hover:bg-gray-50">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="p-3 border">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-end items-center mt-4">
              <span className="mr-2">Page</span>
              <select className="border p-1 rounded">
                <option>1</option>
              </select>
              <span className="ml-2">of 10</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

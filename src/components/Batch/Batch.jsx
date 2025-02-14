/* eslint-disable no-unused-vars */
import profile from "../../assets/images/profile.png";
import { FaSearch, FaList } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { PiHandWavingBold } from "react-icons/pi";

import "./batch.css";
const batches = [
  {
    id: 1,
    course: "Introduction to Computer Science",
    batch: "Batch 1",
    students: 30,
    tutor: "Lorri Warf",
    date: "Aug 2, 2024",
  },
  {
    id: 2,
    course: "Fundamentals of Mathematics",
    batch: "Batch 2",
    students: 12,
    tutor: "Stephanie Sharkey",
    date: "Jul 16, 2024",
  },
  {
    id: 3,
    course: "World History Overview",
    batch: "Batch 1",
    students: 15,
    tutor: "Dennis Callis",
    date: "Jul 25, 2024",
  },
  {
    id: 4,
    course: "Basic Principles of Economics",
    batch: "Batch 2",
    students: 18,
    tutor: "Alex Buckmaster",
    date: "Jul 29, 2024",
  },
  {
    id: 5,
    course: "Advanced Data Structures and Al...",
    batch: "Batch 1",
    students: 9,
    tutor: "Daniel Hamilton",
    date: "Jul 28, 2024",
  },
  {
    id: 6,
    course: "Introduction to Artificial Intellige...",
    batch: "Batch 2",
    students: 32,
    tutor: "Kenneth Allen",
    date: "Aug 2, 2024",
  },
  {
    id: 7,
    course: "Sustainable Environmental Practi...",
    batch: "Batch 1",
    students: 17,
    tutor: "Kurt Bates",
    date: "Aug 6, 2024",
  },
  {
    id: 8,
    course: "Cultural Anthropology",
    batch: "Batch 1",
    students: 14,
    tutor: "Ricky Smith",
    date: "Jul 18, 2024",
  },
  {
    id: 9,
    course: "Cybersecurity Fundamentals",
    batch: "Batch 2",
    students: 11,
    tutor: "Ricky Smith",
    date: "Jul 28, 2024",
  },
  {
    id: 10,
    course: "Digital Marketing Essentials",
    batch: "Batch 2",
    students: 22,
    tutor: "Chris Glasser",
    date: "Jul 25, 2024",
  },
];

const BatchManagement = () => {
  return (
    
    <div className="p-6 bg-gray-100  w-full">
      {/* Sidebar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold flex items-center">
          Hello Ibrahim <PiHandWavingBold className="text-3xl transform scale-x-[-1] ml-2"/>
        </h1>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
            <img src={profile} alt="profile"/>
          </div>
          <IoMdNotificationsOutline className="text-3xl cursor-pointer" />

        </div>
      </div>
      <div className="flex justify-between items-center flex-col md:flex-row gap-4">

      <aside className="bg-white p-4 rounded-lg shadow md:w-1/4 w-full leading-8">
        <div className="flex items-center gap-5">
          <button className="font-semibold text-lg mb-4 flex gap-2 p-2 border-2 rounded-md border-black items-center ">
            <IoFilterSharp />
            Filters
          </button>
          <span className="text-[#534FEB] font-bold cursor-pointer"> Clear filters</span>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-xl">Course Name</h3>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" checked />
            <span>Introduction to Photography</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Exploring the Art of Visual</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>The Magic of Narrative </span>
          </label>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-xl">Account</h3>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" checked />
            <span>Ongoing</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Suspended</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Completed</span>
          </label>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-xl">Tutor Name</h3>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" checked />
            <span>James Hall</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Eddie lake</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Katie Sims</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Stephanie Sharkey</span>
          </label>
        </div>
      </aside>

      {/* Main Content */}
      <div className="md:w-3/4 w-full p-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold decoration-gray-300 underline underline-offset-8">Batch Management</h1>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-[#FBFCFE] rounded-md border border-[#D0D9E7]">
              <FaList />
            </button>
            <button className="px-4 py-2 bg-[#FBFCFE] border border-[#D0D9E7] flex items-center gap-2 font-semibold rounded-md">
              <GiSettingsKnobs className="text-xl" />
              Sort
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder="Search here"
                className="border p-2 text-black pl-8 rounded-md w-40 md:w-60 border-[#D0D9E7]"
              />
              <FaSearch className="absolute left-2 top-3 text-gray-500" />
            </div>
            <button className="px-4 py-2 bg-[#3B76F6] interfont font-bold text-white rounded-md">
              Add Batch
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="w-full">
            <thead className="bg-gray-200 text-left">
              <tr>
                <th className="p-3">S.NO</th>
                <th className="p-3">Course Name</th>
                <th className="p-3">Batch</th>
                <th className="p-3">Students Count</th>
                <th className="p-3">Tutor Name</th>
                <th className="p-3">Course Created</th>
              </tr>
            </thead>
            <tbody>
              {batches.map((batch, index) => (
                <tr key={batch.id} className="border-t hover:bg-gray-100">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{batch.course}</td>
                  <td className="p-3">{batch.batch}</td>
                  <td className="p-3">{batch.students}</td>
                  <td className="p-3">{batch.tutor}</td>
                  <td className="p-3">{batch.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BatchManagement;

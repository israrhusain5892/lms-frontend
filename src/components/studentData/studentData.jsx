import { useState } from "react";
import { FaFilter, FaSearch, FaSort } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import "./studentdata.css";
const studentData = [
  { id: "#12345", name: "Lorri Warf", email: "s.t.sharkey@outlook.com", phone: "(813) 752-5611" },
  { id: "#12346", name: "Stephanie Sharkey", email: "dennis416@gmail.com", phone: "(401) 715-3344" },
  { id: "#12347", name: "Dennis Callis", email: "j.e.dukes@aol.com", phone: "(267) 739-6240" },
  { id: "#12348", name: "Alex Buckmaster", email: "alex941@outlook.com", phone: "(765) 322-1399" },
  { id: "#12349", name: "Daniel Hamilton", email: "kurt_bates@outlook.com", phone: "(406) 382-2670" },
  { id: "#12350", name: "Kenneth Allen", email: "judith403@gmail.com", phone: "(214) 390-8650" },
  { id: "#12351", name: "Kurt Bates", email: "autumn_philips@aol.com", phone: "(214) 390-8650" },
  { id: "#12352", name: "Ricky Smith", email: "stephanienicol@outlook.com", phone: "(917) 339-6416" },
  { id: "#12353", name: "Stephanie Nicol", email: "k_pacheco@gmail.com", phone: "(215) 424-7763" },
  { id: "#12354", name: "Chris Glasser", email: "dennis416@gmail.com", phone: "(214) 390-8650" }
];

export default function StudentManagement() {

    const [page, setPage] = useState(1);
  const totalPages = 10;
  const [search, setSearch] = useState("");
  const filteredStudents = studentData.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex">
      {/* Sidebar Filters */}
      <div className="w-1/4 p-4 border-r">
        <div className="flex items-center flex-wrap">
        <button className="flex items-center gap-2 text-gray-700 font-bold mb-4 border-2 border-black md:p-2 p-1 rounded-lg mr-4">
          <FaFilter /> Filter
        </button>

        <h2 className="text-[#534FEB] font-bold">Clear filters</h2>
        </div>

        <div className="mb-4">
          <h3 className="font-bold mb-2">Gender</h3>
          <label className="block"><input type="checkbox" name="gender" /> Female</label>
          <label className="block"><input type="checkbox" name="gender" /> Male</label>
        </div>
        <div className="mb-4 ">
          <h3 className="font-bold mb-2">State</h3>
          <div className="relative w-full max-w-md mx-auto">
  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
  <input 
    type="text" 
    className="w-full border rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
    placeholder="Search place" 
  />
</div>

          <label className="block"><input type="checkbox" /> Place 1</label>
          <label className="block"><input type="checkbox" /> Place 2</label>
          <label className="block"><input type="checkbox" /> Place 3</label>
        </div>
          <h3 className="font-bold mb-2">District</h3>
          <div className="relative w-full max-w-md mx-auto">
  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
  <input 
    type="text" 
    className="w-full border rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
    placeholder="Search place" 
  />
</div>


        <div className="mb-4 ">
          <h3 className="font-bold mb-2">State</h3>

          <label className="block"><input type="checkbox" /> Web Developing </label>
          <label className="block"><input type="checkbox" /> Html </label>
          <label className="block"><input type="checkbox" /> JavaScript </label>
          <label className="block"><input type="checkbox" /> SQL </label>
        </div>
        <div className="mb-4 ">
          <h3 className="font-bold mb-2">Batch</h3>

          <label className="block"><input type="checkbox" /> Web Developing </label>
          <label className="block"><input type="checkbox" /> Html </label>
          <label className="block"><input type="checkbox" /> JavaScript </label>
          <label className="block"><input type="checkbox" /> SQL </label>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="w-3/4 p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Clear search"
              className="w-full border border-gray-300 rounded-md py-2 pl-8 pr-10 focus:ring-2 focus:ring-blue-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute left-2 top-3 text-gray-400" />
            {search && (
              <FiX
                className="absolute right-2 top-3 text-gray-400 cursor-pointer"
                onClick={() => setSearch("")}
              />
            )}
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Create Account</button>
        </div>
        <h2 className="text-xl font-bold mb-3">Student Management</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#d1f0f644]">
                <th className="border px-4 py-2">S.NO</th>
                <th className="border px-4 py-2 flex items-center justify-between">
                  Trainee Id <FaSort className="ml-1 text-gray-500 cursor-pointer" />
                </th>
                <th className="border px-4 py-2">Student Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Phone number</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => (
                <tr key={index} className="border">
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{student.id}</td>
                  <td className="border px-4 py-2">{student.name}</td>
                  <td className="border px-4 py-2">{student.email}</td>
                  <td className="border px-4 py-2">{student.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex p-5 justify-end items-center space-x-2 text-black text-md">
      <span>Page</span>
      <div className="relative ">
        <select
          value={page}
          onChange={(e) => setPage(Number(e.target.value))}
          className="appearance-none border-4  rounded-md px-6 py-2 text-center cursor-pointer focus:outline-none"
        >
          {Array.from({ length: totalPages }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none">▼</span>
      </div>
      <span>of {totalPages}</span>
    </div>
      
      </div>
    </div>
  );
}
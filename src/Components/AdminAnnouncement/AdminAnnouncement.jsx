/* eslint-disable react/prop-types */
import { useState } from "react";
import "./AdminAnnouncement.css";

const AnnouncementModal = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl sm:max-w-xl md:max-w-3xl lg:max-w-4xl">
        <h2 className="text-2xl text-[#1E1E1E] font-bold mb-4 Raleway">Create Announcements</h2>
        <div className="space-y-4">
          <label className="text-lg text-[#1E1E1E] font-bold Manrope">Title </label>
          <input type="text" placeholder="Enter title here" className="Raleway w-full text-sm font-semibold text-[#686868] p-3 border rounded shadow-sm border-[#D8DDE3]" />
          <label className="text-lg font-bold text-[#1E1E1E] Manrope">Description </label>
          <textarea placeholder="Enter description" className="w-full p-3 border Raleway text-sm font-semibold text-[#686868] rounded h-24 shadow-sm border-[#D8DDE3]"></textarea>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <span className="flex flex-col">
              <label className="text-lg font-bold text-[#1E1E1E] Manrope">Batch Name</label>
              <input type="text" placeholder="Enter Batch Name" className="p-3 border text-sm Raleway font-semibold text-[#686868] rounded shadow-sm border-[#D8DDE3]" />
            </span>  
            <span className="flex flex-col">
              <label className="text-lg font-bold text-[#1E1E1E] Manrope">Course Name</label>
              <input type="text" placeholder="Enter Course Name" className="p-3 border text-sm Raleway font-semibold text-[#686868] rounded shadow-sm border-[#D8DDE3]" />
            </span>
            <span className="flex flex-col">
              <label className="text-lg font-bold text-[#1E1E1E] Manrope">Whom to be notified</label>
              <input type="text" placeholder="Enter who to be notified" className="p-3 border text-sm font-semibold Raleway text-[#686868] rounded shadow-sm border-[#D8DDE3]" />
            </span>
            <span className="flex flex-col">
              <label className="text-lg font-bold text-[#1E1E1E] Manrope">Name</label>
              <select className="p-3 border Raleway font-semibold text-[#686868] rounded text-sm shadow-sm border-[#D8DDE3]">
                <option>Select Author</option>
              </select>
            </span>
          </div>
          <div className="flex justify-start">
            <button className="px-6 py-3 bg-[#3B76F6] text-white font-bold rounded Inter">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AnnouncementPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded">Create Announcement</button>
      <AnnouncementModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
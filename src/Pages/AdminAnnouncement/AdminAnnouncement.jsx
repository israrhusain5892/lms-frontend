/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./aadminannouncement.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdOutlineWavingHand } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PiHandWavingBold } from "react-icons/pi";
import profile from "../../assets/images/profile.png"
const announcements = [
  {
    id: 1,
    name: "Samantha Payne",
    username: "@Sam.Payne90",
    date: "Dec 20, 2024 09:35 pm",
    role: "Teacher",
    message:
      "Hello Students, We regret to inform you that the recorded session is currently unavailable for viewing. We understand this may be disappointing, and we are actively working to resolve the issue. Please stay tuned for updates.",
  },
  {
    id: 2,
    name: "Samantha Payne",
    username: "@Sam.Payne90",
    date: "Dec 20, 2024 09:35 pm",
    role: "Staff",
    message:
      "Hello Students, We sincerely apologize for the inconvenience, but the recorded session is currently unavailable. We understand how disappointing this can be, and please rest assured that our dedicated team is working tirelessly to resolve the issue as quickly as possible. Your patience and understanding during this time are greatly appreciated. Thank you for your continued support!",
  },
  {
    id: 3,
    name: "Samantha Payne",
    username: "@Sam.Payne90",
    date: "Dec 20, 2024 09:35 pm",
    role: "Admin",
    message:
      "Hello Students, We regret to inform you that access to the recorded session is temporarily unavailable. We understand how important this is for your learning experience, and we are fully committed to resolving this issue as quickly as possible. Our dedicated team is actively working to restore access, and we appreciate your patience during this time. Stay tuned for updates!",
  },
];

const AnnouncementCard = ({ announcement }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-base text-gray-900">{announcement.name}</h2>
          <p className="text-sm font-medium text-[#64748B]">{announcement.username} • {announcement.date}</p>
        </div>
        <span className="px-3 py-1 text-sm bg-green-50 font-medium text-[#064E3B] rounded-full flex gap-2 items-center"><FaCheck/>{announcement.role}</span>
      </div>
      <h3 className="font-bold mt-2">Batch 1</h3>
      <p className="text-[#191D23] font-medium mt-1">{announcement.message}</p>
    </div>
  );
};

const AnnouncementPopup = ({ onClose }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4" onClick={onClose}>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl sm:max-w-xl md:max-w-3xl lg:max-w-4xl" onClick={(e) => e.stopPropagation()}>
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
            <div className="flex justify-start gap-3">
              <button className="px-6 py-3 bg-[#3B76F6] text-white font-bold rounded Inter">Submit</button>
              <button onClick={onClose} className="px-6 py-3 text-[#3B76F6] border border-[#3b76f6] font-bold rounded Inter">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

const Announcements = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="bg-blue-50 mx-auto p-6 min-h-screen">
    <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold font-[Raleway] flex items-center">
          Hello Ibrahim <PiHandWavingBold className="text-4xl transform scale-x-[-1] ml-2"/>
        </h1>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
            <img src={profile} alt="profile"/>
          </div>
          <IoMdNotificationsOutline className="text-3xl cursor-pointer" />

        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <h2 className="text-xl Raleway font-bold">Announcements</h2>
        <button onClick={() => setShowPopup(true)} className="bg-[#3B76F6] text-white px-10 Inter py-3 rounded-lg">Add</button>
      </div>
      <div className="mt-4">
        {announcements.map((announcement) => (
          <AnnouncementCard key={announcement.id} announcement={announcement} />
        ))}
      </div>
      {showPopup && <AnnouncementPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default Announcements;

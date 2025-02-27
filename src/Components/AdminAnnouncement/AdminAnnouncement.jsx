/* eslint-disable react/prop-types */
import { useState } from "react";
import "./AdminAnnouncement.css"
const AnnouncementModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Create Announcements</h2>
        <div className="space-y-4">
          <input type="text" placeholder="Enter title here" className="w-full p-2 border rounded" />
          <textarea placeholder="Enter description" className="w-full p-2 border rounded h-24"></textarea>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Enter Batch Name" className="p-2 border rounded" />
            <input type="text" placeholder="Enter Course Name" className="p-2 border rounded" />
            <input type="text" placeholder="Enter who to be notified" className="p-2 border rounded" />
            <select className="p-2 border rounded">
              <option>Select Author</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2">
            <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AnnouncementPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded">Create Announcement</button>
      <AnnouncementModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

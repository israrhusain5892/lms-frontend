import { useState, useEffect } from "react";
import "./Announcepopup.css";
import { GiCrossMark } from "react-icons/gi";


const AnnouncementsPopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000); // popup after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-16 right-20 w-96 bg-white shadow-lg rounded-xl p-4 border border-gray-200">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold Raleway">Announcements</h3>
        <div className="flex items-center gap-3">
        <button
          className="bg-[#3b76f6] px-6 py-2 text-white hover:bg-[#316def] rounded-md"
        >
          Add
        </button>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={() => setVisible(false)}
        >
          <GiCrossMark/>
        </button>

        </div>
      </div>

      <div className="mt-2 space-y-3">
        <div className="border-b pb-2">
          <h4 className="font-semibold Raleway">Recorded Session</h4>
          <p className="text-sm text-gray-500">
            Unfortunately, the recorded session is currently unavailable for
            viewing. We are actively working to resolve the issue.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400">
              Dec 20, 2024 09:35 pm{" "}
            </span>
            <span className="text-xs text-gray-400">Admin </span>
          </div>
        </div>

        <div className="border-b pb-2">
          <h4 className="font-semibold Raleway">Live Webinar</h4>
          <p className="text-sm text-gray-500">
            Regrettably, the recorded session is not accessible at the moment.
            Our team is addressing the situation.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400">
              Dec 20, 2024 09:35 pm{" "}
            </span>
            <span className="text-xs text-gray-400">Staff </span>
          </div>{" "}
        </div>

        <div>
          <h4 className="font-semibold Raleway">Interactive Online Workshop</h4>
          <p className="text-sm text-gray-500">
            Unfortunately, we are currently unable to provide access to the
            recorded session.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400">
              Dec 20, 2024 09:35 pm{" "}
            </span>
            <span className="text-xs text-gray-400">Admin </span>
          </div>{" "}
        </div>
      </div>

      <button className="Raleway mt-3 font-semibold text-[#3b76f6] hover:underline text-sm flex justify-center w-full">
        View More
      </button>
    </div>
  );
};

export default AnnouncementsPopup;

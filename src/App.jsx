import React from "react";
import Header from "./components/AdminHeader/Header.jsx";
import StudentPage from "./components/StudentPage/StudentPage.jsx";
import BatchPage from "./components/BatchPage/BatchPage.jsx";
import VideoUploadForm from "./components/VideoUploadForm/VideoUploadForm.jsx";
import CourseCard from "./components/AdminCourseCard/AdminCourseCard.jsx";
import AnnouncementModal from "./components/AdminAnnouncementModal/AdminAnnouncementModal.jsx";
import { useState } from "react";
import TaskUploadForm from "./components/TaskUploadForm/TaskUploadForm.jsx";
import ArticleUploadForm from "./components/ArticleUploadForm/ArticleUploadForm.jsx";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {/* <Header /> */}
      {/* <StudentPage />
      <BatchPage /> */}
      {/* <CourseCard /> */}
      {/* <VideoUploadForm />
      <TaskUploadForm /> */}
      <ArticleUploadForm />


      {/* <div>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Button
        </button>
        {showModal && <AnnouncementModal show={showModal} onClose={() => setShowModal(false)} />}
      </div> */}

    </div>
  );
}


export default App;
TaskUploadForm





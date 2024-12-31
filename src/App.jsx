import TasksPage from "./components/TasksPage/TasksPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div>
        <TasksPage />
      </div>
    </>
  )
}

export default App;














// import React from 'react';
// import Breadcrumb from 'react-bootstrap/Breadcrumb';
// import "./TasksPage.css" // Ensure you have react-bootstrap installed

// const TasksPage = () => {
//     const tasks = [
//         {
//             id: 1,
//             title: 'Mid Term: Task 1',
//             dueDate: '25 Dec 2024',
//             createdBy: 'Esther Howard',
//             createdDate: '25 Dec 2024',
//             status: 'Pending'
//         },
//         {
//             id: 2,
//             title: 'Mid Term: Task 1',
//             dueDate: '25 Dec 2024',
//             createdBy: 'Esther Howard',
//             createdDate: '25 Dec 2024',
//             status: 'Completed'
//         },
//         {
//             id: 3,
//             title: 'Mid Term: Task 1',
//             dueDate: '25 Dec 2024',
//             createdBy: 'Esther Howard',
//             createdDate: '25 Dec 2024',
//             status: 'Completed'
//         }
//     ];

//     return (
//         <>
//             <Breadcrumb className="custom-breadcrumb" style={{ marginTop: "37px" }}>
//                 <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
//                 <Breadcrumb.Item href="#">Task</Breadcrumb.Item>
//                 <Breadcrumb.Item active>HTML & CSS Basics</Breadcrumb.Item>
//             </Breadcrumb>

//             <h1 style={{ fontSize: "30px", color: "#000000" }}>Data Structure & Algorithms</h1>

//             <div className="task-list">
//                 {tasks.map((task) => (
//                     <div
//                         key={task.id}
//                         className="task-container"
//                         style={{
//                             width: '100%',
//                             maxWidth: '895px',
//                             height: 'auto',
//                             borderRadius: '12px',
//                             padding: '16px',
//                             position: 'relative',
//                             marginBottom: '16px',


//                             backgroundColor: "#EEF2FF"
//                         }}
//                     >
//                         {/* Due Date Container with Rounded Corners */}
//                         <div
//                             className="due-date-container"
//                             style={{
//                                 width: '123px',
//                                 height: '32px',
//                                 padding: '8px',
//                                 borderRadius: '30px',
//                                 backgroundColor: '#DBE6FE',
//                                 marginBottom: '12px',
//                                 textAlign: 'center',
//                                 marginTop: "32px"
//                             }}
//                         >
//                             <p className="due-date" style={{ margin: 0, color: "#656565", fontSize: "12px" }}>{`Due: ${task.dueDate}`}</p>
//                         </div>

//                         {/* Task Details */}
//                         <p style={{ fontSize: "16px", color: "#3D3D3D" }}>{task.title}</p>
//                         <p style={{ fontSize: "16px", color: "#656565" }}>{task.createdBy}</p>
//                         <p style={{ fontSize: "16px", color: "#3D3D3D", fontWeight: 'bold' }}>Created Date:{task.createdDate}</p>

//                         {/* View Button */}
//                         <button
//                             className="view-btn"
//                             style={{
//                                 position: 'absolute',
//                                 right: '16px',
//                                 bottom: '40px',
//                                 padding: '2px 16px',
//                                 backgroundColor: '#007bff',
//                                 color: '#fff',
//                                 border: 'none',
//                                 borderRadius: '30px',
//                                 cursor: 'pointer',
//                                 height: '32px',
//                                 width: '69px',
//                                 fontSize: '16px'
//                             }}
//                         >
//                             View
//                         </button>

//                         {/* Task Status with Dynamic Color Based on Status */}
//                         <p
//                             className="task-status"
//                             style={{
//                                 position: 'absolute',
//                                 right: '16px',
//                                 bottom: '12px',
//                                 margin: 0,

//                                 fontSize: '16px',
//                                 color: task.status === 'Completed' ? '#4CD964' : '#FF0000'
//                             }}
//                         >
//                             {task.status}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//             <h2 style={{ fontSize: "18px", color: "#000000", textAlign: "center", marginTop: "22px", marginLeft: "365px" }}>
//                 Total Mark
//             </h2>

//         </>
//     );
// };

// export default TasksPage;











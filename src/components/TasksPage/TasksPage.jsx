// import React from 'react';
// import Breadcrumb from 'react-bootstrap/Breadcrumb';
// import "./TasksPage.css"
// import Task from './Tasks';

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
//             <main>
//                 <Breadcrumb className="custom-breadcrumb" style={{ marginTop: "37px" }}>
//                     <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
//                     <Breadcrumb.Item href="#">Task</Breadcrumb.Item>
//                     <Breadcrumb.Item active>HTML & CSS Basics</Breadcrumb.Item>
//                 </Breadcrumb>

//                 <h1 className="heading" style={{ fontSize: "30px", color: "#000000" }}>Data Structure & Algorithms</h1>

//                 <div style={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     gap: '32px',
//                     marginTop: '4px'
//                 }}>
//                     {tasks.map((task) => (
//                         <Task key={task.id} task={task} />
//                     ))}
//                 </div>
//                 <h2 style={{ fontSize: "18px", color: "#000000", textAlign: "center", marginTop: "22px" }}>
//                     Total Mark
//                 </h2>
//             </main>

//         </>
//     );
// };

// export default TasksPage;

import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "./TasksPage.css";
import Task from './Tasks';

const TasksPage = () => {
    const tasks = [
        {
            id: 1,
            title: 'Mid Term: Task 1',
            dueDate: '25 Dec 2024',
            createdBy: 'Esther Howard',
            createdDate: '25 Dec 2024',
            status: 'Pending'
        },
        {
            id: 2,
            title: 'Mid Term: Task 1',
            dueDate: '25 Dec 2024',
            createdBy: 'Esther Howard',
            createdDate: '25 Dec 2024',
            status: 'Completed'
        },
        {
            id: 3,
            title: 'Mid Term: Task 1',
            dueDate: '25 Dec 2024',
            createdBy: 'Esther Howard',
            createdDate: '25 Dec 2024',
            status: 'Completed'
        }
    ];

    return (
        <>
            <main>
                <Breadcrumb className="custom-breadcrumb" style={{ marginTop: "37px" }}>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Task</Breadcrumb.Item>
                    <Breadcrumb.Item active>HTML & CSS Basics</Breadcrumb.Item>
                </Breadcrumb>

                <h1 className="heading">Data Structure & Algorithms</h1>

                <div className="tasks-container">
                    {tasks.map((task) => (
                        <Task key={task.id} task={task} />
                    ))}
                </div>

                <h2 className="total-mark">Total Mark</h2>
            </main>
        </>
    );
};

export default TasksPage;


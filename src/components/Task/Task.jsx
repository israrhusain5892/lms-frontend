import React from 'react';
import "./task.css";
import { useNavigate } from 'react-router-dom';

const Task = ({ task }) => {

    const navigate=useNavigate();
    const gotoTask=()=>{
          navigate("/midterm");
    }
    return (
        <div className="task-container p-3 rounded">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <div className="px-3 py-2 rounded-pill text-center due-date">
                        {`Due: ${task.dueDate}`}
                    </div>
                    <div className="task-title text-center mb-2 py-2">{task.title}</div>
                    <div className="taskCreated">{task.createdBy}</div>
                </div>
                <button onClick={gotoTask} className="btn btn-primary rounded-pill px-3 text-[16px] text-sans">
                    View
                </button>
            </div>

            <div className="task-info">
                <div className="task-title font-bold">
                    Created Date: {task.createdDate}
                </div>
                <div
                    className="task-status"
                    style={{
                        fontSize: '16px',
                        color: task.status === 'Completed' ? '#4CD964' : '#FF0000',
                    }}
                >
                    {task.status}
                </div>
            </div>
        </div>
    );
};

export default Task;

import React from 'react';
import "./TasksPage.css";

const Task = ({ task }) => {
    return (
        <div className="task-container p-3 rounded">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <div className="px-3 py-2 rounded-pill text-center due-date">
                        {`Due: ${task.dueDate}`}
                    </div>
                    <div className="fs-5 text-dark mb-2">{task.title}</div>
                    <div className="fs-6 text-secondary">{task.createdBy}</div>
                </div>
                <button className="btn btn-primary rounded-pill px-3">
                    View
                </button>
            </div>

            <div className="task-info">
                <div className="fw-bold">
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


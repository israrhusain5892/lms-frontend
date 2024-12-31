import React from 'react';

const Task = ({ task }) => {
    return (
        <div
            className="task-container"
            style={{
                borderRadius: '12px',
                padding: '20px',// Updated top margin
                backgroundColor: '#EEF2FF',
            }}
        >


            {/* Task Details with View Button */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '12px',
                }}
            >

                <div>
                    <div
                        className="due-date-container"
                        style={{
                            padding: '10px',
                            borderRadius: '30px',
                            backgroundColor: '#DBE6FE',
                            marginBottom: '12px',
                            textAlign: 'center',
                            width: "max-content", color: '#656565', fontSize: '12px'
                        }}
                    >

                        {`Due: ${task.dueDate}`}

                    </div>
                    <div style={{ fontSize: '16px', color: '#3D3D3D', marginBottom: '12px' }}>{task.title}</div>

                    <div style={{ fontSize: '16px', color: '#656565' }}>{task.createdBy}</div>
                </div>
                <button
                    className="view-btn"
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '30px',
                        cursor: 'pointer',
                        fontSize: '16px',
                    }}
                >
                    View
                </button>


            </div>

            {/* Additional Task Details */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>


                <div>


                    <div
                        style={{
                            fontSize: '16px',
                            fontWeight: 'bold',
                        }}
                    >
                        Created Date: {task.createdDate}
                    </div>
                </div>

                {/* Task Status with Dynamic Color Based on Status */}
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

import React from 'react';
import TestsSection from '../../components/TestsSection/TestsSection';
import StudentDashboardLayout from '../../layouts/StudentDashboardLayout';

function TestPage() {
    return (
        <div className=''>
            <StudentDashboardLayout>
            <TestsSection/>
            </StudentDashboardLayout>
            
        </div>
    );
}

export default TestPage;
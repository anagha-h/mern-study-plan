import React from 'react';

const StudyPlanList = ({ studyPlan }) => {
    return (
        <div>
            <h3>Your Study Plan</h3>
            <table>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Hours Per Day</th>
                        <th>Total Hours</th>
                    </tr>
                </thead>
                <tbody>
                    {studyPlan.map((plan, index) => (
                        <tr key={index}>
                            <td>{plan.subject}</td>
                            <td>{plan.hoursPerday}</td>
                            <td>{plan.totalHours}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudyPlanList;
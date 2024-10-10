import React, { useState } from 'react';
import StudyPlanForm from './components/StudyPlanForm';
import StudyPlanList from './components/StudyPlanList';

const App = () => {
  const [studyPlan, setStudyPlan] = useState([]);

  const handleStudyPlanSubmit = (plan) => {
    setStudyPlan(plan);
  };

  return (
    <div>
      <StudyPlanForm onSubmit={handleStudyPlanSubmit} />
      {studyPlan.length > 0 && <StudyPlanList studyPlan={studyPlan} />}
    </div>
  );
};

export default App;
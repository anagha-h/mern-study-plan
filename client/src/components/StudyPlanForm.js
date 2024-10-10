import React, { useState } from 'react';
import axios from 'axios';

const StudyPlanForm = () => {
  const [subjects, setSubjects] = useState('');
  const [totalDays, setTotalDays] = useState('');
  const [studyPlan, setStudyPlan] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/studyplans', {
        subjects: subjects.split(','),
        totalDays,
      });
      setStudyPlan(response.data);
    } catch (error) {
      console.error('Error making the request:', error);
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Personalized Study Plan Generator</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="subjects">Subjects (comma-separated)</label>
            <input
              type="text"
              id="subjects"
              value={subjects}
              onChange={(e) => setSubjects(e.target.value)}
              required
              className="border border-gray-300 rounded w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="totalDays">Total Days</label>
            <input
              type="number"
              id="totalDays"
              value={totalDays}
              onChange={(e) => setTotalDays(e.target.value)}
              required
              className="border border-gray-300 rounded w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
            >
            Generate Study Plan
        </button>

        </form>
        {studyPlan && (
          <div className="mt-6 p-4 border border-gray-300 rounded bg-gray-50">
            <h3 className="text-lg font-semibold">Your Study Plan:</h3>
            <pre className="text-gray-700">{studyPlan}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyPlanForm;

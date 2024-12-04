import { useParams } from 'react-router-dom';
import React, { useState } from 'react';

const ProblemDetailPage: React.FC = () => {
  const { problemId } = useParams();
  const [solution, setSolution] = useState('');

  const problem = {
    id: 1,
    title: 'Two Sum',
    description: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
    input: 'Input: nums = [2,7,11,15], target = 9',
    output: 'Output: [0,1]',
    difficulty: 'Easy',
  };

  const handleSolutionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSolution(e.target.value);
  };

  const handleSubmit = () => {
    alert('Solution submitted!');
    // Here you can handle the solution submission to your backend or API
  };

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-3xl font-bold mb-6">{problem.title}</h1>
      <p className="text-lg">{problem.description}</p>
      <div className="mt-6">
        <h2 className="font-semibold">Input</h2>
        <p>{problem.input}</p>
      </div>
      <div className="mt-4">
        <h2 className="font-semibold">Output</h2>
        <p>{problem.output}</p>
      </div>
      <div className="mt-6">
        <h2 className="font-semibold">Constraints</h2>
        <p>Assume the input list contains no more than 10^4 elements.</p>
      </div>

      <div className="mt-8">
        <h2 className="font-semibold">Your Solution</h2>
        <textarea
          className="w-full p-4 border border-gray-300 rounded-md mt-2"
          rows={6}
          value={solution}
          onChange={handleSolutionChange}
          placeholder="Write your solution here..."
        />
      </div>

      <div className="mt-8">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          Submit Solution
        </button>
      </div>
    </div>
  );
};

export default ProblemDetailPage;

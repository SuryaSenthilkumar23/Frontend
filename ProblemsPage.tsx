
import { Link } from 'react-router-dom';

const mockProblems = [
  { id: 1, title: 'Two Sum', difficulty: 'Easy' },
  { id: 2, title: 'Add Two Numbers', difficulty: 'Medium' },
  { id: 3, title: 'Longest Substring Without Repeating Characters', difficulty: 'Hard' },
];

const ProblemsPage = () => {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-3xl font-bold mb-6">Problems</h1>
      <div className="space-y-4">
        {mockProblems.map((problem) => (
          <div key={problem.id} className="flex justify-between">
            <Link to={`/problem/${problem.id}`} className="font-semibold text-blue-600 hover:text-blue-800">
              {problem.title}
            </Link>
            <span className="text-gray-500">{problem.difficulty}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemsPage;

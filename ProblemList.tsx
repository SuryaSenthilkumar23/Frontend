// src/pages/ProblemList.tsx


const ProblemList = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Problem List</h1>
      <ul className="space-y-2">
        <li className="border-b p-4 hover:bg-gray-200">
          <a href="/problem/1" className="text-blue-500">Two Sum</a>
        </li>
        <li className="border-b p-4 hover:bg-gray-200">
          <a href="/problem/2" className="text-blue-500">Longest Substring Without Repeating Characters</a>
        </li>
        {/* Add more problems here */}
      </ul>
    </div>
  );
};

export default ProblemList;

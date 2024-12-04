

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-60 p-4">
      <h2 className="text-xl font-semibold mb-4">Navigation</h2>
      <ul>
        <li>
          <a href="/questions" className="block py-2 px-3 rounded hover:bg-gray-700">Questions</a>
        </li>
        <li>
          <a href="/tags" className="block py-2 px-3 rounded hover:bg-gray-700">Tags</a>
        </li>
        <li>
          <a href="/profile" className="block py-2 px-3 rounded hover:bg-gray-700">Profile</a>
        </li>
        <li>
          <a href="/settings" className="block py-2 px-3 rounded hover:bg-gray-700">Settings</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

// src/components/Header.tsx



const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="text-lg font-bold">LeetCode-like App</div>
        <div className="space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/profile" className="hover:underline">Profile</a>
          <a href="/logout" className="hover:underline">Logout</a>
        </div>
      </div>
    </header>
  );
};

export default Header;

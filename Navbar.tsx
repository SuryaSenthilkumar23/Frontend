
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-2xl font-semibold">LeetCode Clone</Link>
        <div className="space-x-4">
          <Link to="/problems" className="text-white">Problems</Link>
          <Link to="/contest" className="text-white">Contest</Link>
          <Link to="/discuss" className="text-white">Discuss</Link>
          <Link to="/login" className="text-white">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

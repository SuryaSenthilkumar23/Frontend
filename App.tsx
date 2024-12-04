
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelectQuestionsPage from './pages/SelectQuestionsPage'; // Make sure you have this page
import ProblemDetailPage from './pages/ProblemDetailPage'; // And this page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectQuestionsPage />} />
        <Route path="/problem/:problemId" element={<ProblemDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;

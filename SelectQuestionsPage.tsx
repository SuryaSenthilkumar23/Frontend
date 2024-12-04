import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

const SelectQuestionsPage: React.FC = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(10);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch('/api/questions');
      const data = await response.json();
      setQuestions(data);
      setFilteredQuestions(data);
    };

    fetchQuestions();
  }, []);

  const handleSearch = (query: string) => {
    const filtered = questions.filter((question) =>
      question.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredQuestions(filtered);
    setCurrentPage(1); // Reset to first page when search changes
  };

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = filteredQuestions.slice(indexOfFirstQuestion, indexOfLastQuestion);
  const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Select Questions</h1>
      <SearchBar onSearch={handleSearch} />
      <ul className="space-y-4">
        {currentQuestions.map((question) => (
          <li key={question.id} className="bg-white border border-gray-200 rounded-lg p-4">
            <Link to={`/problem/${question.id}`}>
              <span>{question.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default SelectQuestionsPage;

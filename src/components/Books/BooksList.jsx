import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import BookCard from './BookCard';
import { motion } from 'framer-motion';

const BooksList = () => {
  const { books } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [...new Set(books.map(book => book.category))];
  
  const filteredBooks = books.filter(book =>
    [book.title, book.author, book.category].some(field =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const booksByCategory = categories.reduce((acc, category) => {
    const categoryBooks = filteredBooks.filter(book => book.category === category);
    return categoryBooks.length > 0 ? { ...acc, [category]: categoryBooks } : acc;
  }, {});

  const hasResults = filteredBooks.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Sticky Header */}
      <div className="sticky top-16 bg-white/80 backdrop-blur-sm shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-2xl font-semibold text-gray-900"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Book Collection
              </span>
            </motion.h1>
            
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search books..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <svg
                className="absolute left-3 top-3.5 text-gray-400"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {hasResults ? (
          Object.entries(booksByCategory).map(([category, books]) => (
            <motion.section 
              key={category}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-12"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">{category}</h2>
                <Link 
                  to={`/books/category/${category}`}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View All
                  <svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {books.slice(0, 4).map(book => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </motion.section>
          ))
        ) : (
          <motion.div 
            className="text-center py-20"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
          >
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              No Books Found
            </h2>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or browse our categories
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map(category => (
                <Link
                  key={category}
                  to={`/books/category/${category}`}
                  className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  {category}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default BooksList;

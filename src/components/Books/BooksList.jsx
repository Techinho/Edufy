import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const BooksList = () => {
  const { books } = useContext(AppContext);  // Fetching books from context
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [...new Set(books.map(book => book.category))];  // Extracting unique book categories

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const booksByCategory = categories.reduce((acc, category) => {
    acc[category] = filteredBooks.filter(book => book.category === category);
    return acc;
  }, {});

  const hasResults = filteredBooks.length > 0;

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="uppercase text-center text-3xl font-bold text-gray-900">Browse Books</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Search Section */}
        <section className="mb-8">
          <div className="flex justify-center">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Search books by title, author, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
        </section>

        {hasResults ? (
          // Category Sections
          categories.map((category) => {
            const categoryBooks = booksByCategory[category];
            if (categoryBooks.length === 0) return null;

            return (
              <section key={category} className="mb-12">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900">{category}</h2>
                  <Link 
                    to={`/books/category/${category}`} 
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
                  >
                    Explore More
                  </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {categoryBooks.slice(0, 4).map((book) => (
                    <Link key={book.id} to={`/books/${book.id}`} className="block">
                      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                        {/* Image Container */}
                        <div className="flex justify-center items-center bg-white">
                          <img
                            src={book.coverImage || "/placeholder.svg"}
                            alt={`${book.title} thumbnail`}
                            className="object-contain max-h-64"
                          />
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{book.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                          <div className="flex justify-between items-center mt-auto">
                            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                              {book.category}
                            </span>
                            <span className="text-sm text-gray-500">{book.pages} Pages</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">No books found</h2>
            <p className="text-gray-600">
              We couldn't find any books matching your search. Try adjusting your search terms or browse our categories below.
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/books/category/${category}`}
                  className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow transition duration-300"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default BooksList;

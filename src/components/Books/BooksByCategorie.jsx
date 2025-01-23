import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../../context/appContext';

const BooksByCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { books } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter by category and search term
  const filteredBooks = books.filter(
    (book) =>
      book.category === category &&
      (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.instructor.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="mb-6 bg-white shadow">
        <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="uppercase text-center text-3xl font-bold text-gray-900">
            {category} Books
          </h1>
        </div>
      </header>

      {/* Search Section */}
      <section className="mb-8">
        <div className="flex justify-center">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search Books by title, instructor, or category..."
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

      <div className="m-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.map((categoryBook) => (
         <div
         key={categoryBook.id}
         className="bg-white rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 h-[400px] flex flex-col"
       >
         {/* Image Container */}
         <div className="relative h-48 bg-white flex items-center justify-center">
           <img
             src={categoryBook.coverImage || '/placeholder.svg'}
             alt={categoryBook.title}
             className="w-full h-full object-contain"
           />
         </div>
         {/* Content */}
         <div className="p-4 flex-1 flex flex-col">
           <h3 className="text-lg font-bold text-gray-800 truncate">{categoryBook.title}</h3>
           <p className="text-sm text-gray-600 mt-1 truncate">Instructor: {categoryBook.author}</p>
           <p className="text-sm text-gray-600 mt-1 truncate">{categoryBook.category}</p>
           <button
             className="mt-auto bg-indigo-500 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-600 transition"
             onClick={() => navigate(`/Books/${categoryBook.id}`)}
           >
             View Details
           </button>
         </div>
       </div>
        ))}
      </div>
    </div>
  );
};

export default BooksByCategory;

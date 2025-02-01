// components/BookCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BookCard = ({ book }) => {
  return (
    <Link to={`/books/${book.id}`} className="block h-full">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
        <div className="flex justify-center items-center bg-gray-50 p-4">
          <img
            src={book.coverImage || "/placeholder.svg"}
            alt={`${book.title} cover`}
            className=" object-contain h-40 w-full"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="hidden md:block text-lg font-semibold text-gray-900 mb-2">{book.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{book.author}</p>
          <div className="flex justify-between items-center mt-auto">
            <span className="hidden sm:block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
              {book.language}
            </span>
            <span className="text-sm text-gray-500">{book.pages} pages</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    pages: PropTypes.number,
    coverImage: PropTypes.string
  }).isRequired
};

export default BookCard;
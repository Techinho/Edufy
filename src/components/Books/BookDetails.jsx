import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AppContext } from '../../context/appContext';
import BookCard from './BookCard'; // Reuse the BookCard component

const BookDetails = () => {
  const { books } = useContext(AppContext);
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Not Found</h1>
          <Link
            to="/books"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Browse All Books
          </Link>
        </div>
      </div>
    );
  }

  const similarBooks = books.filter(
    (similarBook) => similarBook.category === book.category && similarBook.id !== book.id
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Book Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Book Cover */}
            <div className="lg:w-1/3">
              <div className="rounded-lg p-4">
                <img
                  src={book.coverImage || '/placeholder-book.svg'}
                  alt={book.title}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Book Details */}
            <div className="lg:w-2/3">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
              <p className="text-lg text-gray-600 mb-4">By {book.author}</p>

              {/* Metadata */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <p className="text-sm text-gray-500">Category</p>
                  <p className="font-medium text-gray-900">{book.category}</p>
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <p className="text-sm text-gray-500">Pages</p>
                  <p className="font-medium text-gray-900">{book.pages}</p>
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <p className="text-sm text-gray-500">Language</p>
                  <p className="font-medium text-gray-900">{book.language}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6">{book.description}</p>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Buy or Read Book
                </a>
                <Link
                  to="/books"
                  className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition"
                >
                  Back to Library
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Book</h2>
          <div className="prose max-w-none text-gray-700">
            {book.article}
          </div>
        </div>
      </div>

      {/* Similar Books Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Books</h2>
        {similarBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarBooks.map((similarBook) => (
              <BookCard key={similarBook.id} book={similarBook} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-600">
            <p>No similar books found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetails;
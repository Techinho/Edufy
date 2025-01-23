import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/appContext';

const BookDetails = () => {
  const { books} = useContext(AppContext);
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));

  // Filter similar books based on category (excluding the current book)
  const similarBooks = books.filter(
    (similarBook) => similarBook.category === book.category && similarBook.id !== book.id
  );


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300">
      {/* Book Header */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6 lg:flex items-center justify-between space-x-8">
            {/* Text Section */}
            <div className="lg:w-2/3">
              <h1 className="text-3xl font-extrabold text-gray-900">{book.title}</h1>
              <p className="text-sm text-gray-600 mt-2">By {book.author}</p>
              <p className="text-gray-700 mt-4">{book.description}</p>
              <p className="text-gray-900 mt-6 font-semibold">Details</p>
              <div className="mt-2 space-y-2">
                <p><strong>Category:</strong> {book.category}</p>
                <p><strong>Pages:</strong> {book.pages}</p>
                <p><strong>ISBN:</strong> {book.isbn}</p>
                <p><strong>Language:</strong> {book.language}</p>
              </div>

              {/* Link to buy/read the book */}
              <div className="mt-6">
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-indigo-500 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-600 transition"
                >
                  Buy or Read Book
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/3 mt-6 lg:mt-0">
              <img
                src={book.coverImage || '/placeholder.svg'}
                alt={book.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="px-6 py-4">
            <p className="text-lg text-gray-800">{book.article}</p>
          </div>
        </div>
      </div>
{/* similar books */}
<div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Books</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {similarBooks.map((similarBook) => (
      <div
        key={similarBook.id}
        className="bg-white rounded-lg shadow-lg flex flex-col h-full"
      >
        {/* Image Container */}
        <div className="w-full h-64 flex justify-center items-center bg-white">
          <img
            src={similarBook.coverImage || '/placeholder.svg'}
            alt={similarBook.title}
            className="object-contain max-h-full max-w-full"
          />
        </div>
        
        {/* Book Info */}
        <div className="p-4 flex flex-grow flex-col">
          <h3 className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-200">
            {similarBook.title}
          </h3>
          <p className="text-sm text-gray-600">By {similarBook.author}</p>
          <p className="text-sm text-gray-600">{similarBook.category}</p>
          
          {/* Button */}
          <button
            className="mt-auto bg-indigo-500 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-600 transition"
            onClick={() => window.location.href = `/books/${similarBook.id}`}
          >
            View Details
          </button>
        </div>
      </div>
    ))}
  </div>

  {similarBooks.length === 0 && (
    <p className="text-gray-600 text-center mt-6">No similar books found.</p>
  )}
</div>
    </div>
  );
};

export default BookDetails;

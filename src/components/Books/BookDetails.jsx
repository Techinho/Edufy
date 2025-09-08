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
    <div className="min-h-screen bg-black relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-10 z-0" />
      <div className="absolute inset-0 noise-bg z-0" />
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl opacity-70" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl opacity-70" />

      {/* Book Header */}
      <div className="relative bg-blue-950/30 backdrop-blur-sm border-b border-blue-900/30 z-10">
        <div className="absolute inset-0 bg-grid opacity-10 z-0" />
        <div className="absolute inset-0 noise-bg z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Book Cover */}
            <div className="lg:w-1/3">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-blue-900/50">
                <img
                  src={book.coverImage || '/placeholder-book.svg'}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Book Details */}
            <div className="lg:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{book.title}</h1>
              <p className="text-lg text-blue-400 mb-4">By {book.author}</p>

              {/* Metadata */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-blue-900/30 px-4 py-2 rounded-lg border border-blue-500/30">
                  <p className="text-sm text-blue-400">Category</p>
                  <p className="font-medium text-white">{book.category}</p>
                </div>
                <div className="bg-blue-900/30 px-4 py-2 rounded-lg border border-blue-500/30">
                  <p className="text-sm text-blue-400">Pages</p>
                  <p className="font-medium text-white">{book.pages}</p>
                </div>
                <div className="bg-blue-900/30 px-4 py-2 rounded-lg border border-blue-500/30">
                  <p className="text-sm text-blue-400">Language</p>
                  <p className="font-medium text-white">{book.language}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/70 mb-6">{book.description}</p>

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
                  className="bg-blue-900/30 text-blue-400 px-6 py-2 rounded-lg hover:bg-blue-800 transition border border-blue-500/30"
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
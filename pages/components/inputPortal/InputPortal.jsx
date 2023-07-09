import { useState } from 'react';

const InputPortal = ({ onClose }) => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any actions you want with the submitted data
    console.log('Submitted quote:', quote);
    console.log('Submitted author:', author);
    // Reset the input fields
    setQuote('');
    setAuthor('');
  };

  const handleCancel = () => {
    // Reset the input fields
    setQuote('');
    setAuthor('');
    // Call the onClose function to close the input portal
    onClose(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Input Portal</h2>
          <button
            type="button"
            onClick={handleCancel}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="quote" className="block mb-1">
              Quote:
            </label>
            <input
              type="text"
              id="quote"
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="author" className="block mb-1">
              Author:
            </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputPortal;

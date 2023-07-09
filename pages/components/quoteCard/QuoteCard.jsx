import React from "react";

const QuoteCard = ({ text, author }) => {
  return (
    // <div className='break-inside-avoid flex flex-col max-w-sm p-2 bg-gradient-to-br from-cyan-300 to-violet-700 rounded-3xl'>
    //     <h1 className='text-2xl text-black'>" {text} "</h1>
    //     <h1 className='text-right'><span className='font-bold'>~ </span>{author}</h1>
    // </div>
    //     <div className="break-inside-avoid flex flex-col max-w-sm p-4 bg-gradient-to-br from-cyan-300 to-violet-700 rounded-lg shadow-lg">
    //   <h1 className="text-2xl text-black font-semibold mb-4">{text}</h1>
    //   <h1 className="text-right text-gray-200">
    //     <span className="font-bold">~ </span>
    //     {author}
    //   </h1>
    // </div>
    <div className="break-inside-avoid flex flex-col max-w-sm p-4 rounded-2xl shadow-lg bg-gradient-to-br from-teal-400 via-blue-500 to-indigo-600">
      <h1 className="text-2xl text-black font-semibold mb-4">{text}</h1>
      <h1 className="text-right text-gray-200">
        <span className="font-bold">~ </span>
        {author}
      </h1>
    </div>
  );
};

export default QuoteCard;

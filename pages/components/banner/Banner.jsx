import React from 'react'

const Banner = () => {
  return (
    <div className="bg-blue-500 text-white py-8 mx-2 md:mx-auto max-w-[1450px] rounded-lg my-10">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
    <div className="w-full sm:w-1/2">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">
        How Quotes Manipulate People
      </h2>
      <p className="text-lg mb-4">
        Quotes have a powerful influence on individuals, shaping their thoughts and actions. They can inspire, motivate, and even manipulate people's perspectives. It's essential to critically analyze the context and intention behind quotes to avoid undue influence.
      </p>
    </div>
    <div className="w-full sm:w-1/2">
      <img
        src="https://images.pexels.com/photos/636243/pexels-photo-636243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Banner Photo"
        className="w-full h-40 object-cover rounded-lg"
      />
    </div>
  </div>
</div>

  )
}

export default Banner
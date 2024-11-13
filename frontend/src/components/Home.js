import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-500 flex items-center justify-center px-4">
      <div className="max-w-3xl text-center p-8 bg-white shadow-xl rounded-lg animate-fadeIn transition duration-500 ease-in-out transform hover:scale-101">
        
        {/* Hero Section */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-2 animate-bounce text-center">
          Welcome to <span className="text-blue-600">Story Collab</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 font-light animate-fadeInSlow">
          Create, share, and collaborate on captivating stories with a community of storytellers!
        </p>

        {/* Introduction Section */}
        <section className="mt-6 text-gray-700">
          <p className="text-lg sm:text-xl md:text-2xl font-light">
            Discover a platform where creativity thrives. At <span className="text-blue-600 font-semibold">Story Collab</span>, writers come together to create and explore captivating stories.
          </p>
        </section>

        {/* Call-to-Action Buttons */}
        {/* <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/create"
            className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-110 hover:rotate-1 text-sm md:text-base lg:text-lg"
          >
            Create a Story
          </Link>
          <Link
            to="/dashboard"
            className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-110 hover:-rotate-1 text-sm md:text-base lg:text-lg"
          >
            View Dashboard
          </Link>
        </div> */}

        {/* Features Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="font-semibold text-lg text-gray-800">Collaborate</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Team up with other writers to create dynamic and engaging stories.
            </p>
          </div>
          <div className="p-4 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="font-semibold text-lg text-gray-800">Discover</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Find stories across genres and dive into new worlds created by the community.
            </p>
          </div>
          <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="font-semibold text-lg text-gray-800">Share</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Publish your stories and gain feedback from fellow storytellers.
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-12 p-6 bg-blue-100 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Community Loves Story Collab!</h2>
          <p className="italic text-gray-700">"I've never been more inspired to write. Story Collab brought out my creative side!" - Alex</p>
          <p className="italic text-gray-700 mt-2">"A great platform for storytelling and meeting other passionate writers." - Jordan</p>
        </div>

        {/* Featured Stories Section */}
        <div className="mt-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Featured Stories</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white border rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <h3 className="font-semibold text-lg text-gray-800">The Midnight Adventure</h3>
              <p className="text-gray-600 mt-2 text-sm">A suspenseful story about a journey through a haunted forest.</p>
              <Link to="/story/midnight-adventure" className="text-blue-600 hover:text-blue-800 font-semibold mt-2 inline-block">Read More</Link>
            </div>
            <div className="p-4 bg-white border rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <h3 className="font-semibold text-lg text-gray-800">Lost in the Stars</h3>
              <p className="text-gray-600 mt-2 text-sm">A sci-fi tale of an astronaut's journey through unknown galaxies.</p>
              <Link to="/story/lost-in-the-stars" className="text-blue-600 hover:text-blue-800 font-semibold mt-2 inline-block">Read More</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;

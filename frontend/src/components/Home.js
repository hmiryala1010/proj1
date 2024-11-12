// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="container mx-auto p-4 text-center">
//       <h1 className="text-4xl font-bold">Welcome to the Collaborative Story Writing Platform</h1>
//       <p className="mt-4 text-lg">Create, share, and collaborate on stories with others!</p>
//       <div className="mt-6">
//         <Link to="/create" className="bg-blue-500 text-white font-bold py-2 px-4 rounded mx-2 text-sm md:text-base lg:text-lg">
//           Create a Story
//         </Link>
//         <Link to="/dashboard" className="bg-green-500 text-white font-bold py-2 px-4 rounded mx-2 text-sm md:text-base lg:text-lg">
//           View Dashboard
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-3xl text-center p-6 bg-white shadow-lg rounded-lg">
        
        {/* Hero Section */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800">
          Welcome to <span className="text-blue-600">Story Collab</span>
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-700">
          Create, share, and collaborate on captivating stories with a community of storytellers!
        </p>
        
        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex flex-wrap justify-center space-x-2">
          <Link
            to="/create"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-sm md:text-base lg:text-lg mx-2 my-2"
          >
            Start a New Story
          </Link>
          <Link
            to="/dashboard"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-sm md:text-base lg:text-lg mx-2 my-2"
          >
            View Dashboard
          </Link>
        </div>
        
        {/* Features Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg text-gray-800">Collaborate</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Team up with other writers to create dynamic and engaging stories.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg text-gray-800">Discover</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Find stories across genres and dive into new worlds created by the community.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg text-gray-800">Share</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Publish your stories and gain feedback from fellow storytellers.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;

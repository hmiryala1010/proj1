import React from 'react';

const UserProfile = () => {
  // Sample user data
  const user = { name: 'John Doe', email: 'john@example.com' };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Your Profile</h1>
      <div className="mt-4">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <h2 className="mt-6 text-xl">Your Stories</h2>
      {/* List of user stories would go here */}
    </div>
  );
};

export default UserProfile;

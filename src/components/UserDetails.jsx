import React from "react";

const UserDetails = ({ user }) => {
  return (
    // Outer container with flex and gradient background
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      {/* Card container */}
      <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        {/* Card content with flex */}
        <div className="md:flex">
          {/* Left section with user image */}
          <div className="md:flex-shrink-0">
            <div className="h-50 w-full md:w-48 flex items-center justify-center pt-9 pl-4">
              {/* User image */}
              <img
                className="w-full h-full object-cover rounded-md"
                src={user.picture.large}
                alt={`Profile of ${user.name.first} ${user.name.last}`}
              />
            </div>
          </div>
          {/* Right section with user details */}
          <div className="p-8 text-white">
            {/* Full Name */}
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              {`${user.name.title} ${user.name.first} ${user.name.last}`}
            </h2>
            {/* Gender (styled similarly to other details) */}
            <p className="mt-2 text-gray-500">
              <span className="font-semibold">Gender:</span> {user.gender}
            </p>
            {/* Email */}
            <p className="mt-2 text-gray-500">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            {/* Phone */}
            <p className="mt-2 text-gray-500">
              <span className="font-semibold">Phone:</span> {user.phone}
            </p>
            {/* Location */}
            <p className="mt-2 text-gray-500">
              <span className="font-semibold">Location:</span>{" "}
              {`${user.location.city}, ${user.location.state}, ${user.location.country}`}
            </p>
            {/* Date of Birth */}
            <p className="mt-2 text-gray-500">
              <span className="font-semibold">Date of Birth:</span>{" "}
              {new Date(user.dob.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

import React from 'react';

const UserCard = ({ user }) => (
  <div className="bg-white p-4 rounded-lg shadow-md ">
    <img
      src={user.picture.medium}
      alt="Profile"
      className="rounded-full w-50 h-50 mx-auto block "
      style={{marginTop:"2%"}}
      // className="rounded-full w-20 h-20 mx-auto"
    />
    <h2 className="text-center text-lg font-semibold mt-2">
      {user.name.first} {user.name.last}
    </h2>
    <p className="text-center text-sm text-gray-500">{user.email}</p>
    <p className="text-center text-sm text-gray-600">
      {user.location.city}, {user.location.country}
    </p>
    <p className="text-center text-sm text-gray-700 capitalize">
      {user.gender}
    </p>
  </div>
);

export default UserCard;

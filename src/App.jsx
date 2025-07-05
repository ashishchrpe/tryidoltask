import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import Filters from './components/Filters';
import Pagination from './components/Pagination';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [genderFilter, setGenderFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://randomuser.me/api/?results=10');
        setUsers(response.data.results);
        setFilteredUsers(response.data.results);
        setError('');
      } catch (err) {
        setError('Failed to fetch users. Please try again later.');
        console.log(err);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    let filtered = [...users];

    if (genderFilter !== 'all') {
      filtered = filtered.filter(user => user.gender === genderFilter);
    }

    if (search) {
      filtered = filtered.filter(user =>
        `${user.name.first} ${user.name.last}`.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
      );
    }

    setCurrentPage(1);
    setFilteredUsers(filtered);
  }, [search, genderFilter, users]);

  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirst, indexOfLast);

  // return (
  //   <div className="" >
  //     <h1 className="text-3xl font-bold mb-6 text-center">User Directory</h1>
  //     <Filters
  //       search={search}
  //       setSearch={setSearch}
  //       genderFilter={genderFilter}
  //       setGenderFilter={setGenderFilter}
  //     />
  //     {loading ? (
  //       <p className="text-center mt-10">Loading users...</p>
  //     ) : error ? (
  //       <p className="text-center mt-10 text-red-600">{error}</p>
  //     ) : (
  //       <>
  //         <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  //           {currentUsers.map((user, index) => (
  //             <UserCard key={index} user={user} />
  //           ))}
  //         </div>
  //         <Pagination
  //           currentPage={currentPage}
  //           totalPages={Math.ceil(filteredUsers.length / usersPerPage)}
  //           setCurrentPage={setCurrentPage}
  //         />
  //       </>
  //     )}
  //   </div>
  // );
return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <div className="w-full max-w-6xl">
      <h1 className="text-9xl font-bold mb-6 text-center"  >User Directory</h1>
      
      <Filters
        search={search}
        setSearch={setSearch}
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
      />

      {loading ? (
        <p className="text-center mt-10">Loading users...</p>
      ) : error ? (
        <p className="text-center mt-10 text-red-600">{error}</p>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {currentUsers.map((user, index) => (
              <UserCard key={index} user={user} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredUsers.length / usersPerPage)}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  </div>
);

};

export default App;

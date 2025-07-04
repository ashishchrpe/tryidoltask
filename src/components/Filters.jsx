// import React from 'react';

// const Filters = ({ search, setSearch, genderFilter, setGenderFilter }) => (
//   <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
//     <input
//       type="text"
//       placeholder="Search by name or email"
//       value={search}
//       onChange={(e) => setSearch(e.target.value)}
//       className="border p-2 rounded w-full sm:w-1/2"
//     />
//     <select
//       value={genderFilter}
//       onChange={(e) => setGenderFilter(e.target.value)}
//       className="border p-2 rounded w-full sm:w-1/4"
//     >
//       <option value="all">All</option>
//       <option value="male">Male</option>
//       <option value="female">Female</option>
//     </select>
//   </div>
// );

// export default Filters;


import React from "react";

const Filters = ({ search, setSearch, genderFilter, setGenderFilter }) => (
  <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
    <input
      type="text"
      placeholder="Search by name or email"
      value={search}
      onChange={e => setSearch(e.target.value)}
      className=" rounded "
      style={{ marginBottom: "2%"}}
    />
    <select
      value={genderFilter}
      onChange={e => setGenderFilter(e.target.value)}
      className="border p-2 rounded-md w-full sm:w-1/4 my-2"
    >
      <option value="all">All</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>

  </div>
);

export default Filters;

import React from "react";
import useFetch from '../hooks/useFetch'
const HomeHeader = () => {
  const { data, error, loading } = useFetch("../db/data.json"); 

 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-4 gap-4 w-full h-full p-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="border border-gray-400 p-4 bg-gray-100 text-center"
        >
          <h3 className="font-bold">{item.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default HomeHeader;

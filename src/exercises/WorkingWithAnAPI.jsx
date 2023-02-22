import React, { useEffect, useState } from "react";
import MemeCard from "../components/MemeCard";
import { fetchData } from "../utils/fetchData";

export default function WorkingWithAnAPI() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((e) => setData(e));
  }, []);
  return (
    <div className="w-full h-screen mt-32">
      <div className="w-full justify-center flex">
        <button
          className="bg-red-500 rounded-full shadow-lg p-4 w-fit"
          onClick={() => fetchData().then((e) => setData(e))}
        >
          Fetch Random
        </button>
      </div>
      <div className="grid grid-cols-2 w-1/2 gap-9 m-auto mt-10">
        {data.map((v, k) => {
          return (
            <MemeCard
              key={k}
              img={v.avatar}
              title={v.first_name}
              desc={v.last_name}
              more={v.email}
            />
          );
        })}
      </div>
    </div>
  );
}

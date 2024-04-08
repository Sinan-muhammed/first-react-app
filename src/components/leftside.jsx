import React from "react";

const Leftside = () => {
  return (
    <div className="w-sceen h-dvh flex">
      <div className="w-1/2 flex flex-col gap-6">
        <div className="flex mt-32 ml-20 gap-4">
          <input
            type="text"
            className="w-2/4  rounded-md text-justify h-12 pl-8"
            placeholder="Add your Task"
          />
          <button type="submit" className="w-1/6 bg-blue-900 h-12 rounded-md font-bold text-stone-50">
            Add
          </button>
        </div>
        <h1 className="mt-10 ml-20 text-2xl font-extrabold text-stone-50">Added Tasks</h1>
        <div className="flex  gap-5  w-4/4 ml-20">
          <div className="w-2/4 bg-neutral-900 h-14 rounded-lg text-white ">
            <h2 className="px-8 py-4">hai how are you</h2>
          </div>
          <button className="w-1/6 bg-green-700 h-14 rounded-md font-bold text-stone-50">
            Compleate
          </button>
        </div>
      </div>
      <div className="w-1/2  ">
      <h1 className="mt-32 ml-28 text-2xl font-extrabold text-stone-50">Compleated Tasks</h1>
        <div className="flex gap-5 p-9  ml-20">
          <div className="w-2/4 bg-neutral-900 h-14 rounded-lg text-white ">
            <h2 className="px-8 py-4 ">hai how are you</h2>
          </div>
          <button className="w-1/6 bg-red-700 h-14 rounded-md font-bold text-stone-50">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leftside;

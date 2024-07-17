import React from "react";

const Rating = (props) => {
  return (
    <main className="flex flex-row gap-5 text-slate-900">
      {/*  */}
      <div className="flex flex-col items-center gap-2">
        <div className=" text-center text-lg leading-5 font-bold">
          Problems
          <br />
          Solved
        </div>
        <div className="text-center text-4xl font-semibold">{props.solved}</div>
      </div>
      {/*  */}
      <div className="flex flex-col items-center  gap-2">
        <div className=" text-center text-lg leading-5 font-bold">
          Contest
          <br />
          Rating
        </div>
        <div className="text-center text-4xl font-semibold">{props.rating}</div>
      </div>
      {/*  */}
    </main>
  );
};

export default Rating;

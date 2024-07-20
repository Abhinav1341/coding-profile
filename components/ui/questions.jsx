import React from "react";

const Rating = (props) => {
  const { solved, rating, score } = props;

  return (
    <main className="flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-5 text-slate-900">
      {solved !== undefined && solved !== null && (
        <div className="flex flex-col items-center md:gap-2">
          <div className="text-center text-xs md:text-lg leading-3 md:leading-5 font-bold">
            Problems
            <br />
            Solved
          </div>
          <div className="text-center text-lg md:text-3xl lg:text-4xl font-semibold">
            {solved}
          </div>
        </div>
      )}
      {rating !== undefined && rating !== null && (
        <div className="flex flex-col items-center md:gap-2">
          <div className="text-center text-xs md:text-lg leading-3 md:leading-5 font-bold">
            Contest
            <br />
            Rating
          </div>
          <div className="text-center text-lg md:text-3xl lg:text-4xl font-semibold">
            {rating}
          </div>
        </div>
      )}
      {score !== undefined && score !== null && (
        <div className="flex flex-col items-center md:gap-2">
          <div className="text-center text-xs md:text-lg leading-3 md:leading-5 font-bold">
            Overall
            <br />
            Score
          </div>
          <div className="text-center text-lg md:text-3xl lg:text-4xl font-semibold">
            {score}
          </div>
        </div>
      )}
    </main>
  );
};

export default Rating;

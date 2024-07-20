import React from "react";

const Rating = (props) => {
  const { solved, rating, score, maxRating } = props;

  return (
    <main className="flex flex-row gap-5 text-slate-900">
      {solved !== undefined && solved !== null && (
        <div className="flex flex-col items-center gap-2">
          <div className="text-center text-lg leading-5 font-bold">
            Problems
            <br />
            Solved
          </div>
          <div className="text-center text-4xl font-semibold">{solved}</div>
        </div>
      )}
      {rating !== undefined && rating !== null && (
        <div className="flex flex-col items-center gap-2">
          <div className="text-center text-lg leading-5 font-bold">
            Contest
            <br />
            Rating
          </div>
          <div className="text-center text-4xl font-semibold">{rating}</div>
        </div>
      )}
      {score !== undefined && score !== null && (
        <div className="flex flex-col items-center gap-2">
          <div className="text-center text-lg leading-5 font-bold">
            Overall
            <br />
            Score
          </div>
          <div className="text-center text-4xl font-semibold">{score}</div>
        </div>
      )}
      {maxRating !== undefined && maxRating !== null && (
        <div className="flex flex-col items-center gap-2">
          <div className="text-center text-lg leading-5 font-bold">
            Max Contest
            <br />
            Rating
          </div>
          <div className="text-center text-4xl font-semibold">{maxRating}</div>
        </div>
      )}
    </main>
  );
};

export default Rating;

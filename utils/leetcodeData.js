export async function fetchUserContestData() {
  const response = await fetch(
    `https://alfa-leetcode-api.onrender.com/ableed/contest`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user contest data");
  }

  const data = await response.json();
  return data;
}

export async function fetchUserSolvedData() {
  const response = await fetch(
    `https://alfa-leetcode-api.onrender.com/ableed/solved`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user solved data");
  }

  const data = await response.json();
  return data;
}

export async function fetchLeetCodeData() {
  try {
    const contestData = await fetchUserContestData();
    const solvedData = await fetchUserSolvedData();

    return {
      rating: contestData.contestRating,
      subs: solvedData.solvedProblem,
    };
  } catch (error) {
    console.error("Error fetching LeetCode data:", error);
    return {
      contestData: 0,
      solvedData: 0,
    };
  }
}

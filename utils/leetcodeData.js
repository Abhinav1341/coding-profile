export async function fetchUserContestData(handle) {
  const response = await fetch(
    `https://alfa-leetcode-api.onrender.com/${handle}/contest`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user contest data");
  }

  const data = await response.json();
  return data;
}

export async function fetchUserSolvedData(handle) {
  const response = await fetch(
    `https://alfa-leetcode-api.onrender.com/${handle}/solved`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user solved data");
  }

  const data = await response.json();
  return data;
}

export async function fetchLeetCodeData(handle) {
  try {
    const contestData = await fetchUserContestData(handle);
    const solvedData = await fetchUserSolvedData(handle);

    return {
      contestData,
      solvedData,
    };
  } catch (error) {
    console.error("Error fetching LeetCode data:", error);
    return {
      contestData: null,
      solvedData: null,
    };
  }
}

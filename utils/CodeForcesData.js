export async function fetchUserInfo(handle) {
  const response = await fetch(
    `https://codeforces.com/api/user.info?handles=${handle}`
  );
  const data = await response.json();

  if (data.status === "OK") {
    return data.result[0];
  } else {
    throw new Error("Failed to fetch user info");
  }
}

export async function fetchUserStatus(handle) {
  const response = await fetch(
    `https://codeforces.com/api/user.status?handle=${handle}`
  );
  const data = await response.json();

  if (data.status === "OK") {
    return data.result;
  } else {
    throw new Error("Failed to fetch user status");
  }
}

export async function fetchCodeforcesData(handle) {
  try {
    const userInfo = await fetchUserInfo(handle);
    const submissions = await fetchUserStatus(handle);

    const solvedProblems = new Set();
    submissions.forEach((submission) => {
      if (submission.verdict === "OK") {
        solvedProblems.add(submission.problem.name);
      }
    });

    return {
      rating: userInfo.rating,
      solvedCount: solvedProblems.size,
    };
  } catch (error) {
    console.error(error);
    return {
      rating: null,
      solvedCount: null,
    };
  }
}

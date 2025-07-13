export async function fetchUserInfo() {
  const response = await fetch(
    `https://codeforces.com/api/user.info?handles=ableed`
  );
  const data = await response.json();

  if (data.status === "OK") {
    return data.result[0];
  } else {
    throw new Error("Failed to fetch user info");
  }
}

export async function fetchUserStatus() {
  const response = await fetch(
    `https://codeforces.com/api/user.status?handle=ableed`
  );
  const data = await response.json();

  if (data.status === "OK") {
    return data.result;
  } else {
    throw new Error("Failed to fetch user status");
  }
}

export async function fetchCodeforcesData() {
  try {
    const userInfo = await fetchUserInfo();
    const submissions = await fetchUserStatus();

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
      rating: 0,
      solvedCount: 0,
    };
  }
}

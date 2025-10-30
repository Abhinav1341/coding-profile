const REVALIDATE_TIME = 180;
export const dynamic = "force-dynamic";
import { profiles } from "@/lib/config";
const CF_HANDLE = profiles.codeforces;
export async function fetchUserInfo() {
  const response = await fetch(
    `https://codeforces.com/api/user.info?handles=${CF_HANDLE}`,
    { next: { revalidate: REVALIDATE_TIME } }
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
    `https://codeforces.com/api/user.status?handle=${CF_HANDLE}`,
    { next: { revalidate: REVALIDATE_TIME } }
  );
  const data = await response.json();

  if (data.status === "OK") {
    return data.result;
  } else {
    throw new Error("Failed to fetch user status");
  }
}

export async function fetchCodeforcesData() {
  if (!CF_HANDLE) {
    return {
      rating: 0,
      solvedCount: 0,
    };
  }
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

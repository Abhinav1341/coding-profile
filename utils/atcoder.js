const REVALIDATE_TIME = 1800;
export const dynamic = "force-dynamic";
import { fetchUserInfo } from "@qatadaazzeh/atcoder-api";

export async function userInfo() {
  const data = await fetchUserInfo("ableed");

  if (data.status === "OK") {
    return data.userRating;
  } else {
    throw new Error("Failed to fetch user info");
  }
}

export async function fetchCodeforcesData() {
  try {
    const Rating = await userInfo();

    return {
      rating: Rating,
    };
  } catch (error) {
    console.error(error);
    return {
      rating: 0,
    };
  }
}

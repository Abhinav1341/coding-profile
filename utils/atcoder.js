const REVALIDATE_TIME = 1800;
import { fetchUserInfo } from "@qatadaazzeh/atcoder-api";

function CalculateKyu(rating) {
  if (rating >= 1800) return 1;
  if (rating >= 1600) return 2;
  if (rating >= 1400) return 3;
  if (rating >= 1200) return 4;
  if (rating >= 1000) return 5;
  if (rating >= 800) return 6;
  if (rating >= 600) return 7;
  return 8;
}

export async function getProcessedUserInfo() {
  const data = await fetchUserInfo("ableed", {
    next: { revalidate: REVALIDATE_TIME },
  });

  if (data && typeof data.userRating === "number") {
    const rating = Number(data.userRating);
    const kyu = CalculateKyu(rating);
    return { rating, kyu };
  } else {
    throw new Error(`Failed to fetch or parse valid user info for ableed`);
  }
}

export async function fetchAtcoderData() {
  try {
    const { rating, kyu } = await getProcessedUserInfo();
    return { rating, kyu };
  } catch (error) {
    console.error(`AtCoder API Error for user ableed:`, error);
    return {
      rating: 0,
      kyu: 8,
    };
  }
}

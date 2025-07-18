const REVALIDATE_TIME = 1800;
export async function fetchScrapedLeetcodeData() {
  const res = await fetch(
    "https://coding-profile-delta.vercel.app/api/leetcode",
    { next: { revalidate: REVALIDATE_TIME } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function fetchScrapedLeetcodeData() {
  const res = await fetch(
    "https://coding-profile-delta.vercel.app/api/leetcode"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

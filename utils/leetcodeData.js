export async function fetchScrapedLeetcodeData() {
  const res = await fetch("http://localhost:3000/api/leetcode");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function fetchScrapedCCData() {
  const res = await fetch(
    "https://coding-profile-delta.vercel.app/api/codechef"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

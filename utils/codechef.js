const REVALIDATE_TIME = 1800;
export async function fetchScrapedCCData() {
  const res = await fetch(
    // "http://localhost:3000/api/codechef" ||
    "https://coding-profile-delta.vercel.app/api/codechef",
    { next: { revalidate: REVALIDATE_TIME } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

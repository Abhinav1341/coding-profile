const REVALIDATE_TIME = 1800;
export async function fetchScrapedGFGData() {
  const res = await fetch(
    // "http://localhost:3000/api/gfg" ||
    "https://coding-profile-delta.vercel.app/api/gfg",
    {
      next: { revalidate: REVALIDATE_TIME },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

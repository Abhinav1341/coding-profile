export async function fetchScrapedGFGData() {
  const res = await fetch("https://coding-profile-delta.vercel.app/api/gfg");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

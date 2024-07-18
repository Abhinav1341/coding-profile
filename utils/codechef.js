export async function fetchScrapedCCData() {
  const res = await fetch("http://localhost:3000/api/codechef");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

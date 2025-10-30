const REVALIDATE_TIME = 180;
export const dynamic = "force-dynamic";
export async function fetchScrapedCCData() {
  const res = await fetch("/api/codechef", {
    next: { revalidate: REVALIDATE_TIME },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

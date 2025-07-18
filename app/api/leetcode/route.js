import axios from "axios";
const username = "ableed";
const LEETCODE_API = "https://leetcode.com/graphql";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const contestQuery = `
      query getContestRating($username: String!) {
        userContestRanking(username: $username) {
          rating
        }
      }
    `;

    const solvedQuery = `
      query userProfile($username: String!) {
        matchedUser(username: $username) {
          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
      }
    `;

    const [contestRes, solvedRes] = await Promise.all([
      axios.post(LEETCODE_API, {
        query: contestQuery,
        variables: { username },
      }),
      axios.post(LEETCODE_API, {
        query: solvedQuery,
        variables: { username },
      }),
    ]);

    const rating = contestRes.data.data.userContestRanking?.rating || 0;
    const totalSolved =
      solvedRes.data.data.matchedUser?.submitStatsGlobal?.acSubmissionNum.find(
        (entry) => entry.difficulty === "All"
      )?.count || 0;

    return Response.json({ rating, solved: totalSolved });
  } catch (error) {
    console.error("LeetCode API error:", error);
    return Response.json({ rating: 0, solved: 0 }, { status: 500 });
  }
}

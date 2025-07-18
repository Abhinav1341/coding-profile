import { NextResponse } from "next/server";
const axios = require("axios");
const cheerio = require("cheerio");
export const dynamic = "force-dynamic";

export async function GET() {
  const profileUrl = "https://www.geeksforgeeks.org/user/abhinavsmmc4/";

  const cssSelectors = {
    scoreCards: ".scoreCard_head_left--score__oSi_x",
  };

  try {
    const profileResponse = await axios.get(profileUrl);
    const profileHtml = profileResponse.data;
    const $ = cheerio.load(profileHtml);

    const submissions = $(cssSelectors.scoreCards).eq(1).text().trim();
    const rating = $(cssSelectors.scoreCards).eq(2).text().trim();

    const data = {
      submissions,
      rating,
    };

    console.log(submissions);
    console.log(rating);

    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error fetching the profile URL: ${error.message}`);
    return NextResponse.json(
      { error: "Failed to fetch data from GeeksforGeeks profile" },
      { status: 500 }
    );
  }
}

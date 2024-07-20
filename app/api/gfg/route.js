import { NextResponse } from "next/server";
const axios = require("axios");
const cheerio = require("cheerio");

export async function GET() {
  const profileUrl = "https://www.geeksforgeeks.org/user/abhinavsmmc4/";

  const cssSelectors = {
    subs: ".scoreCard_head_card_left--score__pC6ZA",
  };

  try {
    const profileResponse = await axios.get(profileUrl);
    const profileHtml = profileResponse.data;
    const $profile = cheerio.load(profileHtml);

    const submissions = $profile(cssSelectors.subs).eq(1).text().trim();
    const score = $profile(cssSelectors.subs).eq(0).text().trim();

    const data = {
      submissions,
      score,
    };

    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error fetching the profile URL: ${error.message}`);
    return NextResponse.json(
      { error: "Failed to fetch data from GeeksforGeeks profile" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
const axios = require("axios");
const cheerio = require("cheerio");

export async function GET() {
  const profileUrl = "https://www.geeksforgeeks.org/user/abhinavsmmc4/";
  const contestUrl =
    "https://www.geeksforgeeks.org/events/rec/gfg-weekly-coding-contest?itm_source=geeksforgeeks&itm_medium=main_header&itm_campaign=contests";

  const cssSelectors = {
    rating: ".events_rank__J8wZd",
    subs: ".scoreCard_head_card_left--score__pC6ZA",
  };

  try {
    const profileResponse = await axios.get(profileUrl);
    const profileHtml = profileResponse.data;
    const $profile = cheerio.load(profileHtml);

    const subs = $profile(cssSelectors.subs).eq(1).text().trim();

    const contestResponse = await axios.get(contestUrl);
    const contestHtml = contestResponse.data;
    const $contest = cheerio.load(contestHtml);

    const rating = $contest(cssSelectors.rating).eq(1).text().trim();

    const data = {
      subs,
      rating,
    };

    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error fetching the URL: ${error}`);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

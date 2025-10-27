import { NextResponse } from "next/server";
import { profileLinks } from "@/lib/config";
const axios = require("axios");
const cheerio = require("cheerio");

export async function GET() {
  const profileUrl = profileLinks.geeksforgeeks;

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

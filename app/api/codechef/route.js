import { NextResponse } from "next/server";
const axios = require("axios");
const cheerio = require("cheerio");

export async function GET() {
  const url = "https://www.codechef.com/users/ableed";

  const cssSelectors = {
    profile: ".h2-style",
    rating: ".rating-number",
    subs: ".rating-data-section > h3",
  };

  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const profile = $(cssSelectors.profile).text().trim();
    const rating = $(cssSelectors.rating).text().trim();
    const subsText = $(cssSelectors.subs).eq(3).text().trim();
    const lastIndex = subsText.lastIndexOf(" ");
    const subs = subsText.substring(lastIndex + 1);

    const data = {
      subs,
      profile,
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

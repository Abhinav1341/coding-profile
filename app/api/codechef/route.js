import { NextResponse } from "next/server";
const axios = require("axios");
const cheerio = require("cheerio");

export async function GET() {
  const url = "https://www.codechef.com/users/ableed";

  const cssSelectors = {
    rating: "div.rating-number",
    solved: ".rating-data-section > h3",
  };

  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const rating = $(cssSelectors.rating).text().trim();
    const subs = $(cssSelectors.solved).eq(3).text().trim();
    const lastIndex2 = subs.lastIndexOf(" ");
    const subm = subs.substring(lastIndex2 + 1);
    console.log(subs);

    const data = {
      rating,
      subm,
    };

    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error fetching the URL: ${error.message}`);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

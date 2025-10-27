## Coding Profile Dashboard
This project is a Next.js application designed to display your coding statistics from various competitive programming and development platforms in a single dashboard.

# Features
* Aggregates data from multiple platforms.
* Currently supports:
    1. LeetCode
    2. Codeforces
    3. GeeksforGeeks
    4. CodeChef
* Displays total problems solved across platforms.
* Shows platform-specific stats like contest ratings and problems solved.
* Provides links to your profiles on each platform and GitHub.
* Uses modern UI components and animations for a clean look. problems solved across platforms.
* Shows platform-specific stats like contest ratings and problems solved.
* Provides links to your profiles on each platform and GitHub.
* Uses modern UI components and animations for a clean look.

# Tech Stack
* <b>Framework</b>: Next.js
* <b>Language</b>: JavaScript
* <b>Styling</b>: Tailwind CSS
* <b>UI Components</b>: Magic UI
* <b>Data Fetching</b>: Axios, Cheerio(for Scraping), Platform APIs

# How it works?
1. <b>Configuration:</b> Usernames for the desired platforms are stored in the lib/config.js file.
2. <b>Data Fetching:</b>
    * The frontend (app/page.js) triggers data fetching functions.
    * For Codeforces and LeetCode, official APIs are used (via utils/CodeForcesData.js and app/api/leetcode/route.js).
    * For GeeksforGeeks and CodeChef, Next.js API routes (app/api/gfg/route.js, app/api/codechef/route.js) use Axios and Cheerio to scrape the public profile pages for relevant statistics. (Note: Scraping relies on the structure of the target websites. If GFG or CodeChef change their page layout, the scraping logic in these API routes may need to be updated.)
    * Data fetching functions handle errors gracefully, returning default values (e.g., 0) if a platform is disabled in the config or if fetching fails.
3. <b>Display:</b> The fetched data is displayed on the main page using React components, including animated number tickers and styled cards for each platform.

# Getting Started
Follow these steps to set up and run the project locally with your own coding profiles.

Prerequisites:
* Node.js (v18.17.0 or later recommended)
* npm, yarn, or pnpm

Installation and Setup:
0. Star the Repository `:)`
1. Fork the Repository
2. Clone the repository:
```bash
git clone https://github.com/your-username/coding-profile.git # Replace with the actual repo URL
cd coding-profile
```
3. Install Dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```
4. Configure your profiles.
```bash
// Example lib/config.js
export const profiles = {
  leetcode: "your_leetcode_username",
  codeforces: "your_codeforces_username",
  geeksforgeeks: "your_gfg_username",
  codechef: "your_codechef_username",
  github: "your_github_username",
};

// --- DO NOT EDIT BELOW THIS LINE ---
// ... (rest of the file remains the same)
```
5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
6. Open your browser: Navigate to http://localhost:3000 to see your coding profile dashboard.

## Learn More
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

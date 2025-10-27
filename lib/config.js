/**
 * YOUR PROFILE CONFIGURATION
 *
 * Add your usernames for the platforms you want to display.
 * If you don't have a profile for a platform, leave the username as an empty string ("").
 *
 * The links will automatically be generated based on these usernames.
 */
export const profiles = {
  leetcode: "ableed",
  codeforces: "ableed",
  geeksforgeeks: "abhinavsmmc4",
  codechef: "mobkun",
  github: "Abhinav1341",
};

/**
 * --- DO NOT EDIT BELOW THIS LINE ---
 *
 * The profile URLs are generated automatically based on the usernames above.
 */
export const profileLinks = {
  leetcode: profiles.leetcode
    ? `https://leetcode.com/u/${profiles.leetcode}/`
    : "",
  codeforces: profiles.codeforces
    ? `https://codeforces.com/profile/${profiles.codeforces}`
    : "",
  geeksforgeeks: profiles.geeksforgeeks
    ? `https://www.geeksforgeeks.org/user/${profiles.geeksforgeeks}/`
    : "",
  codechef: profiles.codechef
    ? `https://www.codechef.com/users/${profiles.codechef}`
    : "",
  github: profiles.github ? `https://github.com/${profiles.github}` : "",
};

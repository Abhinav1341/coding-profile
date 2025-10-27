import Link from "next/link";
import { MagicCard } from "../magicui/magic-card";
import { profiles, profileLinks } from "@/lib/config";

const Sidebar = () => {
  return (
    <main className="h-max w-max flex flex-col justify-between items-center">
      <div>
        <div className="text-center text-xs md:text-sm lg:text-base font-semibold text-slate-800">
          Visit <b>My Profiles</b> on <br /> these Platforms:
        </div>
        {profiles.leetcode && (
          <Link href={profileLinks.leetcode} target="_blank">
            <MagicCard
              className=" w-40 md:w-52 lg:w-64 my-2 md:my-4 h-16 md:h-20 bg-orange-300 rounded-md text-center text-[0.8rem] md:text-[1.35rem] font-semibold items-center flex justify-center relative cursor-pointer"
              gradientColor={"#FFDB94"}
            >
              Visit LeetCode
            </MagicCard>
          </Link>
        )}
        {profiles.codeforces && (
          <Link href={profileLinks.codeforces} target="_blank">
            <MagicCard
              className="w-40 md:w-52 lg:w-64 my-2 md:my-4 h-16 md:h-20 bg-[#afd9ff] rounded-md text-center text-[0.8rem] md:text-[1.35rem] font-semibold items-center flex justify-center relative cursor-pointer"
              gradientColor={"#87B3DC"}
            >
              Visit Codeforces
            </MagicCard>
          </Link>
        )}
        {profiles.geeksforgeeks && (
          <Link href={profileLinks.geeksforgeeks} target="_blank">
            {" "}
            <MagicCard
              className="w-40 md:w-52 lg:w-64 my-2 md:my-4 h-16 md:h-20 bg-green-400 rounded-md text-center text-[0.8rem] md:text-[1.35rem] font-semibold items-center flex justify-center relative cursor-pointer"
              gradientColor={"#77F38B"}
            >
              Visit GeeksForGeeks
            </MagicCard>
          </Link>
        )}
        {profiles.codechef && (
          <Link href={profileLinks.codechef} target="_blank">
            <MagicCard
              className="w-40 md:w-52 lg:w-64 my-2 md:my-4 h-16 md:h-20 bg-amber-100 rounded-md text-center text-[0.8rem] md:text-[1.35rem] font-semibold items-center flex justify-center relative cursor-pointer"
              gradientColor={"#FFD88B"}
            >
              Visit CodeChef
            </MagicCard>
          </Link>
        )}
      </div>
      <div className="mt-20">
        {profiles.github && (
          <Link href={profileLinks.github} target="_blank">
            <MagicCard
              className="w-40 md:w-52 lg:w-64 my-2 md:my-4 h-16 md:h-20 bg-slate-100 rounded-md text-center text-[0.8rem] md:text-[1.35rem] font-semibold items-center flex justify-center relative cursor-pointer"
              gradientColor={"#ffffff"}
            >
              My GitHub
            </MagicCard>
          </Link>
        )}
      </div>
    </main>
  );
};

export default Sidebar;

import { MagicCard } from "../magicui/magic-card";

const Sidebar = () => {
  return (
    <main className="h-max w-max flex flex-col justify-between items-center">
      <div>
        <div className="text-center font-semibold text-slate-800">
          Visit <b>My Profiles</b> on <br /> these Platforms:
        </div>
        <MagicCard
          className="w-64 my-4 h-20 bg-orange-300 rounded-md text-center text-[1.35rem] font-semibold items-center flex justify-center relative cursor-pointer"
          gradientColor={"#FFDB94"}
        >
          Visit LeetCode
        </MagicCard>
        <MagicCard
          className="w-64 my-4 h-20 bg-[#afd9ff] rounded-md text-center text-[1.35rem] font-semibold items-center flex justify-center relative cursor-pointer"
          gradientColor={"#87B3DC"}
        >
          Visit Codeforces
        </MagicCard>
        <MagicCard
          className="w-64 my-4 h-20 bg-green-400 rounded-md text-center text-[1.35rem] font-semibold items-center flex justify-center relative cursor-pointer"
          gradientColor={"#77F38B"}
        >
          Visit GeeksForGeeks
        </MagicCard>
        <MagicCard
          className="w-64 my-4 h-20 bg-amber-100 rounded-md text-center text-[1.35rem] font-semibold items-center flex justify-center relative cursor-pointer"
          gradientColor={"#FFD88B"}
        >
          Visit CodeChef
        </MagicCard>
      </div>
      <div className="mt-20">
        <MagicCard
          className="w-64 my-4 h-20 bg-slate-100 rounded-md text-center text-[1.35rem] font-semibold items-center flex justify-center relative cursor-pointer"
          gradientColor={"#ffffff"}
        >
          My GitHub
        </MagicCard>
      </div>
    </main>
  );
};

export default Sidebar;

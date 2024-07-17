import Image from "next/image";
import NumberTicker from "../magicui/number-ticker";
import Rating from "./questions";
import AnimatedGridPattern from "../magicui/animated-grid-pattern";
import { fetchUserInfo, fetchUserStatus } from "@/utils/codeforcesData";

export async function getStaticProps() {
  const handle = "vanibha13";
  let num = 0;
  let rating = 0;

  const userInfo = fetchUserInfo(handle);
  rating = userInfo[0].rating;
  rating.toString();

  const submissions = fetchUserStatus(handle);

  const solved = new Set();
  submissions.forEach((idx) => {
    if (idx.verdict === "OK") {
      solved.add(`${idx.id}`);
    }
  });
  num = solved.size;
  num.toString();

  return {
    props: {
      data: {
        num,
        rating,
      },
    },
  };
}

const Dashboard = ({ data }) => {
  const { num, rating } = data;
  return (
    <main className="p-3 px-6">
      <div className="text-gray-600 font-bold text-4xl flex flex-row gap-4">
        Total DSA Problems Solved :
        <p className="text-gray-600 font-bold text-4xl">
          <NumberTicker value="592" />
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-8 mt-6">
        <div className="h-60 bg-[#FFFAF1] rounded-xl relative cursor-pointer overflow-clip">
          <div className="px-10 py-5">
            <Rating solved="210" rating="1733" />
          </div>
          <div className="absolute w-72 right-7 bottom-5">
            <Image
              src="/lc-logo.svg"
              height={100}
              width={500}
              alt="LeetCode Logo"
            />
          </div>
          <AnimatedGridPattern
            maxOpacity={0.1}
            duration={4}
            repeatDelay={2}
            className="mask-image:radial-gradient(500px_circle_at_center,white,transparent) inset-x-0 inset-y-[-30%] h-[150%] skew-y-12 overflow-hidden opacity-20"
          />
        </div>
        <div className="h-60 bg-[#DEF2FC] rounded-xl relative cursor-pointer overflow-clip">
          <div className="px-10 py-5">
            <Rating solved="120" rating="1397" />
          </div>
          <div className="absolute w-80 right-7 bottom-8">
            <Image
              src="/cf-logo.svg"
              height={100}
              width={500}
              alt="Codeforces Logo"
            />
          </div>
          <AnimatedGridPattern
            maxOpacity={0.1}
            duration={16}
            repeatDelay={2}
            className="mask-image:radial-gradient(500px_circle_at_center,white,transparent) inset-x-0 inset-y-[-30%] h-[150%] skew-y-12 overflow-hidden opacity-20"
          />
        </div>
        <div className="h-60 bg-[#E7FCEC] rounded-xl relative cursor-pointer overflow-clip">
          <div className="px-10 py-5">
            <Rating solved="128" rating="1233" />
          </div>
          <div className="absolute w-80 right-7 bottom-2">
            <Image
              src="/gfg-new-logo.png"
              height={100}
              width={500}
              alt="GFG Logo"
            />
          </div>
          <AnimatedGridPattern
            maxOpacity={0.1}
            duration={16}
            repeatDelay={2}
            className="mask-image:radial-gradient(500px_circle_at_center,white,transparent) inset-x-0 inset-y-[-30%] h-[150%] skew-y-12 overflow-hidden opacity-20"
          />
        </div>
        <div className="h-60 bg-white rounded-xl relative cursor-pointer overflow-clip">
          <div className="px-10 py-5">
            <Rating solved="114" rating="1440" />
          </div>
          <div className="absolute w-64 right-7 bottom-3">
            <Image src="/cc-logo.svg" height={100} width={500} alt="CC Logo" />
          </div>
          <AnimatedGridPattern
            maxOpacity={0.1}
            duration={4}
            repeatDelay={2}
            className="mask-image:radial-gradient(500px_circle_at_center,white,transparent) inset-x-0 inset-y-[-30%] h-[150%] skew-y-12 overflow-hidden opacity-20"
          />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;

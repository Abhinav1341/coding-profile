"use client";
import { useState, useEffect } from "react";
import Nav from "../components/ui/navbar";
import Sidebar from "../components/ui/sidebar";
import Particles from "@/components/magicui/particles";
import Image from "next/image";
import NumberTicker from "../components/magicui/number-ticker";
import Rating from "../components/ui/questions";
import AnimatedGridPattern from "../components/magicui/animated-grid-pattern";
import { fetchLeetCodeData } from "@/utils/leetcodeData";
import { fetchScrapedCCData } from "@/utils/codechef";
import { fetchScrapedGFGData } from "@/utils/gfgData";
import { fetchCodeforcesData } from "@/utils/CodeForcesData";

export default function Home() {
  ////
  const [dataCF, setDataCF] = useState({ solvedCount: 0, rating: 0 });
  const [leetCodeData, setLeetCodeData] = useState({
    rating: 0,
    solved: 0,
  });
  const [ccData, setCCData] = useState({ solved: 0, rating: 0 });
  const [gfgData, setGFGData] = useState({ solved: 0, score: 0 });

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedCFData = await fetchCodeforcesData();
        setDataCF(fetchedCFData);

        const fetchedLeetCodeData = await fetchLeetCodeData();
        setLeetCodeData(fetchedLeetCodeData);

        const fetchedGFGData = await fetchScrapedGFGData();
        setGFGData(fetchedGFGData);

        const fetchedCCData = await fetchScrapedCCData();
        setCCData(fetchedCCData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen relative flex-col items-center justify-between p-24">
      <Nav />
      <div className="flex flex-row absolute left-0 right-0 top-16 bottom-0 z-0">
        <div className="flex-[1] bg-white p-4 flex flex-col items-center">
          <Particles
            className="absolute inset-0"
            quantity={150}
            ease={100}
            color={"gray"}
            refresh
          />
          <Sidebar />
        </div>
        <div className="flex-[4] bg-slate-50 p-6">
          <div className="text-gray-600 font-bold text-4xl flex flex-row gap-4">
            Total DSA Problems Solved :
            <p className="text-gray-600 font-bold text-4xl">
              <NumberTicker value={480} />
            </p>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-8 mt-6">
            <div className="h-60 bg-[#FFFAF1] rounded-xl relative cursor-pointer overflow-clip">
              <div className="px-10 py-5">
                <Rating
                  solved={`${leetCodeData.subs}`}
                  rating={`${parseInt(leetCodeData.rating)}`}
                />
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
                <Rating
                  solved={`${dataCF.solvedCount}`}
                  rating={`${dataCF.rating}`}
                />
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
                <Rating
                  solved={gfgData.submissions}
                  score={`${gfgData.score}`}
                />
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
                <Rating
                  solved={parseInt(ccData.submissions)}
                  rating={`${ccData.rating}`}
                />
              </div>
              <div className="absolute w-64 right-7 bottom-3">
                <Image
                  src="/cc-logo.svg"
                  height={100}
                  width={500}
                  alt="CC Logo"
                />
              </div>
              <AnimatedGridPattern
                maxOpacity={0.1}
                duration={4}
                repeatDelay={2}
                className="mask-image:radial-gradient(500px_circle_at_center,white,transparent) inset-x-0 inset-y-[-30%] h-[150%] skew-y-12 overflow-hidden opacity-20"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

"use client";
import { useState, useEffect } from "react";
import Nav from "../components/ui/navbar";
import Sidebar from "../components/ui/sidebar";
import Particles from "@/components/magicui/particles";
import Image from "next/image";
import NumberTicker from "../components/magicui/number-ticker";
import Rating from "../components/ui/questions";
import AnimatedGridPattern from "../components/magicui/animated-grid-pattern";
import Loader from "../components/ui/loader";
import { fetchScrapedLeetcodeData } from "@/utils/leetcodeData";
import { fetchScrapedCCData } from "@/utils/codechef";
import { fetchScrapedGFGData } from "@/utils/gfgData";
import { fetchCodeforcesData } from "@/utils/CodeForcesData";
import { profiles } from "@/lib/config";

export default function Home() {
  const [dataCF, setDataCF] = useState({ solvedCount: 0, rating: 0 });
  const [ccData, setCCData] = useState({ solved: 0, rating: 0 });
  const [gfgData, setGFGData] = useState({ solved: 0, rating: 0 });
  const [leetCodeData, setLeetCodeData] = useState({
    rating: 0,
    solved: 0,
  });
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchPromises = [];

        // Conditionally add fetch promises based on config
        if (profiles.codeforces) {
          fetchPromises.push(fetchCodeforcesData());
        } else {
          fetchPromises.push(Promise.resolve(null)); // Add null placeholder
        }

        if (profiles.geeksforgeeks) {
          fetchPromises.push(fetchScrapedGFGData());
        } else {
          fetchPromises.push(Promise.resolve(null)); // Add null placeholder
        }

        if (profiles.codechef) {
          fetchPromises.push(fetchScrapedCCData());
        } else {
          fetchPromises.push(Promise.resolve(null)); // Add null placeholder
        }

        if (profiles.leetcode) {
          fetchPromises.push(fetchScrapedLeetcodeData());
        } else {
          fetchPromises.push(Promise.resolve(null)); // Add null placeholder
        }

        const [
          fetchedCFData,
          fetchedGFGData,
          fetchedCCData,
          fetchedLeetCodeData,
        ] = await Promise.all(fetchPromises);

        // Set state only if data was fetched
        if (fetchedCFData) setDataCF(fetchedCFData);
        if (fetchedGFGData) setGFGData(fetchedGFGData);
        if (fetchedCCData) setCCData(fetchedCCData);
        if (fetchedLeetCodeData) setLeetCodeData(fetchedLeetCodeData);

        // Safely calculate total solved
        const totalSolved =
          (fetchedLeetCodeData
            ? parseInt(fetchedLeetCodeData.solved) || 0
            : 0) +
          (fetchedCFData ? parseInt(fetchedCFData.solvedCount) || 0 : 0) +
          (fetchedGFGData ? parseInt(fetchedGFGData.submissions) || 0 : 0) +
          (fetchedCCData ? parseInt(fetchedCCData.subm) || 0 : 0);

        setTotal(totalSolved);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen relative flex-col items-center justify-between px-14 md:px-16 lg:p-24">
      <Nav />
      <div className="flex flex-row absolute left-0 right-0 top-10 md:top-16 bottom-0 z-0">
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
          {loading ? (
            <div className="w-full h-full flex items-center justify-center">
              <Loader />
            </div>
          ) : (
            <>
              <div className="text-gray-600 font-bold text-xl md:text-2xl lg:text-4xl flex flex-row gap-4">
                Total DSA Problems Solved :
                <p className="text-gray-600 font-bold text-xl md:text-2xl lg:text-4xl">
                  <NumberTicker value={total} />
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-3 md:gap-8 mt-6">
                <div className=" h-32 md:52 lg:h-60 bg-[#ede6d7] hover:scale-[1.02] transition-all rounded-xl relative cursor-pointer overflow-clip">
                  <div className="md:px-6 md:block flex items-center justify-center px-auto pt-4 md:py-5">
                    <Rating
                      solved={`${leetCodeData.solved}`}
                      rating={`${Math.ceil(leetCodeData.rating)}`}
                    />
                  </div>
                  <div className="flex items-center justify-center md:absolute md:left-4 md:w-40 md:right-5 md:bottom-4 lg:w-72 lg:right-7 lg:bottom-5">
                    <div className="flex items-center justify-center md:hidden w-full h-full text-2xl font-semibold text-gray-700 text-center mt-4">
                      LeetCode
                    </div>
                    <Image
                      src="/lc-logo.svg"
                      height={100}
                      width={500}
                      alt="LeetCode"
                      className="hidden md:block"
                    />
                  </div>
                  <AnimatedGridPattern
                    maxOpacity={0.1}
                    duration={4}
                    repeatDelay={2}
                    className="mask-image:radial-gradient(500px_circle_at_center,white,transparent) inset-x-0 inset-y-[-30%] h-[150%] skew-y-12 overflow-hidden opacity-20"
                  />
                </div>
                <div className="h-32 md:52 lg:h-60  bg-[#d6e6ee] rounded-xl hover:scale-[1.02] transition-all relative cursor-pointer overflow-clip">
                  <div className="md:px-6 md:block flex items-center justify-center px-auto pt-4 md:py-5">
                    <Rating
                      solved={`${dataCF.solvedCount}`}
                      rating={`${dataCF.rating}`}
                    />
                  </div>
                  <div className="flex items-center justify-center md:absolute md:left-4 md:w-40 md:right-5 md:bottom-4 lg:w-72 lg:right-7 lg:bottom-5">
                    <div className="flex items-center justify-center md:hidden w-full h-full text-2xl font-semibold text-gray-700 text-center mt-4">
                      Codeforces
                    </div>
                    <Image
                      src="/cf-logo.svg"
                      height={100}
                      width={500}
                      alt="Codeforces"
                      className="hidden md:block"
                    />
                  </div>
                  <AnimatedGridPattern
                    maxOpacity={0.1}
                    duration={16}
                    repeatDelay={2}
                    className="mask-image:radial-gradient(500px_circle_at_center,white,transparent) inset-x-0 inset-y-[-30%] h-[150%] skew-y-12 overflow-hidden opacity-20"
                  />
                </div>
                <div className="h-32 md:52 lg:h-60  bg-[#d4f0db] rounded-xl hover:scale-[1.02] transition-all relative cursor-pointer overflow-clip">
                  <div className="md:px-6 md:block flex items-center justify-center px-auto pt-4 md:py-5">
                    <Rating
                      solved={gfgData.submissions}
                      rating={`${gfgData.rating}`}
                    />
                  </div>
                  <div className="flex items-center justify-center md:absolute md:left-4 md:w-40 md:right-5 md:bottom-4 lg:w-72 lg:right-7 lg:bottom-5">
                    <div className="flex items-center justify-center md:hidden w-full h-full text-2xl font-semibold text-gray-700 text-center mt-4">
                      GeeksForGeeks
                    </div>
                    <Image
                      src="/gfg-new-logo.png"
                      height={100}
                      width={500}
                      alt="GFG"
                      className="hidden md:block"
                    />
                  </div>
                  <AnimatedGridPattern
                    maxOpacity={0.1}
                    duration={16}
                    repeatDelay={2}
                    className="mask-image:radial-gradient(500px_circle_at_center,white,transparent) inset-x-0 inset-y-[-30%] h-[150%] skew-y-12 overflow-hidden opacity-20"
                  />
                </div>
                <div className="h-32 md:52 lg:h-60  bg-[#eadbd5] rounded-xl hover:scale-[1.02] transition-all relative cursor-pointer overflow-clip">
                  <div className="md:px-6 md:block flex items-center justify-center px-auto pt-4 md:py-5">
                    <Rating
                      solved={`${ccData.subm}`}
                      rating={`${ccData.rating}`}
                    />
                  </div>
                  <div className="flex items-center justify-center md:absolute md:left-4 md:w-40 md:right-5 md:bottom-4 lg:w-72 lg:right-7 lg:bottom-5">
                    <div className="flex items-center justify-center md:hidden w-full h-full text-2xl font-semibold text-gray-700 text-center mt-4">
                      Codechef
                    </div>
                    <Image
                      src="/cc-logo.svg"
                      height={100}
                      width={500}
                      alt="Codechef"
                      className="hidden md:block"
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
            </>
          )}
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";
import Particles from "../magicui/particles";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-10 md:h-16 bg-[#1D1E22] text-white font-bold font-mono flex flex-row px-5 md:px-12 justify-between items-center z-10">
      <div className=" text-xl md:text-2xl">Dashboard</div>
      <div className=" text-lg md:text-3xl">Coding Profile</div>
      <div></div>
    </nav>
  );
};

export default Nav;

import Image from "next/image";
import Particles from "../magicui/particles";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-[#1D1E22] text-white font-bold font-mono flex flex-row px-12 justify-between items-center z-10">
      <div className="text-2xl">Dashboard</div>
      <div className="text-3xl">Coding Profile</div>
      <div>
        <div className="h-12 w-12 rounded-[1.5rem] overflow-hidden">
          <Image src="/Profile.jpg" height={320} width={320} alt="A" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;

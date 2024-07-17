import Nav from "../components/ui/navbar";
import Sidebar from "../components/ui/sidebar";
import Dashboard from "../components/ui/dashboard";
import Particles from "@/components/magicui/particles";

export default function Home() {
  return (
    <main className="flex min-h-screen relative flex-col items-center justify-between p-24">
      <Nav />
      <div className="flex flex-row absolute left-0 right-0 top-16 bottom-0 z-0">
        <div className="flex-[1] bg-white p-4 flex flex-col items-center">
          <Particles
            className="absolute inset-0"
            quantity={150}
            ease={60}
            color={"gray"}
            refresh
          />
          <Sidebar />
        </div>
        <div className="flex-[4] bg-slate-50 p-6">
          <Dashboard />
        </div>
      </div>
    </main>
  );
}

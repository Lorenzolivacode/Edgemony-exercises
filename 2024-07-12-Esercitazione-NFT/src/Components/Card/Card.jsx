import ImgEquilibrium from "./../../assets/img/image-equilibrium.jpg";
import Avatar from "./../../assets/img/image-avatar.png";
import Eth from "./../../assets/img/icon-ethereum.svg";
import Clock from "./../../assets/img/icon-clock.svg";
export function Card() {
  return (
    <div className="p-4 bg-sky-900 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.8)] w-80 flex flex-col gap-3">
      <img src={ImgEquilibrium} alt="" className="rounded-2xl" />
      <h1 className="text-xl font-bold text-white">Equilibrum #3429</h1>
      <p className="text-slate-400">
        Our Equilibrum collection promotes balance and calm
      </p>

      <div className="flex justify-between text-xs border-b-2 border-slate-400 p-4">
        <span className="text-[#00FFF8] flex gap-2">
          <img src={Eth} alt="" />
          0.041ETH
        </span>
        <div className="flex gap-2 text-slate-400 ">
          <img src={Clock} alt="" />
          <span className=" w-auto">3 days left</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <img
          src={Avatar}
          alt=""
          className="w-12 border-2 border-white rounded-full"
        />
        <span className="text-xs text-slate-400">Creation of</span>
        <span className="text-xs text-white"> Jules Wyver</span>
      </div>
    </div>
  );
}

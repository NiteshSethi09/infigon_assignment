import { RiHome6Line } from "react-icons/ri";
import { RiShareBoxLine } from "react-icons/ri";
import { TbStack } from "react-icons/tb";
import { MdOutlinePeople } from "react-icons/md";
import { BsPlusSquare, BsPersonCircle } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { BiSelectMultiple, BiBarChartAlt2 } from "react-icons/bi";

const Sidebar = () => {
  const size = 23;
  return (
    <>
      <aside className="fixed bottom-0 left-0 top-0 hidden border-r-2 md:block md:w-min">
        <div className="flex h-full flex-col justify-between p-5">
          <div>
            <div className="cursor-pointer p-1">
              <BsPlusSquare size={size} />
            </div>
            <div className="mt-4">
              <div className="mb-3 cursor-pointer rounded-md p-1 hover:bg-slate-300">
                <RiHome6Line size={size} />
              </div>
              <div className="mb-3 cursor-pointer rounded-md p-1 hover:bg-slate-300">
                <RiShareBoxLine size={size} />
              </div>
              <div className="mb-3 cursor-pointer rounded-md p-1 hover:bg-slate-300">
                <TbStack size={size} />
              </div>
              <div className="mb-3 cursor-pointer rounded-md p-1 hover:bg-slate-300">
                <BiSelectMultiple size={size} />
              </div>
              <div className="mb-3 cursor-pointer rounded-md p-1 hover:bg-slate-300">
                <BiBarChartAlt2 size={size} />
              </div>
              <div className="mb-3 cursor-pointer rounded-md p-1 hover:bg-slate-300">
                <MdOutlinePeople size={size} />
              </div>
              <div className="cursor-pointer rounded-md p-1 hover:bg-slate-300">
                <IoSettingsOutline size={size} />
              </div>
            </div>
          </div>
          <div className="">
            <div className="cursor-pointer p-1">
              <BsPlusSquare size={size} />
            </div>
            <div className="mt-3">
              <div className="mb-2 cursor-pointer p-1 text-[#800080]">
                <RxDotFilled size={size} />
              </div>
              <div className="mb-2 cursor-pointer p-1 text-[#00008b]">
                <RxDotFilled size={size} />
              </div>
              <div className="mb-2 cursor-pointer p-1 text-[#006400]">
                <RxDotFilled size={size} />
              </div>
              <div className="mb-2 cursor-pointer p-1 text-[#e71480]">
                <RxDotFilled size={size} />
              </div>
              <div className="mb-2 cursor-pointer p-1 text-[#000]">
                <RxDotFilled size={size} />
              </div>
            </div>
          </div>
          <div className="cursor-pointer p-1">
            <BsPersonCircle size={size} />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

import { RxDotFilled } from "react-icons/rx";
import { AiOutlineFlag, AiOutlineMenu, AiOutlineCodepen } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsPersonCircle, BsStars } from "react-icons/bs";
import { CgPassword } from "react-icons/cg";
import { MdOutlinePeople } from "react-icons/md";
import PageDetails from "../PageDetails";

const Dashboard = () => {
  return (
    <>
      <div className="flex-1 md:ml-[4.5rem]">
        <div className="flex h-3 w-full bg-gradient-to-r from-white from-30% to-red-400"></div>
        <div className="md:flex">
          <div className="flex justify-between p-4 md:block">
            <div className="flex">
              <RxDotFilled size={30} />
              <h2 className="text-xl font-semibold">Untitled UI</h2>
            </div>
            <div className="block md:hidden">
              <AiOutlineMenu size={25} />
            </div>
            <div className="hidden p-2 md:block">
              <h2 className="text-lg font-semibold">Settings</h2>
              <div className="mt-2 flex items-center rounded-lg border px-2">
                <FiSearch size={25} />
                <input
                  type="text"
                  className="p-2.5 pl-2 text-sm text-gray-900 outline-none"
                  placeholder="Search"
                />
              </div>
              <div className="mt-4">
                <div className="flex cursor-pointer rounded-md p-2 hover:bg-slate-200">
                  <AiOutlineFlag size={25} />
                  <span className="pl-3">My details</span>
                </div>
                <div className="flex cursor-pointer rounded-md p-2 hover:bg-slate-200">
                  <BsPersonCircle size={25} />
                  <span className="pl-3">Profile</span>
                </div>
                <div className="flex cursor-pointer rounded-md p-2 hover:bg-slate-200">
                  <CgPassword size={25} />
                  <span className="pl-3">Password</span>
                </div>
                <div className="flex cursor-pointer rounded-md p-2 hover:bg-slate-200">
                  <BsStars size={25} />
                  <span className="pl-3">Appearance</span>
                </div>
                <div className="flex cursor-pointer rounded-md p-2 hover:bg-slate-200">
                  <MdOutlinePeople size={25} />
                  <span className="pl-3">Team</span>
                </div>
                <div className="flex cursor-pointer rounded-md p-2 hover:bg-slate-200">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="1.4rem"
                    width="1.4rem"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    ></path>
                  </svg>
                  <span className="pl-3">Billing</span>
                  <span className="ml-auto rounded-xl bg-gray-200 px-2 text-sm">
                    12
                  </span>
                </div>
                <div className="flex cursor-pointer rounded-md p-2 hover:bg-slate-200">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1.4rem"
                    width="1.4rem"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M4 9l16 0"></path>
                  </svg>
                  <span className="pl-3">Applications</span>
                </div>
                <div className="flex cursor-pointer rounded-md p-2 hover:bg-slate-200">
                  <AiOutlineCodepen size={22} />
                  <span className="pl-3">API</span>
                </div>
              </div>
            </div>
          </div>
          <PageDetails />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

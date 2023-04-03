import { RxDotFilled } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "../Image";

import src from "../../assets/untitled_dashboard.webp";
import src2 from "../../assets/untitled_dashboard_2.webp";
import src3 from "../../assets/untitled_dashboard_3.webp";

import tabletSrc from "../../assets/untitled_tablet.webp";
import tabletSrc2 from "../../assets/untitled_tablet_2.webp";

const PageDetails = () => {
  return (
    <>
      <div className="h-full w-full rounded-tl-[4rem] border-l-2 border-t-2">
        <div className="px-6 pt-6">
          <div className="flex items-center">
            <RxDotFilled size={30} />
            <h2 className="text-xl font-semibold md:text-2xl">Settings</h2>
          </div>
          <div className="mx-2 mt-6 flex justify-between border-b-2 pb-4">
            <div>
              <h3 className="w-fit text-base font-semibold md:text-lg">
                Appearance
              </h3>
              <p className="w-fit text-xs text-gray-500 md:text-sm">
                Change how Untitled UI looks and fells in your browser.
              </p>
            </div>
            <div className="text-gray-500">
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className="mx-2 mt-6 border-b-2 pb-4 md:flex">
            <div className="w-fit md:min-w-[18rem]">
              <p className="text-xs font-semibold md:text-sm">
                Interface Theme
              </p>
              <p className="text-xs text-gray-500 md:text-sm">
                Select or customize your UI theme
              </p>
            </div>
            <div className="mt-4 flex flex-wrap md:m-0 md:flex-nowrap">
              <Image src={src} title="System preference" selected />
              <Image src={src2} title="Light" selected={false} />
              <Image src={src3} title="Dark" selected={false} />
            </div>
          </div>
          <div className="mx-2 mt-4 flex border-b-2 pb-4">
            <div className="mr-10 md:mr-0 md:min-w-[18rem]">
              <p className="text-xs font-semibold md:text-sm">
                Transparent sidebar
              </p>
              <p className="text-xs text-gray-500 md:text-sm">
                Make the desktop sidebar transparent.
              </p>
            </div>
            <div className="">
              <label className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" className="peer sr-only" />
                <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
              </label>
            </div>
          </div>
          <div className="mx-2 mt-4 border-b-2 pb-4 md:flex">
            <div className="min-w-[18rem]">
              <p className="text-xs font-semibold md:text-sm">
                Sidebar feature
              </p>
              <p className="text-xs text-gray-500 md:text-sm">
                What shows in the desktop sidebar.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <select
                id="countries"
                className="block w-60 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="null">Recent changes</option>
                <option value="US">Changes 1</option>
                <option value="CA">Changes 2</option>
                <option value="FR">Changes 3</option>
                <option value="DE">Changes 4</option>
              </select>
            </div>
          </div>
          <div className="mx-2 mt-4 border-b-2 pb-4 md:flex">
            <div className="w-fit md:min-w-[18rem]">
              <p className="text-xs font-semibold md:text-sm">Tables view</p>
              <p className="text-xs text-gray-500 md:text-sm">
                How are tables displayed in the app.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap md:m-0 md:flex-nowrap">
              <Image src={tabletSrc} title="Default" selected />
              <Image src={tabletSrc2} title="Compact" selected={false} />
            </div>
          </div>
          <div className="mt-4 text-right">
            <button
              type="button"
              className="mb-2 mr-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
            >
              Cancel
            </button>
            <button
              type="button"
              className="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageDetails;

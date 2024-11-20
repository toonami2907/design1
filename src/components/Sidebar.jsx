import { useEffect, useState } from "react";
import { LogOut, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { navigationItems, secondaryNavigation } from "@/lib/constant";
import { Confirmation } from "./Confirmation";
import { Button } from "./ui/button";
import { SidebarGraph } from "./SidebarGraph";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar({ hid, toggleNavbar }) {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    window.document.title = current !== "" ? `${current} - Logo` : "Logo";
  }, [current]);

  return (
    <div
      className={`fixed z-50 h-full bg-white ${
        hid ? "lg:w-20 w-0" : "max-w-[271px]  w-full"
      } transition-width duration-300 ease-in-out`}
    >
      <button
        onClick={toggleNavbar}
        className={`absolute top-5 left-2 text-gray-700 rounded-full drop-shadow-xl z-50 px-2 py-1 ${
          hid ? "hidden" : "flex"
        }`}
      >
        <X />
      </button>
      <button
          onClick={toggleNavbar}
          className={`${
            hid ? "flex" : "hidden"
          } bg-white shadow-lg z-50 text-black p-2 absolute top-5 left-5 rounded-full hover:bg-gray-50 transition-colors`}
          aria-label={
            hid ? "Expand sidebar" : "Collapse sidebar"
          }
        >
          <Menu className="h-5 w-5" />
        </button>
      <div className="flex flex-col  border-r border-gray-200 pt-5 pb-4 overflow-y-auto">
        <div className="absolute top-[39px] w-full  left-[44px]  flex items-center flex-shrink-0">
          <Link
            to="/"
            className={`text-2xl text-green-700  font-bold ${
              hid ? "hidden" : "block"
            }`}
          >
            <div className="max-w-[181px] max-h-[53px]">
              <img
                src="/Chuky.png"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          </Link>
        </div>
        <div className="mt-20  flex-grow flex flex-col">
          <nav
            className="flex-1 mt-10 flex gap-5 flex-col px-5 space-y-"
            aria-label="Sidebar"
          >
            <div className="space-y-2 px-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.name}
                  onClick={() => setCurrent(item.name)}
                  className={classNames(
                    item.name === current
                      ? "bg-[#6C5DD3] hover:bg-[#6C5DD3] text-white"
                      : "text-[#8F95B2] bg-white hover:bg-[#6C5DD3] hover:text-white border-none shadow-none",
                    "group flex items-center w-full text-[16px] hover:bg-[#6C5DD3] leading-[20px] hover: font-medium  rounded-2xl transition-colors duration-200",
                    hid
                      ? "justify-center w-0"
                      : "justify-start h-[56px] w-[216px]"
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.name === current
                        ? "text-white"
                        : "text-gray-400 hover:text-white",
                      "flex-shrink-0 h-7 w-7 hover:text-white",
                      !hid && "mr-3"
                    )}
                    aria-hidden="true"
                  />
                  <span className={`${hid ? "hidden" : "block"}`}>
                    {item.name}
                  </span>
                </Button>
              ))}
            </div>
            {!hid && (
              <div className="mt-5">
                <div className="h-[199px] relative w-[229px] p-4 mx-auto rounded-lg shadow-sm bg-[#F8F9FB]">
                  <div className="max-h-[90px] max-w-[90px]">
                    <SidebarGraph/>
                  </div>
                  <div>
                    <h1 className="text-[#272D37] text-[15px] font-semibold">Subscription Plan</h1>
                    <p className="text-[#5F6D7E] text-sm leading-5">Your Subscription plan will expire soon please upgrade!</p>
                    <span className="text-[#6C5DD3] font-semibold text-sm mt-5">Upgrade</span>
                  </div>
                <span className="absolute top-[5px] text-[#5F6D7E] right-1 text-sm"><X size={20}/></span>
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

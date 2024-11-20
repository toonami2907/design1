import React, { useState } from "react";
import { Bell, Mail, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const INITIAL_USER_STATE = {
  email: "user@example.com",
  username: "Username",
};

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [userProfile, setUserProfile] = useState(INITIAL_USER_STATE);

  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleProfileUpdate = (field, value) => {
    setUserProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="flex bg-[#F8F9FF]">
      {/* Fixed Sidebar */}
      <div className="fixed left-0 max-h-[1024px] max-w-[271px] w-full top-0 h-full z-30">
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          hid={isSidebarCollapsed}
          toggleNavbar={handleSidebarToggle}
          onToggle={handleSidebarToggle}
        />
      </div>

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col ${
          isSidebarCollapsed ? "lg:ml-20 ml-[inherit]" : "lg:ml-[271px]"
        } transition-all duration-300 ease-in-out ml-[inherit]`}
      >
        {/* Fixed Header */}
        <header
          className={`h-[96px] fixed top-0 right-0 left-0 bg-white ${
            isSidebarCollapsed ? "ml-[inherit]" : "ml-[271px]"
          } shadow-sm z-20 flex justify-between items-center transition-all duration-300`}
        >
          <div className="max-w-[1215px] mx-auto w-full px-4 md:px-6 lg:px-10">
            <div className="flex items-center w-full justify-between">
              {/* Left Section */}
              <div className="flex-shrink-0">
                <h1 className="text-xl md:text-2xl font-InterBold text-gray-900">
                  Hi, Taylor!
                </h1>
                <p className="font-normal text-xs hidden  text-[#718096]  sm:block">
                  Let`s check your store today
                </p>
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-3 md:gap-6 lg:gap-10">
                {/* Search Bar */}
                <div className="relative hidden md:block">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-[200px] lg:w-[282px] bg-[#FAFAFA] rounded-xl outline-border-[#D9D9D9] focus-visible:ring-[#D9D9D9] placeholder:text-[#A0AEC0] h-12 py-2 pl-10"
                  />
                  <span className="absolute top-3.5 left-3 text-[#111827]">
                    <Search size={20} />
                  </span>
                </div>

                {/* Notification Icons */}
                <div className="flex gap-3 md:gap-4">
                  <div className="relative cursor-pointer text-[#111827]  transition-opacity">
                  <span className="text-[#111827]">
                    <Mail size={24} />
                    </span>
                    <div className="w-2 h-2 absolute top-0 right-0 bg-[#FD6A6A] rounded-full" />
                  </div>
                  <div className="relative cursor-pointer  transition-opacity">
                    <span className="text-[#111827]">
                    <Bell size={24} />
                    </span>
                    <div className="w-2 h-2 absolute top-0 right-0 bg-[#FD6A6A] rounded-full" />
                  </div>
                </div>

                {/* Profile Section */}
                <div className="flex gap-2 md:gap-3 items-center ml-3 md:ml-0">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-full flex-shrink-0">
                    <img
                      src="/Avatar.png"
                      alt="Profile"
                      className="w-full h-full object-cover object-center rounded-full"
                    />
                  </div>
                  <p className="text-sm md:text-base font-bold text-[#111827] hidden sm:block">
                    Tynisha Obey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <main className="flex-1 w-full mt-[96px] ml-5 sm:ml-0 overflow-visible">
          <div className="md:p-10 flex flex-col justify-center items-center max-w-[1215px] mx-auto w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;

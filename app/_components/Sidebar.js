"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle Button */}
      <div
        className="fixed top-4  bg-white z-50 md:hidden cursor-pointer"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6 text-gray-800 " />
        ) : (
          <Bars3Icon className="h-6 w-6 text-gray-800" />
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-64 z-50 overflow-y-auto`}
      >
        <div className="">
          <div className="flex items-center justify-between">
            <p className="font-extrabold text-xl mt-6 mx-4">
              <span className="text-[#4880FF]">Dash</span>Stack
            </p>
            <span>
              <XMarkIcon
                className="h-6 w-6 mt-6 text-white "
                onClick={toggleSidebar}
              />
            </span>
          </div>
          <ul className="p-4 mt-8 list-none">
            <li className="mb-4">
              <Link
                href="/dashboard"
                className="text-white hover:text-gray-400"
              >
                Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/news" className="text-white hover:text-gray-400">
                News
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/product" className="text-white hover:text-gray-400">
                Update
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/settings" className="text-white hover:text-gray-400">
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

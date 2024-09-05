"use client";
import Image from "next/image";
import credalLogo from "../public/credal-logo.svg";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { montserrat } from "@/utils/font";
import { navItems, subMenuItems } from "@/utils/data";

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isHoveringMenu, setIsHoveringMenu] = useState<boolean>(false);

  useEffect(() => {
    if (!isHoveringMenu) {
      const hideMenuTimeout = setTimeout(() => {
        setHoveredItem(null);
      }, 100);

      return () => clearTimeout(hideMenuTimeout);
    }
  }, [isHoveringMenu]);

  return (
    <nav
      className={`${montserrat.className} w-full h-10 bg-[#FFFFFF] sm:px-24 px-10 flex items-center justify-between p-16`}
    >
      <div>
        <Image src={credalLogo} alt="credal-logo" />
      </div>
      {/* nav items */}
      <ul className="items-center sm:flex hidden">
        <div
          className="relative"
          onMouseEnter={() => {
            setHoveredItem("products");
            setIsHoveringMenu(true);
          }}
          onMouseLeave={() => setIsHoveringMenu(false)}
        >
          <li className="px-4 flex items-center hover:text-green-500 cursor-pointer group text-[#5F6261] font-medium">
            Products{" "}
            <ChevronDown
              className={`w-6 h-6 pl-1 group-hover:transform group-hover:rotate-180 ${
                hoveredItem === "products" && "rotate-180"
              } transition-all duration-300 ease-in-out`}
            />
          </li>
          {hoveredItem === "products" && (
            <div className="absolute top-full mt-2 left-0 bg-white text-black shadow-lg p-5 rounded-md flex items-start flex-col w-[270px] cursor-pointer">
              {subMenuItems.products.map((item, i) => (
                <p
                  key={i}
                  className="py-2 hover:text-green-500 hover:bg-green-50 rounded-lg px-4"
                >
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>

        {navItems.map((item, i) => (
          <li
            key={i}
            className="px-4 flex items-center hover:text-green-500 cursor-pointer group text-[#5F6261] font-medium"
          >
            {item === "Use cases" ? (
              <div
                className="relative"
                onMouseEnter={() => {
                  setHoveredItem("usecase");
                  setIsHoveringMenu(true);
                }}
                onMouseLeave={() => setIsHoveringMenu(false)}
              >
                <p className="flex items-center hover:text-green-500 cursor-pointer group">
                  {item}
                  <ChevronDown
                    className={`w-6 h-6 pl-1 group-hover:transform group-hover:rotate-180 ${
                      hoveredItem === "usecase" && "rotate-180"
                    } transition-all duration-300 ease-in-out`}
                  />
                </p>
                {hoveredItem === "usecase" && (
                  <div className="absolute top-full mt-2 left-0 bg-white text-black shadow-lg p-5 rounded-md flex items-start flex-col w-[350px] cursor-pointer">
                    {subMenuItems.useCases.map((item, i) => (
                      <p
                        key={i}
                        className="w-full py-2 hover:text-green-500 hover:bg-green-50 rounded-lg px-4"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              item
            )}
          </li>
        ))}
        <div
          className="relative"
          onMouseEnter={() => {
            setHoveredItem("about");
            setIsHoveringMenu(true);
          }}
          onMouseLeave={() => setIsHoveringMenu(false)}
        >
          <li className="px-4 flex items-center hover:text-green-500 cursor-pointer group text-[#5F6261] font-medium">
            About
            <ChevronDown
              className={`w-6 h-6 pl-1 group-hover:transform group-hover:rotate-180 ${
                hoveredItem === "about" && "rotate-180"
              } transition-all duration-300 ease-in-out`}
            />
          </li>
          {hoveredItem === "about" && (
            <div className="absolute top-full mt-2 left-0 bg-white text-black shadow-lg p-5 rounded-md flex items-start flex-col w-[150px] cursor-pointer">
              {subMenuItems.about.map((item, i) => (
                <p
                  key={i}
                  className="w-full py-2 hover:text-green-500 hover:bg-green-50 rounded-lg px-4"
                >
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
      </ul>

      <button className="py-2 px-3 bg-green-500 hover:bg-green-600 transition-all duration-200 ease-in-out text-white rounded-full mx-3 text-sm">
        Get started
      </button>
    </nav>
  );
}

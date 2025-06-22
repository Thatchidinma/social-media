"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../icons/Logo";
import { SidebarItems } from "./SidebarItems";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`hidden md:block h-screen lg:w-[250px] text-grey-500 transition-transform transform  pt-8  border-r border-neutral-300 dark:border-neutral-700 `}
      >
        <div className="flex justify-between px-6 pb-6">
            <Logo/>
        </div>
        <div className="flex flex-col h-[calc(100vh_-_90px)] justify-between">
          <div className="flex flex-col gap-1 px-2">
            {SidebarItems.map((item,i) => (
              <Link className="cursor-pointer" href={item.route} key={i}>
                <div
                  className={`flex items-center gap-2 justify-between py-[10px] px-2 rounded-xl hover:bg-neutral-100  dark:hover:bg-neutral-900  ${
                    pathname?.includes(item.route)
                      ? "bg-neutral-100 dark:bg-neutral-900 text-[#4F46E5]"
                      : "dark:text-gray-500"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={24} variant={ pathname?.includes(item.route) ? "Bold" : "Outline"} color="currentColor"/>
                    <p
                      className={`hidden lg:block ${
                        pathname?.includes(item.route)
                          ? "text-p_sm_semi_bold"
                          : "text-p_sm_normal"
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Sidebar;

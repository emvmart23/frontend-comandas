"use client";

import { Sidebar, UserDropdown } from "@/components/index";
import { Button } from "@/components/ui/Button";
import { useBreakpoint } from "@/hooks/useBreackpointer";
import { BREAKPOINTS } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

export default function ProtectedLayout({ children }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useBreakpoint(BREAKPOINTS.md);
  const [prevIsMobile, setPrevIsMobile] = useState(isMobile);

  const btnUpdateMenuVisibility = () => {
    setIsExpanded((prev) => !prev);
  };

  if (isMobile !== prevIsMobile) {
    setPrevIsMobile(isMobile);
    setIsExpanded(false);
  }

  return (
    <>
      <header className="bg-background sticky top-0 border-b-2 z-50">
        <div className="flex justify-between lg:justify-end items-center h-[4.6rem] px-8 md:px-20 min-w-[320px]">
          <Button
            variant="outline"
            onClick={btnUpdateMenuVisibility}
            className="lg:hidden z-50"
          >
            <Menu />
          </Button>
          <div className="flex justify-between items-center gap-2 md:gap-4">
            <span className="font-semibold text-[0.9rem] md:text-[1rem]">
              Bienvenido
            </span>
            <UserDropdown />
          </div>
        </div>
        <aside
          className={`${
            isExpanded ? "w-[16rem]" : "w-[0rem]"
          } lg:w-[15rem] origin-left transition-all duration-75 bg-background h-screen fixed top-0 border-r z-50`}
        >
          <Button
            onClick={btnUpdateMenuVisibility}
            className={`${
              isExpanded ? "block" : "hidden"
            } lg:hidden absolute top-1 right-2 p-2 w-7 h-7 flex justify-center`}
            variant="outline"
            aria-label="Cerrar menú de navegación"
          >
            <X />
          </Button>
          <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        </aside>
      </header>
      <main className="transition-all duration-200 lg:ml-60 p-4 md:p-8">
        {children}
      </main>
    </>
  );
}

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
  setIsExpanded: (value: boolean) => void;
  isExpanded?: boolean;
  links?: {
    icon: React.ReactNode;
    title: string;
    path?: string;
    childrens?: {
      icon: React.ReactNode;
      title: string;
      path?: string;
    }[];
  };
}

export default function SidebarItem({ links, isExpanded }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname === links?.path;

  const handleClick = () => {
    setOpen(!open);
  };

  return links?.childrens ? (
    <div
      className={`${
        isExpanded ? "visible" : "invisible"
      } lg:visible ml-4 block rounded-md overflow-hidden px-2 py-[1.191rem] w-[11.4rem]`}
    >
      <div
        onClick={handleClick}
        className="flex gap-x-3 items-center hover:scale-105 cursor-pointer"
      >
        <span className="flex justify-start gap-5">
          {links.icon && <i>{links.icon}</i>}
          <span className="text-[0.9rem]">{links.title}</span>
        </span>
        <ArrowRight
          size={15}
          className={`${
            open ? "rotate-90" : ""
          } transition-transform duration-100`}
        />
      </div>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
          open
            ? "grid-rows-[1fr] opacity-100 mt-2"
            : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="overflow-hidden font-normal text-[0.8rem] leading-loose">
          {links?.childrens.map((child, index) => {
            const isActiveSubMenu = pathname === child.path;
            return (
              <Link
                key={index}
                className="flex  ml-4 h-[3.4rem] hover:scale-105 transition-transform"
                href={child.path || ""}
              >
                <div
                  className={`${
                    isActiveSubMenu &&
                    "bg-foreground dark:text-black text-white"
                  } p-2 w-full text-[0.7rem] group-hover:bg-primary group-hover:text-background text-foreground text-start rounded mt-5 flex items-center gap-5`}
                >
                  {child.icon && <i>{child.icon}</i>}
                  {child.title}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <Link
      className={` ${
        isExpanded ? "visible" : "invisible"
      } lg:visible flex w-[11.4rem] ml-4 h-[3rem] mb-2`}
      href={links?.path || ""}
    >
      <div
        className={`${
          isActive && "bg-foreground dark:text-black text-white"
        } p-2 w-full group-hover:bg-primary group-hover:text-background text-foreground text-sm rounded transition-all duration-20 origin-left flex items-center gap-5`}
      >
        {links?.icon && <i>{links.icon}</i>}
        {links?.title}
      </div>
    </Link>
  );
}

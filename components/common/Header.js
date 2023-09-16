"use client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { HiMenuAlt2 } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import { useUser } from "@/lib/store/store";
import { FiSearch } from "react-icons/fi";
import Sidebar from "./Sidebar";
import { SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

const Header = ({ text }) => {
  const logout = useUser((state) => state.logout);
  return (
    <>
      <div className="flex w-full text-white items-center justify-between pr-8 fixed bg-darkBG">
        <div className="flex items-center gap-4">
          <Sidebar>
            <SheetTrigger asChild>
              <Avatar className="flex items-center justify-center h-[2.5rem] w-[2.5rem] border border-gray-700">
                <HiMenuAlt2 className="text-xl" />
              </Avatar>
            </SheetTrigger>
          </Sidebar>

          {/* <Avatar className="border-[3px] border-blue-700">
        <AvatarImage src="img/logo.png" alt="@shadcn" />
        <AvatarFallback>SST</AvatarFallback>
      </Avatar> */}
          <span className="text-white font-medium text-xl">{text}</span>
        </div>

        <div className="flex gap-4 items-center">
          <Avatar className="flex items-center justify-center h-[2.5rem] w-[2.5rem] border border-gray-700">
            <FiSearch className="text-xl" />
          </Avatar>
          <Avatar
            onClick={logout}
            className="flex items-center justify-center h-[2.5rem] w-[2.5rem] border border-gray-700"
          >
            <FiLogOut className="text-xl" />
          </Avatar>
        </div>
      </div>
    </>
  );
};

export default Header;

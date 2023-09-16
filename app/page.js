"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  batch1arr,
  batch2arr,
  batch3arr,
  fetchData,
} from "@/lib/components/SeatingList";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SelectUser from "@/components/common/SelectUser";

const Home = () => {
  const [gridData, setGridData] = useState([]);

  // useEffect(() => {
  //   getSeating();
  // }, []);

  // const getSeating = async () => {
  //   const result = await fetchData();

  //   if (result == "Error") {
  //     getSeating();
  //   } else {
  //     setGridData(result);
  //   }
  // };

  useEffect(() => {
    console.log(selectedUser);
  }, []);

  const [selectedUser, setSelectedUser] = useState();

  const handleClick = () => {
    if (selectedUser == "") {
    } else {
    }
  };

  return (
    <div className="bg-darkBG h-screen w-screen p-4 flex flex-col gap-4 ">
      <Avatar className="border-[3px] h-[5rem] w-[5rem] border-blue-700">
        <AvatarImage src="img/logo.png" alt="@shadcn" />
        <AvatarFallback>SST</AvatarFallback>
      </Avatar>
      <span className="text-white text-[30px] font-bold">Login</span>
      <SelectUser
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />

      <Button className="dark w-full">Login</Button>
    </div>
  );
};

export default Home;

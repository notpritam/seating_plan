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

  return (
    <div className="bg-darkBG h-screen w-screen p-4 flex flex-col gap-4 ">
      <Avatar>
        <AvatarImage src="img/logo.png" alt="@shadcn" />
        <AvatarFallback>SST</AvatarFallback>
      </Avatar>
      <span className="text-white text-[30px] font-bold">Login</span>
      <Command className="dark h-full flex-1 w-full max-h-[100%]">
        <CommandInput placeholder="Type a name or search..." />
        <CommandList className="h-full ">
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Batch 1">
            {batch1arr.map((item, index) => (
              <CommandItem key={index}>{item}</CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />

          <CommandGroup heading="Batch 2">
            {batch2arr.map((item, index) => (
              <CommandItem key={index}>{item}</CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Batch 3">
            {batch3arr.map((item, index) => (
              <CommandItem key={index}>{item}</CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>

      <Button className="dark w-full">Login</Button>
    </div>
  );
};

export default Home;

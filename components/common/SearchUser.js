"use client";

import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  mainBatch1arr,
  mainBatch2arr,
  mainBatch3arr,
} from "@/lib/components/SeatingList";
import { useUser } from "@/lib/store/store";
import { Button } from "../ui/button";

export function SearchUser({ setOpen, open }) {
  const searchedUser = useUser((state) => state.searchedUser);

  const setSearchedUser = useUser((state) => state.updateSearchedUser);
  const searchedBatch = useUser((state) => state.searchedBatch);

  const setSearchedBatch = useUser((state) => state.setSearchedBatch);
  const setSearchedId = useUser((state) => state.setSearchedId);

  const handleSearch = () => {
    console.log(searchedUser, "this is searched");
    const searched = generateUniqueIdFromString(searchedUser) + searchedBatch;
    setSearchedId(searched);
    setOpen((open) => !open);
  };

  function generateUniqueIdFromString(inputString) {
    const uniqueId = inputString.replace(/\s+/g, "").toLowerCase();
    return uniqueId;
  }
  return (
    <CommandDialog className="dark" open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Type a name or search..."
        value={searchedUser}
        onValueChange={(value) => {
          setSearchedUser(value);
        }}
      />
      <CommandList className="h-full ">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Batch 1">
          {mainBatch1arr.map((item, index) => (
            <CommandItem
              onSelect={(currentValue) => {
                console.log(currentValue);
                setSearchedUser(currentValue);
                setSearchedBatch(1);
              }}
              key={index}
            >
              {item}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />

        <CommandGroup heading="Batch 2">
          {mainBatch2arr.map((item, index) => (
            <CommandItem
              onSelect={(currentValue) => {
                console.log(currentValue);
                setSearchedUser(currentValue);
                setSearchedBatch(2);
              }}
              key={index}
            >
              {item}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Batch 3">
          {mainBatch3arr.map((item, index) => (
            <CommandItem
              onClick={() => console.log(searchedUser, "this is user")}
              onSelect={(currentValue) => {
                console.log(currentValue);
                setSearchedUser(currentValue);
                setSearchedBatch(3);
              }}
              key={index}
            >
              {item}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
      <Button onClick={handleSearch} className="mt-12 mb-4 m-2">
        Search
      </Button>
    </CommandDialog>
  );
}

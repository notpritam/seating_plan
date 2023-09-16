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
import { batch1arr, batch2arr, batch3arr } from "@/lib/components/SeatingList";
import { useUser } from "@/lib/store/store";

export function SearchUser({ setOpen, open }) {
  const searchedUser = useUser((state) => state.searchedUser);

  const setSearchedUser = useUser((state) => state.updateSearchedUser);
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
          {batch1arr.map((item, index) => (
            <CommandItem
              // onSelect={(currentValue) => {
              //   console.log(currentValue);
              //   setSearchedUser(currentValue);
              // }}
              key={index}
            >
              {item}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />

        <CommandGroup heading="Batch 2">
          {batch2arr.map((item, index) => (
            <CommandItem
              // onSelect={(currentValue) => {
              //   console.log(currentValue);
              //   setSearchedUser(currentValue);
              // }}
              key={index}
            >
              {item}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Batch 3">
          {batch3arr.map((item, index) => (
            <CommandItem
              // onSelect={(currentValue) => {
              //   console.log(currentValue);
              //   setSearchedUser(currentValue);
              // }}
              key={index}
            >
              {item}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

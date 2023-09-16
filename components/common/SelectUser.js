import { batch1arr, batch2arr, batch3arr } from "@/lib/components/SeatingList";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../ui/command";

const SelectUser = ({ selectedUser, setSelectedUser }) => {
  return (
    <Command className="dark  flex-1 w-full ">
      <CommandInput
        placeholder="Type a name or search..."
        value={selectedUser}
        onValueChange={(value) => {
          setSelectedUser(value);
        }}
      />
      <CommandList className="h-full ">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Batch 1">
          {batch1arr.map((item, index) => (
            <CommandItem
              onSelect={(currentValue) => {
                console.log(currentValue);
                setSelectedUser(currentValue);
              }}
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
              onSelect={(currentValue) => {
                console.log(currentValue);
                setSelectedUser(currentValue);
              }}
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
              onSelect={(currentValue) => {
                console.log(currentValue);
                setSelectedUser(currentValue);
              }}
              key={index}
            >
              {item}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default SelectUser;

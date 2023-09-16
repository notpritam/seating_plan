"use client";
import { Button } from "@/components/ui/button";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SelectUser from "@/components/common/SelectUser";
import { useUser } from "@/lib/store/store";

const Home = () => {
  useEffect(() => {
    console.log(selectedUser);
  }, []);

  const [selectedUser, setSelectedUser] = useState();

  const name = useUser((state) => state.name);
  const login = useUser((state) => state.login);
  const selectedBatch = useUser((state) => state.selectedBatch);

  const handleClick = () => {
    if (selectedUser == "") {
    } else {
      login(
        selectedUser,
        selectedBatch,
        generateUniqueIdFromString(selectedUser + selectedBatch),
        "not-found"
      );
    }
  };

  function generateUniqueIdFromString(inputString) {
    const uniqueId = inputString.replace(/\s+/g, "").toLowerCase();
    return uniqueId;
  }
  if (name != null) {
    redirect("/home");
  }
  return (
    <div className="bg-darkBG relative h-screen p-4 flex flex-col gap-4 ">
      <Avatar className="border-[3px] h-[5rem] w-[5rem] border-blue-700">
        <AvatarImage src="img/logo.png" alt="@shadcn" />
        <AvatarFallback>SST</AvatarFallback>
      </Avatar>
      <span className="text-white text-[30px] font-bold">Login</span>
      <SelectUser
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />

      <Button
        onClick={handleClick}
        className="dark absolute left-4 right-4  bottom-4"
      >
        Login
      </Button>
    </div>
  );
};

export default Home;

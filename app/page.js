"use client";
import { Button } from "@/components/ui/button";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SelectUser from "@/components/common/SelectUser";
import { useUser } from "@/lib/store/store";

const Home = () => {
  const [selectedUser, setSelectedUser] = useState();

  const name = useUser((state) => state.name);

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
    </div>
  );
};

export default Home;

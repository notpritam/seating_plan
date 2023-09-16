"use client";
import { useUser } from "@/lib/store/store";
import Header from "@/components/common/Header";
import { redirect } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { fetchData } from "@/lib/components/SeatingList";

const Home = () => {
  const [seatingArrangment, setSeatingArrangment] = useState([]);
  useEffect(() => {
    getSeating();
  }, []);

  const getSeating = async () => {
    const result = await fetchData();

    if (result == "Error") {
      getSeating();
    } else {
      setSeatingArrangment(result);
    }
  };

  const name = useUser((state) => state.name);

  const handleClick = () => {
    if (selectedUser == "") {
    } else {
    }
  };

  if (name == null) {
    redirect("/");
  }

  function getInitials(name) {
    // Split the name into words based on spaces
    const words = name.split(" ");

    // Initialize an empty string to store the initials
    let initials = "";

    // Loop through each word and add the first character to the initials string
    for (let i = 0; i < words.length; i++) {
      initials += words[i][0];
    }

    // Convert the initials to uppercase
    initials = initials.toUpperCase();

    return initials;
  }
  return (
    <div className="bg-darkBG  h-screen overflow-hidden text-gray-200 max-h-screen w-screen p-4 flex flex-col gap-4 ">
      <Header text={"Home"} />

      <div className="border flex flex-col items-start  p-4 mt-[80px] border-gray-600 rounded-lg overflow-hidden w-full">
        <div className="flex justify-between w-full">
          <Avatar className="border-[3px] h-[4rem] w-[4rem] border-blue-700">
            <AvatarImage src="img/logo.png" alt="@shadcn" />
            <AvatarFallback>SST</AvatarFallback>
          </Avatar>
          <div className="text-3xl bg-blue-900 font-bold  p-4 rounded-lg">
            <span>B-4</span>
          </div>
        </div>

        <span className="capitalize text-xl font-medium">{name}</span>
        <span className="capitalize">Batch :- 1</span>
        <span className="capitalize text-[12px]">
          Mentor :- Dhruv Pascricha
        </span>
      </div>

      {/* <div className=" max-h-[60vh]  overflow-auto ">
        <div className="flex flex-col gap-4 bg-transparent flex-nowrap h-full border">
          {seatingArrangment.map((row) => (
            <div className="flex  flex-nowrap gap-4">
              {row.map((cell) => (
                <>
                  <div className="h-[200px] w-[100px] max-w-[100px]  bg-transparent border">
                    <Avatar className="border-[3px] flex items-center justify-center h-[4rem] w-[4rem] bg-black border-blue-700">
                      <span>{getInitials(cell.name)}</span>
                    </Avatar>

                    {cell.name}
                  </div>
                </>
              ))}
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Home;

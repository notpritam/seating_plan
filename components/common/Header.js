import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = ({ text }) => {
  return (
    <div className="flex p-2 fixed bg-darkBG">
      <Avatar className="border-[3px] border-blue-700">
        <AvatarImage src="img/logo.png" alt="@shadcn" />
        <AvatarFallback>SST</AvatarFallback>
      </Avatar>
      <span className="text-white text-[30px] font-bold">{text}</span>
    </div>
  );
};

export default Header;

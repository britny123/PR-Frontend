import SearchBar from "../homePage/SearchBar";
import { useState } from "react";
import { User } from "lucide-react";



interface HeaderProps {
  userName: string;
  date: string;
  onProfileClick: () => void;
}

export default function Header({userName,date,onProfileClick,}: HeaderProps) {

    const [search, setSearch] = useState("");
 return (
    <div className="fixed top-0 left-28 right-0 z-50 bg-white p-4">
  <div className="flex items-center justify-between px-6 h-16">
    <div className="flex items-center gap-4">
      
      <div>
        <h1 className="text-2xl font-bold text-blue">Hello, {userName}!</h1>
        <p className="text-water-blue">{date}</p>
      </div>
    </div>

    <SearchBar value={search} onChange={setSearch} />

    <div className="flex items-center gap-4">
      <h3 className="text-xs text-blue font-semibold">{userName}</h3>
      <button onClick={onProfileClick}>
        <User size={30} color="#2469A0" />
      </button>
    </div>
  </div>
</div>
  );
}
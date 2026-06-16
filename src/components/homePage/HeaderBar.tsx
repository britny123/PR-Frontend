import SearchBar from "../homePage/SearchBar";
import { User } from "lucide-react";


interface HeaderProps {
  userName: string;
  date: string;
  onProfileClick: () => void;
  search: string;
  setSearch: (value: string) => void;
}

export default function Header({userName,date,onProfileClick, search, setSearch}: HeaderProps) {
  
 return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-white p-3 md:top-0 md:left-28 md:p-4">
  <div className="flex flex-col gap-3 px-2 md:h-16 md:flex-row md:items-center md:justify-between md:px-6">
    <div className="flex items-center justify-between gap-4 md:justify-start">
      
      <div>
        <h1 className="text-xl font-bold text-blue md:text-2xl">Hello, {userName}!</h1>
        <p className="text-sm text-water-blue md:text-base">{date}</p>
      </div>

      <button onClick={onProfileClick} className="md:hidden">
        <User size={28} color="#2469A0" />
      </button>
    </div>

    <SearchBar value={search} onChange={setSearch} />

    <div className="hidden items-center gap-4 md:flex">
      <h3 className="text-xs text-blue font-semibold">{userName}</h3>
      <button onClick={onProfileClick}>
        <User size={30} color="#2469A0" />
      </button>
    </div>
  </div>
</div>
  );
}

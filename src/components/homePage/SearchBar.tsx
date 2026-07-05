import { Search } from "lucide-react";
import { speak } from "../accesibilityPage/textToSpeech";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({value, onChange, placeholder = "Search medicines, doses, etc.",}: SearchBarProps) {
  return (
    <div className="relative w-full max-w-2xl" onMouseEnter={() => speak("Search bar")}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-10 rounded-full border border-gray-300 bg-white px-6 py-4 pr-14 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
      />

      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-blue">
        <Search size={22} />
      </button>
    </div>
  );
}
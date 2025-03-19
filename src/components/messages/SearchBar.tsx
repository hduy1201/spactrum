import { SearchIcon } from "@/components/Icons.tsx";
import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({ placeholder = "Search" }: SearchBarProps) {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-4 pr-12 py-3 rounded-xl border border-background-600 text-secondary-300 focus:outline-none focus:ring-1 focus:ring-background-600 placeholder:text-sm"
      />
      {/* Fix vị trí icon */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <SearchIcon className="text-secondary-500 w-5 h-5" />
      </div>
    </div>
  );
}

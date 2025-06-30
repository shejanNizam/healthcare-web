"use client";

import { useGetValueQuery } from "@/redux/features/value/valueApi";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useEffect, useRef, useState } from "react";

type JobCategory = {
  _id: string;
  type: string;
};

export default function SearchBar() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  const { data } = useGetValueQuery("Category");
  const categories: JobCategory[] = data?.data || [];

  const filteredCategories = categories.filter((category) =>
    category.type.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearch = (value: string) => {
    if (value && !recentSearches.includes(value)) {
      setRecentSearches([value, ...recentSearches].slice(0, 5));
    }
    // Redirect to search results page
    window.location.href = `/all-jobs?category=${encodeURIComponent(value)}`;
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setSearchVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full max-w-2xl" ref={searchRef}>
      <Input
        size="large"
        placeholder="Search by category..."
        prefix={<SearchOutlined />}
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          setSearchVisible(true);
        }}
        onFocus={() => setSearchVisible(true)}
        className="cursor-text h-12"
      />

      {searchVisible && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-md shadow-lg max-h-80 overflow-auto">
          <div className="p-4">
            {searchText && (
              <h4 className="font-semibold">
                {filteredCategories.length > 0
                  ? "Categories"
                  : "No matches found"}
              </h4>
            )}
            <div className="mt-2 space-y-2 max-h-60 overflow-auto">
              {filteredCategories?.map((category: JobCategory) => (
                <div
                  key={category._id}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSearch(category.type)}
                >
                  {category.type}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

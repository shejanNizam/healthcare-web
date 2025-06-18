"use client";

import { useGetValueQuery } from "@/redux/features/value/valueApi";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useState } from "react";

type JobCategory = {
  _id: string;
  type: string;
};

export default function SearchBarPrevious() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const { data } = useGetValueQuery("Category");
  const categories: JobCategory[] = data?.data || [];

  const handleSearch = (value: string) => {
    if (value && !recentSearches.includes(value)) {
      setRecentSearches([value, ...recentSearches].slice(0, 5));
    }
    // Redirect to search results page
    window.location.href = `/all-jobs?category=${encodeURIComponent(value)}`;
  };

  return (
    <div className="relative w-full max-w-2xl">
      {/* Input is readonly, so user can only click/select, no typing */}
      <Input
        size="large"
        placeholder="Select a category..."
        prefix={<SearchOutlined />}
        readOnly
        onFocus={() => setSearchVisible(true)}
        onBlur={() => setTimeout(() => setSearchVisible(false), 200)}
        className="cursor-pointer"
      />

      {searchVisible && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-md shadow-lg max-h-80 overflow-auto">
          <div className="p-4">
            <h4 className="font-semibold">Categories</h4>
            <div className="mt-2 space-y-2 max-h-60 overflow-auto">
              {categories?.map((category: JobCategory) => (
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

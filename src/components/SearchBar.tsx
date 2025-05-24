// export default function SearchBar() {
//   return (
//     <div>
//       <h3>SearchBar</h3>
//     </div>
//   );
// }

"use client";

import { SearchOutlined } from "@ant-design/icons";
import { AutoComplete, Input } from "antd";
import { useState } from "react";

const categories = [
  "Nursing",
  "Allied",
  "Advance practice",
  "Leadership",
  "Language interpreters",
];

export default function SearchBar() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const handleSearch = (value: string) => {
    if (value && !recentSearches.includes(value)) {
      setRecentSearches([value, ...recentSearches].slice(0, 5));
    }
    // Redirect to search results page
    window.location.href = `/all-jobs?category=${value}`;
  };

  return (
    <div className="relative w-full max-w-2xl">
      <AutoComplete
        options={categories.map((category) => ({ value: category }))}
        onSelect={handleSearch}
        onSearch={() => setSearchVisible(true)}
        onBlur={() => setSearchVisible(false)}
        className="w-full"
      >
        <Input
          size="large"
          placeholder="Search for jobs..."
          prefix={<SearchOutlined />}
        />
      </AutoComplete>

      {searchVisible && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-md shadow-lg">
          <div className="p-4 border-b">
            <h4 className="font-semibold">Recent searches</h4>
            {recentSearches.length > 0 ? (
              <div className="mt-2 space-y-2">
                {recentSearches.map((search, index) => (
                  <div
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSearch(search)}
                  >
                    {search}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 mt-2">No recent searches</p>
            )}
          </div>
          <div className="p-4">
            <h4 className="font-semibold">Categories</h4>
            <div className="mt-2 space-y-2">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSearch(category)}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchBar() {
  return (
    <div>
      <h3>SearchBar</h3>
    </div>
  );
}

// import { AutoComplete, Input } from "antd";
// import { useRouter } from "next/router";
// import { useState } from "react";

// const suggestions = [
//   "Nursing",
//   "Allied",
//   "Physician",
//   "Dentistry",
//   "Leadership",
//   "Language Interpreters",
// ];

// export default function SearchBar() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const router = useRouter();

//   const handleSearch = (value) => {
//     setSearchTerm(value);
//     if (value) {
//       router.push(`/all-jobs?category=${value}`);
//     }
//   };

//   return (
//     <div className="mt-8">
//       <AutoComplete
//         options={suggestions.map((item) => ({ value: item }))}
//         onSelect={handleSearch}
//         style={{ width: "100%" }}
//       >
//         <Input.Search placeholder="Search jobs..." enterButton />
//       </AutoComplete>
//     </div>
//   );
// }

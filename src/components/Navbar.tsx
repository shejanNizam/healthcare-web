// export default function Navbar() {
//   return (
//     <div>
//       <h3>Navbar</h3>
//     </div>
//   );
// }

// components/Navbar.tsx
import { Button } from "antd";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <nav className=" py-4 bg-gradient-to-r from-primary to-primary/10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Clement
        </Link>

        <div className="hidden md:flex space-x-6 text-white">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary">
            About Us
          </Link>
          <Link href="/" className="hover:text-primary">
            {/* work on hover  */}
            Job Seekers
          </Link>
          <Link href="/all-jobs" className="hover:text-primary">
            All Jobs
          </Link>
          <Link href="/blogs" className="hover:text-primary">
            Blogs
          </Link>
          <Link href="/saved-jobs" className="hover:text-primary">
            Saved Jobs
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className=" ">
            <SearchBar />
          </div>
          <Link
            href="/contact"
            // className="hidden md:block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
          >
            <Button value="large" type="primary">
              {" "}
              Contact{" "}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

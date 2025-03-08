import { Link } from "react-router";
import { TbSpider } from "react-icons/tb";

export default function Navbar() {
  return (
    <div className="bg-gray-700 h-16 flex items-center px-5 mb-10 text-white sticky top-0 select-none z-10">
      <Link to={"/"} className="font-medium text-3xl">
        WikiScraper <TbSpider className="inline ml-3" />
      </Link>
    </div>
  );
}

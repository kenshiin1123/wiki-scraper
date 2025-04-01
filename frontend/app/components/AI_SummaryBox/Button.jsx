import { HiOutlineSparkles } from "react-icons/hi2";

export default function Button({ ...props }) {
  return (
    <button
      className="cursor-pointer shadow-md hover:shadow-[#9ce19f] py-2 rounded w-48 mx-auto bg-[#4caf50] text-white hover:scale-105 transform transition duration-200 ease-in-out"
      {...props}
    >
      Create a Summary <HiOutlineSparkles className="inline text-xl" />
    </button>
  );
}

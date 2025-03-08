import { LuPickaxe } from "react-icons/lu";

export default function Button({ submitFunc }) {
  return (
    <button
      onClick={submitFunc}
      className="cursor-pointer shadow-sm  mt-1 shadow-gray-400 rounded mx-auto w-full hover:bg-black focus:bg-black focus:text-white hover:text-white transition-colors duration-300 flex justify-center items-center gap-2 py-2 text-xl"
    >
      Scrape <LuPickaxe />
    </button>
  );
}

import { useEffect, useState } from "react";
import { FaArrowTurnUp } from "react-icons/fa6";
export default function GoUpButton() {
  const [scrollLevel, setScrollLevel] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollLevel(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (scrollLevel > 500) {
    return (
      <button
        className="cursor-pointer size-14 rounded-full bg-gray-500/30 fixed bottom-8 hover:bottom-9 left-5  p-2 flex items-center justify-center text-3xl hover:bg-gray-700 hover:text-white transition-[background-color translateY] duration-300"
        onClick={scrollToTop}
      >
        <FaArrowTurnUp />
      </button>
    );
  } else {
    return null;
  }
}

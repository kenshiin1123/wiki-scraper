import { useState } from "react";
import Container from "./Container";
import { MdBookmarkAdd } from "react-icons/md";

export default function SaveButton({ ...props }) {
  return (
    <Container>
      <button
        {...props}
        className="flex justify-center items-center gap-4 cursor-pointer shadow-md hover:shadow-[#7cbbe2] py-2 rounded w-48 mx-auto bg-[#239be6] text-white hover:scale-103 transform transition duration-200 ease-in-out"
      >
        Save Article <MdBookmarkAdd className="text-xl" />
      </button>
    </Container>
  );
}

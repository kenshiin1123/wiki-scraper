import { motion } from "motion/react";
import { IoMdBackspace } from "react-icons/io";

export default function CloseButton({ onClose }) {
  return (
    <button
      onClick={() => onClose(null)}
      className="text-gray-500 hover:text-gray-700 ml-auto"
    >
      <IoMdBackspace size={30} />
    </button>
  );
}

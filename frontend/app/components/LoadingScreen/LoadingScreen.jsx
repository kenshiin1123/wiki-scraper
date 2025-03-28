import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="w-screen h-screen bg-white fixed top-0 left-0 z-50 flex justify-center items-center">
      <motion.div
        className="size-40 bg-blue-600 rounded-sm"
        animate={{ y: [0, -20, 0] }} // Moves up and down
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

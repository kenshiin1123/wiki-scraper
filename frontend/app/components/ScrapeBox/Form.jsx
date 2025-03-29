import { motion } from "motion/react";

export default function Form({ children, ...props }) {
  return (
    <motion.form
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex justify-center items-center"
      {...props}
    >
      {children}
    </motion.form>
  );
}

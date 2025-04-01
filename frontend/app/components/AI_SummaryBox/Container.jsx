import { AnimatePresence, motion } from "framer-motion";

export default function Container({ children, summary }) {
  return (
    <AnimatePresence>
      <motion.div
        key={summary}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex flex-col min-h-16 rounded-lg p-4 my-3 gap-3 prose"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

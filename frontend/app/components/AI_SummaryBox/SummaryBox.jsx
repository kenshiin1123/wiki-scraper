import Button from "./Button";
import Container from "./Container";
import Summary from "./Summary";
import { AnimatePresence, motion } from "motion/react";
export default function SummaryBox({ summarizeFunc, summary }) {
  return (
    <Container>
      <AnimatePresence mode="wait">
        {!summary && (
          <Button onClick={summarizeFunc} type="button">
            Summarize
          </Button>
        )}
        {summary && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <Summary>{summary}</Summary>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
}

import { motion } from "framer-motion";
import Button from "./Button";
import Container from "./Container";
import Summary from "./Summary";

export default function SummaryBox({ summarizeFunc, summary }) {
  return (
    <Container summary={summary}>
      {!summary && (
        <Button onClick={summarizeFunc} type="button">
          Summarize
        </Button>
      )}
      {summary && <Summary>{summary}</Summary>}
    </Container>
  );
}

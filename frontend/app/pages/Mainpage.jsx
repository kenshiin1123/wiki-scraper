import ScrapeForm from "~/components/ScrapeBox/ScrapeForm";
import ScrapedContents from "~/components/ScrapedContents/ScrapedContents";
import FilterBox from "~/components/FilterBox/FilterBox";
import SummaryBox from "~/components/AI_SummaryBox/SummaryBox";
import SaveButton from "~/components/SaveButton/SaveButton";
import { AnimatePresence } from "motion/react";
import { useScraping } from "~/hooks/useScraping";

export default function Mainpage() {
  const {
    scrapedContents,
    handleScrape,
    handleSummarizeContents,
    setScrapedContents,
  } = useScraping();

  return (
    <>
      <ScrapeForm onSubmit={handleScrape} />
      <AnimatePresence mode="wait">
        {scrapedContents.data.length > 0 && (
          <>
            <SummaryBox
              summarizeFunc={handleSummarizeContents}
              summary={scrapedContents.summary}
            />
            <SaveButton contents={scrapedContents} />
            <FilterBox
              contents={scrapedContents}
              setContents={setScrapedContents}
            />
            <ScrapedContents contents={scrapedContents} />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

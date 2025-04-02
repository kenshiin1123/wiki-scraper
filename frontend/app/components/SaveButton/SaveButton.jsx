import Container from "./Container";
import { MdBookmarkAdd } from "react-icons/md";
import handleSave from "../../apis/saveArticle.js";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export default function SaveButton({ contents }) {
  const { summary, data: articles, query: name } = contents;
  const [save, setSave] = useState(false);

  const handleSaveButtonClick = async () => {
    const savePromise = handleSave(summary, articles, name);

    toast.promise(savePromise, {
      loading: "Saving article...",
      success: "Article saved successfully!",
      error: "Failed to save article.",
    });

    try {
      await savePromise;
      setSave((prevSave) => !prevSave);
    } catch (error) {
      console.error("Error saving article:", error);
    }
  };

  return (
    <AnimatePresence>
      {!save && (
        <Container>
          <button
            onClick={handleSaveButtonClick}
            className="flex justify-center items-center gap-4 cursor-pointer shadow-md hover:shadow-[#7cbbe2] py-2 rounded w-48 mx-auto bg-[#239be6] text-white hover:scale-103 transform transition duration-200 ease-in-out"
          >
            Save Article <MdBookmarkAdd className="text-xl" />
          </button>
        </Container>
      )}
    </AnimatePresence>
  );
}

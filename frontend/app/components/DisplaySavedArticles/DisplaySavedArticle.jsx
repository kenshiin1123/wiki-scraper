import Items from "./Items";
import Images from "../ScrapedContents/Images";
import DisplayAnimatedDiv from "./DisplayAnimatedDiv";
import CloseButton from "../SavedArticles/CloseButton";
import DisplayInnerContainer from "./DisplayInnerContainer";
import SecondContainer from "./SecondContainer";

export default function DisplaySavedArticle({ article, onClose }) {
  const images = article.article.filter((item) => {
    return item.tag == "img";
  });

  return (
    <DisplayAnimatedDiv article={article}>
      <DisplayInnerContainer>
        <SecondContainer>
          <CloseButton onClose={onClose} />
        </SecondContainer>
        <SecondContainer>
          <Images images={images} />
          <Items content={article} />
        </SecondContainer>
      </DisplayInnerContainer>
    </DisplayAnimatedDiv>
  );
}

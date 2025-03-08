import Container from "./Container";
import InnerContainer from "./InnerContainer";
import Images from "./Images";
import Items from "./Items";

export default function ScrapedContents({ contents }) {
  const { data } = contents;

  const images = contents.data.filter((item) => {
    return item.tag == "img";
  });

  if (data.length > 0) {
    return (
      <Container>
        <InnerContainer>
          {/* Only display the images when it is check in the filter box */}
          {contents.filterData.img && <Images images={images} />}
          <Items data={data} contents={contents} />
        </InnerContainer>
      </Container>
    );
  }
}

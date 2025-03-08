import Lists from "./Lists";
import Container from "./Container";
import UnOrderedList from "./UnorderedList";

export default function FilterBox({ contents, setContents }) {
  const handleFilterChange = (event) => {
    setContents((prevContents) => ({
      ...prevContents,
      filterData: {
        ...prevContents.filterData,
        [event.target.id]: event.target.checked,
      },
    }));
  };

  return (
    <Container>
      <UnOrderedList>
        <Lists contents={contents} handleFilterChange={handleFilterChange} />
      </UnOrderedList>
    </Container>
  );
}

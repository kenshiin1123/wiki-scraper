import Image from "./Image";

export default function Images({ images }) {
  return (
    <div className="flex  nowrap gap-5 mx-auto overflow-x-scroll px-10 relative">
      {images.map((image, index) => (
        <Image image={image} key={index} />
      ))}
    </div>
  );
}

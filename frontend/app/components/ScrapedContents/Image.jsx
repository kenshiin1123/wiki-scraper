export default function Image({ image }) {
  const handleClick = () => {
    window.open(image.src, "_blank");
  };

  return (
    <img
      onClick={handleClick}
      src={image.src}
      alt={image.alt}
      className={`rounded h-60 object-contain mx-auto shadow shadow-gray-400 
                  hover:shadow-gray-900 transition-[box-shadow,scale] 
                  duration-100 hover:scale-[1.03] cursor-pointer select-none`}
    />
  );
}

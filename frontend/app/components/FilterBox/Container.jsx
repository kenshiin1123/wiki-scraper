export default function Container({ children }) {
  return (
    <div className="py-3 shadow-sm shadow-gray-400 mx-auto rounded-sm w-min sticky top-17 bg-white z-10 my-5 max-sm:overflow-x-scroll max-w-[95%]">
      {children}
    </div>
  );
}

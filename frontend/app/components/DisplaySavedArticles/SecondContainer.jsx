export default function SecondContainer({ children }) {
  return (
    <div className="flex flex-col gap-5 justify-between w-[90%] rounded py-5 max-sm:px-0 px-5  bg-white items-center overflow-hidden ">
      {children}
    </div>
  );
}

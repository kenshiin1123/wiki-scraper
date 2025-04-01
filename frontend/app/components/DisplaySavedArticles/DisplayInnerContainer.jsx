export default function DisplayInnerContainer({ children }) {
  return (
    <div className="flex flex-col gap-5 justify-center items-center min-md:w-[40rem] max-md:w-[35rem] max-sm:w-[95%] w-1/2 h-full bg-white rounded-lg">
      {children}
    </div>
  );
}

export default function Container({ children }) {
  return (
    <div className="bg-white max-w-auto prose mx-auto py-10 flex  flex-col justify-center items-center shadow shadow-gray-400 rounded-sm divide-solid mb-10">
      {children}
    </div>
  );
}

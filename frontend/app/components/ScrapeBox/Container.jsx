export default function ({ children }) {
  return (
    <div className="bg-white prose flex flex-col gap-2 shadow-sm shadow-gray-400 py-10 px-5 rounded-xl w-96">
      {children}
    </div>
  );
}

export default function Summary({ children }) {
  return (
    <div className="shadow shadow-gray-400 rounded px-5 py-3 bg-white">
      <h1>Summary</h1>
      <p className="text-justify">{children}</p>
    </div>
  );
}

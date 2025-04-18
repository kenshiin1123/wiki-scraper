export default function Input({ ...props }) {
  return (
    <input
      type="text"
      id="searchInput"
      className="border rounded text-2xl text-center py-2"
      placeholder="Type here..."
      autoComplete="off"
      required
      {...props}
    />
  );
}

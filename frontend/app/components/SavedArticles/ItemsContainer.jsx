export default function ItemsContainer({ children }) {
  return (
    <div className="grid max-sm:grid-cols-1 lg:grid-cols-3 grid-cols-2 gap-4 justify-center">
      {children}
    </div>
  );
}

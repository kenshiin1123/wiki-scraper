export default function Container({ children }) {
  return (
    <div className="mx-auto flex flex-col min-h-16 rounded-lg p-4 my-3 gap-3 prose">
      {children}
    </div>
  );
}

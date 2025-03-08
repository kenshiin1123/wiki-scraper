export default function UnOrderedList({ children }) {
  return (
    <ul className="px-10 flex items-center justify-center gap-5 list-none select-none [&>li]:hover:underline w-full">
      {children}
    </ul>
  );
}

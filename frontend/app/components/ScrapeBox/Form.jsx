export default function Form({ children, ...props }) {
  return (
    <form className="flex justify-center items-center" {...props}>
      {children}
    </form>
  );
}

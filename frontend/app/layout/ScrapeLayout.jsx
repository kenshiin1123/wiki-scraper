import { Outlet } from "react-router";
import NavBar from "~/components/LayoutComponents/Navbar.jsx";
import { Toaster } from "sonner";
import GoUpButton from "~/components/LayoutComponents/GoUpButton.jsx";

export default function ScrapeLayout() {
  return (
    <>
      <NavBar />
      <Toaster />
      <Outlet />
      <GoUpButton />
    </>
  );
}

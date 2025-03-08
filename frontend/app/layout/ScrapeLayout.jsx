import { Outlet } from "react-router";
import NavBar from "../components/Navbar.jsx";
import { Toaster } from "sonner";
import GoUpButton from "~/components/GoUpButton.jsx";

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

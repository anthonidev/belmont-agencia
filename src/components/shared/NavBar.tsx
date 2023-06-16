import Image from "next/image";
import Link from "next/link";
import ButtonNavbar from "../ui/ButtonNavbar";
import NavbarMobile from "../ui/NavbarMobile";
import PopoverNavbar from "../ui/PopoverService";

export default function NavBar() {
  return (
    <header className=" isolate z-10 bg-indigo-900 sticky top-0">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href={"/"} className="-m-1.5 p-1.5">
            <span className="sr-only">Belmont Agencia</span>
            <Image
              src={"/images/LogoWhite.svg"}
              alt="Belmont Agencia"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <PopoverNavbar />
        <ButtonNavbar />
      </nav>
      <NavbarMobile />
    </header>
  );
}

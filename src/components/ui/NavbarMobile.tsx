"use client";

import { useStore } from "@/context/store";
import useRoutes from "@/hooks/useRoutes";
import { servicios } from "@/libs/utils/data";
import { Dialog, Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  EnvelopeIcon,
  PhoneIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import NavItem from "./NavItem";
import NavItemMovile from "./NavItemMovile";
type Props = {};
const callsToAction = [
  { name: "+51 958 920 823", href: "#", icon: PhoneIcon },
  { name: "info@belmont.lat", href: "#", icon: EnvelopeIcon },
  { name: "Ver todos los servicios", href: "#", icon: RectangleGroupIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const NavbarMobile = (props: Props) => {
  const routes = useRoutes();

  const { mobileMenuOpen, setMobileMenuOpen } = useStore();
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-indigo-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="-m-1.5 p-1.5">
            <span className="sr-only">Belmont Agencia</span>
            <Image
              src={"/images/logoWhite.svg"}
              alt="Belmont Agencia"
              width={100}
              height={100}
            />
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Cerrar Menu </span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <Disclosure as="div" className="-mx-3">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-100 hover:bg-indigo-8000">
                      Servicios
                      <ChevronDownIcon
                        className={classNames(
                          open ? "rotate-180" : "",
                          "h-5 w-5 flex-none"
                        )}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                      {[...servicios, ...callsToAction].map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-100 hover:bg-indigo-800"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              {routes.map((item) => (
                <NavItemMovile
                  onClick={() => setMobileMenuOpen(false)}
                  key={item.label}
                  href={item.href}
                  label={item.label}
                  active={item.active}
                />
              ))}
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default NavbarMobile;

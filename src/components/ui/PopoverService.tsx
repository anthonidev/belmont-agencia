"use client";

import { servicios } from "@/libs/utils/data";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  ChevronDownIcon,
  EnvelopeIcon,
  PhoneIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import useRoutes from "@/hooks/useRoutes";
import NavItem from "./NavItem";
const callsToAction = [
  { name: "+51 958 920 823", href: "#", icon: PhoneIcon },
  { name: "info@belmont.lat", href: "#", icon: EnvelopeIcon },
  { name: "Ver todos los servicios", href: "#", icon: RectangleGroupIcon },
];
const PopoverNavbar = () => {
  const routes = useRoutes();

  return (
    <Popover.Group className="hidden lg:flex lg:gap-x-12">
      <Popover>
        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-100">
          Servicios
          <ChevronDownIcon
            className="h-5 w-5 flex-none text-gray-400"
            aria-hidden="true"
          />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 -translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-1"
        >
          <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-indigo-900 pt-14 shadow-lg ring-1 ring-gray-900/5">
            {({ close }) => (
              <>
                <div className="mx-auto grid max-w-7xl grid-cols-3 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  {servicios.map((item) => (
                    <div
                      key={item.name}
                      className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-indigo-800 "
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-500 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-100 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <Link
                        href={item.href}
                        onClick={() => close()}
                        className="mt-6 block font-semibold text-amber-500"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-100">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100"
                        >
                          <item.icon
                            className="h-5 w-5 flex-none text-gray-400"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>

      {}
      {routes.map((item) => (
        <NavItem
          key={item.label}
          href={item.href}
          label={item.label}
          active={item.active}
        />
      ))}
    </Popover.Group>
  );
};

export default PopoverNavbar;

"use client";
import { useStore } from "@/context/store";
import { Bars3Icon } from "@heroicons/react/24/outline";
import React from "react";

type Props = {};

const ButtonNavbar = (props: Props) => {
  const { setMobileMenuOpen } = useStore();

  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Abrir menu de opciones</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};

export default ButtonNavbar;

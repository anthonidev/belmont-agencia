import Link from "next/link";
import React from "react";
import clsx from "clsx";

type Props = {
  label: string;
  href: string;
  active: boolean;
  onClick?: () => void;
};

const NavItemMovile = ({ label, active, href, onClick }: Props) => {
  return (
    <Link
      onClick={onClick}
      href={href}
      className={clsx(
        `-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-indigo-800`,
        active ? `text-amber-500` : `text-gray-100 hover:text-amber-500`
      )}
    >
      {label}
    </Link>
  );
};

export default NavItemMovile;

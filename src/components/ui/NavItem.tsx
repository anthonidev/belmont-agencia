import Link from "next/link";
import React from "react";
import clsx from "clsx";

type Props = {
  label: string;
  href: string;
  active: boolean;
};

const NavItem = ({ label, active, href }: Props) => {
  return (
    <Link
      href={href}
      className={clsx(
        `text-sm font-semibold leading-6 `,
        active ? `text-amber-500` : `text-gray-100 hover:text-amber-500`
      )}
    >
      {label}
    </Link>
  );
};

export default NavItem;

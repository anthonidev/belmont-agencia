import { useMemo } from "react";
import { usePathname } from "next/navigation";

const useRoutes = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Nosotros",
        href: "/nosotros",
        active: pathname === "/nosotros",
      },
      {
        label: "Contactanos",
        href: "/contactanos",
        active: pathname === "/contactanos",
      },
      {
        label: "Blog",
        href: "/blog",
        active: pathname === "/blog",
      },
    ],
    [pathname]
  );

  return routes;
};

export default useRoutes;

import Navbar from "@/components/shared/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Belmont Agencia: Impulsa tu presencia en línea con marketing digital de alto rendimiento",
  description:
    "Belmont Agencia es una empresa especializada en marketing digital, ofreciendo servicios integrales para ayudarte a destacar en el mundo digital. Nos enfocamos en el manejo estratégico de redes sociales, la creación de marcas sólidas y el desarrollo de sitios web a medida que generan impacto y resultados.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

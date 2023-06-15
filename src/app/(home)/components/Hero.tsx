import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const servicios = [
  {
    name: "Manejo de Redes Sociales",
    description:
      "Aprovecha todo el potencial de las redes sociales con nuestro servicio de manejo estratégico. Nuestro equipo de expertos diseñará una estrategia personalizada para aumentar tu presencia en línea, interactuar con tu audiencia y potenciar tu marca.",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Creación de Marca",
    description:
      "Crea una marca única y memorable con Belmont Agencia. Nuestro equipo de diseñadores y especialistas en branding te ayudarán a desarrollar una identidad visual distintiva, mensajes claros y una estrategia de comunicación cohesiva que refleje la esencia de tu negocio.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Creación de Páginas Web a Medida",
    description:
      "Impulsa tu presencia en línea con una página web a medida. En Belmont Agencia, creamos sitios web personalizados y optimizados para brindar una experiencia de usuario excepcional. Desde el diseño moderno y atractivo hasta la funcionalidad avanzada, nos aseguramos de que tu sitio web se destaque entre la competencia.",
    href: "#",
    icon: FingerPrintIcon,
  },
];

export default function Hero() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Impulsa tu negocio con Belmont Agencia
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Contacta a Belmont Agencia hoy mismo y descubre cómo podemos
            ayudarte a alcanzar tus metas digitales
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {servicios.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <Link
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-indigo-600"
                    >
                      Leer más <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

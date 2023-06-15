export default function Testimonials() {
  return (
    <section className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-white">
                <p>
                  “Trabajar con Belmont Agencia ha sido una experiencia
                  excepcional. Su enfoque estratégico en el manejo de redes
                  sociales y la creación de contenido de calidad nos ha ayudado
                  a aumentar nuestra visibilidad y a interactuar de manera
                  efectiva con nuestra audiencia. Gracias a su dedicación y
                  conocimientos, hemos logrado resultados tangibles en el
                  crecimiento de nuestra marca y en la generación de clientes
                  potenciales. Recomiendo encarecidamente los servicios de
                  Belmont Agencia a cualquier empresa que desee destacar en el
                  mundo digital.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  className="h-14 w-14 rounded-full bg-gray-800"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="text-base">
                  <div className="font-semibold text-white">María García</div>
                  <div className="mt-1 text-gray-400">
                    Gerente de Marketing de ABC Bakery
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-white">
                <p>
                  “Belmont Agencia ha sido un socio estratégico invaluable para
                  nuestra empresa. Su expertise en marketing digital y la
                  creación de páginas web a medida nos ha permitido fortalecer
                  nuestra presencia en línea y captar la atención de nuestro
                  público objetivo. Su enfoque personalizado y su compromiso con
                  la excelencia nos han brindado resultados excepcionales.
                  Confiamos en Belmont Agencia para todas nuestras necesidades
                  de marketing y los recomendamos sin reservas.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  className="h-14 w-14 rounded-full bg-gray-800"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="text-base">
                  <div className="font-semibold text-white">Juan Rodríguez</div>
                  <div className="mt-1 text-gray-400">
                    Director Comercial de XYZ Consulting
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

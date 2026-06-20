import { A } from "@solidjs/router";

export default function About() {
  return (
    <main class="min-h-screen bg-[#f4f1eb] text-[#3d342d]">
      <div class="max-w-4xl mx-auto px-8 py-16">
        <h1 class="text-5xl font-bold mb-6">
          Acerca de CardVault
        </h1>

        <p class="text-xl text-[#5f564c] leading-relaxed">
          CardVault es una plataforma diseñada para coleccionistas de cartas.
          Nuestro objetivo es ofrecer un espacio seguro donde los usuarios puedan
          comprar, vender, intercambiar y gestionar sus colecciones de cartas físicas.
        </p>

        <section class="mt-12">
          <h2 class="text-3xl font-semibold mb-4">
            Nuestra visión
          </h2>

          <p class="text-[#5f564c] leading-relaxed">
            La mayoría de los marketplaces se enfocan únicamente en las transacciones.
            CardVault busca ir más allá, combinando un mercado especializado con
            herramientas para gestionar colecciones, completar sets, obtener logros
            y construir una reputación dentro de la comunidad.
          </p>
        </section>

        <section class="mt-12">
          <h2 class="text-3xl font-semibold mb-4">
            Funcionalidades planificadas
          </h2>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white rounded-xl p-6 shadow-sm">
              <h3 class="font-semibold text-lg">
                🛒 Mercado
              </h3>
              <p class="mt-2 text-[#5f564c]">
                Compra y venta de cartas mediante publicaciones verificadas.
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-sm">
              <h3 class="font-semibold text-lg">
                🔄 Intercambios
              </h3>
              <p class="mt-2 text-[#5f564c]">
                Sistema de tradeos entre coleccionistas con ofertas estructuradas.
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-sm">
              <h3 class="font-semibold text-lg">
                📚 Colecciones
              </h3>
              <p class="mt-2 text-[#5f564c]">
                Registro y seguimiento de cartas, sets y progreso de colección.
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-sm">
              <h3 class="font-semibold text-lg">
                🏆 Logros e Insignias
              </h3>
              <p class="mt-2 text-[#5f564c]">
                Obtén reconocimientos por completar colecciones, realizar intercambios
                y alcanzar hitos dentro de la plataforma.
              </p>
            </div>
          </div>
        </section>

        <section class="mt-12">
          <h2 class="text-3xl font-semibold mb-4">
            Confianza y seguridad
          </h2>

          <div class="bg-white rounded-xl p-6 shadow-sm">
            <p class="text-[#5f564c] leading-relaxed">
              Uno de los objetivos principales de CardVault es reducir el riesgo
              de estafas y publicaciones falsas. Para ello se contempla un sistema
              de verificación mediante fotografías, reputación de usuarios y,
              en futuras versiones, mecanismos de intermediación para operaciones
              de alto valor.
            </p>
          </div>
        </section>

        <section class="mt-12">
          <h2 class="text-3xl font-semibold mb-4">
            Estado del proyecto
          </h2>

          <div class="bg-white rounded-xl p-6 shadow-sm">
            <p class="text-[#5f564c]">
              CardVault se encuentra actualmente en desarrollo. En esta etapa se
              está construyendo la base del marketplace, el sistema de usuarios
              y las herramientas necesarias para gestionar colecciones y publicaciones.
            </p>
          </div>
        </section>

        <div class="mt-12 pt-8 border-t border-[#d9d2c7] flex flex-wrap gap-4">
          <A
            href="/"
            class="
              px-5 py-3
              rounded-xl
              bg-[#5f7866]
              text-white
              hover:opacity-90
              transition
            "
          >
            Volver al Mercado
          </A>

          <A
            href="/"
            class="
              px-5 py-3
              rounded-xl
              border
              border-[#b9ad9d]
              text-[#5f564c]
              hover:bg-white
              transition
            "
          >
            Explorar Cartas
          </A>
        </div>
      </div>
    </main>
  );
}

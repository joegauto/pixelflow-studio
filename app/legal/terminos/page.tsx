import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y Condiciones - FlujoPy Consultor',
  description: 'Términos y condiciones de uso de los servicios de FlujoPy Consultor.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <div className="pt-20 section-padding bg-white dark:bg-gray-800">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-8">
          Términos y Condiciones
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Última actualización: {new Date().toLocaleDateString('es-PY')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Aceptación de los Términos</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Al acceder y utilizar los servicios de FlujoPy Consultor, usted acepta estar sujeto a estos términos y condiciones. 
              Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Descripción de los Servicios</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              FlujoPy Consultor ofrece servicios de consultoría y desarrollo tecnológico, incluyendo pero no limitado a:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Desarrollo de páginas web y tiendas online</li>
              <li>Implementación de soluciones de inteligencia artificial</li>
              <li>Automatización de procesos empresariales</li>
              <li>Servicios de ciberseguridad</li>
              <li>Consultoría en criptomonedas y blockchain</li>
              <li>Soporte técnico 24/7/365</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Obligaciones del Cliente</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              El cliente se compromete a:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Proporcionar información precisa y completa</li>
              <li>Colaborar activamente en el desarrollo del proyecto</li>
              <li>Realizar los pagos según los términos acordados</li>
              <li>Respetar los derechos de propiedad intelectual</li>
              <li>Utilizar los servicios de manera legal y ética</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Pagos y Facturación</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Los pagos se realizarán según el cronograma establecido en cada contrato específico. 
              Los precios están expresados en guaraníes paraguayos (PYG) e incluyen IVA cuando corresponda. 
              Los pagos vencidos pueden generar intereses moratorios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Propiedad Intelectual</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Los derechos de propiedad intelectual sobre los desarrollos realizados serán transferidos al cliente 
              una vez completado el pago total del proyecto, salvo que se especifique lo contrario en el contrato. 
              FlujoPy Consultor se reserva el derecho de utilizar el conocimiento general adquirido para futuros proyectos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Confidencialidad</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Nos comprometemos a mantener la confidencialidad de toda la información proporcionada por el cliente 
              y no divulgarla a terceros sin autorización expresa, excepto cuando sea requerido por ley.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Limitación de Responsabilidad</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              FlujoPy Consultor no será responsable por daños indirectos, incidentales o consecuenciales. 
              Nuestra responsabilidad total no excederá el monto pagado por los servicios específicos que dieron lugar al reclamo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Modificaciones</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. 
              Las modificaciones serán notificadas a través de nuestro sitio web y entrarán en vigor inmediatamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Ley Aplicable</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Estos términos se rigen por las leyes de la República del Paraguay. 
              Cualquier disputa será resuelta en los tribunales competentes de Asunción, Paraguay.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Contacto</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Para consultas sobre estos términos, puede contactarnos en:
            </p>
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-gray-600 dark:text-gray-400">
                <strong>Email:</strong> legal@flujopy.com<br />
                <strong>Teléfono:</strong> +595 981 234 567<br />
                <strong>Dirección:</strong> Av. Mariscal López 1234, Asunción, Paraguay
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
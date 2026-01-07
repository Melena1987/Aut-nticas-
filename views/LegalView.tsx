
import React from 'react';

const LegalView: React.FC = () => {
  return (
    <section className="pt-40 pb-32 bg-brand-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-7xl lg:text-9xl font-bold uppercase tracking-tighter mb-16 leading-none animate-in fade-in slide-in-from-bottom-8 duration-700">
          TEXTOS <br /> <span className="text-brand-pink">LEGALES</span>
        </h1>

        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] magazine-border space-y-20 shadow-xl">
          
          {/* AVISO LEGAL */}
          <div id="aviso-legal">
            <h2 className="text-4xl font-bold uppercase tracking-tighter text-brand-black mb-8 border-b-4 border-brand-pink inline-block">01. Aviso Legal</h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se exponen los siguientes datos identificativos del titular:</p>
              <ul className="list-none pl-0 space-y-2 font-bold text-brand-black">
                <li>Denominación Social: AUTÉNTICAS COMMUNITY S.L. (Nombre ficticio para ejemplo)</li>
                <li>NIF: B00000000</li>
                <li>Domicilio Social: Madrid, España</li>
                <li>Email: hola@autenticas.es</li>
              </ul>
              <h3 className="text-2xl font-bold uppercase mt-8">Propiedad Intelectual</h3>
              <p>Todo el contenido de esta web (textos, imágenes, logos, diseño) es propiedad exclusiva de AUTÉNTICAS o de sus respectivos creadores colaboradores. Queda prohibida la reproducción total o parcial sin autorización expresa.</p>
            </div>
          </div>

          {/* POLÍTICA DE PRIVACIDAD */}
          <div id="privacidad">
            <h2 className="text-4xl font-bold uppercase tracking-tighter text-brand-black mb-8 border-b-4 border-brand-pink inline-block">02. Política de Privacidad</h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), te informamos sobre cómo tratamos tus datos:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div className="bg-brand-cream/50 p-6 rounded-2xl">
                  <h4 className="font-bold uppercase text-brand-pink text-sm mb-2">Responsable</h4>
                  <p className="text-sm">AUTÉNTICAS COMMUNITY S.L.</p>
                </div>
                <div className="bg-brand-cream/50 p-6 rounded-2xl">
                  <h4 className="font-bold uppercase text-brand-pink text-sm mb-2">Finalidad</h4>
                  <p className="text-sm">Gestión de la comunidad, respuesta a consultas y envío de newsletters informativas si has dado tu consentimiento.</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold uppercase mt-8">Tus Derechos</h3>
              <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición enviando un email a <strong>hola@autenticas.es</strong> adjuntando copia de tu DNI.</p>
            </div>
          </div>

          {/* POLÍTICA DE COOKIES */}
          <div id="cookies">
            <h2 className="text-4xl font-bold uppercase tracking-tighter text-brand-black mb-8 border-b-4 border-brand-pink inline-block">03. Política de Cookies</h2>
            <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
              <p>Las cookies son pequeños fragmentos de texto que nuestros servidores envían a su ordenador o dispositivo cuando accede a nuestros servicios. Se almacenan en su navegador y después se envían de vuelta a nuestros servidores para que podamos proporcionar contenido contextual. Sin cookies, usar la web sería una experiencia mucho más frustrante.</p>
              <p>Las utilizamos para apoyar sus actividades en nuestro sitio web. Por ejemplo, su sesión (para que no tenga que volver a iniciar sesión) o su cesta de compras. Las cookies también nos permiten entender sus preferencias según la actividad previa o actual en nuestro sitio web (las páginas que ha visitado), su idioma y país, así podemos proporcionarle un mejor servicio.</p>
              
              <h3 className="text-2xl font-bold uppercase mt-8">Resumen de Cookies</h3>
              <div className="overflow-x-auto my-8">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-brand-black text-white uppercase text-[10px] tracking-widest">
                      <th className="p-4 border border-white/10">Categoría</th>
                      <th className="p-4 border border-white/10">Propósito</th>
                      <th className="p-4 border border-white/10">Ejemplos</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="p-4 border border-gray-100 font-bold">Sesión y seguridad (Esencial)</td>
                      <td className="p-4 border border-gray-100">Autentique usuarios y proteja datos. Necesarias para el funcionamiento.</td>
                      <td className="p-4 border border-gray-100 italic">sesion_id</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 border border-gray-100 font-bold">Preferencias (Esencial)</td>
                      <td className="p-4 border border-gray-100">Recuerda idioma, región o comportamiento preferido.</td>
                      <td className="p-4 border border-gray-100 italic">frontend_lang</td>
                    </tr>
                    <tr>
                      <td className="p-4 border border-gray-100 font-bold">Historial (Opcional)</td>
                      <td className="p-4 border border-gray-100">Recopila interacciones y campañas de marketing.</td>
                      <td className="p-4 border border-gray-100 italic">utm_campaign, utm_source</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 border border-gray-100 font-bold">Anuncios (Opcional)</td>
                      <td className="p-4 border border-gray-100">Publicidad más valiosa y relevante para el usuario.</td>
                      <td className="p-4 border border-gray-100 italic">__gads, __gac (Google)</td>
                    </tr>
                    <tr>
                      <td className="p-4 border border-gray-100 font-bold">Analytics (Opcional)</td>
                      <td className="p-4 border border-gray-100">Estadísticas de interacción mediante Google Analytics.</td>
                      <td className="p-4 border border-gray-100 italic">_ga, _gat, _gid</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold uppercase mt-8">Cómo gestionar cookies</h3>
              <p>Puede elegir entre dos opciones: que su computadora le advierta cada vez que se envía una cookie o desactivar todas las cookies. Cada navegador es distinto, así que consulte el menú de Ayuda de su navegador para aprender la forma correcta de modificar sus cookies.</p>
              <p className="bg-brand-pink/10 p-4 rounded-xl border-l-4 border-brand-pink text-sm italic">Actualmente no somos compatibles con señales de Do Not Track, ya que no existe un estándar en el sector para el cumplimiento.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LegalView;

'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="py-24 bg-[#0f0f0f]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Trabajemos Juntos</h2>
          <p className="text-white/50 text-lg">¿Tienes un proyecto en mente? Te respondemos en menos de 24h.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-4">Contáctanos directamente</h3>
              <div className="space-y-4">
                {[
                  { icon: '📧', label: 'Email', value: 'contacto@pixelflowstudio.com' },
                  { icon: '💬', label: 'WhatsApp', value: '+34 XXX XXX XXX' },
                  { icon: '🌍', label: 'Modalidad', value: '100% Remoto — en cualquier lugar' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="text-white/40 text-xs uppercase tracking-wider">{item.label}</div>
                      <div className="text-white/80 text-sm mt-0.5">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#FF6B6B]/10 to-[#4ECDC4]/10 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-3">¿Por qué elegirnos?</h3>
              <ul className="space-y-2">
                {[
                  'Entregamos lo que prometemos, en el tiempo acordado',
                  'Código limpio y diseño que puedes escalar',
                  'Comunicación directa, sin intermediarios',
                  'Soporte post-entrega incluido',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                    <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-white text-xl font-bold mb-2">¡Mensaje enviado!</h3>
                <p className="text-white/50">Te respondemos en menos de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-white/50 mb-2">Nombre</label>
                  <input type="text" required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-[#4ECDC4]/50 text-sm"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-2">Email</label>
                  <input type="email" required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-[#4ECDC4]/50 text-sm"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-2">Servicio de interés</label>
                  <select required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white/70 focus:outline-none focus:border-[#4ECDC4]/50 text-sm"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                    <option value="" className="bg-slate-900">Selecciona un servicio</option>
                    <option value="web" className="bg-slate-900">Presencia Digital Completa</option>
                    <option value="ia" className="bg-slate-900">Automatización con IA</option>
                    <option value="social" className="bg-slate-900">Social Media</option>
                    <option value="ecommerce" className="bg-slate-900">E-commerce</option>
                    <option value="custom" className="bg-slate-900">Proyecto Personalizado</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-2">Cuéntanos tu proyecto</label>
                  <textarea required rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-[#4ECDC4]/50 text-sm resize-none"
                    placeholder="¿Qué necesitas? Cuantos más detalles, mejor."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </div>
                <button type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/30 text-sm">
          © 2025 PixelFlow Studio · Mari & Joel · Todos los derechos reservados
        </div>
      </div>
    </section>
  );
}

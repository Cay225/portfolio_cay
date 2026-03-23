import { INFO } from '../data/portfolio'

const LINKS = [
  { icon: 'fab fa-github',   label: 'GitHub',   value: 'Chrisandy225',       href: INFO.github,              color: '#F8FAFF' },
  { icon: 'fas fa-envelope', label: 'Email',    value: INFO.email,            href: `mailto:${INFO.email}`,   color: '#4F8EF7' },
  { icon: 'fas fa-phone',    label: 'Téléphone',value: INFO.phone,            href: `tel:${INFO.phone}`,      color: '#10B981' },
  { icon: 'fab fa-whatsapp', label: 'WhatsApp', value: 'Envoyer un message', href: `https://wa.me/2250704200850?text=Bonjour%20Chris%2C%20j%27ai%20vu%20ton%20portfolio%20et%20je%20voudrais%20te%20contacter.`, color: '#25D366' },
]

export default function Contact() {
  return (
    <section id="contact" className="section-pad px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14 reveal">
          <div className="section-num mb-3">05. Contact</div>
          <h2 className="font-syne font-black text-light mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Travaillons <span className="text-blue">ensemble</span>
          </h2>
          <p className="text-text-m text-base max-w-md mx-auto leading-relaxed">
            Disponible pour des projets freelance, des opportunités de stage ou des collaborations.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">

          {/* Availability badge */}
          <div className="reveal flex justify-center mb-10">
            <div className="flex items-center gap-2 glass rounded-full px-5 py-2.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-sm text-green-400">Disponible pour de nouveaux projets</span>
            </div>
          </div>

          {/* Liens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {LINKS.map(({ icon, label, value, href, color }, i) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                className={`reveal reveal-d${i + 1} glass rounded-2xl p-5 no-underline group
                  flex items-center gap-4
                  transition-all duration-300 hover:-translate-y-1`}
                style={{ '--hover-color': color }}>

                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0
                  transition-all duration-200 group-hover:scale-110"
                  style={{ background: color + '20', border: `1px solid ${color}40`, color }}>
                  <i className={icon} />
                </div>

                <div>
                  <p className="text-text-m text-xs mb-0.5 font-mono">{label}</p>
                  <p className="text-light text-sm font-medium group-hover:text-blue transition-colors">
                    {value}
                  </p>
                </div>

                <i className="fas fa-arrow-right text-text-m text-xs ml-auto
                  transition-all duration-200 group-hover:text-blue group-hover:translate-x-1" />
              </a>
            ))}
          </div>

          {/* Footer message */}
          <div className="reveal text-center">
            <p className="font-mono text-text-m text-sm">
              <span className="text-blue">{"</"}</span>
              portfolio
              <span className="text-blue">{">"}</span>
              {' '}— Fait avec ❤️ depuis Abidjan
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

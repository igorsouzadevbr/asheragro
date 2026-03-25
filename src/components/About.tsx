import { Leaf, Shield, Globe2, TrendingUp } from 'lucide-react'

export default function About () {
  return (
    <section
      id='sobre'
      className='py-32 lg:py-40 bg-gradient-to-b from-white via-earth-50/30 to-white relative overflow-hidden'
    >
      <div className='absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-primary-100/40 to-transparent blur-3xl'></div>
      <div className='absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-gold-100/30 to-transparent blur-3xl'></div>

      <div className='max-w-7xl mx-auto px-6 lg:px-8 relative'>
        <div className='space-y-24'>
          <div className='text-center max-w-4xl mx-auto'>
            <div className='inline-flex items-center gap-3 mb-8'>
              <div className='h-px w-12 bg-gradient-to-r from-transparent to-gold-500'></div>
              <span className='text-gold-600 font-display font-bold tracking-[0.3em] uppercase text-sm'>
                Nossa História
              </span>
              <div className='h-px w-12 bg-gradient-to-l from-transparent to-gold-500'></div>
            </div>
            <h2 className='section-title mb-8'>
              Excelência <span className='text-gradient'>Cultivada</span>
            </h2>
            <div className='divider-gold'></div>
            <p className='section-subtitle'>
              Do coração do Nordeste brasileiro para os mercados mais exigentes
              do mundo, levamos qualidade certificada, sustentabilidade e
              inovação em cada produto.
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-20 items-center'>
            <div className='space-y-10 order-2 lg:order-1'>
              {[
                {
                  icon: Leaf,
                  title: 'Raízes Fortes',
                  desc: 'Enraizada em Mossoró, RN, operamos em um dos melhores polos agrícolas do Brasil. O clima tropical semiárido, tecnologia de ponta e expertise de nosso time criam a fórmula perfeita para produtos de qualidade internacional.',
                  color: 'primary'
                },
                {
                  icon: Shield,
                  title: 'Qualidade Inegociável',
                  desc: 'Certificados pela GlobalG.A.P., atendemos aos mais rigorosos padrões internacionais. Cada etapa da produção, do plantio ao embarque, passa por controles que garantem excelência absoluta.',
                  color: 'gold'
                },
                {
                  icon: Globe2,
                  title: 'Alcance Global',
                  desc: 'Com infraestrutura logística moderna e parcerias estratégicas, atendemos mercados nos EUA, Canadá e Europa. Nossos produtos chegam frescos às mesas de consumidores exigentes em todo o mundo.',
                  color: 'primary'
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className='group flex gap-6 p-8 bg-white/80 backdrop-blur-sm rounded-none shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-primary-600 hover:border-gold-600 hover:-translate-x-2'
                >
                  <div className='relative flex-shrink-0'>
                    <div
                      className={`absolute inset-0 bg-${item.color}-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}
                    ></div>
                    <div
                      className={`relative bg-gradient-to-br from-${item.color}-600 to-${item.color}-700 p-4 rounded-full`}
                    >
                      <item.icon
                        className='w-7 h-7 text-white'
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>
                  <div className='space-y-3'>
                    <h3 className='text-2xl font-serif font-bold text-gray-900'>
                      {item.title}
                    </h3>
                    <p className='text-gray-600 leading-relaxed text-base'>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className='relative h-[600px] lg:h-[700px] order-1 lg:order-2'>
              <div className='absolute -top-8 -right-8 w-64 h-64 bg-gold-400/20 rounded-full blur-3xl animate-float'></div>
              <div
                className='absolute -bottom-8 -left-8 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl animate-float'
                style={{ animationDelay: '3s' }}
              ></div>
              <div className='relative h-full'>
                <img
                  src='/mm.jpg'
                  alt='Plantação Agrícola Asher'
                  className='w-full h-full object-cover shadow-2xl relative z-10 border-8 border-white'
                />
                <div className='absolute -bottom-6 -right-6 bg-gradient-to-br from-primary-700 to-primary-900 p-8 shadow-2xl z-20 border-4 border-white'>
                  <div className='text-5xl font-serif font-black text-white mb-2'>
                    5+
                  </div>
                  <div className='text-gold-300 font-display font-bold text-sm uppercase tracking-wider'>
                    Anos de Excelência
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='grid md:grid-cols-4 gap-8 mt-32 pt-16 border-t-2 border-gray-200'>
            {[
              {
                icon: TrendingUp,
                number: '5+',
                label: 'Anos de Excelência',
                color: 'primary'
              },
              {
                icon: Globe2,
                number: '3',
                label: 'Continentes',
                color: 'gold'
              },
              {
                icon: Shield,
                number: '100%',
                label: 'Certificado',
                color: 'primary'
              },
              { icon: Leaf, number: '1000+', label: 'Hectares', color: 'gold' }
            ].map((stat, i) => (
              <div
                key={i}
                className='text-center py-8 group hover:scale-105 transition-transform duration-500'
              >
                <div className='flex justify-center mb-4'>
                  <div className='relative'>
                    <div
                      className={`absolute inset-0 bg-${stat.color}-500/20 rounded-full blur-xl`}
                    ></div>
                    <div
                      className={`relative bg-gradient-to-br from-${stat.color}-600 to-${stat.color}-700 p-4 rounded-full`}
                    >
                      <stat.icon
                        className='w-8 h-8 text-white'
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>
                </div>
                <div className='text-6xl font-serif font-black text-gradient bg-gradient-to-r from-primary-700 to-gold-600 bg-clip-text text-transparent mb-3'>
                  {stat.number}
                </div>
                <div className='text-gray-700 font-display font-bold text-sm uppercase tracking-wider'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

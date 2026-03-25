import { Leaf, Droplet, Recycle, Heart } from 'lucide-react'

const practices = [
  {
    icon: Leaf,
    title: 'Agricultura Responsável',
    description:
      'Técnicas modernas de cultivo que preservam a fertilidade do solo e respeitam os ciclos naturais, garantindo produção sustentável.',
    color: 'primary'
  },
  {
    icon: Droplet,
    title: 'Gestão Hídrica Inteligente',
    description:
      'Uso eficiente e consciente da água através de sistemas de irrigação inteligentes, tecnologia de ponta e práticas sustentáveis.',
    color: 'gold'
  },
  {
    icon: Recycle,
    title: 'Economia Circular',
    description:
      'Aproveitamento integral dos recursos naturais e destinação adequada de resíduos orgânicos, minimizando impacto ambiental.',
    color: 'primary'
  }
]

export default function Sustainability () {
  return (
    <section className='py-32 lg:py-40 bg-gradient-to-b from-primary-950 via-primary-900 to-primary-950 text-white relative overflow-hidden'>
      <div className='absolute inset-0 opacity-10'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
        <div className='absolute top-20 right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-float'></div>
        <div
          className='absolute bottom-20 left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float'
          style={{ animationDelay: '3s' }}
        ></div>
      </div>

      <div className='max-w-7xl mx-auto px-6 lg:px-8 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-20 items-center'>
          <div className='relative order-2 lg:order-1 group'>
            <div className='absolute -inset-4 bg-gradient-to-br from-gold-500/20 to-primary-500/20 blur-2xl group-hover:blur-3xl transition-all duration-500'></div>
            <div className='relative h-[600px] overflow-hidden shadow-2xl border-8 border-white/10'>
              <div
                className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110'
                style={{
                  backgroundImage: 'url(/ura.jpg)'
                }}
              ></div>
              <div className='absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent'></div>

              <div className='absolute bottom-8 left-8 right-8'>
                <div className='bg-white/10 backdrop-blur-md p-6 border border-white/20'>
                  <div className='flex items-center gap-3 mb-2'>
                    <Heart className='w-6 h-6 text-gold-400' />
                    <span className='text-gold-400 font-display font-bold text-sm uppercase tracking-wider'>
                      Nosso Compromisso
                    </span>
                  </div>
                  <p className='text-white text-lg font-medium'>
                    Cultivando o futuro com responsabilidade
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='order-1 lg:order-2 space-y-10'>
            <div>
              <div className='inline-flex items-center gap-3 mb-8'>
                <div className='h-px w-12 bg-gradient-to-r from-transparent to-gold-400'></div>
                <span className='text-gold-400 font-display font-bold tracking-[0.3em] uppercase text-sm flex items-center gap-2'>
                  <Leaf className='w-4 h-4' />
                  Sustentabilidade
                </span>
                <div className='h-px w-12 bg-gradient-to-l from-transparent to-gold-400'></div>
              </div>
              <h2 className='section-title !text-white mb-6'>
                Compromisso com o{' '}
                <span className='text-gradient bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent'>
                  Futuro
                </span>
              </h2>
              <div className='divider-gold !bg-gradient-to-r !from-gold-400 !via-gold-300 !to-gold-400'></div>
              <p className='text-xl text-white/90 leading-relaxed'>
                Acreditamos que a produção agrícola de excelência deve caminhar
                lado a lado com a preservação ambiental e o desenvolvimento
                social sustentável.
              </p>
            </div>

            <div className='space-y-6'>
              {practices.map((practice, index) => (
                <div
                  key={index}
                  className='group flex gap-6 p-8 bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-gold-400/50 hover:bg-white/10 transition-all duration-500'
                >
                  <div className='relative flex-shrink-0'>
                    <div
                      className={`absolute inset-0 bg-${
                        practice.color === 'gold' ? 'gold' : 'primary'
                      }-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}
                    ></div>
                    <div
                      className={`relative w-16 h-16 bg-gradient-to-br from-${
                        practice.color === 'gold' ? 'gold' : 'primary'
                      }-600 to-${
                        practice.color === 'gold' ? 'gold' : 'primary'
                      }-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl`}
                    >
                      <practice.icon
                        className='text-white'
                        size={28}
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <h3 className='text-2xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors duration-300'>
                      {practice.title}
                    </h3>
                    <p className='text-white/80 leading-relaxed'>
                      {practice.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

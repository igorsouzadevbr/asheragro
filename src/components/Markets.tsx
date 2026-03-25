import { MapPin, Globe, Plane } from 'lucide-react'

const markets = [
  {
    region: 'Brasil',
    areas: 'Sudeste e Nordeste',
    description:
      'Atendimento estratégico aos principais centros de distribuição nacionais com logística otimizada',
    icon: MapPin,
    flag: '🇧🇷'
  },
  {
    region: 'América do Norte',
    areas: 'Estados Unidos e Canadá',
    description:
      'Exportação regular e consolidada para os mercados norte-americanos mais exigentes',
    icon: Plane,
    flag: '🇺🇸'
  },
  {
    region: 'Europa',
    areas: 'União Europeia',
    description:
      'Presença estabelecida nos mercados europeus premium com certificação internacional',
    icon: Globe,
    flag: '🇪🇺'
  }
]

export default function Markets () {
  return (
    <section
      id='mercados'
      className='py-32 lg:py-40 bg-gradient-to-b from-white via-earth-50/20 to-white relative overflow-hidden'
    >
      <div className='absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-radial from-gold-100/40 to-transparent blur-3xl'></div>
      <div className='absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-radial from-primary-100/40 to-transparent blur-3xl'></div>

      <div className='max-w-7xl mx-auto px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-20'>
          <div className='inline-flex items-center gap-3 mb-8'>
            <div className='h-px w-12 bg-gradient-to-r from-transparent to-gold-500'></div>
            <span className='text-gold-600 font-display font-bold tracking-[0.3em] uppercase text-sm flex items-center gap-2'>
              <Globe className='w-4 h-4' />
              Presença Global
            </span>
            <div className='h-px w-12 bg-gradient-to-l from-transparent to-gold-500'></div>
          </div>
          <h2 className='section-title mb-8'>
            Alcance <span className='text-gradient'>Global</span>
          </h2>
          <div className='divider-gold'></div>
          <p className='section-subtitle'>
            Levando a excelência agrícola brasileira para os mercados mais
            exigentes do mundo
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-10'>
          {markets.map((market, index) => (
            <div
              key={index}
              className='group relative bg-white p-10 shadow-2xl hover:shadow-primary-900/20 transition-all duration-700 hover:-translate-y-4 border-t-4 border-primary-600 overflow-hidden'
            >
              <div className='absolute top-0 right-0 text-9xl opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none'>
                {market.flag}
              </div>

              <div className='relative mb-8'>
                <div className='absolute inset-0 bg-primary-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500'></div>
                <div className='relative w-20 h-20 bg-gradient-to-br from-primary-700 to-primary-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl'>
                  <market.icon
                    className='text-gold-300'
                    size={36}
                    strokeWidth={2.5}
                  />
                </div>
              </div>

              <h3 className='text-3xl font-serif font-black text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300'>
                {market.region}
              </h3>

              <div className='mb-4 pb-4 border-b-2 border-gold-400/30'>
                <p className='text-gold-600 font-display font-bold text-sm uppercase tracking-wider'>
                  {market.areas}
                </p>
              </div>

              <p className='text-gray-700 leading-relaxed text-base font-medium'>
                {market.description}
              </p>

              <div className='absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary-600 via-gold-500 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700'></div>
            </div>
          ))}
        </div>

        <div className='mt-24 bg-gradient-to-br from-primary-900 to-primary-950 p-12 lg:p-16 shadow-2xl relative overflow-hidden'>
          <div className='absolute inset-0 opacity-10'>
            <div
              className='absolute inset-0'
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
            ></div>
          </div>

          <div className='relative text-center max-w-3xl mx-auto'>
            <Globe
              className='w-16 h-16 text-gold-400 mx-auto mb-6'
              strokeWidth={1.5}
            />
            <h3 className='text-4xl font-serif font-bold text-white mb-6'>
              Expandindo Fronteiras
            </h3>
            <p className='text-xl text-white/90 leading-relaxed mb-8'>
              Nossa missão é levar a qualidade e o sabor dos produtos
              brasileiros para cada vez mais mercados, mantendo os mais altos
              padrões de excelência e sustentabilidade.
            </p>
            <a
              href='#contato'
              className='btn-gold inline-flex items-center gap-3'
            >
              Seja Nosso Parceiro
              <Plane className='w-5 h-5' />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

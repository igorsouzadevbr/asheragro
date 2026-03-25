import {
  Globe as Globe2,
  Package,
  Sprout,
  CheckCircle2,
  Users,
  Star
} from 'lucide-react'

const differentials = [
  {
    icon: Globe2,
    title: 'Exportação Internacional',
    description:
      'Presença consolidada nos mercados da América do Norte e Europa, atendendo aos padrões mais exigentes do mundo.',
    number: '01'
  },
  {
    icon: Package,
    title: 'Logística Eficiente',
    description:
      'Infraestrutura moderna e cadeia de suprimentos otimizada para garantir frescor e qualidade absoluta.',
    number: '02'
  },
  {
    icon: Sprout,
    title: 'Produção Sustentável',
    description:
      'Práticas agrícolas responsáveis que respeitam o meio ambiente e as comunidades locais.',
    number: '03'
  },
  {
    icon: CheckCircle2,
    title: 'Certificação GlobalG.A.P.',
    description:
      'Reconhecimento internacional de boas práticas agrícolas e segurança alimentar.',
    number: '04'
  },
  {
    icon: Users,
    title: 'Controle de Qualidade',
    description:
      'Monitoramento rigoroso em todas as etapas, da semeadura à entrega final.',
    number: '05'
  }
]

export default function Differentials () {
  return (
    <section
      id='diferenciais'
      className='py-32 lg:py-40 bg-gradient-to-b from-primary-950 via-primary-900 to-primary-950 text-white relative overflow-hidden'
    >
      <div className='absolute inset-0 opacity-10'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
        <div className='absolute top-20 left-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-float'></div>
        <div
          className='absolute bottom-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float'
          style={{ animationDelay: '3s' }}
        ></div>
      </div>

      <div className='max-w-7xl mx-auto px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-20'>
          <div className='inline-flex items-center gap-3 mb-8'>
            <div className='h-px w-12 bg-gradient-to-r from-transparent to-gold-400'></div>
            <span className='text-gold-400 font-display font-bold tracking-[0.3em] uppercase text-sm flex items-center gap-2'>
              <Star className='w-4 h-4' />
              Vantagens Competitivas
            </span>
            <div className='h-px w-12 bg-gradient-to-l from-transparent to-gold-400'></div>
          </div>
          <h2 className='section-title !text-white mb-8'>
            Nossos{' '}
            <span className='text-gradient bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent'>
              Diferenciais
            </span>
          </h2>
          <div className='divider-gold'></div>
          <p className='section-subtitle !text-white/90'>
            Compromisso com excelência, inovação e sustentabilidade em cada
            etapa do processo
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {differentials.map((item, index) => (
            <div
              key={index}
              className='group relative p-10 bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-gold-400/50 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2'
            >
              <div className='absolute top-6 right-6 text-7xl font-serif font-black text-white/5 group-hover:text-gold-400/10 transition-colors duration-500'>
                {item.number}
              </div>

              <div className='relative mb-8'>
                <div className='absolute inset-0 bg-gold-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500'></div>
                <div className='relative w-16 h-16 bg-gradient-to-br from-gold-600 to-gold-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl'>
                  <item.icon
                    className='text-white'
                    size={32}
                    strokeWidth={2.5}
                  />
                </div>
              </div>

              <h3 className='text-2xl font-serif font-bold text-white mb-4 group-hover:text-gold-300 transition-colors duration-300'>
                {item.title}
              </h3>
              <p className='text-white/80 leading-relaxed text-base'>
                {item.description}
              </p>

              <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

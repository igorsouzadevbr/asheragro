import { Sparkles, Award } from 'lucide-react'

const products = [
  {
    name: 'Melões',
    image: '/melon.png',
    description:
      'Melões premium de diversas variedades, selecionados com doçura e frescor incomparáveis',
    badge: 'Destaque'
  },
  {
    name: 'Melancia',
    image: '/sand.jpg',
    description: 'Melancias cultivadas com tecnologia avançada',
    badge: 'Premium'
  },
  {
    name: 'Abóbora',
    image: '/ab.jpg',
    description: 'Abóboras de qualidade superior para mercados exigentes',
    badge: 'Premium'
  },
  {
    name: 'Mamão',
    image: '/mamao.jpg',
    description: 'Tomates frescos com sabor intenso e textura perfeita',
    badge: 'Premium'
  },
  {
    name: 'Abacate',
    image: '/abaca.jpg',
    description: 'Abacates certificados premium com 20 a 23% de matéria',
    badge: 'Destaque'
  },
  {
    name: 'Abacaxi',
    image: '/abacax.jpg',
    description: 'Variedade exclusiva de frutas tropicais certificadas',
    badge: 'Exportação'
  }
]

export default function Products () {
  return (
    <section
      id='produtos'
      className='py-32 lg:py-40 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden'
    >
      <div className='absolute top-20 left-0 w-[600px] h-[600px] bg-gradient-radial from-primary-100/30 to-transparent blur-3xl'></div>
      <div className='absolute bottom-20 right-0 w-[600px] h-[600px] bg-gradient-radial from-gold-100/30 to-transparent blur-3xl'></div>

      <div className='max-w-7xl mx-auto px-6 lg:px-8 relative'>
        <div className='text-center mb-20'>
          <div className='inline-flex items-center gap-3 mb-8'>
            <div className='h-px w-12 bg-gradient-to-r from-transparent to-gold-500'></div>
            <span className='text-gold-600 font-display font-bold tracking-[0.3em] uppercase text-sm flex items-center gap-2'>
              <Sparkles className='w-4 h-4' />
              Portfólio Premium
            </span>
            <div className='h-px w-12 bg-gradient-to-l from-transparent to-gold-500'></div>
          </div>
          <h2 className='section-title mb-8'>
            Nossos <span className='text-gradient'>Produtos</span>
          </h2>
          <div className='divider-gold'></div>
          <p className='section-subtitle'>
            Frutas e verduras cultivadas com dedicação, tecnologia de ponta e
            certificação internacional
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {products.map((product, index) => (
            <div
              key={index}
              className='group relative overflow-hidden bg-white shadow-2xl hover:shadow-primary-900/20 transition-all duration-700 hover:-translate-y-4 border-t-4 border-primary-600'
            >
              <div className='absolute top-4 right-4 z-20'>
                <div className='bg-gradient-to-br from-gold-600 to-gold-700 px-4 py-2 shadow-xl flex items-center gap-2'>
                  <Award className='w-4 h-4 text-white' strokeWidth={2.5} />
                  <span className='text-white font-display font-bold text-xs uppercase tracking-wider'>
                    {product.badge}
                  </span>
                </div>
              </div>

              <div className='relative aspect-[4/3] overflow-hidden'>
                <div
                  className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110'
                  style={{
                    backgroundImage: `url(${product.image})`
                  }}
                ></div>
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500'></div>

                <div className='absolute inset-0 flex items-end p-6'>
                  <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                    <h3 className='text-3xl font-serif font-black text-white mb-2 drop-shadow-lg'>
                      {product.name}
                    </h3>
                  </div>
                </div>
              </div>

              <div className='p-8 bg-white'>
                <p className='text-gray-700 leading-relaxed text-base font-medium'>
                  {product.description}
                </p>

                <div className='mt-6 pt-6 border-t border-gray-200 flex items-center justify-between'>
                  <div className='flex items-center gap-2 text-primary-700'>
                    <div className='w-2 h-2 bg-primary-600 rounded-full'></div>
                    <span className='font-display font-bold text-xs uppercase tracking-wider'>
                      Certificado
                    </span>
                  </div>
                  <div className='flex items-center gap-2 text-gold-700'>
                    <div className='w-2 h-2 bg-gold-600 rounded-full'></div>
                    <span className='font-display font-bold text-xs uppercase tracking-wider'>
                      Premium
                    </span>
                  </div>
                </div>
              </div>

              <div className='absolute inset-0 border-2 border-transparent group-hover:border-gold-400/50 transition-colors duration-500 pointer-events-none'></div>
            </div>
          ))}
        </div>

        <div className='mt-20 text-center'>
          <a
            href='#contato'
            className='btn-primary inline-flex items-center gap-3'
          >
            Solicite um Orçamento
            <Sparkles className='w-5 h-5' />
          </a>
        </div>
      </div>
    </section>
  )
}

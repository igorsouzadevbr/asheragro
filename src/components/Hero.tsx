import { ArrowRight, Globe, Award, TrendingUp, Sparkles } from 'lucide-react'

export default function Hero () {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/707962/pexels-photo-707962.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-primary-950/70 to-black/85'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>
      </div>

      <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-0'>
        <div className='absolute top-20 right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-float'></div>
        <div
          className='absolute bottom-40 left-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-float'
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-white space-y-12 py-32'>
        <div className='max-w-4xl space-y-8'>
          <div className='flex items-center gap-3 mb-6 animate-fade-in'>
            <div className='h-px w-16 bg-gradient-to-r from-gold-500 to-transparent'></div>
            <span className='text-gold-400 font-display font-bold tracking-[0.3em] uppercase text-sm flex items-center gap-2'>
              <Sparkles className='w-4 h-4' />
              Excelência Internacional
            </span>
          </div>

          <h1 className='text-6xl md:text-8xl lg:text-9xl font-serif font-black mb-8 tracking-tighter leading-[0.9] animate-slide-in-left'>
            Do Campo
            <br />
            <span className='text-gradient bg-gradient-to-r from-white via-gold-300 to-white bg-clip-text text-transparent'>
              ao Mundo
            </span>
          </h1>

          <div
            className='h-1.5 w-32 bg-gradient-to-r from-gold-500 via-gold-400 to-transparent mb-8 animate-slide-in-left'
            style={{ animationDelay: '0.2s' }}
          ></div>

          <p
            className='text-2xl md:text-3xl font-light text-white/95 max-w-3xl leading-relaxed animate-slide-in-left'
            style={{ animationDelay: '0.4s' }}
          >
            Conectando a excelência agrícola brasileira aos mercados mais
            exigentes do planeta com{' '}
            <span className='font-semibold text-gold-300'>
              qualidade certificada
            </span>
            ,{' '}
            <span className='font-semibold text-gold-300'>
              sustentabilidade
            </span>{' '}
            e <span className='font-semibold text-gold-300'>inovação</span>.
          </p>
        </div>

        <div
          className='flex flex-col sm:flex-row gap-6 pt-8 animate-fade-in-up'
          style={{ animationDelay: '0.6s' }}
        >
          <a
            href='#produtos'
            className='btn-gold inline-flex items-center justify-center gap-3 group'
          >
            Nossos Produtos
            <ArrowRight
              size={20}
              className='group-hover:translate-x-1 transition-transform duration-300'
            />
          </a>
          <a
            href='#contato'
            className='btn-secondary inline-flex items-center justify-center gap-3 !border-white !text-white hover:!bg-white hover:!text-primary-900'
          >
            Fale Conosco
          </a>
        </div>

        <div
          className='grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-4xl animate-fade-in-up'
          style={{ animationDelay: '0.8s' }}
        >
          {[
            { icon: Globe, label: 'Exportação Global', desc: '3 Continentes' },
            { icon: Award, label: 'Certificação', desc: 'GlobalG.A.P.' },
            { icon: TrendingUp, label: 'Crescimento', desc: '5+ Anos' }
          ].map((item, i) => (
            <div key={i} className='flex items-center gap-4 group'>
              <div className='relative'>
                <div className='absolute inset-0 bg-gold-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500'></div>
                <div className='relative bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 group-hover:border-gold-400/50 transition-all duration-500'>
                  <item.icon
                    className='w-6 h-6 text-gold-400'
                    strokeWidth={2}
                  />
                </div>
              </div>
              <div>
                <div className='font-display font-bold text-sm uppercase tracking-wider text-white/90'>
                  {item.label}
                </div>
                <div className='text-gold-300 font-semibold text-lg'>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/50 to-transparent z-5'></div>

      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce'>
        <div className='w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2'>
          <div className='w-1.5 h-1.5 bg-white/50 rounded-full'></div>
        </div>
      </div>
    </section>
  )
}

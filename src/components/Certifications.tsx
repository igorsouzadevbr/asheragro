import { Award, Shield, CheckCircle, FileCheck, Star } from 'lucide-react'

export default function Certifications () {
  return (
    <section
      id='certificacoes'
      className='py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden'
    >
      <div className='absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-gold-100/30 to-transparent blur-3xl'></div>
      <div className='absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-primary-100/30 to-transparent blur-3xl'></div>

      <div className='max-w-7xl mx-auto px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-20'>
          <div className='inline-flex items-center gap-3 mb-8'>
            <div className='h-px w-12 bg-gradient-to-r from-transparent to-gold-500'></div>
            <span className='text-gold-600 font-display font-bold tracking-[0.3em] uppercase text-sm flex items-center gap-2'>
              <Star className='w-4 h-4' />
              Qualidade Certificada
            </span>
            <div className='h-px w-12 bg-gradient-to-l from-transparent to-gold-500'></div>
          </div>
          <h2 className='section-title mb-8'>
            Certificações <span className='text-gradient'>Internacionais</span>
          </h2>
          <div className='divider-gold'></div>
          <p className='section-subtitle'>
            Reconhecimento global de excelência, qualidade e boas práticas
            agrícolas
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <div className='relative group'>
            <div className='absolute inset-0 bg-gradient-to-br from-primary-600/20 to-gold-600/20 blur-2xl group-hover:blur-3xl transition-all duration-500'></div>
            <div className='relative bg-gradient-to-br from-primary-50 via-white to-gold-50 p-16 shadow-2xl border-4 border-white'>
              <div className='text-center'>
                <div className='relative inline-block mb-8'>
                  <div className='absolute inset-0 bg-gold-400/30 rounded-full blur-2xl animate-pulse'></div>
                  <div className='relative w-40 h-40 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center shadow-2xl'>
                    <Award className='text-white' size={80} strokeWidth={2} />
                  </div>
                </div>
                <h3 className='text-5xl font-serif font-black text-gray-900 mb-3'>
                  GlobalG.A.P.
                </h3>
                <div className='h-1 w-24 bg-gradient-to-r from-primary-600 to-gold-600 mx-auto mb-4'></div>
                <p className='text-xl text-gray-700 font-display font-bold uppercase tracking-wider'>
                  Certificação Internacional
                </p>
                <div className='mt-8 inline-flex items-center gap-2 bg-primary-700 text-white px-6 py-3 font-display font-bold text-sm uppercase tracking-wider'>
                  <CheckCircle className='w-5 h-5' />
                  100% Certificado
                </div>
              </div>
            </div>
          </div>

          <div className='space-y-8'>
            {[
              {
                icon: Shield,
                title: 'Boas Práticas Agrícolas',
                desc: 'A certificação GlobalG.A.P. atesta nosso compromisso com práticas agrícolas responsáveis, segurança alimentar e rastreabilidade em toda a cadeia produtiva.',
                color: 'primary'
              },
              {
                icon: FileCheck,
                title: 'Segurança Alimentar',
                desc: 'Garantimos os mais altos padrões de segurança e qualidade, desde o cultivo até a entrega final aos nossos clientes internacionais.',
                color: 'gold'
              },
              {
                icon: CheckCircle,
                title: 'Rastreabilidade Total',
                desc: 'Todos os nossos produtos são rastreáveis, garantindo transparência absoluta e confiança para nossos parceiros comerciais.',
                color: 'primary'
              }
            ].map((item, i) => (
              <div
                key={i}
                className='group flex gap-6 p-8 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-primary-600 hover:border-gold-600 hover:-translate-x-2'
              >
                <div className='relative flex-shrink-0'>
                  <div
                    className={`absolute inset-0 bg-${item.color}-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}
                  ></div>
                  <div
                    className={`relative bg-gradient-to-br from-${item.color}-600 to-${item.color}-700 p-4 rounded-full`}
                  >
                    <item.icon
                      className='w-8 h-8 text-white'
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
                <div className='space-y-3'>
                  <h4 className='text-2xl font-serif font-bold text-gray-900 group-hover:text-primary-700 transition-colors duration-300'>
                    {item.title}
                  </h4>
                  <p className='text-gray-700 leading-relaxed text-base'>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-24 grid md:grid-cols-3 gap-8'>
          {[
            { icon: Award, label: 'Certificação GlobalG.A.P.', value: '100%' },
            {
              icon: Shield,
              label: 'Conformidade Internacional',
              value: '100%'
            },
            { icon: CheckCircle, label: 'Rastreabilidade', value: '100%' }
          ].map((stat, i) => (
            <div
              key={i}
              className='text-center p-8 bg-gradient-to-br from-primary-900 to-primary-950 shadow-2xl group hover:scale-105 transition-transform duration-500'
            >
              <div className='flex justify-center mb-4'>
                <div className='relative'>
                  <div className='absolute inset-0 bg-gold-500/30 rounded-full blur-xl'></div>
                  <div className='relative bg-gradient-to-br from-gold-600 to-gold-700 p-4 rounded-full'>
                    <stat.icon
                      className='w-10 h-10 text-white'
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
              </div>
              <div className='text-6xl font-serif font-black text-gold-400 mb-3'>
                {stat.value}
              </div>
              <div className='text-white/90 font-display font-bold text-sm uppercase tracking-wider'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Mail, MapPin, MessageCircle, Send, Clock } from 'lucide-react'

export default function Contact () {
  return (
    <section
      id='contato'
      className='py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden'
    >
      <div className='absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-radial from-primary-100/30 to-transparent blur-3xl'></div>
      <div className='absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-radial from-gold-100/30 to-transparent blur-3xl'></div>

      <div className='max-w-7xl mx-auto px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-20'>
          <div className='inline-flex items-center gap-3 mb-8'>
            <div className='h-px w-12 bg-gradient-to-r from-transparent to-gold-500'></div>
            <span className='text-gold-600 font-display font-bold tracking-[0.3em] uppercase text-sm flex items-center gap-2'>
              <Send className='w-4 h-4' />
              Fale Conosco
            </span>
            <div className='h-px w-12 bg-gradient-to-l from-transparent to-gold-500'></div>
          </div>
          <h2 className='section-title mb-8'>
            Entre em <span className='text-gradient'>Contato</span>
          </h2>
          <div className='divider-gold'></div>
          <p className='section-subtitle'>
            Estamos prontos para atender suas necessidades e construir uma
            parceria de sucesso
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-16'>
          <div className='bg-white p-10 shadow-2xl border-t-4 border-primary-600'>
            <h3 className='text-3xl font-serif font-bold text-gray-900 mb-8'>
              Envie sua Mensagem
            </h3>
            <form className='space-y-6'>
              <div>
                <label className='block text-sm font-display font-bold uppercase tracking-wider text-gray-700 mb-3'>
                  Nome Completo
                </label>
                <input
                  type='text'
                  className='w-full px-6 py-4 border-2 border-gray-200 focus:outline-none focus:border-primary-600 transition-all duration-300 text-gray-900 font-medium'
                  placeholder='Seu nome completo'
                />
              </div>

              <div>
                <label className='block text-sm font-display font-bold uppercase tracking-wider text-gray-700 mb-3'>
                  Email Corporativo
                </label>
                <input
                  type='email'
                  className='w-full px-6 py-4 border-2 border-gray-200 focus:outline-none focus:border-primary-600 transition-all duration-300 text-gray-900 font-medium'
                  placeholder='seu@empresa.com'
                />
              </div>

              <div>
                <label className='block text-sm font-display font-bold uppercase tracking-wider text-gray-700 mb-3'>
                  Empresa
                </label>
                <input
                  type='text'
                  className='w-full px-6 py-4 border-2 border-gray-200 focus:outline-none focus:border-primary-600 transition-all duration-300 text-gray-900 font-medium'
                  placeholder='Nome da sua empresa'
                />
              </div>

              <div>
                <label className='block text-sm font-display font-bold uppercase tracking-wider text-gray-700 mb-3'>
                  Mensagem
                </label>
                <textarea
                  rows={5}
                  className='w-full px-6 py-4 border-2 border-gray-200 focus:outline-none focus:border-primary-600 transition-all duration-300 resize-none text-gray-900 font-medium'
                  placeholder='Como podemos ajudar sua empresa?'
                ></textarea>
              </div>

              <button
                type='submit'
                className='btn-primary w-full inline-flex items-center justify-center gap-3 group'
              >
                Enviar Mensagem
                <Send className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
              </button>
            </form>
          </div>

          <div className='space-y-8'>
            <div className='bg-gradient-to-br from-primary-900 to-primary-950 p-10 shadow-2xl text-white'>
              <h3 className='text-3xl font-serif font-bold mb-8'>
                Informações de Contato
              </h3>

              <div className='space-y-6'>
                <div className='group flex gap-5 p-6 bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-gold-400/50 hover:bg-white/10 transition-all duration-500'>
                  <div className='relative flex-shrink-0'>
                    <div className='absolute inset-0 bg-gold-500/20 rounded-full blur-xl'></div>
                    <div className='relative w-14 h-14 bg-gradient-to-br from-gold-600 to-gold-700 rounded-full flex items-center justify-center'>
                      <MapPin
                        className='text-white'
                        size={24}
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className='font-display font-bold text-sm uppercase tracking-wider text-gold-300 mb-2'>
                      Localização
                    </h4>
                    <p className='text-white/90 text-lg font-medium'>
                      Mossoró - RN
                      <br />
                      Brasil
                    </p>
                  </div>
                </div>

                <div className='group flex gap-5 p-6 bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-gold-400/50 hover:bg-white/10 transition-all duration-500'>
                  <div className='relative flex-shrink-0'>
                    <div className='absolute inset-0 bg-gold-500/20 rounded-full blur-xl'></div>
                    <div className='relative w-14 h-14 bg-gradient-to-br from-gold-600 to-gold-700 rounded-full flex items-center justify-center'>
                      <Mail
                        className='text-white'
                        size={24}
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className='font-display font-bold text-sm uppercase tracking-wider text-gold-300 mb-2'>
                      Email
                    </h4>
                    <p className='text-white/90 text-lg font-medium'>
                      contato@agricolaasher.com.br
                    </p>
                  </div>
                </div>

                <div className='group flex gap-5 p-6 bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-gold-400/50 hover:bg-white/10 transition-all duration-500'>
                  <div className='relative flex-shrink-0'>
                    <div className='absolute inset-0 bg-gold-500/20 rounded-full blur-xl'></div>
                    <div className='relative w-14 h-14 bg-gradient-to-br from-gold-600 to-gold-700 rounded-full flex items-center justify-center'>
                      <MessageCircle
                        className='text-white'
                        size={24}
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className='font-display font-bold text-sm uppercase tracking-wider text-gold-300 mb-2'>
                      WhatsApp
                    </h4>
                    <p className='text-white/90 text-lg font-medium'>
                      +55 (84) 9 9964-5508
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-br from-gold-600 to-gold-700 p-8 shadow-2xl'>
              <div className='flex items-center gap-3 mb-4'>
                <Clock className='w-6 h-6 text-white' strokeWidth={2.5} />
                <h4 className='font-display font-bold text-sm uppercase tracking-wider text-white'>
                  Horário de Atendimento
                </h4>
              </div>
              <p className='text-white text-lg font-medium leading-relaxed'>
                Segunda a Sexta: 8h às 18h
                <br />
                Sábado: 8h às 12h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

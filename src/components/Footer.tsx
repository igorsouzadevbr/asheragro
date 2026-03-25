import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer () {
  return (
    <footer className='bg-gradient-to-b from-primary-950 via-primary-900 to-black text-white relative overflow-hidden'>
      <div className='absolute inset-0 opacity-5'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
          <div className='lg:col-span-2'>
            <div className='flex items-center gap-4 mb-6 group'>
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-br from-primary-600 to-gold-600 blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500'></div>
                <img
                  src='/asherlogo.png'
                  alt='Agrícola Asher'
                  className='relative h-12 w-auto transition-all duration-300 drop-shadow-2xl group-hover:scale-105'
                />
              </div>
              <div>
                <span className='text-xs font-display font-semibold tracking-[0.3em] uppercase text-white/70'>
                  AGRÍCOLA
                </span>
                <h3 className='text-3xl font-serif font-bold text-white'>
                  Asher
                </h3>
              </div>
            </div>
            <p className='text-white/80 leading-relaxed text-lg mb-6 max-w-md'>
              Produção e exportação de frutas e verduras com qualidade
              internacional, levando a excelência agrícola brasileira para o
              mundo.
            </p>
            <div className='h-1 w-24 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600'></div>
          </div>

          <div>
            <h4 className='font-display font-bold text-sm uppercase tracking-wider text-gold-400 mb-6'>
              Links Rápidos
            </h4>
            <div className='space-y-3'>
              {[
                { href: '#sobre', label: 'Sobre Nós' },
                { href: '#diferenciais', label: 'Diferenciais' },
                { href: '#produtos', label: 'Produtos' },
                { href: '#mercados', label: 'Mercados' },
                { href: '#certificacoes', label: 'Certificações' },
                { href: '#contato', label: 'Contato' }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className='block text-white/70 hover:text-gold-400 transition-colors duration-300 font-medium group'
                >
                  <span className='inline-flex items-center gap-2'>
                    <span className='w-0 h-px bg-gold-400 group-hover:w-4 transition-all duration-300'></span>
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className='font-display font-bold text-sm uppercase tracking-wider text-gold-400 mb-6'>
              Contato
            </h4>
            <div className='space-y-4'>
              <div className='flex items-start gap-3'>
                <MapPin
                  className='w-5 h-5 text-gold-400 flex-shrink-0 mt-1'
                  strokeWidth={2}
                />
                <div className='text-white/80 font-medium'>
                  Sitio Nova União, Mossoró - RN
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <Mail
                  className='w-5 h-5 text-gold-400 flex-shrink-0 mt-1'
                  strokeWidth={2}
                />
                <div className='text-white/80 font-medium'>
                  contato@agricolaasher.com.br
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <Phone
                  className='w-5 h-5 text-gold-400 flex-shrink-0 mt-1'
                  strokeWidth={2}
                />
                <div className='text-white/80 font-medium'>
                  +55 (84) 9 9964-5508
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t-2 border-white/10 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-white/60 text-sm font-medium'>
              &copy; {new Date().getFullYear()} Agrícola Asher. Todos os
              direitos reservados.
            </p>
            <p className='text-white/60 text-sm font-medium'>
              Desenvolvido pelo Grupo Cadenza
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

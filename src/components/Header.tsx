import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header () {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-xl shadow-2xl border-b border-gray-200/50'
          : 'bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className='absolute inset-0 bg-gradient-to-r from-primary-900/5 via-transparent to-gold-900/5 opacity-50'></div>

      <div className='max-w-7xl mx-auto px-6 lg:px-8 relative'>
        <div className='flex justify-between items-center py-5'>
          <div className='flex items-center gap-4 group'>
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-br from-primary-600 to-gold-600 blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500'></div>
              <img
                src='/asherlogo.png'
                alt='Agrícola Asher'
                className='relative h-14 w-auto transition-all duration-300 drop-shadow-2xl group-hover:scale-105'
              />
            </div>
            <div className='flex flex-col -space-y-1'>
              <span
                className={`text-xs font-display font-semibold tracking-[0.3em] uppercase transition-colors duration-300 ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                AGRÍCOLA
              </span>
              <span
                className={`text-3xl font-serif font-bold tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-primary-700' : 'text-white'
                }`}
              >
                Asher
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden transition-colors duration-300 ${
              scrolled
                ? 'text-gray-700 hover:text-primary-700'
                : 'text-white hover:text-gold-400'
            }`}
          >
            {isOpen ? (
              <X size={28} strokeWidth={2} />
            ) : (
              <Menu size={28} strokeWidth={2} />
            )}
          </button>

          <nav className='hidden lg:flex gap-10 items-center'>
            {[
              { href: '#sobre', label: 'Sobre' },
              { href: '#diferenciais', label: 'Diferenciais' },
              { href: '#produtos', label: 'Produtos' },
              { href: '#mercados', label: 'Mercados' },
              { href: '#certificacoes', label: 'Certificações' }
            ].map(item => (
              <a
                key={item.href}
                href={item.href}
                className={`font-display font-semibold uppercase tracking-wider text-xs transition-all duration-300 relative group ${
                  scrolled
                    ? 'text-gray-700 hover:text-primary-700'
                    : 'text-white/95 hover:text-gold-400'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-gold-600 group-hover:w-full transition-all duration-500`}
                ></span>
              </a>
            ))}
            <a
              href='#contato'
              className={`btn-primary ${!scrolled && 'shadow-gold-500/30'}`}
            >
              Contato
            </a>
          </nav>
        </div>

        {isOpen && (
          <nav className='lg:hidden pt-6 pb-8 border-t border-gray-200/30 mt-2 flex flex-col gap-4 bg-white/95 backdrop-blur-xl -mx-6 px-6 shadow-2xl'>
            {[
              { href: '#sobre', label: 'Sobre' },
              { href: '#diferenciais', label: 'Diferenciais' },
              { href: '#produtos', label: 'Produtos' },
              { href: '#mercados', label: 'Mercados' },
              { href: '#certificacoes', label: 'Certificações' }
            ].map(item => (
              <a
                key={item.href}
                href={item.href}
                className='text-gray-700 font-display font-semibold uppercase tracking-wider text-sm hover:text-primary-700 transition-all duration-300 py-3 border-b border-gray-100 hover:border-primary-300'
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href='#contato'
              className='btn-primary inline-block text-center mt-4'
              onClick={() => setIsOpen(false)}
            >
              Contato
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

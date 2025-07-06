import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import logoIgreja from '@/assets/logo-igreja.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Nossa História', href: '/historia' },
    { name: 'Faculdade de Teologia', href: '/faculdade' },
    { name: 'Ministérios', href: '/ministerios' },
    { name: 'Programação', href: '/programacao' },
    { name: 'Igrejas Próximas', href: '/igrejas' },
    { name: 'Galeria', href: '/galeria' },
    { name: 'Contato', href: '/contato' }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="church-container">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Rua José Ramos Fernandes, 420 - Jd Vale das Virtudes, SP</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(11) 9999-9999</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com/advaledasvirtudesoficial" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-church-gold transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-church-gold transition-colors">Facebook</a>
              <a href="#" className="hover:text-church-gold transition-colors">YouTube</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-card border-b border-border sticky top-0 z-50 shadow-[var(--shadow-card)]">
        <div className="church-container">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src={logoIgreja} 
                alt="Assembleia de Deus Vale das Virtudes" 
                className="w-12 h-12 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="hidden sm:block">
                <h2 className="font-serif font-bold text-xl text-primary leading-tight">
                  Assembleia de Deus
                </h2>
                <p className="text-sm text-muted-foreground font-medium">Vale das Virtudes</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-accent hover:text-accent-foreground ${
                    isActive(item.href) 
                      ? 'bg-primary text-primary-foreground shadow-sm' 
                      : 'text-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in">
            <div className="church-container py-4">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive(item.href) 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Heart, Instagram, Facebook, Youtube } from 'lucide-react';
const logoIgreja = '/lovable-uploads/2ad825fc-c383-4405-a451-990485e9fb52.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="church-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Informações da Igreja */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoIgreja} 
                alt="Assembleia de Deus Vale das Virtudes" 
                className="w-10 h-10"
              />
              <div>
                <h3 className="font-serif font-bold text-lg leading-tight">
                  Assembleia de Deus
                </h3>
                <p className="text-sm opacity-90">Vale das Virtudes</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4 italic">
              "Até aqui nos ajudou o Senhor"
            </p>
            <p className="text-xs opacity-75">1 Samuel 7:12</p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/historia" className="opacity-90 hover:opacity-100 hover:text-church-gold transition-all">
                  Nossa História
                </Link>
              </li>
              <li>
                <Link to="/faculdade" className="opacity-90 hover:opacity-100 hover:text-church-gold transition-all">
                  Faculdade de Teologia
                </Link>
              </li>
              <li>
                <Link to="/ministerios" className="opacity-90 hover:opacity-100 hover:text-church-gold transition-all">
                  Ministérios
                </Link>
              </li>
              <li>
                <Link to="/programacao" className="opacity-90 hover:opacity-100 hover:text-church-gold transition-all">
                  Programação
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="opacity-90 hover:opacity-100 hover:text-church-gold transition-all">
                  Galeria
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">
                  Rua José Ramos Fernandes, 420<br/>
                  Jd Vale das Virtudes - São Paulo, SP
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="opacity-90">(11) 9999-9999</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="opacity-90">contato@advaledasvirtudes.org</span>
              </li>
            </ul>
          </div>

          {/* Horários e Redes Sociais */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Horários dos Cultos</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span className="opacity-90">Dom: 9h e 19h</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span className="opacity-90">Ter: 19h30</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span className="opacity-90">Sex: 19h30</span>
              </li>
            </ul>

            <h5 className="font-semibold mb-3">Redes Sociais</h5>
            <div className="flex space-x-3">
              <a 
                href="https://instagram.com/advaledasvirtudesoficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 hover:text-church-gold transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="opacity-90 hover:opacity-100 hover:text-church-gold transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="opacity-90 hover:opacity-100 hover:text-church-gold transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
            <p>
              © 2024 Assembleia de Deus Vale das Virtudes. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-1 mt-2 md:mt-0">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-church-gold" />
              <span>para o Reino de Deus</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
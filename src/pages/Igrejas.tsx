import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Clock, Navigation, Search } from 'lucide-react';

const Igrejas = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const igrejas = [
    {
      id: 1,
      nome: 'AD Vale das Virtudes - Sede',
      endereco: 'Rua José Ramos Fernandes, 420 - Jd Vale das Virtudes',
      cidade: 'São Paulo - SP',
      cep: '08295-420',
      dirigente: 'Pr. Silas Alves',
      telefone: '(11) 9999-9999',
      horarios: ['Dom: 9h e 19h', 'Ter: 19h30', 'Sex: 19h30'],
      distancia: '0 km',
      isMain: true
    },
    {
      id: 2,
      nome: 'AD Congregação Jardim Helena',
      endereco: 'Rua das Flores, 123 - Jardim Helena',
      cidade: 'São Paulo - SP',
      cep: '08295-000',
      dirigente: 'Pr. João Santos',
      telefone: '(11) 8888-8888',
      horarios: ['Dom: 19h', 'Qua: 19h30'],
      distancia: '2.5 km'
    },
    {
      id: 3,
      nome: 'AD Congregação Vila Esperança',
      endereco: 'Av. da Esperança, 456 - Vila Esperança',
      cidade: 'São Paulo - SP',
      cep: '08300-000',
      dirigente: 'Pr. Carlos Lima',
      telefone: '(11) 7777-7777',
      horarios: ['Dom: 18h', 'Qui: 19h30'],
      distancia: '3.8 km'
    },
    {
      id: 4,
      nome: 'AD Congregação São Miguel',
      endereco: 'Rua São Miguel, 789 - São Miguel Paulista',
      cidade: 'São Paulo - SP',
      cep: '08010-000',
      dirigente: 'Pr. Ana Costa',
      telefone: '(11) 6666-6666',
      horarios: ['Dom: 19h', 'Ter: 19h30'],
      distancia: '5.2 km'
    },
    {
      id: 5,
      nome: 'AD Congregação Itaim Paulista',
      endereco: 'Rua Itaim, 321 - Itaim Paulista',
      cidade: 'São Paulo - SP',
      cep: '08295-100',
      dirigente: 'Pr. Maria Silva',
      telefone: '(11) 5555-5555',
      horarios: ['Dom: 19h', 'Sex: 19h30'],
      distancia: '6.7 km'
    }
  ];

  const igrejasFiltradas = igrejas.filter(igreja => 
    igreja.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    igreja.endereco.toLowerCase().includes(searchTerm.toLowerCase()) ||
    igreja.dirigente.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-16 lg:py-20">
        <div className="church-container text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Igrejas Próximas de Você
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Encontre a congregação mais próxima e faça parte da nossa família
          </p>
        </div>
      </section>

      {/* Busca e Filtros */}
      <section className="church-section">
        <div className="church-container">
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Buscar por nome, endereço ou pastor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-base"
              />
            </div>
          </div>

          {/* Mapa (Placeholder) */}
          <div className="mb-12">
            <Card className="church-card">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-center">Mapa das Congregações</CardTitle>
                <CardDescription className="text-center">
                  Visualize todas as nossas congregações na região
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground text-lg">
                      Mapa interativo em desenvolvimento
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Em breve você poderá visualizar todas as congregações no mapa
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lista de Igrejas */}
      <section className="church-section bg-muted/30">
        <div className="church-container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Nossas Congregações
            </h2>
            <p className="text-lg text-muted-foreground">
              {igrejasFiltradas.length} congregaç{igrejasFiltradas.length === 1 ? 'ão encontrada' : 'ões encontradas'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {igrejasFiltradas.map((igreja) => (
              <Card 
                key={igreja.id} 
                className={`church-card hover:transform hover:scale-105 transition-all duration-300 ${
                  igreja.isMain ? 'border-2 border-church-gold' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="font-serif text-xl mb-2">
                        {igreja.nome}
                        {igreja.isMain && (
                          <span className="ml-2 text-xs bg-church-gold text-white px-2 py-1 rounded-full">
                            SEDE
                          </span>
                        )}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {igreja.dirigente}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-primary">{igreja.distancia}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {/* Endereço */}
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <p>{igreja.endereco}</p>
                        <p>{igreja.cidade} - {igreja.cep}</p>
                      </div>
                    </div>

                    {/* Telefone */}
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm">{igreja.telefone}</span>
                    </div>

                    {/* Horários */}
                    <div className="flex items-start space-x-2">
                      <Clock className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        {igreja.horarios.map((horario, index) => (
                          <p key={index}>{horario}</p>
                        ))}
                      </div>
                    </div>

                    {/* Botões de Ação */}
                    <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-border">
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={() => {
                          const address = encodeURIComponent(`${igreja.endereco}, ${igreja.cidade}`);
                          window.open(`https://maps.google.com/maps?q=${address}`, '_blank');
                        }}
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        Como Chegar
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => {
                          const phone = igreja.telefone.replace(/\D/g, '');
                          const message = `Olá! Gostaria de saber mais sobre a ${igreja.nome}.`;
                          window.open(`https://wa.me/55${phone}?text=${encodeURIComponent(message)}`, '_blank');
                        }}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {igrejasFiltradas.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-2">
                Nenhuma congregação encontrada
              </h3>
              <p className="text-muted-foreground">
                Tente buscar com outros termos ou entre em contato conosco.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Informações Adicionais */}
      <section className="church-section">
        <div className="church-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              Não Encontrou sua Região?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Estamos sempre expandindo nosso alcance para levar a Palavra de Deus 
              a mais pessoas. Se você não encontrou uma congregação próxima, 
              entre em contato conosco. Podemos ajudá-lo a encontrar a igreja 
              mais próxima ou até mesmo iniciar um novo ponto de pregação em sua região.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="church-card">
                <CardContent className="text-center p-6">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Ligue para nós</h4>
                  <p className="text-sm text-muted-foreground">(11) 9999-9999</p>
                </CardContent>
              </Card>

              <Card className="church-card">
                <CardContent className="text-center p-6">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Visite a sede</h4>
                  <p className="text-sm text-muted-foreground">
                    Rua José Ramos Fernandes, 420
                  </p>
                </CardContent>
              </Card>

              <Card className="church-card">
                <CardContent className="text-center p-6">
                  <Search className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Ajuda personalizada</h4>
                  <p className="text-sm text-muted-foreground">
                    Fale conosco pelo WhatsApp
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Igrejas;
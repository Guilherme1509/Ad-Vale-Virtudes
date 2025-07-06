import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Music, Users, Baby, Heart, BookOpen, Handshake } from 'lucide-react';

const Ministerios = () => {
  const ministerios = [
    {
      id: 'louvor',
      icon: Music,
      title: 'Ministério de Louvor',
      description: 'Conduzindo a igreja à presença de Deus através da música e adoração.',
      details: [
        'Coral da igreja',
        'Banda de instrumentos',
        'Ministério infantil de louvor',
        'Escola de música'
      ],
      responsavel: 'Min. João Silva',
      contato: 'louvor@advaledasvirtudes.org'
    },
    {
      id: 'jovens',
      icon: Users,
      title: 'Ministério de Jovens',
      description: 'Discipulando a nova geração com propósito e paixão por Deus.',
      details: [
        'Reuniões semanais',
        'Acampamentos e retiros',
        'Evangelismo jovem',
        'Grupos de estudo'
      ],
      responsavel: 'Pr. Marcos Santos',
      contato: 'jovens@advaledasvirtudes.org'
    },
    {
      id: 'infantil',
      icon: Baby,
      title: 'Ministério Infantil',
      description: 'Plantando a semente do evangelho no coração das crianças.',
      details: [
        'Escola Dominical Infantil',
        'EBF - Escola Bíblica de Férias',
        'Teatro e fantoches',
        'Atividades recreativas'
      ],
      responsavel: 'Missionária Ana Costa',
      contato: 'infantil@advaledasvirtudes.org'
    },
    {
      id: 'mulheres',
      icon: Heart,
      title: 'Ministério de Mulheres',
      description: 'Fortalecendo e edificando as mulheres da igreja.',
      details: [
        'Círculo de oração',
        'Estudos bíblicos',
        'Eventos especiais',
        'Apoio mútuo'
      ],
      responsavel: 'Missionária Maria Alves',
      contato: 'mulheres@advaledasvirtudes.org'
    },
    {
      id: 'homens',
      icon: Handshake,
      title: 'Ministério de Homens',
      description: 'Despertando os homens para serem líderes espirituais.',
      details: [
        'Encontros mensais',
        'Retiros masculinos',
        'Grupos de apoio',
        'Projetos comunitários'
      ],
      responsavel: 'Pr. Carlos Lima',
      contato: 'homens@advaledasvirtudes.org'
    },
    {
      id: 'ensino',
      icon: BookOpen,
      title: 'Ministério de Ensino',
      description: 'Capacitando a igreja através do ensino da Palavra de Deus.',
      details: [
        'Escola Dominical',
        'Estudos bíblicos',
        'Seminários e workshops',
        'Biblioteca da igreja'
      ],
      responsavel: 'Pr. Silas Alves',
      contato: 'ensino@advaledasvirtudes.org'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-16 lg:py-20">
        <div className="church-container text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Nossos Ministérios
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Descubra seu lugar no Reino de Deus e participe da obra
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="church-section">
        <div className="church-container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              Servindo com Propósito
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Na Assembleia de Deus Vale das Virtudes, acreditamos que cada pessoa tem um chamado 
              específico para servir no Reino de Deus. Nossos ministérios oferecem oportunidades 
              para você descobrir e desenvolver seus dons espirituais.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Ministérios */}
      <section className="church-section bg-muted/30">
        <div className="church-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministerios.map((ministerio) => {
              const IconComponent = ministerio.icon;
              return (
                <Card key={ministerio.id} className="church-card hover:transform hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="font-serif text-xl">{ministerio.title}</CardTitle>
                    <CardDescription className="text-base">
                      {ministerio.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Atividades:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {ministerio.details.map((detalhe, index) => (
                            <li key={index}>• {detalhe}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm">
                          <span className="font-medium">Responsável:</span><br/>
                          {ministerio.responsavel}
                        </p>
                      </div>

                      <Button 
                        className="w-full mt-4"
                        variant="outline"
                        onClick={() => window.open(`mailto:${ministerio.contato}`, '_blank')}
                      >
                        Quero Participar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como Participar */}
      <section className="church-section">
        <div className="church-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
                Como Participar
              </h2>
              <p className="text-lg text-muted-foreground">
                Passos simples para você começar a servir
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-xl">1</span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Ore e Reflita</h3>
                <p className="text-muted-foreground">
                  Busque a Deus em oração para descobrir onde Ele quer que você sirva.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-xl">2</span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Entre em Contato</h3>
                <p className="text-muted-foreground">
                  Converse com o responsável pelo ministério de seu interesse.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-xl">3</span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Comece a Servir</h3>
                <p className="text-muted-foreground">
                  Participe das atividades e desenvolva seus dons espirituais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-16">
        <div className="church-container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Descubra Seu Chamado
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Deus tem um plano especial para sua vida. Venha descobrir como 
            você pode fazer a diferença no Reino de Deus.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Falar com Pastor
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Visitar a Igreja
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ministerios;
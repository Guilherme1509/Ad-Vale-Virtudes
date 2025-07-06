import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Music, Users, Baby, Heart, BookOpen, Handshake } from 'lucide-react';

const Ministerios = () => {
  const gruposLouvor = [
    {
      id: 'umadvav',
      icon: Users,
      title: 'UMADVAV',
      subtitle: 'União de Mocidade',
      description: 'Grupo de louvor formado pelos jovens da igreja, trazendo energia e paixão na adoração.',
      faixaEtaria: '18 a 35 anos',
      atividades: [
        'Ensaios semanais',
        'Participação em cultos',
        'Apresentações especiais',
        'Ministração em eventos'
      ],
      responsavel: 'Min. Carlos Eduardo',
      horarioEnsaio: 'Sábados às 16:00'
    },
    {
      id: 'varoes',
      icon: Handshake,
      title: 'Grupo dos Varões',
      subtitle: 'Homens de Deus',
      description: 'Ministério masculino de louvor que traz força e reverência na adoração ao Senhor.',
      faixaEtaria: 'Homens adultos',
      atividades: [
        'Louvor congregacional',
        'Ministração em eventos especiais',
        'Apoio em vigílias',
        'Cânticos espirituais'
      ],
      responsavel: 'Min. Roberto Silva',
      horarioEnsaio: 'Quintas às 19:30'
    },
    {
      id: 'irmas',
      icon: Heart,
      title: 'Grupo das Irmãs',
      subtitle: 'Mulheres Adoradoras',
      description: 'Ministério feminino que traz sensibilidade e delicadeza na adoração e louvor.',
      faixaEtaria: 'Mulheres adultas',
      atividades: [
        'Cânticos congregacionais',
        'Ministração em cultos',
        'Participação em vigílias',
        'Eventos femininos'
      ],
      responsavel: 'Min. Sandra Oliveira',
      horarioEnsaio: 'Terças às 19:00'
    },
    {
      id: 'criancas',
      icon: Baby,
      title: 'Grupo Infantil',
      subtitle: 'Pequenos Adoradores',
      description: 'Ensinando as crianças a adorar a Deus desde cedo através de cânticos e louvores.',
      faixaEtaria: '4 a 12 anos',
      atividades: [
        'Cânticos infantis',
        'Apresentações especiais',
        'Escola Bíblica de Férias',
        'Culto infantil'
      ],
      responsavel: 'Min. Ana Paula Costa',
      horarioEnsaio: 'Domingos às 15:00'
    },
    {
      id: 'adolescentes',
      icon: Music,
      title: 'Grupo dos Adolescentes',
      subtitle: 'Nova Geração',
      description: 'Desenvolvendo o talento musical dos adolescentes e preparando-os para o ministério.',
      faixaEtaria: '12 a 17 anos',
      atividades: [
        'Ensaios musicais',
        'Aprendizado de instrumentos',
        'Participação em cultos jovens',
        'Eventos da mocidade'
      ],
      responsavel: 'Min. Felipe Santos',
      horarioEnsaio: 'Sábados às 14:00'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-16 lg:py-20">
        <div className="church-container text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Grupos de Louvor
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Descubra seu dom musical e participe da adoração
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="church-section">
        <div className="church-container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              Adoração em Todas as Idades
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Na Assembleia de Deus Vale das Virtudes, o louvor e a adoração são vivenciados 
              por toda a família da fé. Nossos grupos de louvor representam diferentes faixas 
              etárias, cada um contribuindo de forma única para a adoração congregacional.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Grupos de Louvor */}
      <section className="church-section bg-muted/30">
        <div className="church-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gruposLouvor.map((grupo) => {
              const IconComponent = grupo.icon;
              return (
                <Card key={grupo.id} className="church-card hover:transform hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="font-serif text-xl">{grupo.title}</CardTitle>
                    <CardDescription className="text-base font-medium text-primary">
                      {grupo.subtitle}
                    </CardDescription>
                    <CardDescription className="text-sm">
                      {grupo.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-primary/5 rounded-lg p-3">
                        <p className="text-sm">
                          <span className="font-semibold text-primary">Faixa Etária:</span><br/>
                          {grupo.faixaEtaria}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">Atividades:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {grupo.atividades.map((atividade, index) => (
                            <li key={index}>• {atividade}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-4 border-t border-border space-y-2">
                        <p className="text-sm">
                          <span className="font-medium">Responsável:</span><br/>
                          {grupo.responsavel}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Ensaios:</span><br/>
                          <span className="text-muted-foreground">{grupo.horarioEnsaio}</span>
                        </p>
                      </div>

                      <Button 
                        className="w-full mt-4"
                        variant="outline"
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
              Como Participar dos Grupos
            </h2>
            <p className="text-lg text-muted-foreground">
              Passos simples para você começar a louvar conosco
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-xl">1</span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Descubra seu Dom</h3>
                <p className="text-muted-foreground">
                  Identifique seu talento musical e em qual grupo você melhor se encaixa.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-xl">2</span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Participe dos Ensaios</h3>
                <p className="text-muted-foreground">
                  Compareça aos ensaios e conheça os outros integrantes do grupo.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-xl">3</span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Ministre com Alegria</h3>
                <p className="text-muted-foreground">
                  Use seu dom para abençoar vidas através do louvor e adoração.
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
            Descubra Seu Dom Musical
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Deus nos deu talentos para abençoar sua obra. Venha descobrir como 
            você pode usar seu dom musical para glorificar ao Senhor.
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
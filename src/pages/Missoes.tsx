import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, MapPin, Heart, Users } from 'lucide-react';

const Missoes = () => {
  const camposMissionarios = [
    {
      id: 'africa',
      pais: 'África',
      regiao: 'África Subsaariana',
      descricao: 'Levando esperança e transformação através do evangelho para comunidades carentes em várias nações africanas.',
      atividades: [
        'Plantação de igrejas',
        'Trabalho social e humanitário',
        'Formação de líderes locais',
        'Evangelismo e discipulado'
      ],
      impacto: 'Mais de 500 famílias alcançadas',
      missionarios: 'Pr. João e Missionária Maria Santos'
    },
    {
      id: 'portugal',
      pais: 'Portugal',
      regiao: 'Europa',
      descricao: 'Fortalecendo a igreja portuguesa e apoiando o crescimento do evangelho na Europa através de parcerias estratégicas.',
      atividades: [
        'Intercâmbio pastoral',
        'Apoio a igrejas locais',
        'Conferências e seminários',
        'Trabalho com imigrantes brasileiros'
      ],
      impacto: '12 igrejas apoiadas',
      missionarios: 'Pr. Silas Alves e equipe'
    },
    {
      id: 'bolivia',
      pais: 'Bolívia',
      regiao: 'América do Sul',
      descricao: 'Ministério voltado para comunidades indígenas e urbanas, levando o amor de Cristo através de ações práticas e ensino bíblico.',
      atividades: [
        'Missões indígenas',
        'Trabalho urbano',
        'Distribuição de alimentos',
        'Escola bíblica'
      ],
      impacto: '8 comunidades atendidas',
      missionarios: 'Missionário Pedro e Família'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-16 lg:py-20">
        <div className="church-container text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Missões
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Levando o amor de Cristo às nações e alcançando corações pelo mundo
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="church-section">
        <div className="church-container">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="church-card">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="font-serif text-3xl">Nossa Visão Missionária</CardTitle>
                <CardDescription className="text-lg">
                  "Ide por todo o mundo, pregai o evangelho a toda criatura" - Marcos 16:15
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  A Assembleia de Deus Vale das Virtudes tem o coração voltado para as missões, 
                  enviando e apoiando missionários em diferentes continentes. Nossa missão é 
                  levar o amor transformador de Cristo a todas as nações, culturas e povos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Campos Missionários */}
      <section className="church-section bg-muted/30">
        <div className="church-container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Nossos Campos Missionários
            </h2>
            <p className="text-lg text-muted-foreground">
              Conhece os países onde atuamos levando esperança e transformação
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {camposMissionarios.map((campo) => (
              <Card key={campo.id} className="church-card h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-2xl">{campo.pais}</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    {campo.regiao}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {campo.descricao}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Atividades:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {campo.atividades.map((atividade, index) => (
                          <li key={index}>• {atividade}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-4">
                      <p className="text-sm">
                        <span className="font-semibold text-primary">Impacto:</span><br/>
                        {campo.impacto}
                      </p>
                    </div>

                    <div className="pt-2">
                      <p className="text-sm">
                        <span className="font-semibold">Missionários:</span><br/>
                        <span className="text-muted-foreground">{campo.missionarios}</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Apoiar */}
      <section className="church-section">
        <div className="church-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
                Como Apoiar as Missões
              </h2>
              <p className="text-lg text-muted-foreground">
                Seja parte desta obra e contribua para o avanço do Reino de Deus
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="church-card text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl">Oração</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Interceda pelos missionários e pelos povos que ainda não conhecem a Cristo.
                  </p>
                </CardContent>
              </Card>

              <Card className="church-card text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl">Ofertas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Contribua financeiramente para o sustento dos missionários e projetos.
                  </p>
                </CardContent>
              </Card>

              <Card className="church-card text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl">Ir</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Considera o chamado missionário e faça parte das próximas equipes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-16">
        <div className="church-container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Participe da Grande Comissão
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Deus nos chamou para alcançar todas as nações. Venha fazer parte 
            desta missão e ver vidas sendo transformadas pelo poder do Evangelho.
          </p>
          <div className="flex items-center justify-center space-x-2 text-church-gold">
            <Heart className="w-5 h-5" />
            <span className="font-medium">O mundo precisa conhecer Jesus!</span>
            <Heart className="w-5 h-5" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Missoes;
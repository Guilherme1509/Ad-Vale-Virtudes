import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Heart, Users } from 'lucide-react';

const Historia = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-16 lg:py-20">
        <div className="church-container text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Nossa História
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Uma jornada de fé que começou em 1992 e continua transformando vidas
          </p>
        </div>
      </section>

      {/* Fundação */}
      <section className="church-section">
        <div className="church-container">
          <div className="max-w-4xl mx-auto">
            <Card className="church-card mb-12">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="font-serif text-3xl">Fundação da Igreja</CardTitle>
                <CardDescription className="text-lg">24 de Fevereiro de 1992</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg leading-relaxed mb-6">
                  A Assembleia de Deus Vale das Virtudes foi fundada em 24 de fevereiro de 1992, 
                  com o propósito de levar a Palavra de Deus e o amor de Cristo para a comunidade 
                  do Vale das Virtudes e região.
                </p>
                <div className="bg-muted/50 rounded-lg p-6">
                  <p className="italic text-lg font-medium text-primary mb-2">
                    "Até aqui nos ajudou o Senhor"
                  </p>
                  <cite className="text-sm text-muted-foreground">1 Samuel 7:12</cite>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-center text-primary mb-8">
                Linha do Tempo
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">1992</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold mb-2">Fundação da Igreja</h3>
                    <p className="text-muted-foreground">
                      Em 24 de fevereiro, nasce a Assembleia de Deus Vale das Virtudes, 
                      estabelecendo-se na Rua José Ramos Fernandes, 420.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">2003</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold mb-2">Criação da ABEVDV</h3>
                    <p className="text-muted-foreground">
                      Em 8 de dezembro, é criada a Associação Beneficente (ABEVDV) 
                      para desenvolver ações sociais na comunidade.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">2024</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold mb-2">Continuamos Crescendo</h3>
                    <p className="text-muted-foreground">
                      Mais de 30 anos de ministério, formando discípulos e impactando vidas 
                      através do amor de Cristo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pastor Silas */}
      <section className="church-section bg-muted/30">
        <div className="church-container">
          <div className="max-w-4xl mx-auto">
            <Card className="church-card">
              <CardHeader className="text-center">
                <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-16 h-16 text-muted-foreground" />
                </div>
                <CardTitle className="font-serif text-3xl">Pastor Silas Alves</CardTitle>
                <CardDescription className="text-lg">Pastor Presidente</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg leading-relaxed mb-6">
                  Líder espiritual da Assembleia de Deus Vale das Virtudes, o Pastor Silas Alves 
                  tem dedicado sua vida ao ministério pastoral, guiando a igreja com sabedoria, 
                  amor e compromisso com a Palavra de Deus.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-background rounded-lg p-6">
                    <h4 className="font-semibold text-lg mb-2">Ministério Pastoral</h4>
                    <p className="text-sm text-muted-foreground">
                      Anos de dedicação ao pastoreado, cuidando do rebanho com amor e zelo.
                    </p>
                  </div>
                  
                  <div className="bg-background rounded-lg p-6">
                    <h4 className="font-semibold text-lg mb-2">Missões</h4>
                    <p className="text-sm text-muted-foreground">
                      Envolvimento ativo em missões, incluindo viagens missionárias internacionais.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="church-section">
        <div className="church-container">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="church-card">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="font-serif text-3xl">Nossa Localização</CardTitle>
                <CardDescription className="text-lg">
                  Rua José Ramos Fernandes, 420 - Jd Vale das Virtudes, São Paulo - SP
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed mb-6">
                  Estrategicamente localizada no coração do Vale das Virtudes, nossa igreja 
                  tem sido um farol de esperança para a comunidade local por mais de três décadas.
                </p>
                
                <div className="bg-muted rounded-lg p-8 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Mapa interativo em breve
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-16">
        <div className="church-container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Faça Parte da Nossa História
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Venha conhecer nossa comunidade e descobrir como Deus tem 
            trabalhado através desta igreja ao longo dos anos.
          </p>
          <div className="flex items-center justify-center space-x-2 text-church-gold">
            <Heart className="w-5 h-5" />
            <span className="font-medium">Você é sempre bem-vindo(a)!</span>
            <Heart className="w-5 h-5" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Historia;
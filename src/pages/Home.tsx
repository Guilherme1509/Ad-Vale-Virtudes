import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, BookOpen, Calendar, MapPin, Clock, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-primary-hover to-primary text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }}></div>
        </div>
        
        <div className="church-container relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Assembleia de Deus
              <span className="block text-3xl md:text-5xl lg:text-6xl text-church-gold mt-2">
                Vale das Virtudes
              </span>
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20">
              <p className="text-xl md:text-2xl font-medium italic mb-2">
                "Até aqui nos ajudou o Senhor"
              </p>
              <cite className="text-sm opacity-90">1 Samuel 7:12</cite>
            </div>

            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Fundada em 24 de fevereiro de 1992, sob a presidência do Pastor Silas Alves. 
              Uma igreja que caminha pela fé, proclamando o amor de Cristo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="church-button-primary text-base px-8 py-3"
              >
                <Link to="/contato">Nos Visite</Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary text-base px-8 py-3"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Culto Online
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="church-section bg-gradient-to-b from-background to-muted">
        <div className="church-container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Nossos Pilares
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça os valores que nos guiam em nossa jornada de fé
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="church-card text-center hover:transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-2xl">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Proclamar o Evangelho de Cristo com amor, levando esperança e transformação 
                  às vidas através da Palavra de Deus e do poder do Espírito Santo.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="church-card text-center hover:transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-2xl">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Ser uma igreja que impacta gerações, formando discípulos maduros na fé 
                  e comprometidos com a obra de Deus no Vale das Virtudes e além.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="church-card text-center hover:transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-2xl">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Santidade, amor ao próximo, compromisso com a verdade bíblica, 
                  unidade no Espírito e excelência no serviço ao Reino de Deus.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Últimos Eventos/Destaques */}
      <section className="church-section">
        <div className="church-container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Últimos Eventos
            </h2>
            <p className="text-lg text-muted-foreground">
              Veja os momentos especiais da nossa comunidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="church-card">
              <CardHeader>
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Calendar className="w-12 h-12 text-muted-foreground" />
                </div>
                <CardTitle className="font-serif">Aniversário do Pastor Silas</CardTitle>
                <CardDescription>20 de Janeiro - Culto de Ações de Graças</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Celebramos com gratidão mais um ano de vida do nosso pastor presidente, 
                  em um culto especial de ações de graças.
                </p>
              </CardContent>
            </Card>

            <Card className="church-card">
              <CardHeader>
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-muted-foreground" />
                </div>
                <CardTitle className="font-serif">Escola Bíblica de Férias</CardTitle>
                <CardDescription>Janeiro - Evento Infantil</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Um tempo especial de aprendizado e diversão para as crianças, 
                  com atividades, brincadeiras e ensino da Palavra de Deus.
                </p>
              </CardContent>
            </Card>

            <Card className="church-card">
              <CardHeader>
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-muted-foreground" />
                </div>
                <CardTitle className="font-serif">Missão Portugal</CardTitle>
                <CardDescription>Viagem Missionária</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Pastor Silas e equipe em missão evangelística em Portugal, 
                  levando a Palavra e fortalecendo a obra de Deus.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/galeria">Ver Mais Eventos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-16">
        <div className="church-container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Venha Fazer Parte da Nossa Família
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Você é bem-vindo(a) em nossa casa. Venha experimentar o amor de Deus 
            e fazer parte de uma comunidade que se importa com você.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contato">Como Chegar</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/programacao">Ver Programação</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, GraduationCap, Users, Clock, Star, CheckCircle } from 'lucide-react';

const Faculdade = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-16 lg:py-20">
        <div className="church-container text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Faculdade Teológica
            <span className="block text-3xl md:text-4xl text-church-gold mt-2">
              Vale das Virtudes
            </span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Formando líderes cristãos capacitados para o Reino de Deus
          </p>
        </div>
      </section>

      {/* Sobre a Faculdade */}
      <section className="church-section">
        <div className="church-container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              Educação Teológica de Excelência
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa Faculdade Teológica oferece formação sólida e abrangente para aqueles 
              que desejam se aprofundar no conhecimento da Palavra de Deus e se preparar 
              para o ministério cristão.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Card className="church-card">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Corpo docente qualificado</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Currículo baseado na Bíblia</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Modalidades presencial e online</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Certificação reconhecida</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Formação prática ministerial</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted rounded-lg p-8 flex items-center justify-center">
              <div className="text-center">
                <GraduationCap className="w-24 h-24 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">
                  Preparando servos para a obra de Deus
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos Oferecidos */}
      <section className="church-section bg-muted/30">
        <div className="church-container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Cursos Oferecidos
            </h2>
            <p className="text-lg text-muted-foreground">
              Escolha o curso que melhor se adapta aos seus objetivos ministeriais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bacharel em Teologia */}
            <Card className="church-card hover:transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-2xl">Bacharel em Teologia</CardTitle>
                <CardDescription>Formação completa e aprofundada</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Duração: 4 anos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Modalidade: Presencial e Online</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Turmas limitadas</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold">Disciplinas principais:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Exegese Bíblica</li>
                    <li>• Teologia Sistemática</li>
                    <li>• História da Igreja</li>
                    <li>• Homilética</li>
                    <li>• Aconselhamento Pastoral</li>
                  </ul>
                </div>

                <Button className="w-full church-button-primary">
                  Quero me Inscrever
                </Button>
              </CardContent>
            </Card>

            {/* Cursos Livres */}
            <Card className="church-card hover:transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-2xl">Cursos Livres</CardTitle>
                <CardDescription>Especialização em áreas específicas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Duração: 6 meses a 2 anos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Modalidade: Presencial e Online</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Certificação individual</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold">Cursos disponíveis:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Liderança Cristã</li>
                    <li>• Ministério Infantil</li>
                    <li>• Louvor e Adoração</li>
                    <li>• Evangelismo</li>
                    <li>• Missões</li>
                  </ul>
                </div>

                <Button variant="outline" className="w-full">
                  Ver Todos os Cursos
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="church-section">
        <div className="church-container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-lg text-muted-foreground">
              O que torna nossa faculdade especial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="church-card text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">Ensino Bíblico</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Fundamentado inteiramente nas Escrituras Sagradas, 
                  com abordagem expositiva e aplicação prática.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="church-card text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">Mentoria Pastoral</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Acompanhamento pessoal do Pastor Silas Alves 
                  e equipe ministerial experiente.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="church-card text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">Formação Integral</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Desenvolvimento espiritual, intelectual e ministerial 
                  completo para o serviço cristão.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-16">
        <div className="church-container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Pronto para Iniciar Sua Jornada?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Dê o próximo passo em sua formação ministerial. 
            Inscreva-se agora e transforme seu chamado em preparação.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Fazer Inscrição
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Mais Informações
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculdade;
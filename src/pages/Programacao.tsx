import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Calendar, MapPin, Users, Mic, BookOpen } from 'lucide-react';

const Programacao = () => {
  const cultos = [
    {
      dia: 'Domingo',
      horarios: [
        { horario: '09:00', evento: 'Escola Dominical', descricao: 'Ensino bíblico para todas as idades' },
        { horario: '19:00', evento: 'Culto de Celebração', descricao: 'Culto principal com louvor e pregação' }
      ]
    },
    {
      dia: 'Terça-feira',
      horarios: [
        { horario: '19:30', evento: 'Culto de Oração', descricao: 'Tempo de intercessão e súplicas' }
      ]
    },
    {
      dia: 'Sexta-feira',
      horarios: [
        { horario: '19:30', evento: 'Culto de Libertação', descricao: 'Ministração e cura interior' }
      ]
    }
  ];

  const eventosEspeciais = [
    {
      titulo: 'Vigília de Oração',
      data: 'Primeiro sábado do mês',
      horario: '22:00 às 06:00',
      local: 'Templo principal',
      descricao: 'Noite de oração e busca a Deus'
    },
    {
      titulo: 'Encontro de Obreiros',
      data: 'Terceiro sábado do mês',
      horario: '14:00 às 17:00',
      local: 'Salão de eventos',
      descricao: 'Capacitação e comunhão entre obreiros'
    },
    {
      titulo: 'Congresso de Oração',
      data: 'Anual - Março',
      horario: 'Sexta a domingo',
      local: 'Templo principal',
      descricao: 'Três dias de oração e renovação espiritual'
    },
    {
      titulo: 'Escola Bíblica de Férias',
      data: 'Janeiro',
      horario: '08:00 às 12:00',
      local: 'Salas de aula',
      descricao: 'Atividades para crianças durante as férias'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-16 lg:py-20">
        <div className="church-container text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Programação
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Venha adorar e crescer conosco em cada encontro
          </p>
        </div>
      </section>

      {/* Cultos Semanais */}
      <section className="church-section">
        <div className="church-container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Cultos Semanais
            </h2>
            <p className="text-lg text-muted-foreground">
              Programação regular de cultos e atividades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cultos.map((dia, index) => (
              <Card key={index} className="church-card">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-center">{dia.dia}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {dia.horarios.map((item, idx) => (
                      <div key={idx} className="border-l-4 border-primary pl-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="font-semibold">{item.horario}</span>
                        </div>
                        <h4 className="font-medium text-lg mb-1">{item.evento}</h4>
                        <p className="text-sm text-muted-foreground">{item.descricao}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eventos Especiais */}
      <section className="church-section bg-muted/30">
        <div className="church-container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Eventos Especiais
            </h2>
            <p className="text-lg text-muted-foreground">
              Momentos únicos de crescimento espiritual
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventosEspeciais.map((evento, index) => (
              <Card key={index} className="church-card hover:transform hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-serif text-xl">{evento.titulo}</CardTitle>
                      <CardDescription className="text-base mt-1">{evento.descricao}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{evento.data}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{evento.horario}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{evento.local}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ministérios por Faixa Etária */}
      <section className="church-section">
        <div className="church-container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Atividades por Idade
            </h2>
            <p className="text-lg text-muted-foreground">
              Algo especial para cada faixa etária
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="church-card text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">Crianças</CardTitle>
                <CardDescription>0 a 12 anos</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Escola Dominical Infantil</li>
                  <li>• Culto Infantil (Domingos 19h)</li>
                  <li>• EBF - Escola Bíblica de Férias</li>
                  <li>• Atividades recreativas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="church-card text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mic className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">Jovens</CardTitle>
                <CardDescription>13 a 30 anos</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Reunião de Jovens (Sábados 19h)</li>
                  <li>• Grupo de Louvor Jovem</li>
                  <li>• Acampamentos e retiros</li>
                  <li>• Evangelismo jovem</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="church-card text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">Adultos</CardTitle>
                <CardDescription>Acima de 30 anos</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Escola Dominical</li>
                  <li>• Círculo de Oração</li>
                  <li>• Estudos bíblicos</li>
                  <li>• Encontros ministeriais</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-16">
        <div className="church-container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Sua Presença Faz a Diferença
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Venha fazer parte dos nossos cultos e eventos. 
            Experimente a presença de Deus em nossa comunidade.
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-church-gold text-lg">
            <MapPin className="w-5 h-5" />
            <span>Rua José Ramos Fernandes, 420 - Jd Vale das Virtudes, SP</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programacao;
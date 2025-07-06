import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, MapPin, Play, Image as ImageIcon, Filter } from 'lucide-react';

const Galeria = () => {
  const [filtroAtivo, setFiltroAtivo] = useState('todos');

  const categorias = [
    { id: 'todos', nome: 'Todos', count: 24 },
    { id: 'cultos', nome: 'Cultos', count: 8 },
    { id: 'eventos', nome: 'Eventos Especiais', count: 6 },
    { id: 'ministerios', nome: 'Ministérios', count: 5 },
    { id: 'missoes', nome: 'Missões', count: 3 },
    { id: 'infantil', nome: 'Infantil', count: 2 }
  ];

  const galeria = [
    {
      id: 1,
      tipo: 'foto',
      categoria: 'eventos',
      titulo: 'Aniversário do Pastor Silas',
      descricao: 'Culto especial de ações de graças pelos anos de vida do nosso pastor',
      data: '20 de Janeiro, 2024',
      local: 'Templo Principal',
      participantes: '200+',
      tags: ['aniversário', 'pastor', 'ações de graças']
    },
    {
      id: 2,
      tipo: 'video',
      categoria: 'infantil',
      titulo: 'Escola Bíblica de Férias 2024',
      descricao: 'Momentos especiais com as crianças durante a EBF',
      data: 'Janeiro, 2024',
      local: 'Salas de Aula',
      participantes: '80+',
      tags: ['EBF', 'crianças', 'férias']
    },
    {
      id: 3,
      tipo: 'foto',
      categoria: 'missoes',
      titulo: 'Missão Portugal',
      descricao: 'Pastor Silas e equipe em viagem missionária',
      data: 'Novembro, 2023',
      local: 'Portugal',
      participantes: '10',
      tags: ['missões', 'portugal', 'evangelismo']
    },
    {
      id: 4,
      tipo: 'video',
      categoria: 'eventos',
      titulo: 'Vigília de Oração',
      descricao: 'Noite de oração e intercessão pela igreja e cidade',
      data: 'Primeiro sábado do mês',
      local: 'Templo Principal',
      participantes: '150+',
      tags: ['vigília', 'oração', 'intercessão']
    },
    {
      id: 5,
      tipo: 'foto',
      categoria: 'cultos',
      titulo: 'Culto de Domingo',
      descricao: 'Momentos de adoração e comunhão',
      data: 'Domingo, 19h',
      local: 'Templo Principal',
      participantes: '300+',
      tags: ['culto', 'domingo', 'adoração']
    },
    {
      id: 6,
      tipo: 'foto',
      categoria: 'eventos',
      titulo: 'Congresso de Oração',
      descricao: 'Três dias de oração e renovação espiritual',
      data: 'Março, 2024',
      local: 'Templo Principal',
      participantes: '400+',
      tags: ['congresso', 'oração', 'renovação']
    },
    {
      id: 7,
      tipo: 'video',
      categoria: 'ministerios',
      titulo: 'Ministério de Louvor',
      descricao: 'Apresentação especial do coral da igreja',
      data: 'Dezembro, 2023',
      local: 'Templo Principal',
      participantes: '30',
      tags: ['louvor', 'coral', 'música']
    },
    {
      id: 8,
      tipo: 'foto',
      categoria: 'eventos',
      titulo: 'Encontro de Obreiros',
      descricao: 'Capacitação e comunhão entre os obreiros',
      data: 'Terceiro sábado do mês',
      local: 'Salão de Eventos',
      participantes: '80+',
      tags: ['obreiros', 'capacitação', 'comunhão']
    }
  ];

  const itensFiltrados = filtroAtivo === 'todos' 
    ? galeria 
    : galeria.filter(item => item.categoria === filtroAtivo);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-16 lg:py-20">
        <div className="church-container text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Galeria
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Momentos especiais da nossa caminhada com Deus
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-muted/30 sticky top-0 z-40 border-b border-border">
        <div className="church-container">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="font-medium">Filtrar por categoria:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categorias.map((categoria) => (
              <Button
                key={categoria.id}
                variant={filtroAtivo === categoria.id ? "default" : "outline"}
                size="sm"
                onClick={() => setFiltroAtivo(categoria.id)}
                className="flex items-center space-x-2"
              >
                <span>{categoria.nome}</span>
                <Badge variant="secondary" className="text-xs">
                  {categoria.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid da Galeria */}
      <section className="church-section">
        <div className="church-container">
          <div className="text-center mb-8">
            <p className="text-muted-foreground">
              Mostrando {itensFiltrados.length} de {galeria.length} itens
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itensFiltrados.map((item) => (
              <Card key={item.id} className="church-card hover:transform hover:scale-105 transition-all duration-300 group">
                <CardHeader className="relative">
                  <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                    {item.tipo === 'foto' ? (
                      <ImageIcon className="w-12 h-12 text-muted-foreground" />
                    ) : (
                      <>
                        <ImageIcon className="w-12 h-12 text-muted-foreground" />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                      </>
                    )}
                    
                    {/* Badge do tipo */}
                    <Badge 
                      className="absolute top-2 right-2" 
                      variant={item.tipo === 'video' ? 'destructive' : 'secondary'}
                    >
                      {item.tipo === 'video' ? 'Vídeo' : 'Foto'}
                    </Badge>
                  </div>

                  <CardTitle className="font-serif text-lg">{item.titulo}</CardTitle>
                  <CardDescription className="text-sm">{item.descricao}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    {/* Informações do evento */}
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>{item.data}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span>{item.local}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span>{item.participantes} participantes</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Botão de ação */}
                    <Button 
                      className="w-full mt-4" 
                      variant="outline"
                      onClick={() => {
                        // Aqui seria implementada a funcionalidade de visualizar
                        console.log('Visualizar item:', item.id);
                      }}
                    >
                      {item.tipo === 'video' ? 'Assistir Vídeo' : 'Ver Fotos'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Botão Carregar Mais */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Carregar Mais Itens
            </Button>
          </div>
        </div>
      </section>

      {/* Seção de Envio */}
      <section className="church-section bg-muted/30">
        <div className="church-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">
              Compartilhe Seus Momentos
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Você tem fotos ou vídeos dos nossos eventos? 
              Nos ajude a documentar a história da nossa igreja!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="church-card">
                <CardContent className="text-center p-6">
                  <ImageIcon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Envie suas Fotos</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Compartilhe os momentos especiais que você registrou
                  </p>
                  <Button size="sm">Enviar Fotos</Button>
                </CardContent>
              </Card>

              <Card className="church-card">
                <CardContent className="text-center p-6">
                  <Play className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Envie seus Vídeos</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Seus vídeos podem abençoar outras pessoas
                  </p>
                  <Button size="sm">Enviar Vídeos</Button>
                </CardContent>
              </Card>
            </div>

            <p className="text-sm text-muted-foreground">
              Ao enviar conteúdo, você concorda que ele seja usado para fins ministeriais da igreja.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Galeria;
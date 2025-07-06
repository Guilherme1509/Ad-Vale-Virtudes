import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Instagram, Facebook, Youtube } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aqui seria implementada a lógica de envio
    console.log('Dados do formulário:', formData);
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve. Que Deus abençoe!",
    });

    // Limpar formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-16 lg:py-20">
        <div className="church-container text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Entre em Contato
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Estamos aqui para ouvir você. Fale conosco!
          </p>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="church-section">
        <div className="church-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário de Contato */}
            <div>
              <Card className="church-card">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Envie sua Mensagem</CardTitle>
                  <CardDescription>
                    Preencha o formulário abaixo e entraremos em contato em breve
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome completo *</Label>
                        <Input
                          id="nome"
                          name="nome"
                          value={formData.nome}
                          onChange={handleInputChange}
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input
                          id="telefone"
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleInputChange}
                          placeholder="(11) 99999-9999"
                          type="tel"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        type="email"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="assunto">Assunto *</Label>
                      <Input
                        id="assunto"
                        name="assunto"
                        value={formData.assunto}
                        onChange={handleInputChange}
                        placeholder="Como podemos ajudar?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem">Mensagem *</Label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        placeholder="Conte-nos mais sobre sua necessidade ou dúvida..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full church-button-primary">
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-6">
              {/* Dados da Igreja */}
              <Card className="church-card">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Nossa Igreja</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Endereço</p>
                      <p className="text-sm text-muted-foreground">
                        Rua José Ramos Fernandes, 420<br/>
                        Jd Vale das Virtudes - São Paulo, SP<br/>
                        CEP: 08295-420
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Telefone</p>
                      <p className="text-sm text-muted-foreground">(11) 9999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">E-mail</p>
                      <p className="text-sm text-muted-foreground">contato@advaledasvirtudes.org</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Horários de Funcionamento */}
              <Card className="church-card">
                <CardHeader>
                  <CardTitle className="font-serif text-xl flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span>Horários dos Cultos</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">Domingo</span>
                      <span className="text-sm text-muted-foreground">9:00 e 19:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">Terça-feira</span>
                      <span className="text-sm text-muted-foreground">19:30</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Sexta-feira</span>
                      <span className="text-sm text-muted-foreground">19:30</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Redes Sociais */}
              <Card className="church-card">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Redes Sociais</CardTitle>
                  <CardDescription>Siga-nos para acompanhar nossa programação</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com/advaledasvirtudesoficial" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                      <span className="text-sm">Instagram</span>
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                      <span className="text-sm">Facebook</span>
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors"
                    >
                      <Youtube className="w-5 h-5" />
                      <span className="text-sm">YouTube</span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp */}
              <Card className="church-card bg-green-50 border-green-200">
                <CardContent className="text-center p-6">
                  <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">WhatsApp</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Para um atendimento mais rápido, fale conosco pelo WhatsApp
                  </p>
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => {
                      const message = 'Olá! Gostaria de saber mais sobre a Assembleia de Deus Vale das Virtudes.';
                      window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Falar no WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="church-section bg-muted/30">
        <div className="church-container">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Como Chegar
            </h2>
            <p className="text-lg text-muted-foreground">
              Encontre-nos facilmente no coração do Vale das Virtudes
            </p>
          </div>

          <Card className="church-card">
            <CardContent className="p-0">
              <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground text-lg mb-2">
                    Mapa interativo em breve
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Rua José Ramos Fernandes, 420 - Jd Vale das Virtudes, SP
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      const address = encodeURIComponent('Rua José Ramos Fernandes, 420, Jd Vale das Virtudes, São Paulo, SP');
                      window.open(`https://maps.google.com/maps?q=${address}`, '_blank');
                    }}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Abrir no Google Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-16">
        <div className="church-container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Venha nos Visitar!
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Você é sempre bem-vindo(a) em nossa casa. Venha experimentar 
            o amor de Deus e fazer parte da nossa família.
          </p>
          <p className="text-church-gold font-medium text-lg">
            "Até aqui nos ajudou o Senhor" - 1 Samuel 7:12
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contato;
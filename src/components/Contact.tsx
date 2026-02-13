import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-4">ENTRE EM CONTATO</p>
          <h2 className="section-title text-4xl md:text-5xl mb-6 text-foreground">
            Fale Conosco
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Agende seu serviço ou tire suas dúvidas. Nossa equipe está pronta 
            para oferecer o melhor atendimento.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-8">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Telefone</p>
                    <a 
                      href="https://wa.me/5518936180780" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground font-medium hover:text-primary transition-colors duration-300"
                    >
                      +55 18 93618-0780
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">E-mail</p>
                    <a 
                      href="mailto:contatonodetalhe.sp@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground font-medium hover:text-primary transition-colors duration-300"
                    >
                      contatonodetalhe.sp@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Endereço</p>
                    <a 
                      href="https://maps.google.com/?q=R.+Eloi+Moimaz,+397,+Birigui+-+SP,+16201-586,+Brasil" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground font-medium hover:text-primary transition-colors duration-300"
                    >
                      R. Eloi Moimaz, 397, Birigui - SP, 16201-586, Brasil
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Horário de Funcionamento</p>
                    <p className="text-foreground font-medium">Seg - Sáb: 08h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

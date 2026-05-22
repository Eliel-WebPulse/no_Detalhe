import { motion } from 'framer-motion';
import { Sparkles, Shield, Droplets, Wrench, Check, Car, Wind } from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Lavagem Detalhada',
    subtitle: 'Limpeza Completa',
    description: 'Processo de lavagem minucioso que inclui pré-lavagem, lavagem com espuma, descontaminação e secagem profissional.',
    features: ['Processo em 5 etapas', 'Produtos premium', 'Sem marcas d\'água'],
    price: 'R$ 119,90',
  },
  {
    icon: Wrench,
    title: 'Higienização dos Bancos',
    subtitle: 'Interior Renovado',
    description: 'Limpeza profunda de todos os bancos, eliminando sujeiras, odores e manchas para um ambiente renovado.',
    features: ['Eliminação de odores', 'Limpeza a vapor', 'Hidratação de couro'],
    price: 'R$ 94,90',
  },
  {
    icon: Car,
    title: 'Lavagem de Motor',
    subtitle: 'Potência Preservada',
    description: 'Limpeza cuidadosa do compartimento do motor, removendo graxa e sujeira para melhor performance e visual.',
    features: ['Limpeza segura', 'Proteção elétrica', 'Melhor refrigeração'],
    price: 'R$ 94,90',
  },
  {
    icon: Sparkles,
    title: 'Polimento Automotivo',
    subtitle: 'Brilho Profissional',
    description: 'Polimento profissional que remove micro-riscos e restaura o brilho original da pintura, deixando o veículo com aparência de novo.',
    features: ['Remoção de riscos', 'Brilho intenso', 'Proteção da pintura'],
    price: 'a partir de R$ 299,90',
  },
  {
    icon: Droplets,
    title: 'Lavagem Comercial',
    subtitle: 'Limpeza Rápida',
    description: 'Serviço de lavagem rápida e eficiente ideal para frotas comerciais, mantendo sempre a imagem profissional da empresa.',
    features: ['Agilidade no serviço', 'Limpeza completa', 'Preço especial'],
    price: 'a partir de R$ 69,90',
  },
  {
    icon: Car,
    title: 'Lavagem de Moto',
    subtitle: 'Duas Opções',
    description: 'Serviço de lavagem especializado para motos, garantindo limpeza completa e cuidadosa com todas as partes do veículo.',
    features: ['Limpeza simples R$ 35,90', 'Limpeza completa R$ 59,90', 'Cuidado especializado'],
    price: 'a partir de R$ 35,90',
  },
  {
    icon: Shield,
    title: 'Proteção Cerâmica',
    subtitle: 'Proteção Máxima',
    description: 'Revestimento cerâmico de alta durabilidade que protege a pintura contra intempéries, raios UV e contaminantes.',
    features: ['Durabilidade prolongada', 'Hidrofobicidade extrema', 'Facilidade de limpeza'],
    price: 'R$ 149,90',
  },
  {
    icon: Sparkles,
    title: 'Cristalização da Lataria',
    subtitle: 'Brilho Espelhado',
    description: 'Tratamento avançado que cria uma camada protetora e proporciona brilho intenso como espelho na lataria.',
    features: ['Brilho extremo', 'Proteção química', 'Acabamento premium'],
    price: 'R$ 105,90',
  },
  {
    icon: Wind,
    title: 'Descontaminação dos Vidros',
    subtitle: 'Visibilidade Perfeita',
    description: 'Remoção completa de contaminantes dos vidros, garantindo máxima visibilidade e segurança na condução.',
    features: ['Visibilidade 100%', 'Repelência d\'água', 'Durabilidade prolongada'],
    price: 'R$ 74,90',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-4">O QUE OFERECEMOS</p>
          <h2 className="section-title text-4xl md:text-5xl mb-6 text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada serviço é executado com precisão e dedicação, utilizando produtos 
            de alta qualidade e técnicas avançadas de detalhamento automotivo.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card group hover:border-primary/50 transition-all duration-500"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-primary text-sm font-medium mb-1">{service.subtitle}</p>
                  <h3 className="text-xl font-heading font-semibold text-foreground">{service.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="pt-4 border-t border-border">
                <span className="text-primary font-semibold">{service.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import { Home, Building2, PackageOpen } from "lucide-react";
import instalacaoImg from "@/assets/instalacao.jpg";
import perfilImg from "@/assets/perfil-aluminio.jpg";
import projetoImg from "@/assets/projeto-residencial.jpg";

const services = [
  {
    icon: Home,
    title: "Esquadrias Residenciais",
    desc: "Janelas, portas de correr, basculantes e esquadrias sob medida para sua casa ou reforma. Projeto técnico e instalação completa.",
    image: projetoImg,
    cta: "Quero orçamento para minha casa",
    whatsappMsg: "Olá! Sou cliente final e gostaria de um orçamento para esquadrias residenciais.",
  },
  {
    icon: Building2,
    title: "Esquadrias para Obras e Empresas",
    desc: "Atendemos construtoras, arquitetos e empresas com soluções em esquadrias de alumínio para projetos de grande escala.",
    image: instalacaoImg,
    cta: "Solicitar orçamento empresarial",
    whatsappMsg: "Olá! Represento uma empresa/construtora e preciso de orçamento para esquadrias de alumínio.",
  },
  {
    icon: PackageOpen,
    title: "Perfis de Alumínio",
    desc: "Venda de perfis de alumínio para esquadrias com diversas bitolas e acabamentos. Atendemos fabricantes e revendas na região.",
    image: perfilImg,
    cta: "Comprar perfis de alumínio",
    whatsappMsg: "Olá! Tenho interesse em comprar perfis de alumínio. Podem me enviar o catálogo?",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Nossos Serviços</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Soluções completas em alumínio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Da fabricação à instalação, oferecemos tudo que você precisa em esquadrias e perfis de alumínio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.desc}</p>
                <a
                  href={`https://wa.me/5500000000000?text=${encodeURIComponent(service.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors"
                >
                  {service.cta} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

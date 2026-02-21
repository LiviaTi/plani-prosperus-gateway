import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://wa.me/5516997904725?text=Olá! Gostaria de solicitar um orçamento.";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Esquadrias de alumínio modernas" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto py-32 md:py-40">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
            Guariba – SP e Região
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
            Esquadrias de alumínio com{" "}
            <span className="text-gradient">precisão</span> e{" "}
            <span className="text-gradient">qualidade</span>
          </h1>
          <p className="text-foreground/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Do projeto à instalação, entregamos esquadrias e perfis de alumínio com alto padrão técnico para obras residenciais e comerciais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-md font-bold text-base transition-all hover:scale-105"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 border border-foreground/20 hover:border-primary/50 text-foreground/80 hover:text-foreground px-8 py-4 rounded-md font-medium text-base transition-all"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>

      {/* Decorative lines like logo */}
      <div className="absolute top-20 right-10 w-64 h-64 opacity-10 pointer-events-none">
        <div className="absolute w-full h-0.5 bg-primary rotate-45 top-1/2" />
        <div className="absolute w-full h-0.5 bg-primary -rotate-12 top-1/3" />
        <div className="absolute w-full h-0.5 bg-primary rotate-[70deg] top-2/3" />
      </div>
    </section>
  );
};

export default Hero;

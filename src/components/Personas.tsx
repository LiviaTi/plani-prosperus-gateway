import { Compass, User, Building, Package } from "lucide-react";

const personas = [
  {
    icon: Compass,
    title: "Arquitetos",
    desc: "Busca uma empresa de esquadrias confiável para executar seus projetos residenciais com precisão técnica?",
    cta: "Falar como Arquiteto",
    whatsappMsg: "Olá! Sou arquiteto(a) e busco uma empresa de esquadrias de alumínio para executar projetos. Podemos conversar?",
    highlight: "Parceria técnica para seus projetos",
  },
  {
    icon: User,
    title: "Clientes Finais",
    desc: "Quer esquadrias de alumínio de qualidade para construir ou reformar sua casa? Orçamento rápido e sem compromisso.",
    cta: "Quero um Orçamento",
    whatsappMsg: "Olá! Sou pessoa física e gostaria de um orçamento para esquadrias de alumínio para minha residência.",
    highlight: "Orçamento gratuito e personalizado",
  },
  {
    icon: Building,
    title: "Empresas",
    desc: "Precisa de esquadrias de alumínio para sua obra ou empreendimento comercial? Atendimento dedicado para empresas.",
    cta: "Orçamento Empresarial",
    whatsappMsg: "Olá! Represento uma empresa e preciso de esquadrias de alumínio. Gostaria de solicitar um orçamento.",
    highlight: "Condições especiais para empresas",
  },
  {
    icon: Package,
    title: "Compradores de Perfil",
    desc: "Busca perfis de alumínio para esquadrias na região de Guariba/SP? Temos diversas linhas e acabamentos disponíveis.",
    cta: "Comprar Perfis",
    whatsappMsg: "Olá! Tenho interesse em comprar perfis de alumínio para esquadrias. Quais linhas vocês trabalham?",
    highlight: "Pronta entrega na região",
  },
];

const Personas = () => {
  return (
    <section id="perfis" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Atendimento Especializado</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Como podemos te ajudar?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selecione seu perfil para um atendimento direcionado via WhatsApp.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {personas.map((persona) => (
            <div
              key={persona.title}
              className="glass-card p-6 hover:border-primary/40 transition-all duration-300 flex flex-col group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <persona.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-1">{persona.title}</h3>
              <span className="text-xs text-primary font-medium mb-3">{persona.highlight}</span>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{persona.desc}</p>
              <a
                href={`https://wa.me/5500000000000?text=${encodeURIComponent(persona.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-3 rounded-md font-semibold text-sm transition-all hover:scale-[1.02]"
              >
                {persona.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Personas;

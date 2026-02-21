import { Shield, Ruler, Wrench, Award } from "lucide-react";
import projetoImg from "@/assets/projeto-residencial.jpg";

const features = [
  { icon: Shield, title: "Alta Qualidade", desc: "Materiais premium e acabamento superior em cada projeto" },
  { icon: Ruler, title: "Sob Medida", desc: "Esquadrias projetadas para as especificações da sua obra" },
  { icon: Wrench, title: "Instalação Profissional", desc: "Equipe técnica especializada com garantia de serviço" },
  { icon: Award, title: "Atendimento Técnico", desc: "Consultoria especializada para arquitetos e construtores" },
];

const About = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={projetoImg}
              alt="Projeto residencial com esquadrias de alumínio"
              className="w-full h-80 lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Plani Prosperus</span>
              <p className="text-foreground text-lg font-heading font-semibold mt-1">
                Transformando espaços com esquadrias de alta performance
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Sobre Nós</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 leading-tight">
              Excelência em esquadrias e perfis de alumínio
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-8">
              A Plani Prosperus é referência em Guariba e região na fabricação e instalação de esquadrias de alumínio sob medida. Atuamos em obras residenciais, comerciais e na venda de perfis de alumínio, sempre com foco em qualidade, precisão e atendimento técnico especializado.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="glass-card p-4 flex gap-3">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-sm mb-1">{f.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

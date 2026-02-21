import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <img src={logo} alt="Plani Prosperus" className="h-10 mb-3" />
            <p className="text-muted-foreground text-sm">
              Perfis e esquadrias de alumínio com qualidade e precisão técnica.
            </p>
          </div>

          <div className="text-center">
            <nav className="flex flex-wrap justify-center gap-6">
              {["Início", "Sobre", "Serviços", "Perfis", "Contato"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="text-right">
            <p className="text-muted-foreground text-sm">
              Guariba – SP e região
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              © {new Date().getFullYear()} Plani Prosperus. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

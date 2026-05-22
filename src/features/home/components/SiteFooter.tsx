import { MessageCircle } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
        <div>
          <p className="font-heading text-3xl font-bold tracking-[0.06em] text-foreground">No Detalhe</p>
          <p className="text-sm text-muted-foreground">Estética automotiva premium</p>
        </div>
        <a
          href="https://wa.me/5518936180780?text=Olá!%20Vi%20o%20site%20e%20quero%20agendar%20um%20serviço."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-primary/40 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/10"
        >
          <MessageCircle className="h-4 w-4" /> Agendar no WhatsApp
        </a>
        <p className="text-sm text-muted-foreground">© 2026 No Detalhe. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default SiteFooter;

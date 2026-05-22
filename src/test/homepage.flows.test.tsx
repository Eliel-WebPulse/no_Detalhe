import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi, describe, expect, it } from "vitest";
import HomePage from "@/features/home/HomePage";
import { TooltipProvider } from "@/components/ui/tooltip";

describe("home page critical flows", () => {
  const renderPage = () =>
    render(
      <TooltipProvider>
        <HomePage />
      </TooltipProvider>
    );

  it("exposes navbar anchors for all required SPA sections", () => {
    renderPage();

    const expected = [
      ["Início", "#hero"],
      ["Serviços", "#servicos"],
      ["Explorar", "#explorar"],
      ["Comparativo", "#comparativo"],
      ["Galeria", "#galeria"],
      ["FAQ", "#faq"],
      ["Contato", "#contato"],
    ] as const;

    expected.forEach(([label, href]) => {
      const link = screen.getByRole("link", { name: label });
      expect(link).toHaveAttribute("href", href);
    });
  });

  it("runs quiz flow and shows recommendation after three answers", async () => {
    renderPage();

    expect(screen.getByText(/Ha quanto tempo voce nao lava seu carro/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Mais de 3 meses" }));

    expect(await screen.findByText(/O que mais te preocupa no seu carro/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Tudo" }));

    expect(await screen.findByText(/Qual e seu objetivo/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Renovação completa" }));

    expect(await screen.findByText(/Recomendamos:/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Ver plano/i })).toHaveAttribute("href", "#servicos");
  });

  it("updates vehicle explorer panel when switching vehicle and hotspot", () => {
    renderPage();

    fireEvent.click(screen.getByRole("button", { name: /^Moto$/i }));
    expect(screen.getByRole("heading", { name: "Tanque/Carenagem" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Painel/Instrumentos" }));
    expect(screen.getByRole("heading", { name: "Painel/Instrumentos" })).toBeInTheDocument();
    expect(screen.getByText(/Limpeza delicada/i)).toBeInTheDocument();
  });

  it("renders comparison matrix with core rows and pricing", async () => {
    renderPage();

    expect(screen.getByText("Proteção Pintura")).toBeInTheDocument();

    const priceRowHeader = screen.getByText("Preço").closest("tr");
    expect(priceRowHeader).not.toBeNull();
    const row = priceRowHeader as HTMLTableRowElement;
    await waitFor(() => {
      expect(row).toHaveTextContent(/R\$\s*70/);
      expect(row).toHaveTextContent(/R\$\s*180/);
      expect(row).toHaveTextContent(/R\$\s*275/);
    });
  });
});

import { useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SectionIntro from "../components/SectionIntro";
import { sectionReveal } from "../components/motion-variants";
import { planById, vehicleHotspots } from "../model/content";
import carSvg from "@/assets/car-silhouette.svg";
import motoSvg from "@/assets/motorcycle-silhouette.svg";

/* ─────────────────────────────────────────────
   Unified Vehicle SVG Component with Hotspots
   Uses imported SVG images for premium visual quality
   ───────────────────────────────────────────── */
const VehicleSvg = ({
  image,
  hotspots,
  activeId,
  onSelect,
}: {
  image: string;
  hotspots: any[];
  activeId: string;
  onSelect: (id: string) => void;
}) => {
  return (
    <div className="relative w-full h-full">
      {/* Glow de fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent blur-3xl opacity-40" />

      {/* SVG */}
      <img
        src={image}
        alt="Vehicle silhouette"
        className="absolute inset-0 h-full w-full object-contain p-4 select-none pointer-events-none
                   drop-shadow-[0_0_25px_rgba(255,255,255,0.04)]"
      />

      {/* Hotspots */}
      <svg
        viewBox="0 0 520 240"
        className="absolute inset-0 w-full h-full"
      >
        {hotspots.map((hotspot) => {
          const isActive = hotspot.id === activeId;
          const cx = hotspot.left as unknown as number;
          const cy = hotspot.top as unknown as number;

          return (
            <g key={hotspot.id}>
              {/* Pulse */}
              {isActive && (
                <motion.circle
                  cx={cx}
                  cy={cy}
                  r="18"
                  fill="hsl(4 80% 52%)"
                  opacity="0.18"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.18, 0.08, 0.18],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                />
              )}

              {/* Linha */}
              {isActive && (
                <motion.line
                  x1={cx}
                  y1={cy}
                  x2={cx + 38}
                  y2={cy - 24}
                  stroke="hsl(4 80% 60%)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                />
              )}

              {/* Hotspot */}
              <motion.circle
                cx={cx}
                cy={cy}
                r={isActive ? 7 : 5}
                fill={isActive ? "hsl(4 85% 58%)" : "#18181b"}
                stroke={isActive ? "#fff" : "hsl(4 70% 55%)"}
                strokeWidth="2"
                className="cursor-pointer"
                whileHover={{ scale: 1.35 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => onSelect(hotspot.id)}
              />

              {/* Label */}
              {isActive && (
                <motion.g
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <rect
                    x={cx + 40}
                    y={cy - 38}
                    width="92"
                    height="24"
                    rx="12"
                    fill="rgba(0,0,0,0.75)"
                    stroke="rgba(255,255,255,0.08)"
                  />

                  <text
                    x={cx + 50}
                    y={cy - 22}
                    fill="#fff"
                    fontSize="11"
                    fontWeight="600"
                    fontFamily="Inter"
                  >
                    {hotspot.zone}
                  </text>
                </motion.g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};


/* ─────────────────────────────────────────────
   Mapa de coordenadas SVG para os hotspots
   (os valores originais em % são convertidos
    para coordenadas do viewBox 520×240)
   ───────────────────────────────────────────── */
const carHotspotCoords: Record<string, { cx: number; cy: number }> = {
  lataria: { cx: 270, cy: 125 },
  rodas: { cx: 125, cy: 180 },
  vidros: { cx: 285, cy: 90 },
  interior: { cx: 245, cy: 115 },
  plasticos: { cx: 430, cy: 145 },
};

const motoHotspotCoords: Record<string, { cx: number; cy: number }> = {
  tanque: { cx: 260, cy: 92 },
  "rodas-corrente": { cx: 170, cy: 178 },
  motor: { cx: 260, cy: 140 },
  banco: { cx: 290, cy: 115 },
  painel: { cx: 340, cy: 78 },
};

const VehicleExplorerSection = () => {
  const [vehicle, setVehicle] = useState<"carro" | "moto">("carro");
  const [activeHotspotId, setActiveHotspotId] = useState(vehicleHotspots.carro[0].id);

  const hotspots = vehicleHotspots[vehicle];
  const activeHotspot = useMemo(
    () => hotspots.find((item) => item.id === activeHotspotId) ?? hotspots[0],
    [activeHotspotId, hotspots]
  );

  const coordsMap = vehicle === "carro" ? carHotspotCoords : motoHotspotCoords;

  // Adaptar hotspots com coordenadas SVG numéricas
  const hotspotsSvg = hotspots.map((h) => ({
    ...h,
    left: coordsMap[h.id]?.cx ?? 260,
    top: coordsMap[h.id]?.cy ?? 120,
  }));

  const activeHotspotSvg = hotspotsSvg.find((h) => h.id === activeHotspotId) ?? hotspotsSvg[0];

  return (
    <motion.section
      id="explorar"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      className="bg-secondary/20 py-24"
    >
      <div className="container mx-auto px-6">
        <SectionIntro
          eyebrow="EXPLORADOR"
          title="Clique na Parte do Veículo"
          description="Descubra os serviços por zona do carro ou moto e veja quais planos atendem cada necessidade."
        />

        {/* Toggle carro/moto */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-lg border border-border bg-card p-1 gap-1">
            {(["carro", "moto"] as const).map((v) => (
              <motion.button
                key={v}
                type="button"
                onClick={() => {
                  setVehicle(v);
                  setActiveHotspotId(vehicleHotspots[v][0].id);
                }}
                whileTap={{ scale: 0.97 }}
                className={`rounded-md px-5 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-200 ${
                  vehicle === v
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {v === "carro" ? "Carro" : "Moto"}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          {/* Painel SVG */}
          <motion.div
            className="rounded-2xl border border-border bg-card p-5"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-3xl
                         border border-white/5
                         bg-gradient-to-br
                         from-zinc-950
                         via-zinc-900
                         to-black
                         shadow-2xl"
              style={{ height: 320 }}
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={vehicle}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <VehicleSvg
                    image={vehicle === "carro" ? carSvg : motoSvg}
                    hotspots={hotspotsSvg}
                    activeId={activeHotspotId}
                    onSelect={setActiveHotspotId}
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Botões de zona */}
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {hotspots.map((hotspot) => (
                <motion.button
                  key={`list-${hotspot.id}`}
                  type="button"
                  onClick={() => setActiveHotspotId(hotspot.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`rounded-md border px-3 py-2 text-left text-xs font-medium uppercase tracking-wide transition ${
                    hotspot.id === activeHotspotId
                      ? "border-primary/70 bg-primary/10 text-primary"
                      : "border-border text-foreground/70 hover:border-border/80 hover:text-foreground"
                  }`}
                >
                  {hotspot.zone}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Painel de informações */}
          <AnimatePresence mode="wait">
            <motion.aside
              key={`${vehicle}-${activeHotspot.id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-border bg-card p-6 flex flex-col"
              aria-live="polite"
            >
              <p className="section-subtitle mb-2 text-xs">Zona selecionada</p>
              <h3 className="font-heading text-3xl uppercase text-foreground leading-tight">
                {activeHotspot.zone}
              </h3>

              <ul className="mt-5 flex-1 space-y-3">
                {activeHotspot.services.map((service) => (
                  <li key={service} className="flex items-start gap-2.5 text-sm text-foreground/70">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-border pt-5">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-foreground/70">
                  Planos recomendados
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeHotspot.plans.map((planId) => (
                    <span
                      key={planId}
                      className="rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {planById[planId].title}
                    </span>
                  ))}
                </div>
              </div>
            </motion.aside>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default VehicleExplorerSection;

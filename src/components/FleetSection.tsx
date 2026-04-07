import { Car, Shield, Users, Gauge } from "lucide-react";

const vehicles = [
  { name: "Opel Vivaro", seats: "8-9 osób" },
  { name: "Renault Trafic", seats: "8-9 osób" },
  { name: "Ford Tourneo Custom", seats: "8-9 osób" },
];

const features = [
  { icon: Shield, label: "Pełne ubezpieczenie" },
  { icon: Users, label: "8-9 miejsc pasażerskich" },
  { icon: Gauge, label: "Gotowe na długie trasy" },
  { icon: Car, label: "Klimatyzacja i komfort" },
];

const FleetSection = () => (
  <section className="section-gradient py-20">
    <div className="container">
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4 text-foreground">Nasza flota</h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Wszystkie nasze pojazdy są regularnie serwisowane i przygotowane do długodystansowych wypraw po Europie.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        {vehicles.map((v) => (
          <div key={v.name} className="bg-card rounded-xl p-6 text-center border border-border shadow-sm">
            <Car className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="font-heading font-bold text-lg text-foreground">{v.name}</h3>
            <p className="text-muted-foreground text-sm">{v.seats}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.label} className="flex flex-col items-center text-center gap-2">
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
              <f.icon className="w-6 h-6 text-accent-foreground" />
            </div>
            <span className="text-sm font-medium text-foreground font-heading">{f.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FleetSection;

import HeroSection from "@/components/HeroSection";
import ContactBanner from "@/components/ContactBanner";
import airportImg from "@/assets/airport-transfer.jpg";
import { Clock, Plane, CreditCard, MapPin, ShieldCheck, Users } from "lucide-react";

const features = [
  { icon: Clock, title: "Punktualność", desc: "Zawsze na czas — monitorujemy godziny przylotów i odlotów." },
  { icon: Plane, title: "Wszystkie lotniska", desc: "Obsługujemy transfery na lotniska w całej Polsce i Europie." },
  { icon: CreditCard, title: "Stała cena", desc: "Znajomość ceny przed podróżą — bez ukrytych kosztów." },
  { icon: MapPin, title: "Door-to-door", desc: "Odbieramy spod drzwi i dowozimy pod sam terminal." },
  { icon: ShieldCheck, title: "Profesjonalizm", desc: "Doświadczeni kierowcy znający trasy do lotnisk." },
  { icon: Users, title: "Grupy do 9 osób", desc: "Idealnie dla rodzin i grup wylatujących razem." },
];

const AirportTransfers = () => (
  <>
    <HeroSection
      title="Transfery lotniskowe"
      subtitle="Punktualny, komfortowy transport na lotnisko i z lotniska. Bez stresu, z gwarancją terminowości."
      image={airportImg}
      ctaText="Zarezerwuj transfer"
    />

    <section className="py-20">
      <div className="container">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4 text-foreground">
          Jak działamy?
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Zapewniamy bezproblemowy transport busem na każde lotnisko. Opel Vivaro, Renault Trafic, Ford Tourneo Custom — zawsze gotowe do drogi.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ContactBanner />
  </>
);

export default AirportTransfers;

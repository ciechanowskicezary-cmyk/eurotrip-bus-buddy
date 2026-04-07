import HeroSection from "@/components/HeroSection";
import ContactBanner from "@/components/ContactBanner";
import FleetSection from "@/components/FleetSection";
import vacationImg from "@/assets/vacation-trip.jpg";
import { MapPin, Calendar, Users, Shield, Sun, Luggage } from "lucide-react";

const benefits = [
  { icon: MapPin, title: "Cała Europa", desc: "Podróżujemy do dowolnego miejsca w Europie — morze, góry, miasta." },
  { icon: Calendar, title: "Elastyczne terminy", desc: "Dopasowujemy się do Twojego harmonogramu. Wyjeżdżamy kiedy chcesz." },
  { icon: Users, title: "Grupy 8-9 osób", desc: "Idealne dla rodzin i grup znajomych — wspólna podróż w komforcie." },
  { icon: Shield, title: "Bezpieczeństwo", desc: "Pojazdy z pełnym ubezpieczeniem i regularnie serwisowane." },
  { icon: Sun, title: "Komfort podróży", desc: "Klimatyzacja, wygodne fotele i przestrzeń na bagaże." },
  { icon: Luggage, title: "Duży bagażnik", desc: "Pojemny bagażnik na walizki, sprzęt sportowy i wyposażenie." },
];

const VacationTrips = () => (
  <>
    <HeroSection
      title="Wyjazdy wakacyjne po Europie"
      subtitle="Komfortowe podróże busem do najpiękniejszych miejsc w Europie. Morze, góry, miasta — zabieramy Cię wszędzie!"
      image={vacationImg}
      ctaText="Zaplanuj wyjazd"
    />

    <section className="py-20">
      <div className="container">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4 text-foreground">
          Dlaczego warto wybrać nas?
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Nasze busy Opel Vivaro, Renault Trafic i Ford Tourneo Custom są przygotowane na długodystansowe wyprawy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                <b.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <FleetSection />
    <ContactBanner />
  </>
);

export default VacationTrips;

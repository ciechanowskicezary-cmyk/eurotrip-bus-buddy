import HeroSection from "@/components/HeroSection";
import ContactBanner from "@/components/ContactBanner";
import FleetSection from "@/components/FleetSection";
import driverImg from "@/assets/driver-service.jpg";
import { UserCheck, Clock, Route, Star, Headphones, Car } from "lucide-react";

const advantages = [
  { icon: UserCheck, title: "Profesjonalny kierowca", desc: "Doświadczony, kulturalny kierowca z pełnymi uprawnieniami." },
  { icon: Clock, title: "Na Twoje życzenie", desc: "Kierowca do dyspozycji na godziny, dni lub dłuższe wyjazdy." },
  { icon: Route, title: "Dowolna trasa", desc: "Ty decydujesz dokąd jedziemy — bez ograniczeń." },
  { icon: Star, title: "Wysoki standard", desc: "Zadbane pojazdy i najwyższa jakość obsługi." },
  { icon: Headphones, title: "Stały kontakt", desc: "Jesteśmy dostępni telefonicznie i mailowo 7 dni w tygodniu." },
  { icon: Car, title: "Nowoczesna flota", desc: "Opel Vivaro, Renault Trafic, Ford Tourneo Custom do wyboru." },
];

const DriverRental = () => (
  <>
    <HeroSection
      title="Wynajem busa z kierowcą"
      subtitle="Profesjonalny kierowca i komfortowy bus do Twojej dyspozycji. Eventy, wycieczki, spotkania biznesowe — jesteśmy gotowi."
      image={driverImg}
      ctaText="Zapytaj o dostępność"
    />

    <section className="py-20">
      <div className="container">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4 text-foreground">
          Wynajem z kierowcą — pełen komfort
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Nie musisz się martwić o prowadzenie — nasz kierowca zajmie się wszystkim, a Ty skupisz się na podróży.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((a) => (
            <div key={a.title} className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                <a.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{a.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <FleetSection />
    <ContactBanner />
  </>
);

export default DriverRental;

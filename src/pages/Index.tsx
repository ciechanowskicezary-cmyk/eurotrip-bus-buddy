import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import FleetSection from "@/components/FleetSection";
import ContactBanner from "@/components/ContactBanner";
import SEO from "@/components/SEO";
import heroBus from "@/assets/hero-bus.jpg";
import vacationImg from "@/assets/vacation-trip.jpg";
import airportImg from "@/assets/airport-transfer.jpg";
import driverImg from "@/assets/driver-service.jpg";

const Index = () => (
  <>
    <SEO
      title="Wynajem busa 8 i 9 osobowego — TwojTransporter.pl"
      description="Profesjonalny wynajem busów 8 i 9 osobowych z kierowcą i bez. Wyjazdy wakacyjne po Europie, transfery lotniskowe. Opel Vivaro, Renault Trafic, Ford Tourneo. Tel. 606 988 383."
      path="/"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "TwojTransporter.pl",
        url: "https://twojtransporter.pl",
        inLanguage: "pl-PL",
      }}
    />

    <HeroSection
      title="Wynajem busa 8 i 9 osobowego — komfortowy transport po Europie"
      subtitle="Profesjonalny wynajem busów na wyjazdy wakacyjne, transfery lotniskowe i przewozy z kierowcą. Opel Vivaro, Renault Trafic, Ford Tourneo Custom — gotowe na każdą trasę."
      image={heroBus}
      ctaText="Zadzwoń: 606 988 383"
    />

    <section className="py-20">
      <div className="container">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4 text-foreground">Nasze usługi wynajmu busa</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Specjalizujemy się w wynajmie busów 8 i 9 osobowych dla rodzin, grup znajomych oraz firm.
          Wybierz usługę dopasowaną do Twoich potrzeb — od krótkiego transferu lotniskowego po wielodniową
          wyprawę po Europie z doświadczonym kierowcą.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Wyjazdy wakacyjne po Europie"
            description="Wynajem busa na urlop nad morze, w góry lub do europejskich miast. Komfortowa podróż dla całej rodziny lub grupy znajomych."
            image={vacationImg}
            link="/wyjazdy-wakacyjne"
          />
          <ServiceCard
            title="Transfery lotniskowe"
            description="Punktualny przewóz busem na lotniska w Polsce i Europie. Monitorujemy godziny lotów — bez stresu i pośpiechu."
            image={airportImg}
            link="/transfery-lotniskowe"
          />
          <ServiceCard
            title="Wynajem busa z kierowcą"
            description="Doświadczony kierowca i komfortowy bus do Twojej dyspozycji. Idealne na wesela, eventy i wyjazdy biznesowe."
            image={driverImg}
            link="/wynajem-z-kierowca"
          />
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted/30">
      <div className="container max-w-4xl">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground">
          Dlaczego warto wynająć busa w TwojTransporter.pl?
        </h2>
        <div className="space-y-4 text-foreground/80 leading-relaxed">
          <p>
            <strong>Wynajem busa 8 i 9 osobowego</strong> to najwygodniejsze rozwiązanie dla grup, które chcą
            podróżować razem — bez konieczności dzielenia się na kilka samochodów osobowych. Nasza flota obejmuje
            sprawdzone modele: <strong>Opel Vivaro</strong>, <strong>Renault Trafic</strong> oraz
            <strong> Ford Tourneo Custom</strong>, regularnie serwisowane i przygotowane do długodystansowych
            wypraw po całej Europie.
          </p>
          <p>
            Każdy z naszych busów oferuje przestronne wnętrze, klimatyzację, wygodne fotele oraz pojemny
            bagażnik mieszczący walizki, sprzęt narciarski czy rowery. Pojazdy posiadają pełne ubezpieczenie
            (OC, AC, Assistance) oraz aktualne przeglądy techniczne — możesz spokojnie planować nawet
            kilkutysięczne trasy.
          </p>
          <p>
            Działamy na terenie całej Polski i Europy. Najczęściej organizujemy wyjazdy do Niemiec, Czech,
            Austrii, Włoch, Chorwacji, Francji oraz Hiszpanii. Świadczymy usługi zarówno klientom indywidualnym,
            jak i firmom — z elastycznym podejściem do każdego zlecenia.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/wyjazdy-wakacyjne" className="block bg-card p-5 rounded-xl border border-border hover:border-primary transition-colors">
            <h3 className="font-heading font-bold text-foreground mb-1">Wakacje w Europie</h3>
            <p className="text-sm text-muted-foreground">Sprawdź ofertę wyjazdów →</p>
          </Link>
          <Link to="/transfery-lotniskowe" className="block bg-card p-5 rounded-xl border border-border hover:border-primary transition-colors">
            <h3 className="font-heading font-bold text-foreground mb-1">Lotniska</h3>
            <p className="text-sm text-muted-foreground">Zarezerwuj transfer →</p>
          </Link>
          <Link to="/wynajem-z-kierowca" className="block bg-card p-5 rounded-xl border border-border hover:border-primary transition-colors">
            <h3 className="font-heading font-bold text-foreground mb-1">Bus z kierowcą</h3>
            <p className="text-sm text-muted-foreground">Zobacz szczegóły →</p>
          </Link>
        </div>
      </div>
    </section>

    <FleetSection />
    <ContactBanner />
  </>
);

export default Index;

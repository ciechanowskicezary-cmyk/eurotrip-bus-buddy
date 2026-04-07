import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import FleetSection from "@/components/FleetSection";
import ContactBanner from "@/components/ContactBanner";
import heroBus from "@/assets/hero-bus.jpg";
import vacationImg from "@/assets/vacation-trip.jpg";
import airportImg from "@/assets/airport-transfer.jpg";
import driverImg from "@/assets/driver-service.jpg";

const Index = () => (
  <>
    <HeroSection
      title="Twój komfortowy transport po Europie"
      subtitle="Wynajem busów 8 i 9 osobowych — wyjazdy wakacyjne, transfery lotniskowe i wynajem z kierowcą. Profesjonalnie i bezpiecznie."
      image={heroBus}
      ctaText="Zadzwoń teraz"
    />

    <section className="py-20">
      <div className="container">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4 text-foreground">Nasze usługi</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Oferujemy kompleksowe usługi transportowe dostosowane do Twoich potrzeb.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Wyjazdy wakacyjne"
            description="Podróżuj komfortowo po całej Europie. Organizujemy wyjazdy wakacyjne dla rodzin i grup znajomych."
            image={vacationImg}
            link="/wyjazdy-wakacyjne"
          />
          <ServiceCard
            title="Transfery lotniskowe"
            description="Punktualny i wygodny transport na lotnisko i z lotniska. Monitorujemy loty w czasie rzeczywistym."
            image={airportImg}
            link="/transfery-lotniskowe"
          />
          <ServiceCard
            title="Wynajem z kierowcą"
            description="Profesjonalny kierowca do Twojej dyspozycji. Idealny na eventy, spotkania biznesowe i wycieczki."
            image={driverImg}
            link="/wynajem-z-kierowca"
          />
        </div>
      </div>
    </section>

    <FleetSection />
    <ContactBanner />
  </>
);

export default Index;

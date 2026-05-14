import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ContactBanner from "@/components/ContactBanner";
import FleetSection from "@/components/FleetSection";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
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

const occasions = [
  { title: "Wesela i imprezy okolicznościowe", desc: "Bezpieczny transport gości — bez konieczności dzielenia się na samochody i szukania kierowców." },
  { title: "Wyjazdy biznesowe", desc: "Komfortowy przewóz zespołu na konferencje, szkolenia i spotkania w Polsce i za granicą." },
  { title: "Wycieczki turystyczne", desc: "Zwiedzanie miast i atrakcji bez stresu związanego z prowadzeniem samochodu w obcym kraju." },
  { title: "Transfer na lotnisko", desc: "Spokojna podróż na lotnisko, gdzie kierowca zajmie się prowadzeniem i bagażem." },
];

const faqs = [
  {
    q: "Ile kosztuje wynajem busa z kierowcą?",
    a: "Cena zależy od długości wynajmu, trasy oraz liczby dni. Skontaktuj się z nami pod numerem 606 988 383, a przygotujemy indywidualną wycenę.",
  },
  {
    q: "Czy mogę wynająć busa z kierowcą na cały dzień?",
    a: "Tak, oferujemy wynajem godzinowy, dzienny oraz wielodniowy. Kierowca jest do Twojej dyspozycji według ustalonego harmonogramu.",
  },
  {
    q: "Kto pokrywa koszty paliwa i parkingu?",
    a: "Szczegóły omawiamy indywidualnie podczas wyceny — przedstawimy przejrzystą ofertę bez ukrytych kosztów.",
  },
];

const DriverRental = () => (
  <>
    <SEO
      title="Wynajem busa z kierowcą 8/9 osób — wesela, eventy | TwojTransporter.pl"
      description="Wynajem busa z kierowcą — komfort i bezpieczeństwo dla Twojej grupy. Wesela, wycieczki, transfery, wyjazdy biznesowe. Opel Vivaro, Renault Trafic, Ford Tourneo. Tel. 606 988 383."
      path="/wynajem-z-kierowca"
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Wynajem busa z kierowcą",
          provider: { "@type": "LocalBusiness", name: "TwojTransporter.pl", telephone: "+48606988383" },
          areaServed: ["Poland", "Europe"],
          serviceType: "Wynajem busa z kierowcą",
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ]}
    />
    <Breadcrumbs items={[{ label: "Wynajem z kierowcą" }]} />

    <HeroSection
      title="Wynajem busa z kierowcą — 8 i 9 osób"
      subtitle="Profesjonalny kierowca i komfortowy bus do Twojej dyspozycji. Wesela, eventy, wyjazdy biznesowe i wycieczki — jesteśmy gotowi."
      image={driverImg}
      ctaText="Zapytaj o dostępność"
    />

    <section className="py-20">
      <div className="container max-w-4xl">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground">
          Bus z kierowcą — dla kogo to rozwiązanie?
        </h2>
        <div className="space-y-4 text-foreground/80 leading-relaxed">
          <p>
            <strong>Wynajem busa z kierowcą</strong> to wybór wszystkich, którzy chcą podróżować w pełnym
            komforcie — bez konieczności samodzielnego prowadzenia, planowania trasy czy szukania parkingu.
            Nasi <strong>doświadczeni kierowcy</strong> doskonale znają polskie i europejskie trasy, posiadają
            wieloletnią praktykę oraz wszystkie wymagane uprawnienia.
          </p>
          <p>
            To rozwiązanie szczególnie sprawdza się przy <strong>weselach</strong>, transporcie gości,
            <strong> wycieczkach turystycznych</strong>, <strong>eventach firmowych</strong>,
            <strong> transferach na lotnisko</strong> oraz dłuższych <strong>wyjazdach po Europie</strong>.
            Sam decydujesz o trasie i harmonogramie — my zajmiemy się resztą.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {occasions.map((o) => (
            <div key={o.title} className="bg-card p-5 rounded-xl border border-border">
              <h3 className="font-heading font-bold text-foreground mb-2">{o.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12 text-foreground">
          Wynajem z kierowcą — kluczowe korzyści
        </h2>
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

    <section className="py-20">
      <div className="container max-w-3xl">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-foreground">FAQ — Wynajem z kierowcą</h2>
        <div className="space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="bg-card p-6 rounded-xl border border-border">
              <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{f.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-accent rounded-xl">
          <p className="text-foreground mb-3"><strong>Sprawdź też:</strong></p>
          <div className="flex flex-wrap gap-3">
            <Link to="/wyjazdy-wakacyjne" className="text-primary font-semibold hover:underline">→ Wyjazdy wakacyjne</Link>
            <Link to="/transfery-lotniskowe" className="text-primary font-semibold hover:underline">→ Transfery lotniskowe</Link>
            <Link to="/kontakt" className="text-primary font-semibold hover:underline">→ Kontakt</Link>
          </div>
        </div>
      </div>
    </section>

    <FleetSection />
    <ContactBanner />
  </>
);

export default DriverRental;

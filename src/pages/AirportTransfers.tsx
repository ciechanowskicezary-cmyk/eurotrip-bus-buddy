import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ContactBanner from "@/components/ContactBanner";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import airportImg from "@/assets/airport-transfer.jpg";
import { Clock, Plane, CreditCard, MapPin, ShieldCheck, Users } from "lucide-react";

const features = [
  { icon: Clock, title: "Punktualność", desc: "Zawsze na czas — monitorujemy godziny przylotów i odlotów." },
  { icon: Plane, title: "Wszystkie lotniska", desc: "Obsługujemy lotniska w całej Polsce i Europie." },
  { icon: CreditCard, title: "Stała cena", desc: "Znasz cenę przed podróżą — bez ukrytych kosztów." },
  { icon: MapPin, title: "Door-to-door", desc: "Odbieramy spod drzwi i dowozimy pod sam terminal." },
  { icon: ShieldCheck, title: "Profesjonalizm", desc: "Doświadczeni kierowcy znający trasy do lotnisk." },
  { icon: Users, title: "Grupy do 9 osób", desc: "Idealne dla rodzin i grup wylatujących razem." },
];

const airports = [
  "Lotnisko Chopina (Warszawa)",
  "Kraków-Balice",
  "Katowice-Pyrzowice",
  "Wrocław",
  "Gdańsk im. Lecha Wałęsy",
  "Poznań-Ławica",
  "Berlin Brandenburg",
  "Praga-Ruzyně",
];

const faqs = [
  {
    q: "Jak zamówić transfer lotniskowy busem?",
    a: "Wystarczy zadzwonić pod numer 606 988 383 lub napisać na twojtransporter@gmail.com, podając datę, godzinę lotu, liczbę osób i adres odbioru. Potwierdzamy rezerwację oraz cenę.",
  },
  {
    q: "Czy monitorujecie godziny lotów?",
    a: "Tak. Sprawdzamy aktualne informacje o przylotach i odlotach — w przypadku opóźnienia lotu kierowca poczeka, bez dodatkowych opłat.",
  },
  {
    q: "Ile kosztuje transfer lotniskowy busem?",
    a: "Cena jest stała i znana przed podróżą — zależy od trasy oraz liczby pasażerów. Skontaktuj się z nami, aby otrzymać dokładną wycenę.",
  },
  {
    q: "Czy obsługujecie transfery międzynarodowe?",
    a: "Tak, dowozimy klientów na lotniska w Niemczech, Czechach i innych krajach europejskich.",
  },
];

const AirportTransfers = () => (
  <>
    <SEO
      title="Transfery lotniskowe busem 8/9 osób Łódź — punktualnie | TwojTransporter.pl"
      description="Transfery lotniskowe busem 8 i 9 osobowym Łódź i okolice. Punktualny przewóz na lotniska w Polsce i Europie, monitorowanie lotów, stała cena. Zarezerwuj: 606 988 383."
      path="/transfery-lotniskowe"
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Transfery lotniskowe busem",
          provider: { "@type": "LocalBusiness", name: "TwojTransporter.pl", telephone: "+48606988383", address: { "@type": "PostalAddress", "addressLocality": "Łódź", "addressCountry": "PL" } },
          areaServed: [{ "@type": "City", "name": "Łódź" }, { "@type": "AdministrativeArea", "name": "województwo łódzkie" }, "Poland", "Europe"],
          serviceType: "Transfer lotniskowy",
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
    <Breadcrumbs items={[{ label: "Transfery lotniskowe" }]} />

    <HeroSection
      title="Transfery lotniskowe busem 8 i 9 osobowym"
      subtitle="Punktualny i komfortowy transport na lotnisko oraz z lotniska. Bez stresu, z gwarancją terminowości."
      image={airportImg}
      ctaText="Zarezerwuj transfer"
    />

    <section className="py-20">
      <div className="container max-w-4xl">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground">
          Transfer lotniskowy busem — wygoda dla całej grupy
        </h2>
        <div className="space-y-4 text-foreground/80 leading-relaxed">
          <p>
            <strong>Transfer lotniskowy busem 8 lub 9 osobowym</strong> to najwygodniejszy sposób, by dotrzeć
            na lotnisko z całą rodziną, grupą znajomych lub zespołem firmowym. Eliminujesz stres związany
            z parkowaniem, korkami i koniecznością organizowania kilku samochodów. Kierowca odbierze
            wszystkich z jednego miejsca i dowiezie prosto pod terminal.
          </p>
          <p>
            Świadczymy usługi przewozu na wszystkie najważniejsze <strong>lotniska w Polsce</strong> oraz
            wybrane <strong>lotniska w Europie</strong>. Monitorujemy aktualny status lotu — jeśli samolot ma
            opóźnienie, kierowca dostosuje godzinę odbioru bez dodatkowych opłat. Cena ustalana jest z góry,
            dzięki czemu nie ma niespodzianek po zakończonej podróży.
          </p>
        </div>

        <div className="mt-8 bg-accent/40 p-6 rounded-xl">
          <h3 className="font-heading font-bold text-lg mb-3 text-foreground">Najczęściej obsługiwane lotniska:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-foreground/80">
            {airports.map((a) => (
              <li key={a} className="flex items-center gap-2"><Plane className="w-4 h-4 text-primary" />{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4 text-foreground">
          Jak działa transfer lotniskowy?
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Bezproblemowy transport busem na każde lotnisko — Opel Vivaro, Renault Trafic, Ford Tourneo Custom zawsze gotowe do drogi.
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

    <section className="py-20">
      <div className="container max-w-3xl">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-foreground">FAQ — Transfery lotniskowe</h2>
        <div className="space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="bg-card p-6 rounded-xl border border-border">
              <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{f.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-accent rounded-xl">
          <p className="text-foreground mb-3"><strong>Zobacz również:</strong></p>
          <div className="flex flex-wrap gap-3">
            <Link to="/wyjazdy-wakacyjne" className="text-primary font-semibold hover:underline">→ Wyjazdy wakacyjne</Link>
            <Link to="/wynajem-z-kierowca" className="text-primary font-semibold hover:underline">→ Wynajem z kierowcą</Link>
            <Link to="/kontakt" className="text-primary font-semibold hover:underline">→ Kontakt</Link>
          </div>
        </div>
      </div>
    </section>

    <ContactBanner />
  </>
);

export default AirportTransfers;

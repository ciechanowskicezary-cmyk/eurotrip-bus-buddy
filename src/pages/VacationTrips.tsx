import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ContactBanner from "@/components/ContactBanner";
import FleetSection from "@/components/FleetSection";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
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

const faqs = [
  {
    q: "Ile kosztuje wynajem busa na wakacje w Europie?",
    a: "Cena zależy od długości trasy, liczby dni i kierunku. Skontaktuj się z nami telefonicznie pod numerem 606 988 383 — przygotujemy indywidualną wycenę dopasowaną do Twojego wyjazdu.",
  },
  {
    q: "Do jakich krajów mogę pojechać wynajętym busem?",
    a: "Nasze busy są przygotowane do wyjazdów po całej Europie. Najczęściej organizujemy podróże do Niemiec, Czech, Austrii, Włoch, Chorwacji, Francji, Hiszpanii i Holandii.",
  },
  {
    q: "Czy mogę wynająć busa bez kierowcy?",
    a: "Tak. Oferujemy zarówno wynajem busa bez kierowcy (samodzielne prowadzenie), jak i opcję z naszym doświadczonym kierowcą.",
  },
  {
    q: "Ile osób zmieści się w busie?",
    a: "Nasze pojazdy Opel Vivaro, Renault Trafic i Ford Tourneo Custom oferują 8 lub 9 miejsc pasażerskich plus przestronny bagażnik.",
  },
];

const VacationTrips = () => (
  <>
    <SEO
      title="Wynajem busa na wakacje w Europie — wyjazdy 8/9 osób | TwojTransporter.pl"
      description="Wynajem busa 8 i 9 osobowego na wyjazdy wakacyjne po Europie. Morze, góry, miasta — komfort dla rodziny i grupy znajomych. Sprawdź ofertę i zarezerwuj termin."
      path="/wyjazdy-wakacyjne"
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Wynajem busa na wyjazdy wakacyjne po Europie",
          provider: { "@type": "LocalBusiness", name: "TwojTransporter.pl", telephone: "+48606988383" },
          areaServed: "Europe",
          serviceType: "Wynajem busa 8/9 osobowego",
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

    <HeroSection
      title="Wynajem busa na wakacje w Europie"
      subtitle="Komfortowe wyjazdy busem 8 i 9 osobowym do najpiękniejszych miejsc Europy. Morze, góry, miasta — zabieramy Cię wszędzie!"
      image={vacationImg}
      ctaText="Zaplanuj wyjazd"
    />

    <section className="py-20">
      <div className="container max-w-4xl">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground">
          Wyjazdy wakacyjne busem — komfort i swoboda dla całej grupy
        </h2>
        <div className="space-y-4 text-foreground/80 leading-relaxed">
          <p>
            Planujesz wakacje z rodziną lub przyjaciółmi i szukasz wygodnego sposobu na wspólną podróż?
            <strong> Wynajem busa 8 lub 9 osobowego</strong> to rozwiązanie tańsze i bardziej komfortowe niż
            jazda kilkoma samochodami osobowymi. Wszyscy podróżujecie razem, bez konieczności dzielenia się
            i szukania miejsca parkingowego dla kolejnych aut.
          </p>
          <p>
            Nasze busy — <strong>Opel Vivaro</strong>, <strong>Renault Trafic</strong> oraz
            <strong> Ford Tourneo Custom</strong> — zostały specjalnie przygotowane do wypraw długodystansowych.
            Każdy pojazd posiada klimatyzację, wygodne fotele, gniazda USB, oraz przestronny bagażnik
            mieszczący walizki, rowery, deski czy sprzęt narciarski.
          </p>
          <p>
            Najpopularniejsze kierunki wakacyjne, na które wynajmowane są nasze busy, to:
            <strong> Chorwacja</strong> (Istria, Dalmacja, Split, Dubrovnik), <strong>Włochy</strong>
            (Toskania, Wenecja, Riwiera Adriatycka), <strong>Hiszpania</strong> (Costa Brava, Barcelona),
            <strong> Francja</strong> (Lazurowe Wybrzeże), <strong>Niemcy</strong> i <strong>Austria</strong>
            (Alpy). Trasę i harmonogram dostosowujemy do Twoich preferencji.
          </p>
        </div>
      </div>
    </section>

    <section className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12 text-foreground">
          Dlaczego warto wybrać nasz bus na wakacje?
        </h2>
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

    <section className="py-20">
      <div className="container max-w-3xl">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-foreground">
          Najczęściej zadawane pytania
        </h2>
        <div className="space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="bg-card p-6 rounded-xl border border-border">
              <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{f.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-accent rounded-xl">
          <p className="text-foreground mb-3">
            <strong>Sprawdź również:</strong>
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/transfery-lotniskowe" className="text-primary font-semibold hover:underline">→ Transfery lotniskowe</Link>
            <Link to="/wynajem-z-kierowca" className="text-primary font-semibold hover:underline">→ Wynajem busa z kierowcą</Link>
            <Link to="/kontakt" className="text-primary font-semibold hover:underline">→ Skontaktuj się z nami</Link>
          </div>
        </div>
      </div>
    </section>

    <FleetSection />
    <ContactBanner />
  </>
);

export default VacationTrips;

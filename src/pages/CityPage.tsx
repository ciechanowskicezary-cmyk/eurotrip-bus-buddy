import { Link } from "react-router-dom";
import { MapPin, Plane, Clock, Phone, CheckCircle2, Users, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactBanner from "@/components/ContactBanner";
import SEO from "@/components/SEO";
import heroBus from "@/assets/hero-bus.jpg";
import { CityData } from "@/data/cities";

interface CityPageProps {
  city: CityData;
}

const CityPage = ({ city }: CityPageProps) => {
  const path = `/${city.slug}`;
  const title = `Wynajem busa ${city.name} 8 i 9 osobowego — transfery i wyjazdy | TwojTransporter.pl`;
  const description = `Wynajem busa 8 i 9 osobowego w ${city.nameLocative}. Transfery lotniskowe, wyjazdy wakacyjne po Europie, przewozy z kierowcą. ${city.distanceLodz}. Tel. 606 988 383.`;

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `TwojTransporter.pl — wynajem busa ${city.name}`,
    description,
    url: `https://twojtransporter.pl${path}`,
    telephone: "+48606988383",
    email: "twojtransporter@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Łódź",
      addressRegion: "województwo łódzkie",
      addressCountry: "PL",
    },
    areaServed: [
      { "@type": "City", name: city.name },
      ...city.neighborhoods.map((n) => ({ "@type": "City", name: n })),
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <SEO title={title} description={description} path={path} jsonLd={[localBusinessLd, faqLd]} />

      <HeroSection
        title={`Wynajem busa ${city.name} — 8 i 9 osobowy`}
        subtitle={city.intro}
        image={heroBus}
        ctaText="Zadzwoń: 606 988 383"
      />

      <Breadcrumbs items={[{ label: city.name }]} />

      {/* Intro section */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              {city.distanceLodz} · {city.population}
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground">
            Profesjonalny transport busem dla mieszkańców {city.nameGenitive} i okolic
          </h2>
          <div className="space-y-5 text-foreground/80 leading-relaxed">
            {city.uniqueParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Local highlights */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-5xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-8 text-foreground">
            Dlaczego klienci z {city.nameGenitive} wybierają TwojTransporter.pl
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {city.highlights.map((h) => (
              <div key={h} className="flex items-start gap-3 bg-card p-5 rounded-xl border border-border">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-foreground/80 text-sm leading-relaxed">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular routes */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3 text-foreground">
            Najczęstsze trasy busem z {city.nameGenitive}
          </h2>
          <p className="text-muted-foreground mb-8">
            Realizujemy zarówno krótkie transfery lokalne, jak i wielodniowe wyjazdy europejskie.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {city.popularRoutes.map((r) => (
              <div key={r.label} className="bg-card p-5 rounded-xl border border-border hover:border-primary transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Plane className="w-4 h-4 text-secondary" />
                  <h3 className="font-heading font-bold text-foreground">{r.label}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airport distance table */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3 text-foreground">
            Odległości do lotnisk z {city.nameGenitive}
          </h2>
          <p className="text-muted-foreground mb-8">
            Orientacyjne czasy przejazdu busem — uwzględniamy zawsze zapas na ewentualne korki.
          </p>
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left px-4 py-3 font-heading font-semibold text-foreground">Lotnisko</th>
                  <th className="text-left px-4 py-3 font-heading font-semibold text-foreground">Odległość</th>
                  <th className="text-left px-4 py-3 font-heading font-semibold text-foreground">Czas przejazdu</th>
                </tr>
              </thead>
              <tbody>
                {city.airportDistances.map((a) => (
                  <tr key={a.airport} className="border-t border-border">
                    <td className="px-4 py-3 text-foreground/80">{a.airport}</td>
                    <td className="px-4 py-3 text-foreground/80">{a.km}</td>
                    <td className="px-4 py-3 text-foreground/80 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                      {a.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3 text-foreground">
            Obsługujemy również okoliczne miejscowości
          </h2>
          <p className="text-muted-foreground mb-6">
            Transfer door-to-door realizujemy nie tylko z {city.nameGenitive}, ale również z sąsiednich miejscowości:
          </p>
          <div className="flex flex-wrap gap-2">
            {city.neighborhoods.map((n) => (
              <span key={n} className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-sm font-medium">
                <MapPin className="w-3.5 h-3.5" />
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-5xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-8 text-foreground">
            Usługi wynajmu busa w {city.nameLocative}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/wyjazdy-wakacyjne" className="block bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors">
              <Users className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-heading font-bold text-foreground mb-2">Wyjazdy wakacyjne</h3>
              <p className="text-sm text-muted-foreground">Chorwacja, Włochy, Hiszpania, Austria — wakacje busem dla całej grupy.</p>
            </Link>
            <Link to="/transfery-lotniskowe" className="block bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors">
              <Plane className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-heading font-bold text-foreground mb-2">Transfery lotniskowe</h3>
              <p className="text-sm text-muted-foreground">Punktualny przewóz na wszystkie lotniska w Polsce i Europie.</p>
            </Link>
            <Link to="/wynajem-z-kierowca" className="block bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors">
              <ShieldCheck className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-heading font-bold text-foreground mb-2">Bus z kierowcą</h3>
              <p className="text-sm text-muted-foreground">Doświadczony kierowca na wesela, eventy i wyjazdy firmowe.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-8 text-foreground">
            Najczęściej zadawane pytania — wynajem busa {city.name}
          </h2>
          <div className="space-y-4">
            {city.faqs.map((f) => (
              <div key={f.q} className="bg-card p-5 rounded-xl border border-border">
                <h3 className="font-heading font-bold text-foreground mb-2">{f.q}</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="tel:+48606988383">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold px-8 py-6 rounded-lg shadow-lg">
                <Phone className="w-5 h-5 mr-2" />
                Zadzwoń i zapytaj o wycenę
              </Button>
            </a>
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
};

export default CityPage;

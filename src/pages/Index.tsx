import { Link } from "react-router-dom";
import { Plane, Wallet, Clock, ShieldCheck, Users, MapPin, HeartHandshake, Luggage } from "lucide-react";
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
      title="Wynajem busa 8 i 9 osobowego Łódź — TwojTransporter.pl"
      description="Profesjonalny wynajem busów 8 i 9 osobowych z kierowcą i bez Łódź i okolice. Wyjazdy wakacyjne po Europie, transfery lotniskowe. Opel Vivaro, Renault Trafic, Ford Tourneo. Tel. 606 988 383."
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

    <section className="py-20">
      <div className="container max-w-5xl">
        <div className="flex items-center gap-3 mb-4">
          <Plane className="w-8 h-8 text-primary" />
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Przewodnik</span>
        </div>
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground">
          Wynajem busa na wakacje i transfery lotniskowe — kompletny przewodnik dla podróżujących grup
        </h2>
        <div className="space-y-5 text-foreground/80 leading-relaxed">
          <p>
            Planowanie wakacyjnego wyjazdu z większą grupą lub organizacja transferu na lotnisko to wyzwania,
            które potrafią skutecznie odebrać radość z podróży, jeśli wybierze się nieodpowiedni środek
            transportu. <strong>Wynajem busa 8 lub 9 osobowego w TwojTransporter.pl</strong> rozwiązuje oba
            te problemy: cała Twoja rodzina, ekipa znajomych lub zespół firmowy podróżuje razem, w jednym
            komfortowym pojeździe, bez konieczności dzielenia się na kilka samochodów osobowych, koordynowania
            kolumny aut na trasie i szukania miejsc parkingowych dla każdego z osobna. To rozwiązanie tańsze,
            wygodniejsze i znacznie bardziej przyjazne środowisku — jeden bus zastępuje od dwóch do trzech
            samochodów osobowych, co realnie obniża koszty paliwa i opłat drogowych liczonych na osobę.
          </p>
          <p>
            <strong>Wakacyjne wyjazdy busem po Europie</strong> stają się coraz popularniejsze, szczególnie
            w przypadku rodzin wielodzietnych, grup przyjaciół wybierających się nad Adriatyk lub w Alpy oraz
            firm organizujących wyjazdy integracyjne. Nasze busy — Opel Vivaro, Renault Trafic i Ford Tourneo
            Custom — zostały specjalnie przygotowane do długodystansowych tras. Każdy pojazd dysponuje
            klimatyzacją automatyczną, wygodnymi fotelami z regulacją, gniazdami USB do ładowania urządzeń,
            wzmocnionym zawieszeniem oraz przestronnym bagażnikiem mieszczącym walizki, deski snowboardowe,
            sprzęt narciarski, rowery czy wózki dziecięce. Najczęściej organizujemy wyjazdy do Chorwacji
            (Istria, Dalmacja, Split, Dubrownik), Włoch (Toskania, Wenecja, Riwiera Adriatycka),
            Hiszpanii (Costa Brava, Barcelona, Walencja), Francji (Lazurowe Wybrzeże, Paryż, Disneyland),
            Niemiec, Austrii (Alpy Tyrolskie), a także do popularnych polskich kurortów nadmorskich i górskich.
          </p>
          <p>
            <strong>Transfer lotniskowy busem</strong> to z kolei usługa, która zdejmuje z Ciebie cały stres
            związany z dojazdem na lotnisko. Zamiast martwić się o korki, parking długoterminowy, taksówki
            dla kilku osób z bagażem czy ryzyko spóźnienia na samolot, otrzymujesz punktualny, komfortowy
            przewóz door-to-door. Obsługujemy wszystkie główne lotniska w Polsce — Warszawa Chopina, Modlin,
            Kraków-Balice, Katowice-Pyrzowice, Wrocław, Poznań-Ławica, Gdańsk, Rzeszów — oraz lotniska
            zagraniczne, m.in. Berlin, Praga czy Wiedeń. Monitorujemy na bieżąco status Twojego lotu,
            dzięki czemu kierowca pojawia się na miejscu nawet w przypadku opóźnień samolotu, a Ty nie
            ponosisz dodatkowych opłat za czas oczekiwania. To rozwiązanie szczególnie cenione przez
            rodziny z dziećmi, osoby starsze oraz grupy wracające z wakacji z dużą ilością bagażu.
          </p>
          <p>
            <strong>Czym wynajem busa różni się od jazdy własnym samochodem lub przewozami zbiorowymi?</strong>
            Po pierwsze, masz pełną kontrolę nad trasą i harmonogramem — wybierasz godzinę wyjazdu, miejsca
            postojów, długość przerw i punkt docelowy. Po drugie, nie ryzykujesz zmęczenia za kierownicą po
            wielu godzinach prowadzenia, jeśli zdecydujesz się na opcję z naszym doświadczonym kierowcą.
            Po trzecie, koszty są przewidywalne i ustalane z góry — nie ma ukrytych dopłat, mnożników
            cenowych w sezonie ani niespodziewanych opłat za bagaż. Po czwarte, bus to wygoda nieosiągalna
            w samochodzie osobowym: każdy pasażer ma własne, pełnowymiarowe miejsce, a w środku jest
            przestrzeń, by się przeciągnąć, podać dziecku coś do picia czy spokojnie pracować na laptopie.
          </p>
          <p>
            Niezależnie od tego, czy planujesz dwutygodniową wyprawę po Bałkanach, weekendowy wyjazd
            w Tatry, transfer ślubny dla gości weselnych, dowóz zespołu na konferencję czy odbiór rodziny
            z lotniska po powrocie z urlopu — możesz nam zaufać. Działamy elastycznie, dostosowujemy ofertę
            do Twoich potrzeb i zawsze stawiamy na bezpieczeństwo oraz komfort pasażerów. Skontaktuj się
            z nami pod numerem <strong>606 988 383</strong> lub przez formularz kontaktowy — przygotujemy
            indywidualną wycenę w ciągu kilku godzin.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/wyjazdy-wakacyjne" className="text-primary font-semibold hover:underline">→ Zobacz ofertę wyjazdów wakacyjnych</Link>
          <Link to="/transfery-lotniskowe" className="text-primary font-semibold hover:underline">→ Sprawdź transfery lotniskowe</Link>
          <Link to="/kontakt" className="text-primary font-semibold hover:underline">→ Zapytaj o wycenę</Link>
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4 text-foreground">
          Zalety wynajmu busa w TwojTransporter.pl
        </h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Wybierając nas, otrzymujesz znacznie więcej niż sam transport. Oto najczęstsze obawy klientów —
          i konkretne odpowiedzi, dlaczego wynajem busa u nas to bezpieczna i opłacalna decyzja.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Wallet, title: "Stała cena bez ukrytych opłat", desc: "Otrzymujesz wycenę z góry — bez dopłat za bagaż, dodatkowe kilometry czy oczekiwanie. Cena ustalona w umowie się nie zmienia, nawet jeśli wzrosną ceny paliwa." },
            { icon: Clock, title: "Punktualność i monitoring lotów", desc: "Sprawdzamy status każdego lotu w czasie rzeczywistym. Kierowca czeka na Ciebie nawet przy opóźnieniach samolotu — bez dodatkowych kosztów za postój." },
            { icon: ShieldCheck, title: "Pełne ubezpieczenie i bezpieczeństwo", desc: "Wszystkie pojazdy mają OC, AC oraz pakiet Assistance. Regularne przeglądy techniczne, opony sezonowe i doświadczeni kierowcy z licencją zawodową." },
            { icon: Users, title: "Komfort dla 8-9 osób z bagażem", desc: "Cała grupa podróżuje razem, w jednym pojeździe. Każdy ma pełnowymiarowe miejsce, klimatyzację i miejsce na walizkę — bez ścisku i kompromisów." },
            { icon: MapPin, title: "Cała Polska i Europa", desc: "Realizujemy zarówno krótkie transfery lokalne, jak i wielodniowe wyprawy do Chorwacji, Włoch, Hiszpanii czy Austrii. Trasę i postoje dopasowujemy do Ciebie." },
            { icon: HeartHandshake, title: "Elastyczność i indywidualne podejście", desc: "Dostosowujemy harmonogram, godziny wyjazdu, miejsca odbioru i postojów. Obsługujemy klientów indywidualnych, rodziny, firmy i agencje eventowe." },
            { icon: Luggage, title: "Pojemny bagażnik i dodatkowy sprzęt", desc: "Bez problemu zabierzesz walizki, narty, snowboardy, rowery, wózki dziecięce czy sprzęt biwakowy. Na życzenie zapewniamy foteliki dziecięce." },
            { icon: Plane, title: "Doświadczenie i pozytywne opinie", desc: "Setki zrealizowanych wyjazdów wakacyjnych i transferów lotniskowych. Zaufały nam rodziny, grupy znajomych oraz firmy z całej Polski." },
          ].map((b) => (
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

export default Index;

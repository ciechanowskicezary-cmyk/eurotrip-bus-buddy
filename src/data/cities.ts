export interface CityData {
  slug: string;
  name: string;
  nameLocative: string; // w Pabianicach
  nameGenitive: string; // Pabianic
  intro: string;
  distanceLodz: string;
  population: string;
  highlights: string[]; // local context — landmarks, business, why people travel
  popularRoutes: { label: string; desc: string }[];
  airportDistances: { airport: string; km: string; time: string }[];
  neighborhoods: string[]; // okoliczne miejscowości / dzielnice
  uniqueParagraphs: string[]; // 3-4 paragraphs of unique local content
  faqs: { q: string; a: string }[];
}

export const cities: CityData[] = [
  {
    slug: "pabianice",
    name: "Pabianice",
    nameLocative: "Pabianicach",
    nameGenitive: "Pabianic",
    intro:
      "Wynajem busa 8 i 9 osobowego w Pabianicach — transfery lotniskowe, wyjazdy wakacyjne i przewozy z kierowcą dla mieszkańców powiatu pabianickiego.",
    distanceLodz: "15 km od centrum Łodzi",
    population: "ok. 64 tys. mieszkańców",
    highlights: [
      "Bliskość drogi ekspresowej S8 i S14 — szybki dojazd na lotnisko w Łodzi i Warszawie",
      "Dynamicznie rozwijający się sektor logistyczny i produkcyjny — częste wyjazdy biznesowe",
      "Aktywne kluby sportowe i organizacje, które zamawiają busa na wyjazdy turniejowe",
      "Bliskość Parku Krajobrazowego Wzniesień Łódzkich i Sulejowskiego",
    ],
    popularRoutes: [
      { label: "Pabianice → Lotnisko Chopina (WAW)", desc: "Transfer door-to-door, ok. 1h 45 min trasą S8" },
      { label: "Pabianice → Łódź Lublinek (LCJ)", desc: "Najbliższe lotnisko, ok. 25 min od centrum" },
      { label: "Pabianice → Modlin (WMI)", desc: "Wygodny transfer dla lotów Ryanair, ok. 2h 15 min" },
      { label: "Pabianice → Kraków-Balice (KRK)", desc: "Trasa A1, ok. 2h 30 min" },
      { label: "Pabianice → Chorwacja, Włochy, Hiszpania", desc: "Wakacyjne wyjazdy busem po Europie" },
    ],
    airportDistances: [
      { airport: "Łódź Lublinek", km: "20 km", time: "25 min" },
      { airport: "Warszawa Chopina", km: "150 km", time: "1h 45 min" },
      { airport: "Warszawa Modlin", km: "175 km", time: "2h 15 min" },
      { airport: "Katowice-Pyrzowice", km: "180 km", time: "2h 10 min" },
      { airport: "Wrocław", km: "200 km", time: "2h 20 min" },
    ],
    neighborhoods: ["Ksawerów", "Konstantynów Łódzki", "Dłutów", "Lutomiersk", "Dobroń", "Rzgów"],
    uniqueParagraphs: [
      "Pabianice to jedno z większych miast aglomeracji łódzkiej, w którym wielu mieszkańców regularnie korzysta z transportu na lotniska — zarówno w sprawach biznesowych, jak i turystycznych. Bliskość węzła autostradowego A1/A2 oraz dróg ekspresowych S8 i S14 sprawia, że transfer busem z Pabianic do Warszawy, Krakowa czy Wrocławia jest szybki i przewidywalny czasowo, bez stresu o korki w centrum Łodzi.",
      "Dla mieszkańców osiedli Bugaj, Piaski, Karniszewice oraz centrum Pabianic oferujemy odbiór spod własnego domu — bez konieczności dojazdu do Łodzi i parkowania samochodu na drogim parkingu długoterminowym. To realne oszczędności, szczególnie przy dłuższych wyjazdach wakacyjnych, kiedy parking lotniskowy potrafi kosztować więcej niż sam transfer.",
      "Pabianickie firmy produkcyjne, logistyczne oraz instytucje edukacyjne regularnie zamawiają u nas busy na wyjazdy integracyjne, konferencje branżowe oraz wycieczki szkolne. Realizujemy zarówno jednorazowe zlecenia, jak i stałą obsługę grupową — z fakturą VAT i pełną dokumentacją.",
      "Wyjazdy wakacyjne busem z Pabianic to wygodna alternatywa dla rodzin i grup znajomych planujących urlop nad Adriatykiem, w Alpach Tyrolskich, na Costa Brava lub w Toskanii. Cała grupa podróżuje razem, z bagażem, sprzętem sportowym i wózkami — bez stresu o przesiadki i opóźnienia komunikacji zbiorowej.",
    ],
    faqs: [
      {
        q: "Czy odbieracie klientów spod domu w Pabianicach?",
        a: "Tak, realizujemy transfery door-to-door z dowolnego adresu w Pabianicach oraz okolicznych miejscowościach (Ksawerów, Konstantynów Łódzki, Dłutów, Rzgów).",
      },
      {
        q: "Ile kosztuje transfer busem z Pabianic na lotnisko Chopina?",
        a: "Cena zależy od liczby osób, ilości bagażu i godziny przejazdu. Wycenę przygotowujemy indywidualnie — zadzwoń pod 606 988 383 lub wyślij zapytanie przez formularz.",
      },
      {
        q: "Czy bus zabierze nasze narty i bagaż na wyjazd w Alpy?",
        a: "Tak, nasze busy mają przestronny bagażnik mieszczący narty, snowboardy, walizki oraz dodatkowy sprzęt. Na życzenie zapewniamy też foteliki dziecięce.",
      },
    ],
  },
  {
    slug: "zgierz",
    name: "Zgierz",
    nameLocative: "Zgierzu",
    nameGenitive: "Zgierza",
    intro:
      "Wynajem busa 8 i 9 osobowego w Zgierzu — komfortowe transfery lotniskowe, wakacje busem po Europie oraz przewozy okolicznościowe dla mieszkańców powiatu zgierskiego.",
    distanceLodz: "10 km od centrum Łodzi",
    population: "ok. 55 tys. mieszkańców",
    highlights: [
      "Strategiczne położenie przy węźle autostrad A1 i A2 — najszybszy dojazd do Warszawy i Gdańska",
      "Centrum logistyczne aglomeracji łódzkiej — częste wyjazdy biznesowe i delegacje",
      "Bliskość Parku Krajobrazowego Wzniesień Łódzkich — popularne wycieczki grupowe",
      "Mieszkańcy często wybierają wyjazdy do Trójmiasta, Zakopanego i nad morze Bałtyckie",
    ],
    popularRoutes: [
      { label: "Zgierz → Lotnisko Chopina (WAW)", desc: "Trasa A2, ok. 1h 40 min" },
      { label: "Zgierz → Łódź Lublinek (LCJ)", desc: "Najbliższe lotnisko, ok. 20 min" },
      { label: "Zgierz → Gdańsk Rębiechowo", desc: "Komfortowy transfer A1, ok. 3h 30 min" },
      { label: "Zgierz → Berlin BER", desc: "Wyjazdy biznesowe, ok. 6h" },
      { label: "Zgierz → Włochy, Chorwacja, Austria", desc: "Wakacyjne busy po Europie" },
    ],
    airportDistances: [
      { airport: "Łódź Lublinek", km: "15 km", time: "20 min" },
      { airport: "Warszawa Chopina", km: "140 km", time: "1h 40 min" },
      { airport: "Warszawa Modlin", km: "160 km", time: "2h" },
      { airport: "Gdańsk Rębiechowo", km: "300 km", time: "3h 30 min" },
      { airport: "Katowice-Pyrzowice", km: "200 km", time: "2h 20 min" },
    ],
    neighborhoods: ["Aleksandrów Łódzki", "Ozorków", "Stryków", "Parzęczew", "Głowno", "Łęczyca"],
    uniqueParagraphs: [
      "Zgierz, leżący na północnych obrzeżach Łodzi przy węźle autostrad A1 i A2, jest jednym z najlepiej skomunikowanych miast w regionie. Transfer busem z Zgierza na lotnisko Chopina w Warszawie zajmuje niespełna 1h 40 min, a do Gdańska — tylko nieco ponad 3 godziny. To realna przewaga, którą doceniają zarówno klienci biznesowi, jak i rodziny wybierające się na wakacje.",
      "Naszą flotę regularnie wynajmują firmy logistyczne, transportowe i produkcyjne ze Zgierza oraz okolicznych Ozorkowa, Strykowa i Aleksandrowa Łódzkiego. Realizujemy przewozy delegacji, wyjazdy integracyjne, obsługę konferencji oraz cykliczne transfery pracowników na lotniska w Polsce i Europie.",
      "Mieszkańcy Zgierza chętnie korzystają z naszych busów również prywatnie — na wesela, komunie, wyjazdy nad morze do Łeby, Ustki czy Władysławowa, oraz na narty w Tatry, Beskidy i Alpy. Kompletna grupa podróżuje razem, z bagażem i sprzętem, bez konieczności dzielenia się na kilka samochodów.",
      "Wyjazdy wakacyjne busem ze Zgierza to także świetne rozwiązanie dla grup znajomych planujących europejskie wyprawy — chorwacka Dalmacja, włoska Toskania, austriackie Alpy Tyrolskie czy hiszpańska Costa Brava. Dzielenie kosztów na 8–9 osób sprawia, że transport per capita wychodzi znacznie taniej niż loty czy własne samochody.",
    ],
    faqs: [
      {
        q: "Czy odbieracie pasażerów z dowolnego adresu w Zgierzu?",
        a: "Tak, świadczymy transfery door-to-door z całego Zgierza oraz okolicznych miejscowości: Ozorków, Stryków, Aleksandrów Łódzki, Parzęczew.",
      },
      {
        q: "Jak szybko dotrę busem ze Zgierza na lotnisko w Warszawie?",
        a: "Trasą A2 dojazd na lotnisko Chopina zajmuje ok. 1h 40 min, na Modlin ok. 2h. Uwzględniamy zapas czasu na ewentualne korki.",
      },
      {
        q: "Czy organizujecie transport grupowy na konferencje i eventy firmowe?",
        a: "Tak, regularnie obsługujemy firmy ze Zgierza w zakresie transferów konferencyjnych, wyjazdów integracyjnych i delegacji. Wystawiamy faktury VAT.",
      },
    ],
  },
  {
    slug: "zdunska-wola",
    name: "Zduńska Wola",
    nameLocative: "Zduńskiej Woli",
    nameGenitive: "Zduńskiej Woli",
    intro:
      "Wynajem busa 8 i 9 osobowego w Zduńskiej Woli — wygodne transfery lotniskowe, wyjazdy wakacyjne do Chorwacji, Włoch i Hiszpanii oraz przewozy okolicznościowe.",
    distanceLodz: "50 km od Łodzi",
    population: "ok. 41 tys. mieszkańców",
    highlights: [
      "Ważny węzeł kolejowy i drogowy zachodniej części województwa łódzkiego",
      "Bliskość drogi ekspresowej S8 — szybki dojazd na lotnisko w Łodzi i Warszawie",
      "Sanktuarium Świętego Maksymiliana Marii Kolbego — częste pielgrzymki grupowe",
      "Aktywne społeczności sportowe i parafialne organizujące wyjazdy",
    ],
    popularRoutes: [
      { label: "Zduńska Wola → Łódź Lublinek (LCJ)", desc: "Najbliższe lotnisko, ok. 50 min" },
      { label: "Zduńska Wola → Warszawa Chopina", desc: "Trasa S8/A2, ok. 2h 20 min" },
      { label: "Zduńska Wola → Wrocław", desc: "Wygodny dojazd, ok. 1h 50 min" },
      { label: "Zduńska Wola → Poznań Ławica", desc: "Trasa A2, ok. 2h" },
      { label: "Zduńska Wola → Chorwacja, Włochy, Niemcy", desc: "Wakacyjne wyjazdy busem" },
    ],
    airportDistances: [
      { airport: "Łódź Lublinek", km: "55 km", time: "50 min" },
      { airport: "Wrocław Strachowice", km: "160 km", time: "1h 50 min" },
      { airport: "Poznań Ławica", km: "180 km", time: "2h" },
      { airport: "Warszawa Chopina", km: "200 km", time: "2h 20 min" },
      { airport: "Katowice-Pyrzowice", km: "180 km", time: "2h 15 min" },
    ],
    neighborhoods: ["Sieradz", "Łask", "Szadek", "Zapolice", "Wróblew", "Pabianice"],
    uniqueParagraphs: [
      "Zduńska Wola, położona w zachodniej części województwa łódzkiego, jest naturalnym punktem startowym dla wielu wyjazdów na lotniska w Warszawie, Wrocławiu i Poznaniu. Dzięki bliskości drogi ekspresowej S8 oraz autostrady A2 dojazd busem z Zduńskiej Woli na każde z tych lotnisk jest płynny i przewidywalny czasowo — bez konieczności przesiadek i z gwarancją punktualności.",
      "Realizujemy regularne transfery z Zduńskiej Woli, Sieradza, Łasku oraz Szadku — odbieramy klientów spod własnego domu i dowozimy bezpośrednio pod terminal. To rozwiązanie szczególnie cenione przez rodziny z małymi dziećmi, osoby starsze oraz grupy wracające z wakacji z dużą ilością bagażu.",
      "Sanktuarium Świętego Maksymiliana w Zduńskiej Woli przyciąga liczne pielgrzymki, a aktywne społeczności parafialne często organizują wspólne wyjazdy do Częstochowy, Kalwarii Zebrzydowskiej, Lichenia czy Krakowa. Nasze busy z kierowcą sprawdzają się również podczas wyjazdów weselnych, komunijnych i okolicznościowych.",
      "Wakacyjne wyjazdy busem z Zduńskiej Woli do Chorwacji, Włoch, Hiszpanii czy nad polskie Bałtyk to wygoda nieosiągalna w samochodzie osobowym — cała grupa, bagaż, rowery i sprzęt mieszczą się w jednym pojeździe, a koszt podzielony na 8–9 osób jest niższy niż przeloty.",
    ],
    faqs: [
      {
        q: "Ile zajmuje transfer busem ze Zduńskiej Woli na lotnisko w Warszawie?",
        a: "Trasą S8/A2 dojazd na Lotnisko Chopina zajmuje ok. 2h 20 min, a na Modlin ok. 2h 40 min — uwzględniamy rezerwę na korki w okolicach Warszawy.",
      },
      {
        q: "Czy organizujecie wyjazdy pielgrzymkowe?",
        a: "Tak, regularnie obsługujemy pielgrzymki i wyjazdy parafialne ze Zduńskiej Woli — Częstochowa, Licheń, Kalwaria Zebrzydowska, Kraków-Łagiewniki.",
      },
      {
        q: "Czy macie busa z foteliki dziecięcymi?",
        a: "Tak, na życzenie zapewniamy foteliki i podstawki odpowiednie do wieku dziecka — wystarczy zaznaczyć przy rezerwacji.",
      },
    ],
  },
  {
    slug: "lowicz",
    name: "Łowicz",
    nameLocative: "Łowiczu",
    nameGenitive: "Łowicza",
    intro:
      "Wynajem busa 8 i 9 osobowego w Łowiczu — punktualne transfery lotniskowe do Warszawy i Łodzi, wyjazdy wakacyjne busem oraz przewozy grupowe dla mieszkańców Ziemi Łowickiej.",
    distanceLodz: "50 km od Łodzi",
    population: "ok. 28 tys. mieszkańców",
    highlights: [
      "Strategiczne położenie przy autostradzie A2 — najszybszy dojazd do Warszawy w regionie",
      "Bogate tradycje folklorystyczne — turyści i goście weselni z całej Polski",
      "Bliskość Bolimowskiego Parku Krajobrazowego — wycieczki grupowe i wyjazdy szkolne",
      "Ważne sanktuarium maryjne — pielgrzymki i wyjazdy parafialne",
    ],
    popularRoutes: [
      { label: "Łowicz → Warszawa Chopina (WAW)", desc: "Najszybszy dojazd A2, ok. 1h 10 min" },
      { label: "Łowicz → Warszawa Modlin (WMI)", desc: "Trasa S7, ok. 1h 30 min" },
      { label: "Łowicz → Łódź Lublinek (LCJ)", desc: "Trasa A2, ok. 50 min" },
      { label: "Łowicz → Berlin / Drezno", desc: "Wyjazdy autokarowe i biznesowe" },
      { label: "Łowicz → wyjazdy wakacyjne po Europie", desc: "Chorwacja, Włochy, Niemcy, Hiszpania" },
    ],
    airportDistances: [
      { airport: "Warszawa Chopina", km: "85 km", time: "1h 10 min" },
      { airport: "Warszawa Modlin", km: "100 km", time: "1h 30 min" },
      { airport: "Łódź Lublinek", km: "50 km", time: "50 min" },
      { airport: "Poznań Ławica", km: "250 km", time: "2h 40 min" },
      { airport: "Katowice-Pyrzowice", km: "250 km", time: "2h 40 min" },
    ],
    neighborhoods: ["Bielawy", "Domaniewice", "Kiernozia", "Łyszkowice", "Zduny", "Skierniewice"],
    uniqueParagraphs: [
      "Łowicz, dzięki położeniu bezpośrednio przy autostradzie A2 łączącej Warszawę z Poznaniem i Berlinem, jest jednym z najlepiej skomunikowanych miast województwa łódzkiego. Transfer busem z Łowicza na lotnisko Chopina zajmuje zaledwie nieco ponad godzinę — znacznie krócej niż z większości miejscowości w regionie. To kluczowy atut dla osób, które cenią punktualność i komfort.",
      "Obsługujemy klientów z całej Ziemi Łowickiej — Bielawy, Domaniewice, Kiernozia, Łyszkowice, Zduny, a także z sąsiednich Skierniewic. Odbiór pasażerów spod własnego domu jest dla nas standardem, niezależnie od pory dnia i nocy. Monitorujemy status każdego lotu, więc nawet w przypadku opóźnień samolotu kierowca będzie czekać bez dodatkowych opłat.",
      "Łowickie tradycje folklorystyczne i Boże Ciało przyciągają turystów z całej Polski i Europy. Często organizujemy transfery gości weselnych, uczestników festiwali oraz grup turystycznych odwiedzających skansen, bazylikę katedralną i Muzeum w Łowiczu. Nasze busy z doświadczonym kierowcą gwarantują punktualność i komfort, niezależnie od okazji.",
      "Dla rodzin i grup znajomych z Łowicza świadczymy również wakacyjne przewozy busem do Chorwacji, Włoch, Hiszpanii, Austrii oraz polskich kurortów nadmorskich i górskich. Cała grupa, bagaż, narty czy rowery — wszystko w jednym komfortowym pojeździe.",
    ],
    faqs: [
      {
        q: "Czy dojazd busem z Łowicza na lotnisko Chopina jest szybki?",
        a: "Tak, dzięki bezpośredniemu dostępowi do autostrady A2 transfer zajmuje ok. 1h 10 min — to jedno z najlepszych połączeń w regionie.",
      },
      {
        q: "Obsługujecie wesela i uroczystości w Łowiczu?",
        a: "Tak, regularnie zapewniamy transport gości weselnych i uczestników uroczystości — odbieramy z hoteli, dworców i prywatnych adresów.",
      },
      {
        q: "Czy zabierzecie naszą grupę z Łowicza na pielgrzymkę do Częstochowy?",
        a: "Oczywiście, organizujemy wyjazdy pielgrzymkowe do Częstochowy, Lichenia i innych sanktuariów. Doświadczeni kierowcy i komfortowe busy.",
      },
    ],
  },
  {
    slug: "brzeziny",
    name: "Brzeziny",
    nameLocative: "Brzezinach",
    nameGenitive: "Brzezin",
    intro:
      "Wynajem busa 8 i 9 osobowego w Brzezinach — wygodne transfery lotniskowe, wyjazdy wakacyjne po Europie i okolicznościowy przewóz grup z powiatu brzezińskiego.",
    distanceLodz: "20 km od centrum Łodzi",
    population: "ok. 12 tys. mieszkańców",
    highlights: [
      "Bliskość Łodzi i Parku Krajobrazowego Wzniesień Łódzkich",
      "Dogodny dojazd drogą krajową 72 i autostradą A1",
      "Tradycje krawieckie — częste wyjazdy biznesowe do hurtowni w Polsce i Europie",
      "Aktywne grupy sportowe i parafialne korzystające z transportu grupowego",
    ],
    popularRoutes: [
      { label: "Brzeziny → Łódź Lublinek (LCJ)", desc: "Najbliższe lotnisko, ok. 30 min" },
      { label: "Brzeziny → Warszawa Chopina", desc: "Trasa A2, ok. 1h 30 min" },
      { label: "Brzeziny → Warszawa Modlin", desc: "Trasa A2/S7, ok. 1h 50 min" },
      { label: "Brzeziny → Katowice-Pyrzowice", desc: "Trasa A1, ok. 2h" },
      { label: "Brzeziny → Niemcy, Czechy, Włochy", desc: "Wakacyjne i biznesowe wyjazdy busem" },
    ],
    airportDistances: [
      { airport: "Łódź Lublinek", km: "25 km", time: "30 min" },
      { airport: "Warszawa Chopina", km: "120 km", time: "1h 30 min" },
      { airport: "Warszawa Modlin", km: "150 km", time: "1h 50 min" },
      { airport: "Katowice-Pyrzowice", km: "180 km", time: "2h" },
      { airport: "Wrocław Strachowice", km: "220 km", time: "2h 30 min" },
    ],
    neighborhoods: ["Koluszki", "Jeżów", "Dmosin", "Rogów", "Stryków", "Andrespol"],
    uniqueParagraphs: [
      "Brzeziny, mimo niewielkich rozmiarów, są ważnym punktem na mapie aglomeracji łódzkiej — bliskość autostrady A1, drogi krajowej 72 oraz Łodzi sprawia, że dojazd busem do każdego z polskich lotnisk jest szybki i wygodny. Transfer na lotnisko w Łodzi zajmuje ok. 30 minut, na lotnisko Chopina w Warszawie — ok. 1,5 godziny.",
      "Brzeziny słyną z tradycji krawieckich i licznych firm odzieżowych — wielu przedsiębiorców regularnie korzysta z naszych busów na wyjazdy targowe do Berlina, Wrocławia, Poznania czy Łodzi. Realizujemy zarówno jednorazowe zlecenia, jak i stałą obsługę firmową z fakturą VAT.",
      "Dla mieszkańców Brzezin, Koluszek, Jeżowa, Dmosina i Rogowa świadczymy transfery door-to-door — odbieramy spod własnego domu, niezależnie od godziny wylotu. To rozwiązanie tańsze i wygodniejsze niż parkowanie samochodu na lotniskowym parkingu długoterminowym, szczególnie przy dłuższych urlopach.",
      "Wyjazdy wakacyjne busem z Brzezin to wygoda dla całej rodziny lub grupy znajomych — cała ekipa podróżuje razem, z bagażem, wózkami i sprzętem sportowym. Najczęściej organizujemy wyjazdy do Chorwacji, Włoch, Niemiec i Austrii, ale realizujemy też trasy po Polsce.",
    ],
    faqs: [
      {
        q: "Jak daleko jest z Brzezin na lotnisko w Łodzi?",
        a: "To zaledwie ok. 25 km i 30 minut jazdy — najbliższe lotnisko dla mieszkańców Brzezin.",
      },
      {
        q: "Czy obsługujecie również mniejsze miejscowości wokół Brzezin?",
        a: "Tak, regularnie odbieramy klientów z Koluszek, Jeżowa, Dmosina, Rogowa, Strykowa i Andrespola.",
      },
      {
        q: "Czy mogę dostać fakturę VAT za transfer?",
        a: "Oczywiście, wystawiamy faktury VAT dla firm i osób fizycznych — wystarczy podać dane przy rezerwacji.",
      },
    ],
  },
  {
    slug: "tomaszow-mazowiecki",
    name: "Tomaszów Mazowiecki",
    nameLocative: "Tomaszowie Mazowieckim",
    nameGenitive: "Tomaszowa Mazowieckiego",
    intro:
      "Wynajem busa 8 i 9 osobowego w Tomaszowie Mazowieckim — transfery na lotniska w Warszawie, Łodzi i Krakowie, wyjazdy wakacyjne busem oraz przewozy okolicznościowe.",
    distanceLodz: "60 km od Łodzi",
    population: "ok. 60 tys. mieszkańców",
    highlights: [
      "Położenie przy autostradzie A1 — szybki dojazd na lotnisko w Łodzi, Warszawie i Katowicach",
      "Bliskość Spały, Sulejowskiego Parku Krajobrazowego i Niebieskich Źródeł — atrakcyjne wycieczki grupowe",
      "Rozwinięty sektor produkcyjny i hutnictwo szkła — częste wyjazdy biznesowe",
      "Aktywne kluby sportowe, parafie i organizacje korzystające z transportu grupowego",
    ],
    popularRoutes: [
      { label: "Tomaszów Mazowiecki → Warszawa Chopina", desc: "Trasa S8, ok. 1h 30 min" },
      { label: "Tomaszów Mazowiecki → Łódź Lublinek", desc: "Trasa A1, ok. 1h" },
      { label: "Tomaszów Mazowiecki → Kraków-Balice", desc: "Trasa A1, ok. 2h 30 min" },
      { label: "Tomaszów Mazowiecki → Modlin", desc: "Trasa S8/S7, ok. 2h" },
      { label: "Tomaszów Mazowiecki → wakacyjne wyjazdy po Europie", desc: "Chorwacja, Włochy, Hiszpania, Austria" },
    ],
    airportDistances: [
      { airport: "Łódź Lublinek", km: "60 km", time: "1h" },
      { airport: "Warszawa Chopina", km: "130 km", time: "1h 30 min" },
      { airport: "Warszawa Modlin", km: "160 km", time: "2h" },
      { airport: "Katowice-Pyrzowice", km: "180 km", time: "2h 15 min" },
      { airport: "Kraków-Balice", km: "220 km", time: "2h 30 min" },
    ],
    neighborhoods: ["Spała", "Inowłódz", "Opoczno", "Rzeczyca", "Lubochnia", "Ujazd"],
    uniqueParagraphs: [
      "Tomaszów Mazowiecki, dzięki położeniu przy autostradzie A1 i drodze ekspresowej S8, jest jednym z najlepiej skomunikowanych miast południowej części województwa łódzkiego. Transfer busem z Tomaszowa Mazowieckiego na lotnisko Chopina w Warszawie zajmuje ok. 1h 30 min, a do lotniska w Łodzi — zaledwie godzinę. To znacząco upraszcza planowanie wyjazdów rodzinnych i biznesowych.",
      "Świadczymy regularne transfery dla mieszkańców Tomaszowa, Spały, Inowłodza, Opoczna, Lubochni i Ujazdu — odbieramy klientów spod własnego domu i dowozimy bezpośrednio pod terminal. To wygoda doceniana zwłaszcza przez rodziny z dziećmi i grupy podróżujące z dużą ilością bagażu wakacyjnego.",
      "Bliskość Spały, Sulejowskiego Parku Krajobrazowego i Niebieskich Źródeł sprawia, że Tomaszów Mazowiecki to częsty cel wycieczek grupowych i wyjazdów integracyjnych. Nasze busy z kierowcą obsługują również wyjazdy szkolne, parafialne, weselne i firmowe — z pełną dokumentacją i fakturą VAT.",
      "Wakacyjne wyjazdy busem z Tomaszowa Mazowieckiego do Chorwacji, Włoch, Austrii czy nad polskie Bałtyk to wygoda nieosiągalna dla samochodu osobowego — przestronny bagażnik, klimatyzacja, gniazda USB, miejsce na narty, rowery i wózki dziecięce. Cała grupa podróżuje razem, dzieląc się kosztami trasy.",
    ],
    faqs: [
      {
        q: "Ile zajmuje dojazd busem z Tomaszowa Mazowieckiego na lotnisko Chopina?",
        a: "Trasą S8 dojazd zajmuje ok. 1h 30 min, do Modlina ok. 2h. Zawsze planujemy rezerwę czasową na ewentualne korki.",
      },
      {
        q: "Czy obsługujecie Spałę i okolice?",
        a: "Tak, regularnie odbieramy klientów ze Spały, Inowłodza, Opoczna, Lubochni i Ujazdu — dojazd do każdego z lotnisk realizujemy door-to-door.",
      },
      {
        q: "Czy busem mogę pojechać na narty w Tatry lub Alpy?",
        a: "Oczywiście, przewozimy grupy na narty w Tatry, Beskidy oraz Alpy Tyrolskie — z miejscem na sprzęt narciarski i snowboardowy.",
      },
    ],
  },
  {
    slug: "piotrkow-trybunalski",
    name: "Piotrków Trybunalski",
    nameLocative: "Piotrkowie Trybunalskim",
    nameGenitive: "Piotrkowa Trybunalskiego",
    intro:
      "Wynajem busa 8 i 9 osobowego w Piotrkowie Trybunalskim — transfery lotniskowe, wakacyjne wyjazdy po Europie oraz przewóz grup biznesowych i okolicznościowych.",
    distanceLodz: "50 km od Łodzi",
    population: "ok. 70 tys. mieszkańców",
    highlights: [
      "Strategiczne położenie na skrzyżowaniu autostrady A1 i drogi ekspresowej S8",
      "Jedno z największych centrów logistycznych w Polsce — częste wyjazdy biznesowe",
      "Bogata historia jako siedziba Trybunału Koronnego — turystyka i wyjazdy szkolne",
      "Bliskość Sulejowskiego Parku Krajobrazowego i Zalewu Sulejowskiego — wyjazdy weekendowe",
    ],
    popularRoutes: [
      { label: "Piotrków Trybunalski → Łódź Lublinek", desc: "Trasa A1, ok. 50 min" },
      { label: "Piotrków Trybunalski → Warszawa Chopina", desc: "Trasa S8, ok. 1h 50 min" },
      { label: "Piotrków Trybunalski → Katowice-Pyrzowice", desc: "Trasa A1, ok. 1h 30 min" },
      { label: "Piotrków Trybunalski → Kraków-Balice", desc: "Trasa A1, ok. 2h" },
      { label: "Piotrków Trybunalski → Niemcy, Włochy, Chorwacja", desc: "Wakacyjne busy po Europie" },
    ],
    airportDistances: [
      { airport: "Łódź Lublinek", km: "55 km", time: "50 min" },
      { airport: "Katowice-Pyrzowice", km: "130 km", time: "1h 30 min" },
      { airport: "Warszawa Chopina", km: "160 km", time: "1h 50 min" },
      { airport: "Kraków-Balice", km: "180 km", time: "2h" },
      { airport: "Warszawa Modlin", km: "190 km", time: "2h 15 min" },
    ],
    neighborhoods: ["Sulejów", "Wolbórz", "Bełchatów", "Rozprza", "Moszczenica", "Gorzkowice"],
    uniqueParagraphs: [
      "Piotrków Trybunalski to jedno z największych centrów logistycznych w Polsce — położony na skrzyżowaniu autostrady A1 (północ-południe) i drogi ekspresowej S8 (wschód-zachód), zapewnia najszybsze dojazdy busem na praktycznie wszystkie polskie lotniska. Transfer na Katowice-Pyrzowice zajmuje ok. 1h 30 min, na lotnisko Chopina — ok. 1h 50 min, a do Krakowa — zaledwie 2 godziny.",
      "Świadczymy transfery dla mieszkańców Piotrkowa Trybunalskiego, Sulejowa, Wolborza, Bełchatowa, Rozprzy i Moszczenicy. Odbieramy klientów spod własnego adresu o dowolnej porze — także w nocy i w weekendy — i dowozimy bezpośrednio pod terminal. Monitorujemy każdy lot, więc opóźnienia samolotu nie generują dodatkowych kosztów oczekiwania.",
      "Liczne firmy z piotrkowskiej strefy logistycznej, sektora handlowego i przemysłu energetycznego (PGE GiEK, Elektrownia Bełchatów) regularnie korzystają z naszych busów na wyjazdy biznesowe, delegacje pracownicze i konferencje branżowe. Obsługa firmowa to dla nas standard — wystawiamy faktury VAT, podpisujemy umowy o stałej współpracy.",
      "Wyjazdy wakacyjne busem z Piotrkowa Trybunalskiego cieszą się coraz większą popularnością — Chorwacja, Włochy, Hiszpania, Francja, Austria, a także polskie Bałtyk i Tatry. Bus 8–9 osobowy to oszczędność na paliwie, opłatach drogowych i parkingu, a dla grupy znajomych lub dwóch rodzin — znacznie tańsza alternatywa wobec lotów.",
    ],
    faqs: [
      {
        q: "Czy z Piotrkowa Trybunalskiego szybciej dojadę na lotnisko w Warszawie czy w Katowicach?",
        a: "Lotnisko w Katowicach-Pyrzowicach jest bliżej — ok. 1h 30 min trasą A1. Lotnisko Chopina w Warszawie zajmuje ok. 1h 50 min trasą S8.",
      },
      {
        q: "Obsługujecie Bełchatów i okolice?",
        a: "Tak, regularnie odbieramy klientów z Bełchatowa, Sulejowa, Wolborza, Rozprzy i Moszczenicy — pełna obsługa door-to-door.",
      },
      {
        q: "Czy realizujecie cykliczne transfery dla firm?",
        a: "Tak, oferujemy stałą obsługę firm z piotrkowskiej strefy logistycznej i przemysłowej — umowy długoterminowe, faktury VAT, gwarancja dostępności.",
      },
    ],
  },
];

export const getCityBySlug = (slug: string) => cities.find((c) => c.slug === slug);

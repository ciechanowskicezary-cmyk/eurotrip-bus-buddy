import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Phone, Mail } from "lucide-react";

const Contact = () => (
  <>
    <SEO
      title="Kontakt — Wynajem busa Łódź | TwojTransporter.pl"
      description="Skontaktuj się z TwojTransporter.pl Łódź. Telefon: 606 988 383, e-mail: twojtransporter@gmail.com. Wynajem busów 8 i 9 osobowych — wyceny, rezerwacje, pytania."
      path="/kontakt"
    />
    <Breadcrumbs items={[{ label: "Kontakt" }]} />
    <section className="section-gradient py-20">
      <div className="container">
        <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-center mb-4 text-foreground">Skontaktuj się z nami</h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Wypełnij formularz lub skontaktuj się bezpośrednio — odpowiemy na każde pytanie.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <div className="lg:col-span-3 bg-card rounded-xl p-6 md:p-8 border border-border shadow-sm">
            <ContactForm />
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Dane kontaktowe</h3>
              <div className="space-y-4">
                <a href="tel:+48606988383" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Telefon</p>
                    <p className="font-semibold font-heading">606 988 383</p>
                  </div>
                </a>
                <a href="mailto:twojtransporter@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-semibold font-heading">twojtransporter@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-primary rounded-xl p-6 text-primary-foreground">
              <h3 className="font-heading font-bold text-lg mb-2">Szybka odpowiedź</h3>
              <p className="text-sm text-primary-foreground/80">
                Na zapytania odpowiadamy zwykle w ciągu kilku godzin. W pilnych sprawach dzwoń — jesteśmy dostępni 7 dni w tygodniu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;

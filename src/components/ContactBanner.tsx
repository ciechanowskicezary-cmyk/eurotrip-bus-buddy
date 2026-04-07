import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactBanner = () => (
  <section className="bg-primary py-16">
    <div className="container text-center text-primary-foreground">
      <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Zarezerwuj swój transport</h2>
      <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
        Skontaktuj się z nami telefonicznie lub mailowo — odpowiemy na każde pytanie i dobierzemy najlepszą ofertę.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="tel:+48606988383">
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold px-8 py-6 rounded-lg shadow-lg">
            <Phone className="w-5 h-5 mr-2" />
            606 988 383
          </Button>
        </a>
        <a href="mailto:twojtransporter@gmail.com">
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-heading font-semibold px-8 py-6 rounded-lg">
            <Mail className="w-5 h-5 mr-2" />
            Napisz do nas
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default ContactBanner;

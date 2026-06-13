import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { cities } from "@/data/cities";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-heading font-bold text-xl mb-4">
            Twój<span className="text-secondary">Transporter</span>.pl
          </h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Profesjonalny wynajem busów 8 i 9 osobowych na terenie całej Europy. Komfort, bezpieczeństwo i niezawodność.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Usługi</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/wyjazdy-wakacyjne" className="hover:text-secondary transition-colors">Wyjazdy wakacyjne</Link></li>
            <li><Link to="/transfery-lotniskowe" className="hover:text-secondary transition-colors">Transfery lotniskowe</Link></li>
            <li><Link to="/wynajem-z-kierowca" className="hover:text-secondary transition-colors">Wynajem z kierowcą</Link></li>
            <li><Link to="/kontakt" className="hover:text-secondary transition-colors">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Wynajem busa — miasta</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link to={`/${c.slug}`} className="hover:text-secondary transition-colors flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" />
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Kontakt</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-secondary" />
              <a href="tel:+48606988383" className="hover:text-secondary transition-colors">606 988 383</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-secondary" />
              <a href="mailto:twojtransporter@gmail.com" className="hover:text-secondary transition-colors">twojtransporter@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} TwojTransporter.pl — Wszelkie prawa zastrzeżone.
      </div>
    </div>
  </footer>
);

export default Footer;

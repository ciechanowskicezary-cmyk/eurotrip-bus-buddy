import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
  showCta?: boolean;
}

const HeroSection = ({ title, subtitle, image, ctaText = "Zapytaj o ofertę", ctaLink, showCta = true }: HeroSectionProps) => (
  <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 hero-overlay" />
    <div className="relative z-10 container text-center text-primary-foreground px-4 py-20">
      <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in-up leading-tight">
        {title}
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-primary-foreground/90 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
        {subtitle}
      </p>
      {showCta && (
        <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          {ctaLink ? (
            <Link to={ctaLink}>
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold text-base px-8 py-6 rounded-lg shadow-lg">
                {ctaText}
              </Button>
            </Link>
          ) : (
            <a href="tel:+48606988383">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold text-base px-8 py-6 rounded-lg shadow-lg">
                {ctaText}
              </Button>
            </a>
          )}
        </div>
      )}
    </div>
  </section>
);

export default HeroSection;

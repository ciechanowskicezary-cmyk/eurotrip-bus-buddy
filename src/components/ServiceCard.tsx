import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ServiceCard = ({ title, description, image, link }: ServiceCardProps) => (
  <Link to={link} className="group block rounded-xl overflow-hidden bg-card shadow-md hover:shadow-xl transition-all duration-300 border border-border">
    <div className="relative h-56 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        width={640}
        height={360}
      />
    </div>
    <div className="p-6">
      <h3 className="font-heading font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary font-heading group-hover:gap-2 transition-all">
        Dowiedz się więcej <ArrowRight className="w-4 h-4" />
      </span>
    </div>
  </Link>
);

export default ServiceCard;

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Home } from "lucide-react";

interface Crumb {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

const SITE_URL = "https://twojtransporter.pl";

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const all: Crumb[] = [{ label: "Strona główna", path: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.path ? { item: `${SITE_URL}${c.path}` } : {}),
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="bg-muted/40 border-b border-border">
        <div className="container py-3">
          <ol className="flex items-center flex-wrap gap-1.5 text-sm text-muted-foreground">
            {all.map((c, i) => {
              const isLast = i === all.length - 1;
              return (
                <li key={`${c.label}-${i}`} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />}
                  {isLast || !c.path ? (
                    <span className="font-medium text-foreground" aria-current="page">
                      {i === 0 && <Home className="inline w-3.5 h-3.5 mr-1" />}
                      {c.label}
                    </span>
                  ) : (
                    <Link
                      to={c.path}
                      className="hover:text-primary transition-colors flex items-center gap-1"
                    >
                      {i === 0 && <Home className="w-3.5 h-3.5" />}
                      {c.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;

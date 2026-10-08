import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

type Stat = { value: string; label: string };
type Section = { title: string; body: string };

type ContentPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  imageContain?: boolean;
  stats?: readonly Stat[];
  sections: readonly Section[];
  ctaLabel?: string;
  ctaHref?: string;
};

export default function ContentPage({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  imageContain = false,
  stats = [],
  sections,
  ctaLabel = "CVE Motor ile konuşun",
  ctaHref = "/#talk",
}: ContentPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="contentPage">
        <section className={`contentHero${imageContain ? " contentHeroProduct" : ""}`}>
          <div className="contentHeroCopy">
            <p>{eyebrow}</p>
            <h1>{title}</h1>
            <span>{intro}</span>
            <Link href={ctaHref}>{ctaLabel}</Link>
          </div>
          <div className={`contentHeroMedia${imageContain ? " contentHeroMediaContain" : ""}`}>
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              unoptimized={imageContain}
              sizes="(max-width: 760px) 100vw, 55vw"
            />
          </div>
        </section>

        {stats.length > 0 ? (
          <section className="contentStats" aria-label="Öne çıkan bilgiler">
            {stats.map((stat) => (
              <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>
            ))}
          </section>
        ) : null}

        <section className="contentBody">
          <div className="contentBodyHeading">
            <p>CVE MOTOR</p>
            <h2>Geleceğin şehir içi ulaşımı için.</h2>
          </div>
          <div className="contentBodySections">
            {sections.map((section) => (
              <article key={section.title}>
                <h3>{section.title}</h3>
                <p>{section.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

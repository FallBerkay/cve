import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../src/components/shared/SiteFooter";
import SiteHeader from "../../src/components/shared/SiteHeader";
import styles from "./products-page.module.css";

const products = [
  {
    category: "Enerji sistemi",
    title: "Batarya",
    description: "Dayanıklı metal gövde, katmanlı hücre mimarisi ve dengeli güç yönetimiyle günlük kullanım için geliştirildi.",
    image: "/images/battery-sequence/frame_001.png",
    href: "/urunler/batarya",
    features: ["Metal koruyucu gövde", "Modüler hücre yapısı"],
  },
  {
    category: "Şarj çözümü",
    title: "Şarj Ünitesi",
    description: "CVE Motor bataryalarıyla uyumlu, kontrollü enerji aktarımı sağlayan kompakt ve pratik şarj ünitesi.",
    image: "/images/cve-fast-charging-station.png",
    href: "/urunler/sarj-unitesi",
    features: ["Kompakt tasarım", "Güvenli bağlantı"],
  },
  {
    category: "Tamamlayıcı ürünler",
    title: "Aksesuarlar",
    description: "Taşıma, teslimat ve günlük kullanım ihtiyaçlarına uyum sağlayan CVE Motor aksesuar seçenekleri.",
    image: "/images/cve-accessories.png",
    href: "/urunler/aksesuarlar",
    features: ["Taşıma çözümleri", "Uyumlu bağlantı ekipmanları"],
  },
] as const;

export const metadata: Metadata = {
  title: "Ürünler | CVE MOTOR",
  description: "CVE Motor batarya, şarj ünitesi ve aksesuar ürünlerini keşfedin.",
};

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <section className={styles.intro}>
          <h1>Ürünler</h1>
          <p>Elektrikli sürüş deneyimini tamamlayan batarya, şarj ve aksesuar çözümleri.</p>
        </section>

        <section className={styles.catalog} aria-label="CVE Motor ürün kataloğu">
          {products.map((product) => (
            <article className={styles.card} key={product.title}>
              <Link className={styles.media} href={product.href} aria-label={`${product.title} ürününü inceleyin`}>
                <Image
                  src={product.image}
                  alt={`CVE Motor ${product.title}`}
                  fill
                  className={product.title === "Batarya" ? styles.sequenceBattery : undefined}
                  sizes="(max-width: 760px) calc(100vw - 32px), 33vw"
                  loading="eager"
                />
              </Link>
              <div className={styles.body}>
                <p className={styles.category}>{product.category}</p>
                <h2>{product.title}</h2>
                <p className={styles.description}>{product.description}</p>
                <ul>
                  {product.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <Link className={styles.link} href={product.href}>Ürünü inceleyin <span aria-hidden="true">›</span></Link>
              </div>
            </article>
          ))}
        </section>

        <section className={styles.contactBand}>
          <div>
            <h2>İhtiyacınıza uygun çözümü birlikte belirleyelim.</h2>
            <p>Bireysel kullanım ve filo operasyonları için ürün seçenekleri hakkında satış ekibimizle görüşün.</p>
          </div>
          <Link href="/#talk">Teklif alın</Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

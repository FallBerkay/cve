import Image from "next/image";
import Link from "next/link";
import DealerApplicationForm from "./DealerApplicationForm";
import SiteFooter from "../../src/components/shared/SiteFooter";
import SiteHeader from "../../src/components/shared/SiteHeader";
import styles from "./bayi-ol.module.css";

export const metadata = {
  title: "Bayi Ol | CVE MOTOR",
  description: "CVE Motor bayi ve yetkili servis başvuru sayfası.",
};

const dealerPoints = [
  { city: "Trakya Bölgesi", x: 7, y: 28 },
  { city: "İstanbul", x: 17, y: 31 },
  { city: "Çanakkale", x: 10, y: 49 },
  { city: "Bursa", x: 19, y: 45 },
  { city: "İzmir", x: 10, y: 68 },
  { city: "Antalya", x: 39, y: 82 },
  { city: "Adana", x: 56, y: 75 },
  { city: "Mardin", x: 77, y: 68 },
];

const opportunities = [
  { region: "İç Anadolu Bölgesi", type: "Bayi ve servis", status: "Başvuruya açık" },
  { region: "Karadeniz Bölgesi", type: "Yetkili servis", status: "Başvuruya açık" },
  { region: "Doğu Anadolu Bölgesi", type: "Bayi", status: "Başvuruya açık" },
];

export default function DealerPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p>CVE MOTOR YETKİLİ AĞI</p>
            <h1>Birlikte büyüyelim.</h1>
            <span>
              Türkiye genelinde güçlü bir satış ve servis ağı kuruyoruz. CVE Motor ailesine katılmak
              için başvurunuzu iletin.
            </span>
            <div className={styles.networkSummary}>
              <strong>Mevcut ağımız</strong>
              <div aria-label="Mevcut bayi bölgeleri">
                {dealerPoints.map((point) => <span key={point.city}>{point.city}</span>)}
              </div>
            </div>
            <Link className={styles.heroCta} href="#basvuru">Başvuru yap <span>↘</span></Link>
          </div>

          <div className={styles.mapWrap} aria-label="Türkiye CVE Motor bayi haritası">
            <Image
              src="/images/turkiye-bayi-haritasi.png"
              alt="Türkiye haritası ve CVE Motor bayi noktaları"
              fill
              priority
              unoptimized
              sizes="(max-width: 900px) 100vw, 720px"
              className={styles.mapImage}
            />
            {dealerPoints.map((point) => (
              <span
                key={point.city}
                className={styles.mapPoint}
                style={{ left: `${point.x}%`, top: `${point.y}%` }}
                title={point.city}
                aria-label={point.city}
              />
            ))}
          </div>
        </section>

        <section className={styles.application} id="basvuru">
          <div className={styles.applicationIntro}>
            <p>BAŞVURU</p>
            <h2>CVE Motor iş ortağı olun.</h2>
            <span>
              Bayilik veya yetkili servis başvurunuzu bırakın. Ekibimiz bölge uygunluğunu
              değerlendirdikten sonra sizinle iletişime geçsin.
            </span>
          </div>
          <DealerApplicationForm locations={dealerPoints.map((point) => point.city)} />
        </section>

        <section className={styles.opportunities} aria-labelledby="opportunities-title">
          <div className={styles.sectionHeading}>
            <h2 id="opportunities-title">Açık bayi ve servis bölgeleri</h2>
            <p>Yeni ilanlar bu bölümde yayınlanır.</p>
          </div>
          <div className={styles.opportunityList}>
            {opportunities.map((item) => (
              <article key={item.region}>
                <h3>{item.region}</h3>
                <p>{item.type}</p>
                <span>{item.status}</span>
                <Link href="#basvuru">Başvur</Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

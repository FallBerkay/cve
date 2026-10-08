import HeroCard from "./HeroCard";
import DiscoverInfoCard from "./DiscoverInfoCard";
import styles from "./Discover.module.css";

export default function DiscoverSection() {
  return (
    <section id="models" className={styles.section}>
      <h2 className={styles.heading}>Keşfedin</h2>
      <div className={styles.grid}>
        <HeroCard />
        <DiscoverInfoCard href="/fiyat-listesi" image="/images/fiyat-listesi.png" alt="CVE Motor elektrikli motosiklet" title="Fiyat Listesi" />
        <DiscoverInfoCard href="/guvenlik-vizyonu" image="/images/guvenlik-vizyonu.png" alt="CVE Motor batarya ve güvenlik teknolojileri" title="CVE Motors Güvenlik Vizyonu" />
        <DiscoverInfoCard href="/gelisim-merkezi" image="/assets/cve-development-workshop.png" alt="CVE Motor atölyesinde elektrikli motosiklet üzerinde çalışan teknisyenler" title="CVE Motors Gelişim Merkezi" />
      </div>
    </section>
  );
}

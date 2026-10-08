import type { Metadata } from "next";
import SiteFooter from "../../src/components/shared/SiteFooter";
import SiteHeader from "../../src/components/shared/SiteHeader";
import ModelShowcase from "./ModelShowcase";
import styles from "./models.module.css";

export const metadata: Metadata = {
  title: "Motosiklet Modelleri | CVE MOTOR",
  description: "CVE Motor elektrikli motosikletini şehir, teslimat ve filo kullanım paketleriyle keşfedin.",
};

export default function MotorcycleModelsPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <header className={styles.intro}>
          <h1>CVE Motor</h1>
          <p>Tek motosiklet. Günlük hayatın farklı ihtiyaçlarına uyum sağlayan üç kullanım paketi.</p>
        </header>
        <ModelShowcase />
      </main>
      <SiteFooter />
    </>
  );
}

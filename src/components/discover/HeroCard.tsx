"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Discover.module.css";

const panels = [
  {
    src: "/assets/cve-delivery-uber-eats.png",
    href: "/motosiklet-modelleri?model=sehir",
    label: "Şehir motosikleti modelini inceleyin",
    alt: "Uber Eats çantalı kurye CVE Motor ile şehir içinde ilerliyor",
    position: "60% center",
    clipPath: "polygon(0 0, 100% 0, 92% 100%, 0 100%)",
  },
  {
    src: "/assets/cve-school-parking.png",
    href: "/motosiklet-modelleri",
    label: "CVE Motor motosiklet modellerini inceleyin",
    alt: "Okul önünde CVE Motor motosikletinin yanında duran öğrenci",
    position: "37% center",
    clipPath: "polygon(8% 0, 100% 0, 92% 100%, 0 100%)",
  },
  {
    src: "/assets/cve-forest-ride.png",
    href: "/motosiklet-modelleri?model=touring",
    label: "Touring motosiklet modelini inceleyin",
    alt: "Orman yolunda CVE Motor elektrikli motosiklet ile sürüş",
    position: "50% center",
    clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0 100%)",
  },
];

export default function HeroCard() {
  return (
    <div className={styles.hero}>
      <div className={styles.panels}>
        {panels.map((panel) => (
          <Link
            key={panel.src}
            href={panel.href}
            aria-label={panel.label}
            className={styles.panel}
            style={{ clipPath: panel.clipPath }}
          >
            <Image
              fill
              unoptimized
              src={panel.src}
              alt={panel.alt}
              sizes="33vw"
              style={{ objectPosition: panel.position }}
              onError={(event) => {
                console.warn(`Hero görseli yüklenemedi: ${panel.src}`);
                event.currentTarget.style.display = "none";
              }}
            />
          </Link>
        ))}
      </div>
      <div className={styles.heroFooter}>
        <h3>Motosiklet Modelleri</h3>
        <Link href="/motosiklet-modelleri" className={styles.action}>Keşfedin <ArrowRight aria-hidden="true" /></Link>
      </div>
    </div>
  );
}

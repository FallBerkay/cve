"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./models.module.css";

const colors = [
  { name: "Siyah", value: "#16191d" },
  { name: "Kırmızı", value: "#a51f2b" },
  { name: "Mavi", value: "#1287ba" },
];

const packages = [
  {
    name: "CVE Motor",
    use: "Şehir Paketi",
    description: "Günlük şehir içi ulaşım için sade ve ekonomik kullanım.",
  },
  {
    name: "CVE Motor",
    use: "Teslimat Paketi",
    description: "Kurye operasyonları için taşıma ekipmanlarıyla uyumlu yapı.",
  },
  {
    name: "CVE Motor",
    use: "Filo Paketi",
    description: "Kurumsal operasyonlar için ölçeklenebilir elektrikli ulaşım.",
  },
];

function ProductItem({ product, index }: { product: (typeof packages)[number]; index: number }) {
  const [selectedColor, setSelectedColor] = useState(index === 1 ? "Kırmızı" : index === 2 ? "Mavi" : "Siyah");

  return (
    <article className={styles.product}>
      <Link className={styles.imageLink} href="/#talk" aria-label={`${product.name} ${product.use} için teklif alın`}>
        <Image
          src="/assets/cve-bike-transparent-v2.png"
          alt={`CVE Motor ${product.use} elektrikli motosiklet`}
          fill
          sizes="(max-width: 760px) 82vw, 33vw"
          className={styles.productImage}
          priority={index === 0}
        />
      </Link>

      <div className={styles.productCopy}>
        <p>{product.use}</p>
        <h2>{product.name}</h2>
        <span>{product.description}</span>
      </div>

      <div className={styles.colors} aria-label="Renk seçenekleri">
        {colors.map((color) => {
          const active = selectedColor === color.name;
          return (
            <button
              key={color.name}
              type="button"
              className={active ? styles.colorActive : undefined}
              aria-label={`${color.name} rengini seç`}
              aria-pressed={active}
              onClick={() => setSelectedColor(color.name)}
            >
              <span className={styles.swatch} style={{ backgroundColor: color.value }} />
              <span>{color.name}</span>
            </button>
          );
        })}
      </div>

      <Link className={styles.detailLink} href="/#talk">
        Teklif alın <span aria-hidden="true">›</span>
      </Link>
    </article>
  );
}

export default function ModelShowcase() {
  return (
    <section className={styles.showcase} aria-label="CVE Motor kullanım paketleri">
      {packages.map((product, index) => (
        <ProductItem key={product.use} product={product} index={index} />
      ))}
    </section>
  );
}

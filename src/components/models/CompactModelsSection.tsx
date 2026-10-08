"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const colors = [
  { label: "Siyah", value: "#171a1f" },
  { label: "Silver", value: "#b9bec5" },
  { label: "Bakır", value: "#b66a3c" },
];

const models = [
  {
    name: "CVE Motor City",
    selected: "Siyah",
    specs: [
      ["Menzil", "120 km"],
      ["Kullanım", "Günlük şehir içi"],
      ["Karakter", "Pratik · Çevik · Ekonomik"],
      ["Donanım", "Akıllı gösterge · Gelişmiş fren"],
      ["Şarj", "Yaklaşık 3 saatte tam şarj"],
    ],
  },
  {
    name: "CVE Motor Kurye",
    selected: "Silver",
    specs: [
      ["Menzil", "250 km"],
      ["Kullanım", "Kurye kullanımı"],
      ["Karakter", "Konforlu · Dengeli · Güçlü"],
      ["Donanım", "Akıllı gösterge · Gelişmiş fren"],
      ["Şarj", "Yaklaşık 3 saatte tam şarj"],
    ],
  },
  {
    name: "CVE Motor Pro",
    selected: "Bakır",
    preorder: true,
    specs: [
      ["Menzil", "350 km"],
      ["Kullanım", "Kurye ve ticari operasyonlar"],
      ["Karakter", "Dayanıklı · Yüksek menzil · Yoğun mesai"],
      ["Donanım", "Akıllı gösterge · Gelişmiş fren"],
      ["Şarj", "Yaklaşık 3 saatte tam şarj"],
    ],
  },
];

function CompactModel({
  name,
  initialColor,
  specs,
  preorder = false,
}: {
  name: string;
  initialColor: string;
  specs: string[][];
  preorder?: boolean;
}) {
  const [selectedColor, setSelectedColor] = useState(initialColor);

  return (
    <article className="compactModelCard">
      <Link href="/motosiklet-modelleri" className="compactModelMedia" aria-label={`${name} modelini inceleyin`}>
        <Image
          src="/assets/cve-bike-transparent-v2.png"
          alt={`${name} elektrikli motosiklet`}
          fill
          sizes="(max-width: 760px) 82vw, 33vw"
        />
      </Link>
      <h3>{name}</h3>
      <div className="compactModelColors" aria-label={`${name} renk seçenekleri`}>
        {colors.map((color) => {
          const active = selectedColor === color.label;
          return (
            <button
              key={color.label}
              type="button"
              className={active ? "isActive" : ""}
              aria-pressed={active}
              aria-label={`${color.label} rengini seç`}
              onClick={() => setSelectedColor(color.label)}
            >
              <span style={{ backgroundColor: color.value }} />
              {color.label}
            </button>
          );
        })}
      </div>
      <dl className="compactModelSpecs">
        {specs.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      {preorder ? (
        <Link className="compactModelPreorder" href="/#talk">Ön sipariş ver ›</Link>
      ) : null}
    </article>
  );
}

export default function CompactModelsSection() {
  return (
    <section id="model-specs" className="compactModelsSection" aria-labelledby="compact-models-title">
      <div className="compactModelsHeading">
        <h2 id="compact-models-title">CVE Motor Modelleri</h2>
        <Link href="/motosiklet-modelleri">Tümünü inceleyin ›</Link>
      </div>
      <div className="compactModelsGrid">
        {models.map((model) => (
          <CompactModel
            key={model.name}
            name={model.name}
            initialColor={model.selected}
            specs={model.specs}
            preorder={model.preorder}
          />
        ))}
      </div>
    </section>
  );
}

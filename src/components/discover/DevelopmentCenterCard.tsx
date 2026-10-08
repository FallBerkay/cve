"use client";

import Image from "next/image";
import Link from "next/link";

export default function DevelopmentCenterCard() {
  const image = "/images/gelisim-merkezi.png";

  return (
    <Link
      href="/gelisim-merkezi"
      className="group relative block aspect-[5/3] overflow-hidden rounded-[20px] bg-slate-400 transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1 focus:outline-none focus-visible:outline-none focus-visible:ring-0"
    >
      <Image
        fill
        unoptimized
        src={image}
        alt="Havadan görülen kıvrımlı toprak pistte motosikletçiler"
        sizes="(max-width: 768px) 100vw, 33vw"
        className="absolute inset-0 z-0 object-cover transition-transform duration-300 group-hover:scale-[1.04] group-focus:scale-[1.04]"
        onError={(event) => {
          console.warn(`Kart görseli yüklenemedi: ${image}`);
          event.currentTarget.style.display = "none";
        }}
      />
      <span className="absolute inset-0 z-[5] bg-gradient-to-b from-black/60 via-black/20 to-black/40" aria-hidden="true" />
      <h3
        className="absolute left-6 top-6 z-10 line-clamp-2 max-w-[70%] text-[26px] font-bold leading-tight text-white"
        style={{ textShadow: "0 2px 12px rgba(0,0,0,.45)" }}
      >
        CVE Motors Gelişim Merkezi
      </h3>
      <span className="absolute bottom-6 right-6 z-10 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black">
        İnceleyin ›
      </span>
    </Link>
  );
}

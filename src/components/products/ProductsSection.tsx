import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Batarya",
    description: "Günlük kullanım için geliştirilen dayanıklı ve yüksek kapasiteli batarya sistemi.",
    image: "/images/battery-sequence/frame_001.png",
    href: "/urunler/batarya",
  },
  {
    title: "Şarj Ünitesi",
    description: "CVE Motors bataryalarıyla uyumlu, güvenli ve pratik şarj çözümü.",
    image: "/images/cve-fast-charging-station.png",
    href: "/urunler/sarj-unitesi",
  },
  {
    title: "Aksesuarlar",
    description: "Taşıma, güvenlik ve günlük kullanım ihtiyaçları için tamamlayıcı ürünler.",
    image: "/images/cve-accessories.png",
    href: "/urunler/aksesuarlar",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="productsSection" aria-labelledby="products-title">
      <div className="productsInner">
        <div className="productsHeading">
          <h2 id="products-title">Ürünler</h2>
          <p>Elektrikli sürüş deneyimini tamamlayan CVE Motors çözümleri.</p>
        </div>

        <div className="productsGrid">
          {products.map((product) => (
            <Link className="productCard" href={product.href} key={product.title}>
              <div className="productMedia">
                <Image
                  fill
                  src={product.image}
                  alt={product.title}
                  className={product.title === "Batarya" ? "sequenceBatteryImage" : undefined}
                  sizes="(max-width: 760px) calc(100vw - 32px), 33vw"
                />
              </div>
              <div className="productBody">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <span>İncele <b aria-hidden="true">→</b></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

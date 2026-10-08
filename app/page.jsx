import Image from "next/image";
import { Menu, MessageCircle, Search, UserRound } from "lucide-react";
import App from "../src/App";
import BatteryTechnologySection from "../src/components/technology/BatteryTechnologySection";
import ProductsSection from "../src/components/products/ProductsSection";
import SiteFooter from "../src/components/shared/SiteFooter";
import CompactModelsSection from "../src/components/models/CompactModelsSection";
import FaqSection from "../src/components/faq/FaqSection";

function Header() {
  const navigation = [
    ["Anasayfa", "#top"],
    ["Modeller", "#models"],
    ["Ürünler", "/urunler"],
    ["CVE Motors Collection", "/cve-motors-collection"],
    ["Bayi Ol", "/bayi-ol"],
    ["İletişim", "#talk"],
    ["Hakkımızda", "/hakkimizda"],
  ];

  return (
    <header className="siteHeader">
      <a className="brand" href="#top" aria-label="CVE Motor ana sayfa">
        <Image src="/assets/cve-logo.png" alt="CVE MOTOR" width={1920} height={1080} priority />
      </a>
      <nav className="siteNav" aria-label="Ana menü">
        {navigation.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
      </nav>
      <nav className="headerActions" aria-label="Hızlı işlemler">
        <button aria-label="CVE Motor ile konuşun"><MessageCircle /></button>
        <button aria-label="Ara"><Search /></button>
        <button aria-label="Profil"><UserRound /></button>
        <details className="mobileNav">
          <summary aria-label="Menü"><Menu /></summary>
          <nav className="mobileNavPanel" aria-label="Mobil ana menü">
            {navigation.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          </nav>
        </details>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <picture>
        <source media="(max-width: 760px)" srcSet="/assets/cve-hero-ride.png" />
        <Image className="heroImage" src="/assets/cve-hero-wide-v2.png" alt="Dağ yolunda CVE Motor elektrikli motosiklet" fill priority sizes="100vw" />
      </picture>
      <div className="heroShade" />
      <div className="heroContent">
        <h1>Şehrin yeni<br />elektrikli gücü.</h1>
        <p>CVE Motor ile elektrikli sürüşü keşfedin. Günlük yolculuklarınıza sessiz, ekonomik ve keyifli bir başlangıç yapın.</p>
        <div className="heroActions">
          <a className="primaryButton" href="#models">Modelleri Keşfet</a>
          <a className="secondaryButton" href="#talk">Teklif Al</a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <App />

        <section className="talkPanel" id="talk">
          <img src="/images/cve-motors-talk.png" alt="CVE Motors satış danışmanı ile görüşme" />
          <div><h2>CVE Motors ile konuşun</h2><form className="talkForm"><label><input type="radio" name="reason" defaultChecked /> Satış danışmanı ile görüşmek istiyorum</label><label><input type="radio" name="reason" /> Test sürüşü randevusu almak istiyorum</label><label><input type="radio" name="reason" /> Servis randevusu almak istiyorum</label><div className="phoneRow"><input type="tel" placeholder="Telefon numaranız" /><button type="submit" aria-label="Gönder">›</button></div></form></div>
        </section>

        <section className="legacySection whySection"><h2>Neden CVE Motors?</h2><div className="linkGrid"><a href="/hakkimizda">CVE Motor Güvencesi <span>Keşfedin ›</span></a><a href="/bayi-ol">Genişleyen Yetkili Servis Ağı <span>Keşfedin ›</span></a><a href="/guvenlik-vizyonu">Güvenlik Vizyonu <span>Keşfedin ›</span></a><a href="/urunler/batarya">Batarya Teknolojisi <span>Keşfedin ›</span></a></div></section>

        <CompactModelsSection />

        <ProductsSection />

        <BatteryTechnologySection />

        <section className="legacySection campaigns"><div className="sectionTitleRow"><h2>Kampanyalar</h2><a href="/fiyat-listesi">Tümü</a></div><div className="promoGrid"><a className="promoCard" href="/cve-motors-collection"><img src="https://cdn.v5.honda.com.tr/img/motosiklet/campaign/cl250-aksesuar-kampanyasi-slide-3.jpg?format=webp&quality=80&width=598" alt="" /><span>CVE Motors Yanımda’ya Özel Seçili Aksesuarlarda %50 İndirim</span><b>Keşfedin</b></a><a className="promoCard" href="/fiyat-listesi"><img src="https://cdn.v5.honda.com.tr/img/motosiklet/campaign/forza250-campaign-slide-3-september.jpg?format=webp&quality=80&width=598" alt="" /><span>CVE Motors modellerinde avantajlı ödeme fırsatı.</span><b>Keşfedin</b></a><a className="promoCard" href="/fiyat-listesi"><img src="https://cdn.v5.honda.com.tr/img/motosiklet/campaign/cl250-campaign-slide-3-september.jpg?format=webp&quality=80&width=598" alt="" /><span>CVE Motors modellerinde vade farksız taksit fırsatı.</span><b>Keşfedin</b></a></div></section>

        <FaqSection />

        <section className="legacySection afterSales"><h2>Satış Sonrası Hizmetler</h2><div className="linkGrid"><a href="/bayi-ol">Yetkili Bayiler ve Servisler <span>Keşfedin ›</span></a><a href="/#talk">Aktif Yol Yardım <span>İletişime Geçin ›</span></a><a href="/hakkimizda">CVE Motor Güvencesi <span>Keşfedin ›</span></a><a href="/gelisim-merkezi">Teknik Gelişim <span>Keşfedin ›</span></a></div></section>
      </main>

      <SiteFooter />
    </>
  );
}

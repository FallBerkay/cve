import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, Search, UserRound } from "lucide-react";

const navigation = [
  ["Anasayfa", "/#top"],
  ["Modeller", "/motosiklet-modelleri"],
  ["Ürünler", "/urunler"],
  ["CVE Motors Collection", "/cve-motors-collection"],
  ["Bayi Ol", "/bayi-ol"],
  ["İletişim", "/#talk"],
  ["Hakkımızda", "/hakkimizda"],
];

export default function SiteHeader() {
  return (
    <header className="siteHeader">
      <Link className="brand" href="/#top" aria-label="CVE Motor ana sayfa">
        <Image src="/assets/cve-logo.png" alt="CVE MOTOR" width={1920} height={1080} priority />
      </Link>
      <nav className="siteNav" aria-label="Ana menü">
        {navigation.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
      </nav>
      <nav className="headerActions" aria-label="Hızlı işlemler">
        <Link href="/#talk" aria-label="CVE Motor ile konuşun"><MessageCircle /></Link>
        <button aria-label="Ara"><Search /></button>
        <button aria-label="Profil"><UserRound /></button>
        <details className="mobileNav">
          <summary aria-label="Menü"><Menu /></summary>
          <nav className="mobileNavPanel" aria-label="Mobil ana menü">
            {navigation.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
          </nav>
        </details>
      </nav>
    </header>
  );
}

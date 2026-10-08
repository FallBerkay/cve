import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="siteFooterBrand">
        <Image src="/assets/cve-logo.png" alt="CVE Motors" width={1920} height={1080} />
        <p>Şehir içi ulaşım için sessiz, ekonomik ve sürdürülebilir çözümler.</p>
      </div>
      <div>
        <h3>Modeller ve Ürünler</h3>
        <Link href="/motosiklet-modelleri">Motosiklet Modelleri</Link>
        <Link href="/urunler/batarya">Batarya</Link>
        <Link href="/urunler/sarj-unitesi">Şarj Ünitesi</Link>
        <Link href="/urunler/aksesuarlar">Aksesuarlar</Link>
      </div>
      <div>
        <h3>CVE Motors</h3>
        <Link href="/hakkimizda">Hakkımızda</Link>
        <Link href="/guvenlik-vizyonu">Güvenlik Vizyonu</Link>
        <Link href="/gelisim-merkezi">Gelişim Merkezi</Link>
        <Link href="/bayi-ol">Bayi Ol</Link>
      </div>
      <div>
        <h3>İletişim</h3>
        <Link href="/#talk">Bize Ulaşın</Link>
        <span>0850 733 22 20</span>
        <span>info@cvemotor.com</span>
      </div>
      <small>© 2026 CVE Motors. Tüm hakları saklıdır.</small>
    </footer>
  );
}

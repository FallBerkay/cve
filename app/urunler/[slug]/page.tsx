import { notFound } from "next/navigation";
import ContentPage from "../../../src/components/shared/ContentPage";

const products = {
  batarya: {
    eyebrow: "CVE MOTOR / BATARYA",
    title: "Günlük kullanım için dengeli enerji.",
    intro: "Dayanıklı metal gövde, katmanlı hücre mimarisi ve kontrollü güç yönetimiyle geliştirilen CVE Motor batarya sistemi.",
    image: "/images/battery-open.png",
    imageAlt: "Açık CVE Motor batarya sistemi",
    stats: [
      { value: "Metal", label: "Koruyucu dış gövde" },
      { value: "Modüler", label: "Katmanlı hücre yapısı" },
      { value: "Dengeli", label: "Güç yönetimi" },
    ],
    sections: [
      { title: "Korunan hücre yapısı", body: "Batarya hücreleri dış etkilere karşı dayanıklı metal kasa içerisinde konumlandırılır." },
      { title: "Kontrollü enerji aktarımı", body: "Elektronik yönetim bileşenleri güç aktarımını sürüş ihtiyacına göre dengeler." },
      { title: "Servis erişimi", body: "Katmanlı yapı bakım ve teknik kontrol süreçlerinde bileşenlere erişimi kolaylaştırır." },
    ],
  },
  "sarj-unitesi": {
    eyebrow: "CVE MOTOR / ŞARJ ÜNİTESİ",
    title: "Pratik ve güvenli şarj çözümü.",
    intro: "CVE Motor batarya sistemiyle uyumlu şarj ünitesi günlük kullanımı kolaylaştırmak için kompakt ve anlaşılır bir yapıda geliştirildi.",
    image: "/images/cve-fast-charging-station.png",
    imageAlt: "CVE Motor şarj ünitesi",
    imageContain: true,
    stats: [
      { value: "Uyumlu", label: "CVE Motor bataryalarıyla" },
      { value: "Kompakt", label: "Kolay konumlandırma" },
      { value: "Güvenli", label: "Kontrollü enerji aktarımı" },
    ],
    sections: [
      { title: "Kolay kullanım", body: "Günlük şarj sürecini sadeleştiren bağlantı yapısı ve durum göstergeleri." },
      { title: "Koruma özellikleri", body: "Enerji aktarımı sırasında elektriksel güvenliği destekleyen kontrol katmanları." },
      { title: "İşletme uyumu", body: "Bireysel kullanıcılar ve filo operasyonları için düzenli şarj akışına uygun tasarım." },
    ],
  },
  aksesuarlar: {
    eyebrow: "CVE MOTOR / AKSESUARLAR",
    title: "İşinize ve yolculuğunuza uyum sağlar.",
    intro: "Taşıma, koruma ve günlük kullanım ihtiyaçlarına göre geliştirilen CVE Motor aksesuarları.",
    image: "/images/cve-accessories.png",
    imageAlt: "CVE Motor aksesuarları",
    stats: [
      { value: "Taşıma", label: "Kurye ve günlük kullanım" },
      { value: "Koruma", label: "Dayanıklı ekipman" },
      { value: "Uyum", label: "CVE Motor bağlantıları" },
    ],
    sections: [
      { title: "Teslimat çantaları", body: "Günlük teslimat operasyonlarında yükü güvenle taşımaya yardımcı olan yapılandırılmış çanta seçenekleri." },
      { title: "Bağlantı ekipmanları", body: "Aksesuarların motosiklete dengeli ve güvenli şekilde sabitlenmesini sağlayan uyumlu parçalar." },
      { title: "Günlük koruma", body: "Farklı kullanım şartlarında motosikleti ve sürücüyü destekleyen tamamlayıcı ekipmanlar." },
    ],
  },
} as const;

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products[slug as keyof typeof products];
  return product ? { title: `${product.title} | CVE MOTOR`, description: product.intro } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products[slug as keyof typeof products];
  if (!product) notFound();
  return <ContentPage {...product} ctaLabel="Teklif alın" ctaHref="/#talk" />;
}

import { notFound } from "next/navigation";
import ContentPage from "../../src/components/shared/ContentPage";

const pages = {
  hakkimizda: {
    eyebrow: "HAKKIMIZDA",
    title: "Şehir için geliştirilen elektrikli hareket.",
    intro: "CVE Motor, günlük ulaşımı daha sessiz, ekonomik ve erişilebilir hale getirmek için elektrikli motosiklet çözümleri geliştirir.",
    image: "/assets/cve-hero-wide-v2.png",
    imageAlt: "CVE Motor elektrikli motosiklet ile şehir dışı sürüş",
    stats: [
      { value: "%100", label: "Elektrikli sürüş" },
      { value: "Sessiz", label: "Şehir içi kullanım" },
      { value: "Yerel", label: "Satış ve servis odağı" },
    ],
    sections: [
      { title: "Amacımız", body: "Kent yaşamının gerçek ihtiyaçlarına cevap veren güvenilir, sade ve sürdürülebilir ulaşım ürünleri sunmak." },
      { title: "Yaklaşımımız", body: "Ürün geliştirme sürecinde kullanım kolaylığını, düşük işletme maliyetini ve uzun ömürlü bileşenleri birlikte ele alıyoruz." },
      { title: "Türkiye çapında büyüme", body: "Satış ve servis ağımızı bölgesel iş ortaklarıyla genişleterek kullanıcılarımıza yakın olmayı hedefliyoruz." },
    ],
  },
  "cve-motors-collection": {
    eyebrow: "CVE MOTORS COLLECTION",
    title: "Sürüşünüzü tamamlayan ürünler.",
    intro: "Günlük kullanım, taşıma ve güvenlik ihtiyaçları için CVE Motor ürünleriyle uyumlu tamamlayıcı çözümler.",
    image: "/images/cve-accessories.png",
    imageAlt: "CVE Motor aksesuar koleksiyonu",
    stats: [
      { value: "Uyumlu", label: "CVE Motor ürünleriyle" },
      { value: "Dayanıklı", label: "Günlük kullanıma uygun" },
      { value: "Pratik", label: "Kolay montaj ve kullanım" },
    ],
    sections: [
      { title: "Taşıma çözümleri", body: "Kurye ve günlük kullanım için farklı hacimlerde taşıma çantaları ve bağlantı ekipmanları." },
      { title: "Şarj ekipmanları", body: "Batarya sistemleriyle uyumlu, güvenli enerji aktarımına odaklanan şarj çözümleri." },
      { title: "Koruma ve bakım", body: "Motosikletinizi günlük kullanım şartlarında korumaya yardımcı olan tamamlayıcı ürünler." },
    ],
    ctaLabel: "Ürünleri inceleyin",
    ctaHref: "/#products",
  },
  "fiyat-listesi": {
    eyebrow: "FİYAT LİSTESİ",
    title: "CVE Motor Fiyat Listesi",
    intro: "120 km, 250 km ve 350 km menzil seçenekleriyle ihtiyacınıza uygun CVE Motor modelini seçin.",
    image: "/images/fiyat-listesi.png",
    imageAlt: "CVE Motor elektrikli motosiklet",
    stats: [
      { value: "115.000 TL", label: "City · 120 km menzil" },
      { value: "149.000 TL", label: "Kurye · 250 km menzil" },
      { value: "179.000 TL", label: "Pro · 350 km menzil" },
    ],
    sections: [
      { title: "Motosiklet", body: "Güncel satış koşulları, teslimat seçenekleri ve kurumsal alım teklifleri için bizimle iletişime geçin." },
      { title: "Batarya ve şarj", body: "İhtiyaca göre batarya ve uyumlu şarj ünitesi seçenekleri teklif kapsamında ayrı ayrı değerlendirilebilir." },
      { title: "Filo çözümleri", body: "Çoklu araç alımları ve kurye filoları için operasyon kapsamına göre özel çalışma hazırlanır." },
    ],
    ctaLabel: "Fiyat teklifi alın",
    ctaHref: "/#talk",
  },
  "guvenlik-vizyonu": {
    eyebrow: "GÜVENLİK VİZYONU",
    title: "Her yolculukta güven veren tasarım.",
    intro: "CVE Motor güvenlik yaklaşımı; dengeli sürüş, görünürlük, dayanıklı gövde ve kontrollü enerji yönetimi üzerine kuruludur.",
    image: "/images/guvenlik-vizyonu.png",
    imageAlt: "Yolda ilerleyen CVE Motor elektrikli motosiklet",
    sections: [
      { title: "Dengeli sürüş", body: "Şasi ve ağırlık dağılımı şehir içi manevralarda öngörülebilir bir kullanım sunacak şekilde ele alınır." },
      { title: "Enerji güvenliği", body: "Batarya sistemi metal gövde, kontrollü bağlantılar ve dengeli güç aktarımıyla korunur." },
      { title: "Görünürlük", body: "Aydınlatma ve reflektif ekipman seçenekleri farklı sürüş koşullarında fark edilmeyi destekler." },
    ],
  },
  "gelisim-merkezi": {
    eyebrow: "GELİŞİM MERKEZİ",
    title: "Gerçek kullanım koşullarında geliştiriyoruz.",
    intro: "Ürünlerimizi şehir içi yollar, farklı yük senaryoları ve günlük operasyon şartlarında değerlendirerek sürekli iyileştiriyoruz.",
    image: "/images/gelisim-merkezi.png",
    imageAlt: "CVE Motor test ve gelişim alanı",
    sections: [
      { title: "Saha testleri", body: "Sürüş dengesi, frenleme, taşıma kapasitesi ve enerji tüketimi farklı kullanım senaryolarında gözlemlenir." },
      { title: "Kullanıcı geri bildirimi", body: "Bayi, servis, kurye ve bireysel kullanıcı deneyimleri geliştirme çalışmalarına doğrudan katkı sağlar." },
      { title: "Sürekli iyileştirme", body: "Bileşen seçimi ve yazılım ayarları elde edilen test verileri doğrultusunda düzenli olarak geliştirilir." },
    ],
  },
} as const;

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug as keyof typeof pages];
  return page ? { title: `${page.title} | CVE MOTOR`, description: page.intro } : {};
}

export default async function InfoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug as keyof typeof pages];
  if (!page) notFound();
  return <ContentPage {...page} />;
}

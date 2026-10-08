"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { useState } from "react";
import styles from "./FaqSection.module.css";

const faqs = [
  {
    question: "CVE Motor hangi kullanım senaryoları için geliştirildi?",
    answer:
      "CVE Motor; günlük şehir içi ulaşım, kurye operasyonları ve filo kullanımı için farklı menzil ve donanım seçenekleri sunar.",
  },
  {
    question: "City, Kurye ve Pro modellerinin menzilleri nedir?",
    answer:
      "City 120 km, Kurye 250 km ve Pro 350 km'ye kadar menzil hedefiyle sunulur. Gerçek menzil; sürüş biçimi, yük, yol ve hava koşullarına göre değişebilir.",
  },
  {
    question: "Batarya ne kadar sürede şarj olur?",
    answer:
      "Standart koşullarda tam şarj süresi yaklaşık 3 saattir. Şarj süresi kullanılan üniteye, ortam sıcaklığına ve bataryanın mevcut doluluk oranına göre farklılık gösterebilir.",
  },
  {
    question: "Hangi ehliyetle kullanılabilir?",
    answer:
      "Gerekli ehliyet, seçilen modelin tescil sınıfına ve yürürlükteki mevzuata göre belirlenir. Satış ekibimiz teslimat öncesinde modelinize uygun güncel şartları açıkça paylaşır.",
  },
  {
    question: "Kurye ve filo çözümleri sunuyor musunuz?",
    answer:
      "Evet. Teslimat ekipmanı, yüksek menzil seçeneği ve operasyon ihtiyacına göre ölçeklenebilen kurumsal çözümler için özel teklif hazırlanır.",
  },
  {
    question: "Servis ve yedek parça desteğine nasıl ulaşabilirim?",
    answer:
      "İletişim formundan servis talebi oluşturabilir veya yetkili bayi ve servis noktalarımızla doğrudan görüşebilirsiniz.",
  },
  {
    question: "Test sürüşü veya fiyat teklifi nasıl alabilirim?",
    answer:
      "Sayfadaki iletişim alanından telefon numaranızı bırakarak test sürüşü ya da fiyat teklifi talebi oluşturabilirsiniz. Ekibimiz en kısa sürede sizinle iletişime geçer.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.section} id="sss" aria-labelledby="faq-title">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>CVE MOTOR / DESTEK</p>
          <h2 id="faq-title">Sıkça sorulan sorular</h2>
          <p className={styles.description}>
            Elektrikli sürüş, modeller ve satış sonrası süreçler hakkında en çok
            merak edilenler.
          </p>
          <Link href="#talk" className={styles.contactLink}>
            Başka bir sorunuz mu var? <span>Bizimle konuşun ›</span>
          </Link>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const triggerId = `faq-trigger-${index}`;
            const answerId = `faq-answer-${index}`;

            return (
              <article
                className={`${styles.item} ${isOpen ? styles.open : ""}`}
                key={faq.question}
              >
                <h3>
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{faq.question}</span>
                    <span className={styles.icon} aria-hidden="true">
                      <Plus size={20} strokeWidth={2} />
                    </span>
                  </button>
                </h3>
                <div
                  id={answerId}
                  className={styles.answerGrid}
                  role="region"
                  aria-labelledby={triggerId}
                >
                  <div className={styles.answerInner}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

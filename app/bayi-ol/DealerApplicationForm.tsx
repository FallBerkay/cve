"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import styles from "./bayi-ol.module.css";

type DealerApplicationFormProps = {
  locations: string[];
};

export default function DealerApplicationForm({ locations }: DealerApplicationFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.success} role="status">
        <CheckCircle2 aria-hidden="true" />
        <h3>Başvurunuz alındı.</h3>
        <p>Ekibimiz değerlendirme sonrasında sizinle iletişime geçecek.</p>
        <button type="button" onClick={() => setSubmitted(false)}>Yeni başvuru</button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset className={styles.applicationType}>
        <legend>Başvuru türü</legend>
        <label><input type="radio" name="applicationType" value="dealer" defaultChecked /> Bayilik</label>
        <label><input type="radio" name="applicationType" value="service" /> Servis</label>
        <label><input type="radio" name="applicationType" value="both" /> Bayi + Servis</label>
      </fieldset>

      <div className={styles.formGrid}>
        <label>
          <span>Ad soyad</span>
          <input name="fullName" autoComplete="name" required />
        </label>
        <label>
          <span>Telefon numarası</span>
          <input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="05XX XXX XX XX" required />
        </label>
        <label>
          <span>E-posta</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Başvuru bölgesi</span>
          <select name="location" defaultValue="" required>
            <option value="" disabled>Şehir veya bölge seçin</option>
            {locations.map((location) => <option key={location}>{location}</option>)}
            <option>Diğer</option>
          </select>
        </label>
      </div>

      <label className={styles.messageField}>
        <span>Firma ve yatırım bilgisi</span>
        <textarea name="message" rows={4} placeholder="Mevcut işletmeniz ve planladığınız yatırım hakkında kısa bilgi paylaşın." />
      </label>

      <label className={styles.consent}>
        <input type="checkbox" name="kvkk" required />
        <span>KVKK Aydınlatma Metni kapsamında kişisel verilerimin başvuru sürecinde işlenmesine izin veriyorum.</span>
      </label>

      <button className={styles.submitButton} type="submit">Başvuruyu Gönder</button>
    </form>
  );
}

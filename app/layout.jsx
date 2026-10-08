import "./tailwind.css";
import "./globals.css";
import "./button-overrides.css";
import "./honda-sections.css";
import "./explore-overrides.css";
import "./navigation.css";
import "./battery-technology.css";
import "./products.css";
import "./content-pages.css";

export const metadata = {
  title: "CVE MOTOR | Elektrikli Motosiklet",
  description: "Şehir içi ulaşım için geliştirilen CVE Motor elektrikli motosikletleri."
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}

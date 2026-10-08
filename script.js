document.title = "CVE MOTOR | Elektrikli Motosiklet";

const header = document.querySelector(".site-header");
header.innerHTML = `
  <a class="logo cve-header-logo" href="#"><img src="./assets/cve-logo.png" alt="CVE MOTOR logosu"></a>
  <div class="header-actions"><button class="icon-button" aria-label="CVE Motor ile konuşun"><svg viewBox="0 0 24 24"><path d="M7 8h10M7 12h6m7 0c0 4.4-3.6 8-8 8a8.3 8.3 0 0 1-3.7-.9L4 20l.9-4.1A8 8 0 1 1 20 12Z"/></svg></button><button class="icon-button" aria-label="Ara"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg></button><button class="icon-button" aria-label="Profil"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.6-4.1 4.3-6 8-6s6.4 1.9 8 6"/></svg></button><button class="icon-button menu-button" aria-label="Menü"><svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button></div>`;

const restoreStyle = document.createElement("style");
restoreStyle.textContent = `
.site-header{grid-template-columns:1fr auto}
.site-header>.logo{justify-self:start;width:auto;height:auto;overflow:visible}
.site-header>.header-actions{justify-self:end}
.site-header>.cve-header-logo{width:190px;height:56px;overflow:hidden}
.site-header>.cve-header-logo img{width:190px!important;height:56px!important;object-fit:cover;object-position:center}
.compare-grid{grid-template-columns:repeat(2,1fr)}
.footer{background:#121212}
@media(max-width:760px){.site-header{grid-template-columns:1fr auto}.site-header>.logo{justify-self:start}.site-header>.cve-header-logo{width:160px;height:46px}.site-header>.cve-header-logo img{width:160px!important;height:46px!important;object-fit:cover}.compare-grid{grid-template-columns:1fr}}
`;
document.head.appendChild(restoreStyle);

const heroSlider = document.querySelector(".hero-slider");
heroSlider.innerHTML = `
  <article class="hero-slide single-hero is-active">
    <picture>
      <source media="(max-width:760px)" srcset="./assets/cve-hero-ride.png">
      <img src="./assets/cve-hero-wide-v2.png" alt="CVE Motor elektrikli motosiklet ile yolculuk">
    </picture>
  </article>`;

const singleHeroStyle = document.createElement("style");
singleHeroStyle.textContent = `
.hero{width:100%;max-width:none}
.hero-slider{border-right:0;border-left:0;border-radius:0}
.single-hero picture,.single-hero img{display:block;width:100%}
.single-hero img{height:auto;aspect-ratio:1942/809;object-fit:cover;object-position:center;background:#fff}
@media(max-width:760px){.hero{width:calc(100% - 32px)}.hero-slider{border:0;border-radius:14px}.single-hero img{aspect-ratio:43/24;border-radius:14px;object-fit:contain}}
`;
document.head.appendChild(singleHeroStyle);

const form = document.querySelector(".talk-form");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = form.querySelector("input[type=tel]");
  input.value = "";
  input.placeholder = "Talebiniz alındı";
});

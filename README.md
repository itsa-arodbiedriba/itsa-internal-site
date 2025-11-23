# ITSA Kopienas Privātā Mājas Lapa

Šis repozitorijs satur **iekšējo ITSA mājas lapas versiju**, kas tiek hostēta ar **GitHub Pages** un savienota ar **Supabase (PostgreSQL)** datu bāzi.  
Tas ir paredzēts tikai kopienas biedriem un nav publiski pieejams ārpus organizācijas.

---

## 🎯 Mērķis
- Nodrošināt biedriem piekļuvi iekšējai mājas lapai.
- Glabāt un apstrādāt datus caur WEB formām.
- Demonstrēt praktisku darbu ar SQL datu bāzi (INSERT, SELECT, UPDATE, DELETE).
- Atvieglot kopienas komunikāciju un apmācību.

---

## 📂 Struktūra
- `index.html` – galvenā lapa.
- `about.html` – informācija par arodbiedrību.
- `partners.html` – sadarbības partneri.
- `contact.html` – kontaktforma ar datu ievadi.
- `css/style.css` – stilu faili.
- `js/supabase.js` – Supabase konfigurācija un datu apstrāde.
- `README.md` – dokumentācija biedriem.

---

## 🔧 Konfigurācija
1. **GitHub Pages**
   - Repo → Settings → Pages → aktivizē `main` branch.
   - Lapa pieejama 24/7 caur GitHub Pages URL.

2. **Supabase**
   - Izveido projektu [Supabase](https://supabase.com).
   - Saglabā `Project URL` un `anon key`.
   - Izveido tabulu (piem., `messages`) ar laukiem: `id`, `name`, `email`, `message`, `created_at`.

3. **Integrācija**
   - `js/supabase.js` failā ievieto Supabase URL un anon key.
   - Formas (`contact.html`) nosūta datus uz Supabase ar JavaScript.

---

## 🔒 Drošība
- Aktivizē **Row Level Security (RLS)** Supabase panelī.
- Politikas:
  - Atļaut `INSERT` anon lietotājiem (formas datu ievade).
  - Atļaut `SELECT` tikai autentificētiem biedriem (meklēšana, datu izgūšana).

---

## 📌 Lietošana
1. Klonē repozitoriju:
   ```bash
   git clone <privātā-repozitorija-adrese>
# itsa-internal-site

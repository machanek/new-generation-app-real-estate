# Instrukcja reinstalacji po Windows - Harmonia Rząska

## 🎯 Cel
Kompletna instrukcja przywrócenia projektu po reinstalacji Windows.

## 📋 Wymagane oprogramowanie

### 1. Node.js
- Pobierz z: https://nodejs.org/
- Wersja: LTS (Long Term Support)
- Sprawdź: `node --version` i `npm --version`

### 2. Git
- Pobierz z: https://git-scm.com/
- Sprawdź: `git --version`

### 3. Visual Studio Code (opcjonalnie)
- Pobierz z: https://code.visualstudio.com/
- Rozszerzenia: ES7+ React/Redux/React-Native snippets, Prettier

## 🚀 Przywracanie projektu

### 1. Sklonuj repozytorium
```bash
cd C:\Projekty
git clone https://github.com/[USERNAME]/new-generation-app-real-estate.git
cd new-generation-app-real-estate
```

### 2. Zainstaluj zależności
```bash
npm install
```

### 3. Sprawdź konfigurację
```bash
# Sprawdź czy wszystkie pliki są na miejscu
# Sprawdź czy Payload CMS działa
ls data/site_settings/   # Powinien być site-settings.json
ls data/contact_messages/ # Powinna być przykładowa wiadomość
```

### 4. Uruchom projekt lokalnie
```bash
npm run dev
```

### 5. Sprawdź czy działa
- Otwórz: http://localhost:3000
- Sprawdź CMS: http://localhost:3000/admin
- Sprawdź API: http://localhost:3000/api/contact

## 🔧 Konfiguracja środowiska

### Zmienne środowiskowe (jeśli potrzebne)
Stwórz plik `.env.local`:
```env
# Dla lokalnego developmentu
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Konfiguracja Git (jeśli pierwszy raz)
```bash
git config --global user.name "Twoje Imię"
git config --global user.email "twoj@email.com"
```

## 📁 Struktura projektu

```
new-generation-app-real-estate/
├── app/                    # Next.js App Router
├── components/              # Komponenty React
├── data/                  # Dane CMS (JSON)
│   ├── units/            # Lokale
│   ├── site_settings/    # Ustawienia strony
│   └── contact_messages/  # Wiadomości
├── lib/                   # Utilities
├── public/               # Statyczne pliki
│   ├── admin/           # Netlify CMS
│   ├── css/             # Style
│   └── images/          # Obrazy
├── styles/              # CSS modules
└── types/               # TypeScript types
```

## 🚨 Rozwiązywanie problemów

### Problem: "npm install" nie działa
```bash
# Wyczyść cache
npm cache clean --force
# Usuń node_modules i package-lock.json
rm -rf node_modules package-lock.json
# Zainstaluj ponownie
npm install
```

### Problem: "Module not found"
```bash
# Sprawdź czy wszystkie pliki są na miejscu
ls -la data/
ls -la public/
```

### Problem: CMS nie działa
1. Sprawdź `public/admin/config.yml`
2. Sprawdź czy backend jest ustawiony na `git-gateway`
3. Sprawdź czy branch to `next-functional`

### Problem: Port 3000 zajęty
```bash
# Użyj innego portu
npm run dev -- -p 3001
```

## 📚 Przydatne komendy

```bash
# Development
npm run dev              # Uruchom serwer dev
npm run build           # Build produkcyjny
npm run start           # Uruchom build
npm run lint            # Sprawdź kod

# Git
git status              # Status repozytorium
git pull                # Pobierz zmiany
git add .               # Dodaj wszystkie zmiany
git commit -m "message" # Commit
git push                # Wyślij zmiany
```

## 🔗 Linki

- **Lokalny serwer**: http://localhost:3000
- **CMS Panel**: http://localhost:3000/admin
- **API Contact**: http://localhost:3000/api/contact
- **Dokumentacja Next.js**: https://nextjs.org/docs
- **Netlify CMS**: https://www.netlifycms.org/docs/

## ✅ Checklist po reinstalacji

- [ ] Node.js zainstalowany
- [ ] Git zainstalowany
- [ ] Repozytorium sklonowane
- [ ] `npm install` wykonane
- [ ] `npm run dev` działa
- [ ] Strona ładuje się na localhost:3000
- [ ] CMS dostępny na /admin
- [ ] Wszystkie pliki w `data/` są na miejscu

## 🆘 W razie problemów

1. Sprawdź logi w terminalu
2. Sprawdź czy wszystkie pliki są na miejscu
3. Sprawdź czy port 3000 nie jest zajęty
4. Sprawdź czy Node.js i npm są zainstalowane
5. Sprawdź czy repozytorium jest aktualne (`git pull`)

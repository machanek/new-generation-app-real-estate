# CMS Troubleshooting - Harmonia Rząska

## Problem: Kolekcje są puste w CMS

### Sprawdź czy pliki istnieją:
- ✅ `data/site_settings/site-settings.json` - ustawienia strony
- ✅ `data/contact_messages/` - przykładowa wiadomość
- ✅ Payload CMS - dane w bazie PostgreSQL

### Sprawdź konfigurację CMS:
- ✅ Backend: Payload CMS v3
- ✅ Database: PostgreSQL (Supabase)
- ✅ Admin panel: `/admin`

### Możliwe przyczyny pustych kolekcji:

## 1. Baza danych nie jest skonfigurowana

**Sprawdź zmienne środowiskowe:**
1. `DATABASE_URI` - połączenie z PostgreSQL
2. `PAYLOAD_SECRET` - klucz szyfrowania
3. `SUPABASE_URL` i `SUPABASE_ANON_KEY` - dane Supabase

**Jeśli brakuje:**
1. Sprawdź `netlify.toml` lub `.env.local`
2. Upewnij się, że baza PostgreSQL działa
3. Sprawdź logi w Netlify Functions

## 2. Payload CMS nie jest poprawnie skonfigurowany

**Sprawdź konfigurację:**
1. Sprawdź `payload.config.ts` - czy kolekcje są zdefiniowane
2. Sprawdź `collections/` - czy pliki kolekcji istnieją
3. Sprawdź czy `getPayload` działa w `app/page.tsx`

## 3. Problem z połączeniem do bazy danych

**Sprawdź połączenie:**
1. Sprawdź czy `DATABASE_URI` jest poprawny
2. Sprawdź czy Supabase jest dostępny
3. Sprawdź czy tabela `units` istnieje w bazie

## 4. Cache problem

**Spróbuj:**
1. Wyczyść cache przeglądarki (Ctrl+F5)
2. Spróbuj w trybie incognito
3. Sprawdź czy nie ma błędów w konsoli przeglądarki
4. Sprawdź czy Next.js cache nie blokuje danych

## 5. Test lokalny

**Jeśli nadal nie działa:**
1. Sprawdź czy `npm run dev` działa
2. Sprawdź czy `/admin` jest dostępny
3. Sprawdź czy dane są pobierane z bazy
4. Sprawdź logi w terminalu

## 6. Sprawdź logi

**W terminalu:**
1. Sprawdź logi `npm run dev`
2. Sprawdź czy `DATABASE_URI validation passed`
3. Sprawdź czy `getPayload` działa
4. Sprawdź czy `collections/units` jest dostępny

## 7. Sprawdź konfigurację Payload CMS

**Sprawdź czy konfiguracja jest poprawna:**
1. Sprawdź `payload.config.ts` - czy kolekcje są zdefiniowane
2. Sprawdź `collections/Units.ts` - czy struktura jest poprawna
3. Sprawdź czy `getPayload` działa w `app/page.tsx`

## 8. Test z prostą konfiguracją

**Jeśli nadal nie działa, spróbuj prostej konfiguracji:**
1. Sprawdź czy `payload.config.ts` ma wszystkie kolekcje
2. Sprawdź czy `collections/Units.ts` ma poprawną strukturę
3. Sprawdź czy `getPayload` działa w `app/page.tsx`
4. Sprawdź czy baza danych ma dane

## Kontakt

Jeśli problem nadal występuje, sprawdź:
- [Payload CMS Documentation](https://payloadcms.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)

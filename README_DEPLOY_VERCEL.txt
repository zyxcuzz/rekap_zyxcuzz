# Rekapan Penjualan — Vercel + Supabase FULL

## Struktur
- `index.html` — aplikasi
- `api/config.js` — mengambil konfigurasi Supabase dari Environment Variables Vercel
- `vercel.json` — konfigurasi cache endpoint

## Environment Variables di Vercel
Tambahkan:
- `SUPABASE_URL` = URL project Supabase
- `SUPABASE_ANON_KEY` = Publishable/anon public key Supabase

Pilih environment `Production`, `Preview`, dan `Development` sesuai kebutuhan.

## Deploy
Upload folder ini ke Vercel atau push ke GitHub lalu Import Project.

Setelah Environment Variables disimpan, lakukan Redeploy agar deployment membaca nilai terbaru.

## Keamanan
JANGAN masukkan `service_role` / secret key Supabase ke browser atau `SUPABASE_ANON_KEY`.
`SUPABASE_ANON_KEY` memang dapat dikirim ke browser. Keamanan data harus tetap menggunakan RLS Supabase.

## Supabase
Gunakan tabel/policy dari file SQL setup Supabase yang sudah dibuat sebelumnya:
`public.app_state` dengan Realtime aktif.

## Hasil
Setiap deploy Vercel memakai Environment Variables yang sama. Tidak perlu mengedit `index.html` untuk mengganti URL/key Supabase.

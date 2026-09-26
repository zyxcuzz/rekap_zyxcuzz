# Paket siap deploy — Vercel + Supabase

1. Upload/import folder ini ke GitHub atau Vercel.
2. Vercel:
   - Framework: Other
   - Build Command: `npm run build`
   - Output Directory: `.`
3. Jika aplikasi memakai Supabase, isi Environment Variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Jangan pernah menaruh Supabase `service_role` key di frontend.

Konfigurasi `vercel.json` sudah disediakan agar route SPA kembali ke `index.html`.

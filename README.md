# TikTok Proxy Downloader

Proxy backend untuk menghindari CORS error saat menggunakan API TikTok tanpa watermark.

## Endpoint
GET `/tiktok?url=https://tiktok.com/xxxx`

## Cara Deploy di Render
1. Fork atau upload repo ini ke GitHub.
2. Buka https://render.com dan login.
3. Klik "New Web Service" → Hubungkan dengan repo ini.
4. Pilih branch, dan set:
   - **Build Command**: (kosongkan)
   - **Start Command**: `node server.js`
   - **Port**: `3000`
5. Deploy.

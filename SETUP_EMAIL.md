# 📧 Panduan Setup EmailJS untuk Notifikasi Order

Fitur notifikasi email memungkinkan kamu mendapat email setiap ada order baru masuk.

## Langkah 1: Buat Akun EmailJS

1. Kunjungi [https://www.emailjs.com](https://www.emailjs.com)
2. Klik **Sign Up Free**
3. Daftar menggunakan email atau akun Google

## Langkah 2: Buat Email Service

1. Setelah login, masuk ke **Email Services**
2. Klik **Add New Service**
3. Pilih provider email kamu (Gmail, Outlook, dll)
4. Ikuti petunjuk untuk menghubungkan email
5. Catat **Service ID** yang diberikan (contoh: `service_abc123`)

## Langkah 3: Buat Email Template

1. Masuk ke **Email Templates**
2. Klik **Create New Template**
3. Isi template seperti berikut:

### Subject:
```
🆕 Order Baru JokiPro: {{order_id}}
```

### Content (HTML):
```html
<h2>📦 Ada Order Baru!</h2>

<table style="width:100%; border-collapse: collapse;">
  <tr>
    <td style="padding: 8px; border: 1px solid #ddd;"><strong>Order ID</strong></td>
    <td style="padding: 8px; border: 1px solid #ddd;">{{order_id}}</td>
  </tr>
  <tr>
    <td style="padding: 8px; border: 1px solid #ddd;"><strong>Tanggal</strong></td>
    <td style="padding: 8px; border: 1px solid #ddd;">{{order_date}}</td>
  </tr>
  <tr>
    <td style="padding: 8px; border: 1px solid #ddd;"><strong>Nama</strong></td>
    <td style="padding: 8px; border: 1px solid #ddd;">{{customer_name}}</td>
  </tr>
  <tr>
    <td style="padding: 8px; border: 1px solid #ddd;"><strong>WhatsApp</strong></td>
    <td style="padding: 8px; border: 1px solid #ddd;">{{phone}}</td>
  </tr>
  <tr>
    <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td>
    <td style="padding: 8px; border: 1px solid #ddd;">{{email}}</td>
  </tr>
  <tr>
    <td style="padding: 8px; border: 1px solid #ddd;"><strong>Layanan</strong></td>
    <td style="padding: 8px; border: 1px solid #ddd;">{{service}}</td>
  </tr>
  <tr>
    <td style="padding: 8px; border: 1px solid #ddd;"><strong>Mata Kuliah</strong></td>
    <td style="padding: 8px; border: 1px solid #ddd;">{{subject}}</td>
  </tr>
  <tr>
    <td style="padding: 8px; border: 1px solid #ddd;"><strong>Deadline</strong></td>
    <td style="padding: 8px; border: 1px solid #ddd;">{{deadline}}</td>
  </tr>
  <tr>
    <td style="padding: 8px; border: 1px solid #ddd;"><strong>Budget</strong></td>
    <td style="padding: 8px; border: 1px solid #ddd;">{{budget}}</td>
  </tr>
</table>

<h3>📝 Detail Tugas:</h3>
<p style="background: #f5f5f5; padding: 15px; border-radius: 8px;">{{details}}</p>

<p>Segera hubungi customer melalui WhatsApp!</p>
```

4. Klik **Save**
5. Catat **Template ID** (contoh: `template_xyz789`)

## Langkah 4: Dapatkan Public Key

1. Masuk ke **Account** > **General**
2. Cari bagian **Public Key**
3. Catat Public Key kamu (contoh: `user_ABC123xyz`)

## Langkah 5: Update Kode di Website

Buka file `kontak.html` dan cari bagian ini:

```javascript
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
```

Ganti dengan ID yang sudah kamu catat:

```javascript
const EMAILJS_PUBLIC_KEY = 'user_ABC123xyz';  // Ganti dengan Public Key kamu
const EMAILJS_SERVICE_ID = 'service_abc123';   // Ganti dengan Service ID kamu
const EMAILJS_TEMPLATE_ID = 'template_xyz789'; // Ganti dengan Template ID kamu
```

## Langkah 6: Testing

1. Buka halaman kontak website
2. Isi form dan submit
3. Cek email kamu, seharusnya ada notifikasi order baru!

## 📌 Tips

- EmailJS gratis untuk 200 email/bulan
- Untuk kebutuhan lebih besar, upgrade ke paket berbayar
- Pastikan email service tetap terkoneksi

## ❓ Troubleshooting

**Email tidak terkirim?**
- Cek console browser untuk error message
- Pastikan semua ID sudah benar
- Pastikan email service masih terkoneksi di dashboard EmailJS

---

Butuh bantuan? Hubungi developer atau cek dokumentasi EmailJS di [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)

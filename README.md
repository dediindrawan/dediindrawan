# Portfolio Website
A modern React project built with Vite and styled using Tailwind CSS.

## Deskripsi
Projek ini adalah sebuah halaman portofolio web sederhana yang dibangun menggunakan React, Vite sebagai build tool, dan Tailwind CSS untuk styling. Projek ini dirancang untuk memberikan pengalaman pengembangan yang cepat dan efisien.

Portofolio ini menampilkan beberapa menu konten seperti:

- Home
- Profile
- Project
- Content
- Contact

## Prasyarat
Pastikan Anda telah menginstal Node.js versi 14.18+ atau versi yang lebih baru dan npm, pnpm, atau yarn sebagai package manager sebelum melanjutkan.

## Instalasi
Ikuti langkah-langkah di bawah ini untuk menginstal dan menjalankan projek di lingkungan pengembangan Anda:

1. **Clone Repository** ini ke direktori lokal Anda:
```bash
git clone https://github.com/dediindrawan/dediindrawan.git
```

2. **Navigasikan** ke direktori projek:
```bash
cd dediindrawan
```

3. **Install** dependensi yang diperlukan:
```bash
# Jika menggunakan npm:
- npm install

# Jika menggunakan pnpm:
- pnpm install

# Jika menggunakan yarn:
- yarn install
```

4. **Jalankan projek** di mode pengembangan:
```bash
# Jika menggunakan npm:
- npm run dev

# Jika menggunakan pnpm:
- pnpm run dev

# Jika menggunakan yarn:
- yarn dev
```

5. **Buka** `http://localhost:5173` di Browser Anda untuk melihat aplikasi berjalan. Atau, periksa alamat url yang dijalankan di terminal pada code editor Anda.

## Struktur Projek
Berikut adalah gambaran struktur direktori dari proyek ini:

```
dediindrawan/
├── node_modules/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── 404.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

- **src/**: Folder utama untuk sumber file aplikasi
- **tailwind.config.js**: File konfigurasi Tailwind CSS
- **vite.config.js**: File konfigurasi Vite

## Cara Penggunaan
Setelah menginstal projek, Anda dapat menambahkan komponen baru, mengatur state, dan menyesuaikan tampilan menggunakan Tailwind CSS. Berikut adalah contoh bagaimana Anda dapat membuat komponen sederhana:

```bash
// src/components/Button.jsx
import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      {children}
    </button>
  );
};

export default Button;
```  

Cara penggunaannya di App.jsx:

```bash
import React from 'react';
import Button from './components/Button';

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Button>Click Me!</Button>
    </div>
  );
}

export default App;
```
## Demo
Lihat demo website ini secara langsung dengan mengunjungi: https://dediindrawan.vercel.app

### Tangkapan Layar
Berikut adalah beberapa tangkapan layar halaman web ini:
- Tampilan layar desktop:  

![Alt Text](https://i.ibb.co.com/T0H6Q9n/Macbook-Air-localhost.png)

- Tampilan layar tablet:  

![Alt Text](https://i.ibb.co.com/HgkNcf1/i-Pad-Mini-localhost.png)

- Tampilan layar smartphone:  

![Alt Text](https://i.ibb.co.com/XJ9L09G/Google-Pixel5-localhost.png)  

![Alt Text](https://i.ibb.co.com/9V6GZ6F/Google-Pixel5-localhost-1.png)

## Kontribusi
Jika Anda ingin berkontribusi pada projek ini, harap ikuti langkah-langkah berikut:
1. Fork Repository ini
2. Buat branch baru (git checkout -b feature-branch)
3. Commit perubahan Anda (git commit -m 'Add new feature')
4. Push ke branch tersebut (git push origin feature-branch)
5. Buka Pull Request di GitHub


## Penjelasan
- **Deskripsi**: Bagian ini menjelaskan tentang projek secara umum.
- **Prasyarat**: Menjelaskan versi Node.js yang dibutuhkan dan package manager yang digunakan.
- **Instalasi**: Langkah-langkah untuk mengkloning repository, menginstal dependensi, dan menjalankan projek.
- **Struktur Projek**: Memberikan gambaran umum tentang struktur direktori projek.
- **Cara Penggunaan**: Contoh bagaimana menggunakan komponen atau fitur dalam projek.
- **Tautan Demo**: Menyediakan link ke aplikasi yang sudah dideploy untuk pengunjung melihat aplikasi secara langsung.
- **Tangkapan Layar**: Menambahkan gambar yang menunjukkan tampilan aplikasi.
- **Kontribusi**: Langkah-langkah untuk berkontribusi pada projek.


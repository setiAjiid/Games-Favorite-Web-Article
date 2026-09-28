import { Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

// Font utama web, diambil dari Google Fonts lewat fitur bawaan Next.js.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

// Judul dan deskripsi yang muncul di tab browser dan hasil pencarian.
export const metadata = {
  title: site.title,
  description: site.subtitle,
};

// Layout utama yang membungkus semua halaman.
export default function RootLayout({ children }) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}

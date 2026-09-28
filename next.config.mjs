/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Izinkan komponen Image menampilkan foto profil dari server Steam.
    remotePatterns: [
      new URL("https://avatars.steamstatic.com/**"),
      new URL("https://avatars.akamai.steamstatic.com/**"),
    ],
  },
};

export default nextConfig;

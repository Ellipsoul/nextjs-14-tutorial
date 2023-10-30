import "@/app/ui/global.css";
import { inter } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Now the entire app will have access to this font */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

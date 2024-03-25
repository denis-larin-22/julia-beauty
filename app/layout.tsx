import "./globals.css";
import { inter } from "./ui/fonts";
import Header from "./ui/common/header";
import Footer from "./ui/common/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col justify-between`}>
        <Header />
        <div className="grow">
          {children}
          <SpeedInsights />
        </div>
        <Footer />
      </body>
    </html>
  );
}

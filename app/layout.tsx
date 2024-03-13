import "./globals.css";
import { inter } from "./ui/fonts";
import Header from "./ui/common/header";
import Footer from "./ui/common/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex flex-col`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

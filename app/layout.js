// app/layout.js
import './globals.css'; // Global stil dosyanız
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/layout/Layout";

// Bu layout, root layout olacak ve <html> ve <body> etiketlerini ekleyecek
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

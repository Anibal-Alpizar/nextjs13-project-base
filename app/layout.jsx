import Navbar from "../components/Navbar";

export const metadata = {
  title: "my store with next.js - Home Page",
  description: "This is the main page of my store",
  keywords: "store, next.js",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

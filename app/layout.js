export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <h1>
            Navbar
          </h1>
          <ul>
            <li>
              Home
            </li>
            <li>
              About
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}

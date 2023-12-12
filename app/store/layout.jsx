import Link from "next/link";

export default function StoreLayout({ children }) {
  return (
    <>
      <na>
        <h3>Store Section</h3>
        <ul>
          <li>
            <Link href="/store/category">Category</Link>
          </li>
          <li>
            <Link href="/store/category/computers">Computers</Link>
          </li>
        </ul>
      </na>

      {children}
    </>
  );
}

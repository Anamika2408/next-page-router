import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul style={{ display: 'flex', gap: '1rem', listStyleType: 'none' }}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
        </ul>
      </nav>
      <h1>My Website</h1>
    </header>
  );
}

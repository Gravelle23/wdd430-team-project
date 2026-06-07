import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">PC Build Plan</h1>

      <div className="navLinks">
        <Link href="/">Home</Link>
        <Link href="/cpu">CPU</Link>
        <Link href="/gpu">GPU</Link>
        <Link href="/ram">RAM</Link>
        <Link href="/budget">Budget</Link>
      </div>
    </nav>
  );
}
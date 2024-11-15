import Link from 'next/link';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <nav className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">Company Profile</h1>
      <ul className="flex space-x-4">
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;

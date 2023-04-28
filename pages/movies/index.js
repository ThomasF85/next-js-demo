import Link from "next/link";
import Image from "next/image";

export default function Movies() {
  return (
    <>
      <h1>Movies</h1>
      <Image
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
        alt="cinema"
        width={640}
        height={426}
      />
      <nav>
        <ul>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

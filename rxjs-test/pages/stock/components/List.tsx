import Link from "next/link";

export default function List({ link, h1, p }: any) {
  return (
    <li>
      <Link href={link}>
        <strong>{h1}</strong>
      </Link>
      <p>{p}</p>
    </li>
  );
}

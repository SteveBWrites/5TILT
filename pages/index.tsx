import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>✨ FTILT — Five Things I Love Today</h1>
      <p>
        Every day, share 5 things you love — a book, film, food, game, place,
        person, anything!
      </p>
      <p>
        <Link href="/add">➕ Add today’s 5 things</Link>
      </p>
    </main>
  );
}

import Head from "next/head";
import Link from "next/link";

export default function Tecera() {
  return (
    <div className="container">
      <Head>
        <title>asa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>2da page</h1>
        <span>Profesor: Pablo Vélez</span>
        <Link href="/">Atrás</Link>
      </main>
    </div>
  );
}

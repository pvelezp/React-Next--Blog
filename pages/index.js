import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Bienvenidos a Velez Developer</h1>
        <span>Profesor: Pablo Vélez</span>
        <Link href="/tercera"> Siguiente página</Link>
      </main>
    </div>
  );
}

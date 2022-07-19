import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ups...</title>
        <meta name="description" content="404" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>No encontramos lo que estás buscando...</h1>
      </main>
    </div>
  );
}

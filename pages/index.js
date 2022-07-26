import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Franco Di Leo</title>
        <meta name="description" content="Página de franco di leo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hello extranger</h1>
      </main>
    </div>
  );
}

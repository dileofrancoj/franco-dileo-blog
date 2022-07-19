import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Blog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Posts del blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Posts</h1>
      </main>
    </div>
  );
}

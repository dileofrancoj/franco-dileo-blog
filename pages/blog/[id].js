import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

export default function Post() {
  const router = useRouter();
  const postId = router.query.id;
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Posts del blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Post {postId}</h1>
      </main>
    </div>
  );
}

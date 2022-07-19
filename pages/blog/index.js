import axios from "axios";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Blog({ posts }) {
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

export async function getStaticProps() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/"
  );
  return {
    props: {
      post: response.data,
    },
  };
}

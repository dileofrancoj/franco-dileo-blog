import Head from "next/head";
import axios from "axios";
import styles from "../../styles/Home.module.css";

export default function Post({ id, data }) {
  if (!data) return "Loading...";
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Posts del blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Post {id}</h1>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${query.id}`
  );

  return {
    props: {
      data: response.data,
      id: query.id,
    },
  };
}

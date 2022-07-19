import Head from "next/head";
import Link from "next/link";
import axios from "axios";

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
        {posts?.length > 0 &&
          posts.map((post) => (
            <Link
              key={post.id}
              href={{
                pathname: `/blog/${post.id}`,
              }}
            >
              {`Post: ${post.id}`.toString()}
            </Link>
          ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/"
  );
  console.log("repsonse ->", response.data);
  return {
    props: {
      posts: response.data,
    },
  };
}

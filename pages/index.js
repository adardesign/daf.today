import Head from "next/head";
import Daf from "../src/components/Daf";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Today's Daf</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function (i, s, o, g, r, a, m) {i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {(i[r].q = i[r].q || []).push(arguments)}, i[r].l = 1 * new Date(); a = s.createElement(o),m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga'); if (typeof ga === "function") {ga('create', 'UA-155849665-1', 'auto', {})}`
          }}>
          </script>
        
      </Head>

      <main className={styles.main}>
        <h2 className={styles.Home}>בס”ד</h2>
        <div style={{ textAlign: "center" }}>
          לעילוי נשמת הילד יעקב יוסף בן אהרן דוד יודא
          <Daf />
        </div>
      </main>

      <footer className={styles.footer}>A project by adardesign.com</footer>
    </div>
  );
}

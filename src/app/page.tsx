import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
      <Image
        src={require('../assets/pangea.png')}
        alt="Hero"
        className={styles.hero}
        width="1080" height="1080" />
        <h1 className={styles.title}>LAUNCHING IN <br className={styles.break} />Q2.2024</h1>
      </div>
      <h2 className={styles.subtitle}>{"Let's unite the continent again!"}</h2>
    </main>
  );
}

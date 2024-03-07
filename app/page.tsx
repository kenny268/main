import Image from "next/image";
import styles from "./page.module.css";
import Portfolio from "./Components/portfolio";

export default function Home() {
  return (
    <main className={styles.main}>
      <Portfolio/>
    </main>
  );
}

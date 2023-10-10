import Image from "next/image";
import ray from "../images/ray.svg";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <Image src={ray} alt="Picture of a triangle" width={300} height={300} />
    </main>
  );
}

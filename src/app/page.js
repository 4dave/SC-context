import styles from "./page.module.css"
import Posts from "@/components/Posts"

export default async function Home() {
  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <Posts />
    </main>
  )
}

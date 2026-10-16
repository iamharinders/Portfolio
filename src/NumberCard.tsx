import styles from "./styles.module.css"

export default function NumberCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-4"]}>
        <div className={styles["number"]}>
          <div className={styles["reviews-text-16"]}>
            <p className={styles["p-38"]}>{slots[0] ?? "Avg. Retention Rate"}</p>
          </div>
          <div className={styles["div-32"]}>
            <p className={styles["p-39"]}>{slots[1] ?? "68%"}</p>
            <p className={styles["p-40"]}>{slots[2] ?? "68%"}</p>
          </div>
        </div>
        <div className={styles["reviews-text-17"]}>
          <p className={styles["p-41"]}>{slots[3] ?? "Hook-driven edits that keep viewers watching past the first 3 seconds."}</p>
        </div>
        <div className={styles["purple-shade"]} />
      </div>
  )
}

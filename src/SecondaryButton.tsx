import styles from "./styles.module.css"

export default function SecondaryButton({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["variant-2-2"]} href="/all-works">
        <div className={styles["text-4"]}>
          <div className={styles["promo-button-label-5"]}>
            <p className={styles["p-11"]}>{slots[0] ?? "See Our Works"}</p>
          </div>
        </div>
      </a>
  )
}

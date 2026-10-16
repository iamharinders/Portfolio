import styles from "./styles.module.css"

export default function SecondaryButton2({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["variant-1-13"]} href="/contact">
        <div className={styles["text-12"]}>
          <div className={styles["promo-button-label-7"]}>
            <p className={styles["p-80"]}>{slots[0] ?? "Get Started Now"}</p>
          </div>
        </div>
      </a>
  )
}

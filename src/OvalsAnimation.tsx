import styles from "./styles.module.css"

export default function OvalsAnimation({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-18"]}>
        <div className={styles["1st-oval"]}>
          <div className={styles["div-137"]} />
        </div>
        <div className={styles["2nd-oval"]}>
          <div className={styles["div-138"]} />
        </div>
        <div className={styles["3rd-oval"]}>
          <div className={styles["div-137"]} />
        </div>
      </div>
  )
}

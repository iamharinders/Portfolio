import styles from "./styles.module.css"

export default function AnimatedNumberCounter3({ slots = [] }: { slots?: string[] }) {
  return (
      <p className={styles["p-39"]}>{slots[0] ?? "68%"}</p>
  )
}

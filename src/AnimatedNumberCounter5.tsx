import styles from "./styles.module.css"

export default function AnimatedNumberCounter5({ slots = [] }: { slots?: string[] }) {
  return (
      <p className={styles["p-43"]}>{slots[0] ?? "3X"}</p>
  )
}

import styles from "./styles.module.css"

export default function AnimatedNumberCounter4({ slots = [] }: { slots?: string[] }) {
  return (
      <p className={styles["p-42"]}>{slots[0] ?? "500+"}</p>
  )
}

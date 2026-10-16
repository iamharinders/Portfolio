import styles from "./styles.module.css"

export default function AnimatedNumberCounter2({ slots = [] }: { slots?: string[] }) {
  return (
      <p className={styles["p-29"]}>{slots[0] ?? "88K"}</p>
  )
}

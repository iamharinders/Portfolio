import styles from "./styles.module.css"

export default function AnimatedNumberCounter({ slots = [] }: { slots?: string[] }) {
  return (
      <p className={styles["p-14"]}>{slots[0] ?? "120K"}</p>
  )
}

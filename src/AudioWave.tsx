import styles from "./styles.module.css"

export default function AudioWave({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-11"] + " " + styles["rv-14"]} data-reveal>
        <div className={styles["div-89"] + " " + styles["rv-15"]} data-reveal />
        <div className={styles["div-90"] + " " + styles["rv-16"]} data-reveal />
        <div className={styles["div-91"] + " " + styles["rv-17"]} data-reveal />
        <div className={styles["div-90"] + " " + styles["rv-16"]} data-reveal />
        <div className={styles["div-91"] + " " + styles["rv-17"]} data-reveal />
        <div className={styles["div-89"] + " " + styles["rv-15"]} data-reveal />
        <div className={styles["div-92"] + " " + styles["rv-18"]} data-reveal />
        <div className={styles["div-93"] + " " + styles["rv-19"]} data-reveal />
        <div className={styles["div-94"] + " " + styles["rv-20"]} data-reveal />
      </div>
  )
}

import styles from "./styles.module.css"

export default function Video({ slots = [] }: { slots?: string[] }) {
  return (
      <video className={styles["video"]} src="https://framerusercontent.com/assets/DbZSLkpXo1zcSnI9ysFDBJDfbA.mp4" muted loop playsInline />
  )
}

import styles from "./styles.module.css"

export default function Video8({ slots = [] }: { slots?: string[] }) {
  return (
      <video className={styles["video-3"]} src="https://framerusercontent.com/assets/aaDgCGVVmNL57iUOvyPa1FHrT0.mp4" autoPlay muted loop playsInline />
  )
}

import styles from "./styles.module.css"

export default function Video4({ slots = [] }: { slots?: string[] }) {
  return (
      <video className={styles["video-3"]} src="https://framerusercontent.com/assets/18EExDeOIlPsFnEV5Fcbku7gdmo.mp4" autoPlay muted loop playsInline />
  )
}

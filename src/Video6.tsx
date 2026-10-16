import styles from "./styles.module.css"

export default function Video6({ slots = [] }: { slots?: string[] }) {
  return (
      <video className={styles["video-3"]} src="https://framerusercontent.com/assets/OF8Sj3bltaUyBpQsgUNxK11PKc.mp4" autoPlay muted loop playsInline />
  )
}

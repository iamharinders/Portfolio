import styles from "./styles.module.css"

export default function Video10({ slots = [] }: { slots?: string[] }) {
  return (
      <video className={styles["video-6"]} src="https://framerusercontent.com/assets/OUh0BxMeGqmebqe3OU950qgZd5Q.mp4" autoPlay muted loop playsInline />
  )
}

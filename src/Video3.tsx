import styles from "./styles.module.css"

export default function Video3({ slots = [] }: { slots?: string[] }) {
  return (
      <video className={styles["video-3"]} src="https://framerusercontent.com/assets/4e6W2vHiUa5qeeiGAcxaDg11GbM.mp4" autoPlay muted loop playsInline />
  )
}

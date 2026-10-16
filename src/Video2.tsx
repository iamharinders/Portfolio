import styles from "./styles.module.css"

export default function Video2({ slots = [] }: { slots?: string[] }) {
  return (
      <video className={styles["video-2"]} src="https://framerusercontent.com/assets/0O56ed5D4Df3A8PfmCNF5GC9eno.mp4" autoPlay muted loop playsInline />
  )
}

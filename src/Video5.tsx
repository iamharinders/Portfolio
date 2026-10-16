import styles from "./styles.module.css"

export default function Video5({ slots = [] }: { slots?: string[] }) {
  return (
      <video className={styles["video-3"]} src="https://framerusercontent.com/assets/423HbpaxYIUVGK5fOFwnabw10.mp4" muted loop playsInline />
  )
}

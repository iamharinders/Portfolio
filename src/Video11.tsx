import styles from "./styles.module.css"

export default function Video11({ slots = [] }: { slots?: string[] }) {
  return (
      <video className={styles["video-8"]} src="https://framerusercontent.com/assets/FLMP26czSPqDNGSRZ1PfTOfD3E.mp4" autoPlay muted loop playsInline />
  )
}

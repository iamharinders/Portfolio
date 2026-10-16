import styles from "./styles.module.css"

export default function ImageTab({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["active"]}>
        <div className={styles["div-109"]}>
          <img className={styles["img-17"]} src={slots[0] ?? "https://framerusercontent.com/images/mQZtn3nU9sPT11tH2MuJSrIPI.png?scale-down-to=1024&width=960&height=1200"} alt="" />
        </div>
      </div>
  )
}

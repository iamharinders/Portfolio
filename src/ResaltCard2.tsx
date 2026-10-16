import styles from "./styles.module.css"

export default function ResaltCard2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["tab"]}>
        <div className={styles["profile-socile-2"]}>
          <div className={styles["div-62"]}>
            <img className={styles["img-10"]} src={slots[0] ?? "https://framerusercontent.com/images/54oTOobVFLPuUGVYj2q3tGK7c5o.png?scale-down-to=512&width=1200&height=933"} alt="" />
          </div>
          <div className={styles["profile-info-3"]}>
            <div className={styles["ellipse-194"]}>
              <div className={styles["div-59"]}>
                <img className={styles["img-7"]} src={slots[1] ?? "https://framerusercontent.com/images/ik99JHM0iRogYcwROk6KaId1b0.png?width=400&height=300"} alt="" />
              </div>
            </div>
            <div className={styles["name-info-3"]}>
              <div className={styles["reviews-text-25"]}>
                <p className={styles["p-56"]}>{slots[2] ?? "Khulna_para"}</p>
              </div>
              <div className={styles["verification-icon"]}>
                <div className={styles["div-60"]}>
                  <img className={styles["img-8"]} src={slots[3] ?? "https://framerusercontent.com/images/mH9AO6fIaF2UQcO2TXV19Fuk.png?width=350&height=350"} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["text-8"]}>
          <div className={styles["title-text-9"]}>
            <h6 className={styles["h6-3"]}>
              <span className={styles["span-98"]}>{slots[4] ?? "3x engagement increase"}</span>
            </h6>
          </div>
          <div className={styles["reviews-text-26"]}>
            <p className={styles["p-57"]}>{slots[5] ?? "Better hooks and tighter storytelling pushed watch time up — and the algorithm noticed."}</p>
          </div>
        </div>
      </div>
  )
}

import styles from "./styles.module.css"

export default function ResaltCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["desktop-4"]}>
        <div className={styles["profile-socile"]}>
          <div className={styles["div-61"]}>
            <img className={styles["img-9"]} src={slots[0] ?? "https://framerusercontent.com/images/5ApYxRnsEjndNIsc1QVmMRbOZ8.png?scale-down-to=1024&width=1200&height=840"} alt="" />
          </div>
          <div className={styles["profile-info-2"]}>
            <div className={styles["ellipse-194"]}>
              <div className={styles["div-59"]}>
                <img className={styles["img-7"]} src={slots[1] ?? "https://framerusercontent.com/images/ik99JHM0iRogYcwROk6KaId1b0.png?width=400&height=300"} alt="" />
              </div>
            </div>
            <div className={styles["name-info-2"]}>
              <div className={styles["reviews-text-23"]}>
                <p className={styles["p-54"]}>{slots[2] ?? "nova.skincare"}</p>
              </div>
              <div className={styles["verification-icon"]}>
                <div className={styles["div-60"]}>
                  <img className={styles["img-8"]} src={slots[3] ?? "https://framerusercontent.com/images/mH9AO6fIaF2UQcO2TXV19Fuk.png?width=350&height=350"} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["text-7"]}>
          <div className={styles["title-text-8"]}>
            <h6 className={styles["h6-2"]}>
              <span className={styles["span-97"]}>{slots[4] ?? "1.2M+ views on a single reel"}</span>
            </h6>
          </div>
          <div className={styles["reviews-text-24"]}>
            <p className={styles["p-55"]}>{slots[5] ?? "We created product-focused short videos with strong hooks and clean visuals, helping the brand reach a wider audience and increase engagement."}</p>
          </div>
        </div>
      </div>
  )
}

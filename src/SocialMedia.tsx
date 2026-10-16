import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function SocialMedia({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-8"]}>
        <div className={styles["div-53"]} />
        <div className={styles["video-4"]}>
          <div className={styles["div-54"]} />
          <div className={styles["div-55"]}>
            <video className={styles["video-5"]} src="https://framerusercontent.com/assets/OUh0BxMeGqmebqe3OU950qgZd5Q.mp4" autoPlay muted loop playsInline />
          </div>
        </div>
        <div className={styles["logo-title"]}>
          <div className={styles["logo-card"]}>
            <div className={styles["div-56"]}>
              <div className={styles["div-57"]}>
                <img className={styles["img-6"]} src={slots[0] ?? "https://framerusercontent.com/images/rQlIHNZIJGIWJ6HwPA2PlcsVfT4.png?width=192&height=192"} alt="" />
              </div>
            </div>
            <div className={styles["card-stats"]}>
              <div className={styles["view"]}>
                <div className={styles["div-58"]}>
                  <SvgGraphic className={styles["svg-10"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 16 16\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"1208\"><use href=\"#svg-1276731523_702\" data-f2c-idx=\"1209\"></use></svg>"} />
                </div>
              </div>
              <div className={styles["title-text-6"]}>
                <p className={styles["p-49"]}>{slots[1] ?? "758K Views"}</p>
              </div>
            </div>
          </div>
          <div className={styles["content-box"]}>
            <div className={styles["title"]}>
              <div className={styles["text-6"]}>
                <div className={styles["title-text-7"]}>
                  <p className={styles["p-50"]}>{slots[2] ?? "2.3x engagement growth"}</p>
                </div>
                <div className={styles["reviews-text-21"]}>
                  <p className={styles["p-51"]}>{slots[3] ?? "Optimized content structure for better watch time"}</p>
                </div>
              </div>
              <div className={styles["profile-info"]}>
                <div className={styles["ellipse-194"]}>
                  <div className={styles["div-59"]}>
                    <img className={styles["img-7"]} src={slots[4] ?? "https://framerusercontent.com/images/ik99JHM0iRogYcwROk6KaId1b0.png?width=400&height=300"} alt="" />
                  </div>
                </div>
                <div className={styles["name-info"]}>
                  <div className={styles["reviews-text-22"]}>
                    <p className={styles["p-52"]}>{slots[5] ?? "wearnova"}</p>
                  </div>
                  <div className={styles["verification-icon"]}>
                    <div className={styles["div-60"]}>
                      <img className={styles["img-8"]} src={slots[6] ?? "https://framerusercontent.com/images/mH9AO6fIaF2UQcO2TXV19Fuk.png?width=350&height=350"} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

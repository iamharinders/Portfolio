import styles from "./styles.module.css"

export default function UploadYourContent({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["desktop-5"]}>
        <div className={styles["card-container"]}>
          <div className={styles["card-background"]}>
            <div className={styles["file"]}>
              <div className={styles["div-63"]} />
            </div>
            <div className={styles["image-box"] + " " + styles["rv-3"]} data-reveal>
              <div className={styles["div-64"] + " " + styles["rv-4"]} data-reveal>
                <div className={styles["div-65"]}>
                  <img className={styles["img-11"]} src={slots[0] ?? "https://framerusercontent.com/images/UgxGH35PaDs6F2NERRLs0pfDJw.jpg?scale-down-to=512&width=1500&height=979"} alt="" />
                </div>
              </div>
              <div className={styles["div-66"] + " " + styles["rv-5"]} data-reveal>
                <div className={styles["div-67"]}>
                  <img className={styles["img-12"]} src={slots[1] ?? "https://framerusercontent.com/images/KwGLeoODVNSHXFtx9ixjbZl1s.jpg?scale-down-to=512&width=1500&height=1500"} alt="" />
                </div>
              </div>
              <div className={styles["image"] + " " + styles["rv-6"]} data-reveal>
                <div className={styles["div-65"]}>
                  <img className={styles["img-13"]} src={slots[2] ?? "https://framerusercontent.com/images/08ZCimrDgoHerYxshxxXeh8lo.jpg?scale-down-to=512&width=1500&height=1000"} alt="" />
                </div>
              </div>
              <div className={styles["badge-container"] + " " + styles["rv-7"]} data-reveal>
                <div className={styles["badge-number"] + " " + styles["rv-8"]} data-reveal>
                  <p className={styles["p-59"]}>{slots[3] ?? "3"}</p>
                </div>
              </div>
              <div className={styles["vector"] + " " + styles["rv-9"]} data-reveal />
            </div>
          </div>
        </div>
      </div>
  )
}

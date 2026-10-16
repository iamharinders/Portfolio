import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Navbar({ slots = [] }: { slots?: string[] }) {
  return (
      <nav className={styles["desktop"]}>
        <div className={styles["container"]}>
          <div className={styles["logo-container"]}>
            <a className={styles["logo-container-2"]} href="./">
              <div className={styles["logo"]}>
                <div className={styles["div"]}>
                  <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 24 24\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"12\"><use href=\"#svg-1084292861_3485\" data-f2c-idx=\"13\"></use></svg>"} />
                </div>
              </div>
              <div className={styles["logo-title-text"]}>
                <p className={styles["p"]}>{slots[0] ?? "Harinder.mp4"}</p>
              </div>
            </a>
          </div>
          <div className={styles["menu-items"]}>
            <div className={styles["reviews-text"]}>
              <div className={styles["p-2"]}>
                <a className={styles["a"]} href="./#sarvices-section">{slots[1] ?? "Services"}</a>
              </div>
            </div>
            <div className={styles["reviews-text-2"]}>
              <div className={styles["p-3"]}>
                <a className={styles["a"]} href="./all-works">{slots[2] ?? "Work"}</a>
              </div>
            </div>
            <div className={styles["reviews-text-3"]}>
              <div className={styles["p-4"]}>
                <a className={styles["a"]} href="./#Pricing">{slots[3] ?? "Pricing"}</a>
              </div>
            </div>
            <div className={styles["reviews-text-4"]}>
              <div className={styles["p-5"]}>
                <a className={styles["a"]} href="./contact">{slots[4] ?? "Contact"}</a>
              </div>
            </div>
          </div>
          <div className={styles["div-2"]}>
            <a className={styles["variant-1"]} href="./contact">
              <div className={styles["text"]}>
                <div className={styles["text-2"]}>
                  <div className={styles["promo-button-label"]}>
                    <p className={styles["p-6"]}>{slots[5] ?? "Hire me"}</p>
                  </div>
                  <div className={styles["promo-button-label-2"]}>
                    <p className={styles["p-7"]}>{slots[6] ?? "Get Started"}</p>
                  </div>
                </div>
                <div className={styles["arrow"]}>
                  <div className={styles["arrow-2"]}>
                    <div className={styles["div-3"]}>
                      <SvgGraphic className={styles["svg-2"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 24 24\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"40\"><use href=\"#svg1883890042_373\" data-f2c-idx=\"41\"></use></svg>"} />
                    </div>
                  </div>
                  <div className={styles["arrow-3"]}>
                    <div className={styles["div-3"]}>
                      <SvgGraphic className={styles["svg-2"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 24 24\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"44\"><use href=\"#svg1883890042_373\" data-f2c-idx=\"45\"></use></svg>"} />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </nav>
  )
}

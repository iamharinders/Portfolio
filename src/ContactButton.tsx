import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function ContactButton({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["variant-1"]} href="/hire-me">
        <div className={styles["text"]}>
          <div className={styles["text-2"]}>
            <div className={styles["promo-button-label"]}>
              <p className={styles["p-6"]}>{slots[0] ?? "Hire me"}</p>
            </div>
            <div className={styles["promo-button-label-2"]}>
              <p className={styles["p-7"]}>{slots[1] ?? "Get Started"}</p>
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
  )
}

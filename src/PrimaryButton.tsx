import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function PrimaryButton({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["primary"]} href="/contact">
        <div className={styles["content"]}>
          <div className={styles["text-3"]}>
            <div className={styles["1-promo-button-label"]}>
              <p className={styles["p-9"]}>{slots[0] ?? "Start a Project"}</p>
            </div>
          </div>
          <div className={styles["arrow-4"]}>
            <div className={styles["logo"]}>
              <div className={styles["div"]}>
                <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 24 24\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"110\"><use href=\"#svg-1609222690_369\" data-f2c-idx=\"111\"></use></svg>"} />
              </div>
            </div>
            <div className={styles["arrow-5"]}>
              <div className={styles["div"]}>
                <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 24 24\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"114\"><use href=\"#svg-1609222690_369\" data-f2c-idx=\"115\"></use></svg>"} />
              </div>
            </div>
          </div>
        </div>
      </a>
  )
}

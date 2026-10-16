import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function FormButton({ slots = [] }: { slots?: string[] }) {
  return (
      <button className={styles["default"]}>
        <div className={styles["div-141"]}>
          <p className={styles["p-100"]}>{slots[0] ?? "Submit Message"}</p>
        </div>
        <div className={styles["arrow-6"]}>
          <div className={styles["arrow-7"]}>
            <div className={styles["div-142"]}>
              <SvgGraphic className={styles["svg-28"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 24 24\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"192\"><use href=\"#svg-1609222690_369\" data-f2c-idx=\"193\"></use></svg>"} />
            </div>
          </div>
          <div className={styles["arrow-8"]}>
            <div className={styles["div-142"]}>
              <SvgGraphic className={styles["svg-28"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 24 24\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"196\"><use href=\"#svg-1609222690_369\" data-f2c-idx=\"197\"></use></svg>"} />
            </div>
          </div>
        </div>
      </button>
  )
}

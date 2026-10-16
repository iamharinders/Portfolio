import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Card1({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["desktop-2"]}>
        <div className={styles["orange-shade"]} />
        <div className={styles["orange-shade-2"]} />
        <div className={styles["div-8"]}>
          <div className={styles["stats"]}>
            <div className={styles["reviews-text-5"] + " " + styles["rv-1"]} data-reveal>
              <div className={styles["p-13"]}>
                <div className={styles["span"]}>
                  <span className={styles["span-2"]}>{slots[0] ?? "V"}</span>
                  <span className={styles["span-3"]}>{slots[1] ?? "i"}</span>
                  <span className={styles["span-4"]}>{slots[2] ?? "e"}</span>
                  <span className={styles["span-5"]}>{slots[3] ?? "w"}</span>
                  <span className={styles["span-6"]}>{slots[4] ?? "s"}</span>
                </div>
              </div>
            </div>
            <div className={styles["div-9"]}>
              <p className={styles["p-14"]}>{slots[5] ?? "120K"}</p>
              <p className={styles["p-15"]}>{slots[6] ?? "120K"}</p>
            </div>
            <div className={styles["reviews-text-6"] + " " + styles["rv-1"]} data-reveal>
              <div className={styles["p-16"]}>
                <div className={styles["span-7"]}>
                  <span className={styles["span-8"]}>{slots[7] ?? "-"}</span>
                  <span className={styles["span-9"]}>{slots[8] ?? "6"}</span>
                  <span className={styles["span-9"]}>{slots[9] ?? "8"}</span>
                  <span className={styles["span-10"]}>{slots[10] ?? "%"}</span>
                </div>
                {" "}
                <div className={styles["span-7"]}>
                  <span className={styles["span-11"]}>{slots[11] ?? "r"}</span>
                  <span className={styles["span-12"]}>{slots[12] ?? "e"}</span>
                  <span className={styles["span-8"]}>{slots[13] ?? "t"}</span>
                  <span className={styles["span-12"]}>{slots[14] ?? "e"}</span>
                  <span className={styles["span-12"]}>{slots[15] ?? "n"}</span>
                  <span className={styles["span-8"]}>{slots[16] ?? "t"}</span>
                  <span className={styles["span-13"]}>{slots[17] ?? "i"}</span>
                  <span className={styles["span-12"]}>{slots[18] ?? "o"}</span>
                  <span className={styles["span-12"]}>{slots[19] ?? "n"}</span>
                </div>
                {" "}
                <div className={styles["span-7"]}>
                  <span className={styles["span-12"]}>{slots[20] ?? "d"}</span>
                  <span className={styles["span-11"]}>{slots[21] ?? "r"}</span>
                  <span className={styles["span-12"]}>{slots[22] ?? "o"}</span>
                  <span className={styles["span-9"]}>{slots[23] ?? "p"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["div-10"]}>
            <div className={styles["months"]}>
              <div className={styles["reviews-text-7"]}>
                <div className={styles["p-17"]}>
                  <div className={styles["span-14"]}>
                    <span className={styles["span-15"]}>{slots[24] ?? "J"}</span>
                    <span className={styles["span-16"]}>{slots[25] ?? "A"}</span>
                    <span className={styles["span-17"]}>{slots[26] ?? "N"}</span>
                  </div>
                </div>
              </div>
              <div className={styles["reviews-text-8"]}>
                <div className={styles["p-18"]}>
                  <div className={styles["span-14"]}>
                    <span className={styles["span-16"]}>{slots[27] ?? "F"}</span>
                    <span className={styles["span-16"]}>{slots[28] ?? "E"}</span>
                    <span className={styles["span-16"]}>{slots[29] ?? "B"}</span>
                  </div>
                </div>
              </div>
              <div className={styles["reviews-text-9"]}>
                <div className={styles["p-19"]}>
                  <div className={styles["span-14"]}>
                    <span className={styles["span-18"]}>{slots[30] ?? "M"}</span>
                    <span className={styles["span-16"]}>{slots[31] ?? "A"}</span>
                    <span className={styles["span-16"]}>{slots[32] ?? "R"}</span>
                  </div>
                </div>
              </div>
              <div className={styles["reviews-text-8"]}>
                <div className={styles["p-18"]}>
                  <div className={styles["span-14"]}>
                    <span className={styles["span-16"]}>{slots[33] ?? "A"}</span>
                    <span className={styles["span-16"]}>{slots[34] ?? "P"}</span>
                    <span className={styles["span-16"]}>{slots[35] ?? "R"}</span>
                  </div>
                </div>
              </div>
              <div className={styles["reviews-text-9"]}>
                <div className={styles["p-19"]}>
                  <div className={styles["span-14"]}>
                    <span className={styles["span-18"]}>{slots[36] ?? "M"}</span>
                    <span className={styles["span-16"]}>{slots[37] ?? "A"}</span>
                    <span className={styles["span-16"]}>{slots[38] ?? "Y"}</span>
                  </div>
                </div>
              </div>
              <div className={styles["reviews-text-8"]}>
                <div className={styles["p-18"]}>
                  <div className={styles["span-14"]}>
                    <span className={styles["span-15"]}>{slots[39] ?? "J"}</span>
                    <span className={styles["span-17"]}>{slots[40] ?? "U"}</span>
                    <span className={styles["span-17"]}>{slots[41] ?? "N"}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["line"] + " " + styles["rv-1"]} data-reveal>
              <div className={styles["div-11"]} />
            </div>
            <div className={styles["line-2"] + " " + styles["rv-1"]} data-reveal>
              <div className={styles["div-12"]} />
            </div>
            <div className={styles["line-3"] + " " + styles["rv-1"]} data-reveal>
              <div className={styles["div-13"]} />
            </div>
            <div className={styles["line-4"]}>
              <div className={styles["div-14"]} />
            </div>
            <div className={styles["line-5"]}>
              <div className={styles["div-15"]} />
            </div>
            <div className={styles["line-5"]}>
              <div className={styles["div-16"]} />
            </div>
            <SvgGraphic className={styles["svg-5"]} html={"<svg class=\"framer-EEeBb framer-v5sbgb\" role=\"presentation\" viewBox=\"0 0 320 85\" style=\"opacity: 1;\" data-f2c-idx=\"400\"><path d=\"M 0 0 L 51 13.5 L 106.5 7 L 162 26 L 213 63.5 L 269.5 58 L 318 83\" fill=\"transparent\" height=\"83px\" id=\"fpSnqCPle\" stroke=\"rgba(204, 84, 14, 0.16)\" stroke-dasharray=\"0\" stroke-linecap=\"round\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" stroke-width=\"2\" transform=\"translate(1 1)\" width=\"318px\" data-f2c-idx=\"401\"></path><path d=\"M 0 0 L 51 13.5 L 106.5 7 L 162 26 L 213 63.5 L 269.5 58 L 318 83\" fill=\"transparent\" height=\"83px\" id=\"Kc93c_pdF\" stroke=\"rgb(204, 84, 14)\" stroke-dasharray=\"341.9320983886719 341.9320983886719\" stroke-linecap=\"round\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" stroke-width=\"2\" transform=\"translate(1 1)\" width=\"318px\" stroke-dashoffset=\"-42981.200912707995\" data-f2c-idx=\"402\"></path></svg>"} />
          </div>
        </div>
        <div className={styles["tooltip-content"] + " " + styles["rv-1"]} data-reveal>
          <div className={styles["tooltip-text"]}>
            <p className={styles["p-20"]}>{slots[42] ?? "50% Viewers dropped"}</p>
          </div>
          <div className={styles["ellipse-15"]} />
        </div>
      </div>
  )
}

import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Card3({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-3"]}>
        <div className={styles["title-and-days"]}>
          <div className={styles["stats-4"]}>
            <div className={styles["reviews-text-10"] + " " + styles["rv-1"]} data-reveal>
              <div className={styles["p-30"]}>
                <div className={styles["span-29"]}>
                  <span className={styles["span-30"]}>{slots[0] ?? "C"}</span>
                  <span className={styles["span-31"]}>{slots[1] ?? "o"}</span>
                  <span className={styles["span-31"]}>{slots[2] ?? "n"}</span>
                  <span className={styles["span-32"]}>{slots[3] ?? "s"}</span>
                  <span className={styles["span-33"]}>{slots[4] ?? "i"}</span>
                  <span className={styles["span-32"]}>{slots[5] ?? "s"}</span>
                  <span className={styles["span-34"]}>{slots[6] ?? "t"}</span>
                  <span className={styles["span-31"]}>{slots[7] ?? "e"}</span>
                  <span className={styles["span-31"]}>{slots[8] ?? "n"}</span>
                  <span className={styles["span-31"]}>{slots[9] ?? "c"}</span>
                  <span className={styles["span-31"]}>{slots[10] ?? "y"}</span>
                </div>
              </div>
            </div>
            <div className={styles["title-text"] + " " + styles["rv-1"]} data-reveal>
              <div className={styles["p-31"]}>
                <div className={styles["span-35"]}>
                  <span className={styles["span-36"]}>{slots[11] ?? "I"}</span>
                  <span className={styles["span-37"]}>{slots[12] ?? "n"}</span>
                  <span className={styles["span-38"]}>{slots[13] ?? "c"}</span>
                  <span className={styles["span-37"]}>{slots[14] ?? "o"}</span>
                  <span className={styles["span-37"]}>{slots[15] ?? "n"}</span>
                  <span className={styles["span-39"]}>{slots[16] ?? "s"}</span>
                  <span className={styles["span-36"]}>{slots[17] ?? "i"}</span>
                  <span className={styles["span-39"]}>{slots[18] ?? "s"}</span>
                  <span className={styles["span-40"]}>{slots[19] ?? "t"}</span>
                  <span className={styles["span-38"]}>{slots[20] ?? "e"}</span>
                  <span className={styles["span-37"]}>{slots[21] ?? "n"}</span>
                  <span className={styles["span-40"]}>{slots[22] ?? "t"}</span>
                </div>
                {" "}
                <div className={styles["span-35"]}>
                  <span className={styles["span-41"]}>{slots[23] ?? "p"}</span>
                  <span className={styles["span-37"]}>{slots[24] ?? "o"}</span>
                  <span className={styles["span-39"]}>{slots[25] ?? "s"}</span>
                  <span className={styles["span-40"]}>{slots[26] ?? "t"}</span>
                  <span className={styles["span-36"]}>{slots[27] ?? "i"}</span>
                  <span className={styles["span-37"]}>{slots[28] ?? "n"}</span>
                  <span className={styles["span-37"]}>{slots[29] ?? "g"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["animated-line"] + " " + styles["rv-1"]} data-reveal>
            <div className={styles["long-line"]} />
            <div className={styles["small-line"]} />
          </div>
          <div className={styles["posting-activity-wrapper"]}>
            <div className={styles["reviews-text-12"]}>
              <div className={styles["p-32"]}>
                <div className={styles["span-42"]}>
                  <span className={styles["span-43"]}>{slots[30] ?? "P"}</span>
                  <span className={styles["span-43"]}>{slots[31] ?? "o"}</span>
                  <span className={styles["span-44"]}>{slots[32] ?? "s"}</span>
                  <span className={styles["span-45"]}>{slots[33] ?? "t"}</span>
                  <span className={styles["span-46"]}>{slots[34] ?? "i"}</span>
                  <span className={styles["span-43"]}>{slots[35] ?? "n"}</span>
                  <span className={styles["span-43"]}>{slots[36] ?? "g"}</span>
                </div>
                {" "}
                <div className={styles["span-42"]}>
                  <span className={styles["span-47"]}>{slots[37] ?? "A"}</span>
                  <span className={styles["span-43"]}>{slots[38] ?? "c"}</span>
                  <span className={styles["span-45"]}>{slots[39] ?? "t"}</span>
                  <span className={styles["span-46"]}>{slots[40] ?? "i"}</span>
                  <span className={styles["span-44"]}>{slots[41] ?? "v"}</span>
                  <span className={styles["span-46"]}>{slots[42] ?? "i"}</span>
                  <span className={styles["span-45"]}>{slots[43] ?? "t"}</span>
                  <span className={styles["span-43"]}>{slots[44] ?? "y"}</span>
                </div>
              </div>
            </div>
            <div className={styles["posting-activity"]}>
              <div className={styles["weekday-container"] + " " + styles["rv-1"]} data-reveal>
                <div className={styles["reviews-text-13"]}>
                  <p className={styles["p-33"]}>{slots[45] ?? "TUE"}</p>
                </div>
                <SvgGraphic className={styles["tik-mark"]} html={"<svg data-framer-name=\"Tik Mark\" class=\"framer-i0APt framer-12vsufd\" role=\"presentation\" viewBox=\"0 0 86 85\" style=\"opacity: 1;\" data-f2c-idx=\"561\"><defs data-f2c-idx=\"562\"><linearGradient id=\"UBFQ5owAB-3448679881-linear-gradient\" x1=\"0.9629350746874972\" x2=\"0.03706492531250283\" y1=\"0\" y2=\"1\" data-f2c-idx=\"563\"><stop offset=\"0\" stop-color=\"rgb(211, 111, 40)\" data-f2c-idx=\"564\"></stop><stop offset=\"1\" stop-color=\"rgba(255, 61, 22, 0.16)\" data-f2c-idx=\"565\"></stop></linearGradient></defs><path d=\"M 42.5 85 C 19.028 85 0 65.972 0 42.5 L 0 42.5 C 0 19.028 19.028 0 42.5 0 L 42.5 0 C 65.972 0 85 19.028 85 42.5 L 85 42.5 C 85 65.972 65.972 85 42.5 85 Z\" fill=\"url(#UBFQ5owAB-3448679881-linear-gradient)\" height=\"85px\" id=\"UBFQ5owAB\" transform=\"translate(0.5 0)\" width=\"85.00000000000004px\" data-f2c-idx=\"566\"></path><path d=\"M 0 17.708 L 8.264 25.972 L 33.055 0\" fill=\"transparent\" height=\"25.972214037872916px\" id=\"hA9RKjc3X\" stroke=\"rgb(243, 147, 147)\" stroke-dasharray=\"38.073309326171874 47.591636657714844\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"6.37\" transform=\"translate(26.452 29.526)\" width=\"33.055483533281745px\" stroke-dashoffset=\"-10043.60697066206\" data-f2c-idx=\"567\"></path></svg>"} />
              </div>
              <div className={styles["weekday-container"] + " " + styles["rv-1"]} data-reveal>
                <div className={styles["reviews-text-13"]}>
                  <p className={styles["p-33"]}>{slots[46] ?? "WED"}</p>
                </div>
                <SvgGraphic className={styles["tik-mark"]} html={"<svg data-framer-name=\"Tik Mark\" class=\"framer-i0APt framer-1taam1o\" role=\"presentation\" viewBox=\"0 0 86 85\" style=\"opacity: 1;\" data-f2c-idx=\"571\"><defs data-f2c-idx=\"572\"><linearGradient id=\"UBFQ5owAB-3448679881-linear-gradient\" x1=\"0.9629350746874972\" x2=\"0.03706492531250283\" y1=\"0\" y2=\"1\" data-f2c-idx=\"573\"><stop offset=\"0\" stop-color=\"rgb(211, 111, 40)\" data-f2c-idx=\"574\"></stop><stop offset=\"1\" stop-color=\"rgba(255, 61, 22, 0.16)\" data-f2c-idx=\"575\"></stop></linearGradient></defs><path d=\"M 42.5 85 C 19.028 85 0 65.972 0 42.5 L 0 42.5 C 0 19.028 19.028 0 42.5 0 L 42.5 0 C 65.972 0 85 19.028 85 42.5 L 85 42.5 C 85 65.972 65.972 85 42.5 85 Z\" fill=\"url(#UBFQ5owAB-3448679881-linear-gradient)\" height=\"85px\" id=\"UBFQ5owAB\" transform=\"translate(0.5 0)\" width=\"85.00000000000004px\" data-f2c-idx=\"576\"></path><path d=\"M 0 17.708 L 8.264 25.972 L 33.055 0\" fill=\"transparent\" height=\"25.972214037872916px\" id=\"hA9RKjc3X\" stroke=\"rgb(243, 147, 147)\" stroke-dasharray=\"38.073309326171874 47.591636657714844\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"6.37\" transform=\"translate(26.452 29.526)\" width=\"33.055483533281745px\" stroke-dashoffset=\"-10043.60697066206\" data-f2c-idx=\"577\"></path></svg>"} />
              </div>
              <div className={styles["weekday-container-2"] + " " + styles["rv-1"]} data-reveal>
                <div className={styles["reviews-text-13"]}>
                  <p className={styles["p-33"]}>{slots[47] ?? "THU"}</p>
                </div>
                <div className={styles["weekday-line"]}>
                  <div className={styles["div-28"]}>
                    <SvgGraphic className={styles["svg-9"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 29 29\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"583\"><use href=\"#svg-1836650747_503\" data-f2c-idx=\"584\"></use></svg>"} />
                  </div>
                </div>
              </div>
              <div className={styles["weekday-container-3"]}>
                <div className={styles["reviews-text-13"]}>
                  <p className={styles["p-33"]}>{slots[48] ?? "FRI"}</p>
                </div>
                <div className={styles["weekday-line"]}>
                  <div className={styles["div-28"]}>
                    <SvgGraphic className={styles["svg-9"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 29 29\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"590\"><use href=\"#svg-1776640559_503\" data-f2c-idx=\"591\"></use></svg>"} />
                  </div>
                </div>
              </div>
              <div className={styles["weekday-container-3"]}>
                <div className={styles["reviews-text-13"]}>
                  <p className={styles["p-33"]}>{slots[49] ?? "SAT"}</p>
                </div>
                <SvgGraphic className={styles["tik-mark"]} html={"<svg data-framer-name=\"Tik Mark\" class=\"framer-i0APt framer-1sexz68\" role=\"presentation\" viewBox=\"0 0 86 85\" style=\"opacity: 1;\" data-f2c-idx=\"595\"><defs data-f2c-idx=\"596\"><linearGradient id=\"UBFQ5owAB-3448679881-linear-gradient\" x1=\"0.9629350746874972\" x2=\"0.03706492531250283\" y1=\"0\" y2=\"1\" data-f2c-idx=\"597\"><stop offset=\"0\" stop-color=\"rgb(211, 111, 40)\" data-f2c-idx=\"598\"></stop><stop offset=\"1\" stop-color=\"rgba(255, 61, 22, 0.16)\" data-f2c-idx=\"599\"></stop></linearGradient></defs><path d=\"M 42.5 85 C 19.028 85 0 65.972 0 42.5 L 0 42.5 C 0 19.028 19.028 0 42.5 0 L 42.5 0 C 65.972 0 85 19.028 85 42.5 L 85 42.5 C 85 65.972 65.972 85 42.5 85 Z\" fill=\"url(#UBFQ5owAB-3448679881-linear-gradient)\" height=\"85px\" id=\"UBFQ5owAB\" transform=\"translate(0.5 0)\" width=\"85.00000000000004px\" data-f2c-idx=\"600\"></path><path d=\"M 0 17.708 L 8.264 25.972 L 33.055 0\" fill=\"transparent\" height=\"25.972214037872916px\" id=\"hA9RKjc3X\" stroke=\"rgb(243, 147, 147)\" stroke-dasharray=\"38.073309326171874 47.591636657714844\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"6.37\" transform=\"translate(26.452 29.526)\" width=\"33.055483533281745px\" stroke-dashoffset=\"-10043.60697066206\" data-f2c-idx=\"601\"></path></svg>"} />
              </div>
              <div className={styles["weekday-container-3"]}>
                <div className={styles["reviews-text-13"]}>
                  <p className={styles["p-33"]}>{slots[50] ?? "SUN"}</p>
                </div>
                <div className={styles["weekday-line"]}>
                  <div className={styles["div-28"]}>
                    <SvgGraphic className={styles["svg-9"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 29 29\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"607\"><use href=\"#svg-879134701_503\" data-f2c-idx=\"608\"></use></svg>"} />
                  </div>
                </div>
              </div>
              <div className={styles["weekday-container-3"]}>
                <div className={styles["reviews-text-13"]}>
                  <p className={styles["p-33"]}>{slots[51] ?? "MON"}</p>
                </div>
                <div className={styles["weekday-line"]}>
                  <div className={styles["div-28"]}>
                    <SvgGraphic className={styles["svg-9"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 29 29\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"614\"><use href=\"#svg-41639031_503\" data-f2c-idx=\"615\"></use></svg>"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["orange-shade"]} />
        <div className={styles["orange-shade-2"]} />
        <div className={styles["frame-2147243306"]}>
          <div className={styles["reviews-text-14"]}>
            <div className={styles["p-34"]}>
              <div className={styles["span-42"]}>
                <span className={styles["span-47"]}>{slots[52] ?? "C"}</span>
                <span className={styles["span-47"]}>{slots[53] ?? "O"}</span>
                <span className={styles["span-47"]}>{slots[54] ?? "N"}</span>
                <span className={styles["span-43"]}>{slots[55] ?? "T"}</span>
                <span className={styles["span-43"]}>{slots[56] ?? "E"}</span>
                <span className={styles["span-47"]}>{slots[57] ?? "N"}</span>
                <span className={styles["span-43"]}>{slots[58] ?? "T"}</span>
              </div>
              {" "}
              <div className={styles["span-42"]}>
                <span className={styles["span-47"]}>{slots[59] ?? "O"}</span>
                <span className={styles["span-47"]}>{slots[60] ?? "U"}</span>
                <span className={styles["span-43"]}>{slots[61] ?? "T"}</span>
                <span className={styles["span-43"]}>{slots[62] ?? "P"}</span>
                <span className={styles["span-47"]}>{slots[63] ?? "U"}</span>
                <span className={styles["span-43"]}>{slots[64] ?? "T"}</span>
              </div>
            </div>
          </div>
          <div className={styles["content-output-wrapper"]}>
            <div className={styles["content-output-section"]}>
              <div className={styles["content-output-info"]}>
                <div className={styles["title-text-2"] + " " + styles["rv-2"]} data-reveal>
                  <div className={styles["p-35"]}>
                    <div className={styles["span-48"]}>
                      <span className={styles["span-49"]}>{slots[65] ?? "3"}</span>
                    </div>
                    {" "}
                    <div className={styles["span-48"]}>
                      <span className={styles["span-50"]}>{slots[66] ?? "/"}</span>
                    </div>
                    {" "}
                    <div className={styles["span-48"]}>
                      <span className={styles["span-51"]}>{slots[67] ?? "1"}</span>
                      <span className={styles["span-52"]}>{slots[68] ?? "0"}</span>
                    </div>
                  </div>
                </div>
                <div className={styles["reviews-text-15"] + " " + styles["rv-1"]} data-reveal>
                  <div className={styles["p-36"]}>
                    <div className={styles["span-53"]}>
                      <div className={styles["span-54"]}>
                        <span className={styles["span-55"]}>{slots[69] ?? "p"}</span>
                        <span className={styles["span-55"]}>{slots[70] ?? "o"}</span>
                        <span className={styles["span-56"]}>{slots[71] ?? "s"}</span>
                        <span className={styles["span-57"]}>{slots[72] ?? "t"}</span>
                        <span className={styles["span-56"]}>{slots[73] ?? "s"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-54"]}>
                        <span className={styles["span-57"]}>{slots[74] ?? "t"}</span>
                        <span className={styles["span-55"]}>{slots[75] ?? "h"}</span>
                        <span className={styles["span-58"]}>{slots[76] ?? "i"}</span>
                        <span className={styles["span-56"]}>{slots[77] ?? "s"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-54"]}>
                        <span className={styles["span-59"]}>{slots[78] ?? "w"}</span>
                        <span className={styles["span-55"]}>{slots[79] ?? "e"}</span>
                        <span className={styles["span-55"]}>{slots[80] ?? "e"}</span>
                        <span className={styles["span-55"]}>{slots[81] ?? "k"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["title-text-3"] + " " + styles["rv-1"]} data-reveal>
                <div className={styles["p-37"]}>
                  <div className={styles["span-60"]}>
                    <div className={styles["span-61"]}>
                      <span className={styles["span-62"]}>{slots[82] ?? "3"}</span>
                      <span className={styles["span-62"]}>{slots[83] ?? "2"}</span>
                      <span className={styles["span-63"]}>{slots[84] ?? "%"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["output-bar-container"] + " " + styles["rv-1"]} data-reveal>
              <div className={styles["output-bar"]}>
                <div className={styles["div-29"]}>
                  <img className={styles["img"]} src={slots[85] ?? "https://framerusercontent.com/images/Xev5qTTVxAJ94dX7xvX6aaSis.png?scale-down-to=512&width=1244&height=28"} alt="" />
                </div>
              </div>
              <div className={styles["output-bar-2"]}>
                <div className={styles["div-30"]}>
                  <img className={styles["img-2"]} src={slots[86] ?? "https://framerusercontent.com/images/FNqPzQ1WIB15zuFqjyx07R9v1QI.png?width=468&height=32"} alt="" />
                </div>
              </div>
              <div className={styles["output-bar-3"]}>
                <div className={styles["div-31"]}>
                  <img className={styles["img-3"]} src={slots[87] ?? "https://framerusercontent.com/images/9C9lsqRoEeMOBcjgjDsqBBnKSDo.png?width=296&height=32"} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

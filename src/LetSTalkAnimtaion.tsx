import styles from "./styles.module.css"

export default function LetSTalkAnimtaion({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-17"]}>
        <div className={styles["let-s-talk-box"]}>
          <div className={styles["div-136"]}>
            <div className={styles["variant-1-18"]}>
              <div className={styles["1st-oval"]}>
                <div className={styles["div-137"]} />
              </div>
              <div className={styles["2nd-oval"]}>
                <div className={styles["div-138"]} />
              </div>
              <div className={styles["3rd-oval"]}>
                <div className={styles["div-137"]} />
              </div>
            </div>
          </div>
          <div className={styles["div-139"]}>
            <div className={styles["p-98"]}>
              <div className={styles["span-168"]}>
                <span className={styles["span-169"]}>{slots[0] ?? "L"}</span>
                <span className={styles["span-169"]}>{slots[1] ?? "e"}</span>
                <span className={styles["span-170"]}>{slots[2] ?? "t"}</span>
                <span className={styles["span-171"]}>{slots[3] ?? "'"}</span>
                <span className={styles["span-172"]}>{slots[4] ?? "s"}</span>
              </div>
              {" "}
              <div className={styles["span-168"]}>
                <span className={styles["span-170"]}>{slots[5] ?? "t"}</span>
                <span className={styles["span-169"]}>{slots[6] ?? "a"}</span>
                <span className={styles["span-173"]}>{slots[7] ?? "l"}</span>
                <span className={styles["span-169"]}>{slots[8] ?? "k"}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["tell-us-your-goal"]}>
          <div className={styles["div-140"]}>
            <div className={styles["p-99"]}>
              <div className={styles["span-174"]}>
                <span className={styles["span-175"]}>{slots[9] ?? "T"}</span>
                <span className={styles["span-176"]}>{slots[10] ?? "e"}</span>
                <span className={styles["span-177"]}>{slots[11] ?? "l"}</span>
                <span className={styles["span-177"]}>{slots[12] ?? "l"}</span>
              </div>
              {" "}
              <div className={styles["span-174"]}>
                <span className={styles["span-178"]}>{slots[13] ?? "u"}</span>
                <span className={styles["span-179"]}>{slots[14] ?? "s"}</span>
              </div>
              {" "}
              <div className={styles["span-174"]}>
                <span className={styles["span-176"]}>{slots[15] ?? "y"}</span>
                <span className={styles["span-178"]}>{slots[16] ?? "o"}</span>
                <span className={styles["span-178"]}>{slots[17] ?? "u"}</span>
                <span className={styles["span-180"]}>{slots[18] ?? "r"}</span>
              </div>
              {" "}
              <div className={styles["span-174"]}>
                <span className={styles["span-176"]}>{slots[19] ?? "g"}</span>
                <span className={styles["span-178"]}>{slots[20] ?? "o"}</span>
                <span className={styles["span-176"]}>{slots[21] ?? "a"}</span>
                <span className={styles["span-177"]}>{slots[22] ?? "l"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

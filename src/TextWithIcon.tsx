import styles from "./styles.module.css"

export default function TextWithIcon({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-6"]}>
        <div className={styles["div-35"]}>
          <div className={styles["div-36"]}>
            <img className={styles["img-5"]} src={slots[0] ?? "https://framerusercontent.com/images/S5QFXKHVBvoJeboXib59reUzx0.png?width=48&height=48"} alt="" />
          </div>
        </div>
        <div className={styles["div-37"]}>
          <div className={styles["div-38"]}>
            <div className={styles["div-39"]} />
            <div className={styles["div-40"]} />
          </div>
          <div className={styles["div-41"]}>
            <div className={styles["div-39"]} />
            <div className={styles["div-40"]} />
          </div>
        </div>
        <div className={styles["div-42"]} />
        <div className={styles["description-section"]}>
          <div className={styles["title-text-5"]}>
            <h6 className={styles["h6"]}>
              <div className={styles["span-65"]}>
                <span className={styles["span-66"]}>{slots[1] ?? "F"}</span>
                <span className={styles["span-67"]}>{slots[2] ?? "a"}</span>
                <span className={styles["span-68"]}>{slots[3] ?? "s"}</span>
                <span className={styles["span-69"]}>{slots[4] ?? "t"}</span>
              </div>
              {" "}
              <div className={styles["span-65"]}>
                <span className={styles["span-70"]}>{slots[5] ?? "D"}</span>
                <span className={styles["span-67"]}>{slots[6] ?? "e"}</span>
                <span className={styles["span-71"]}>{slots[7] ?? "l"}</span>
                <span className={styles["span-71"]}>{slots[8] ?? "i"}</span>
                <span className={styles["span-68"]}>{slots[9] ?? "v"}</span>
                <span className={styles["span-67"]}>{slots[10] ?? "e"}</span>
                <span className={styles["span-72"]}>{slots[11] ?? "r"}</span>
                <span className={styles["span-68"]}>{slots[12] ?? "y"}</span>
              </div>
            </h6>
          </div>
          <div className={styles["reviews-text-19"]}>
            <div className={styles["p-47"]}>
              <span className={styles["span-73"]}>{slots[13] ?? "Fast"}</span>
              {" "}
              <span className={styles["span-74"]}>{slots[14] ?? "Turnaround"}</span>
              {" "}
              <span className={styles["span-75"]}>{slots[15] ?? "—"}</span>
              {" "}
              <span className={styles["span-76"]}>{slots[16] ?? "Edited"}</span>
              {" "}
              <span className={styles["span-77"]}>{slots[17] ?? "and"}</span>
              {" "}
              <span className={styles["span-78"]}>{slots[18] ?? "delivered"}</span>
              {" "}
              <span className={styles["span-79"]}>{slots[19] ?? "in"}</span>
              {" "}
              <span className={styles["span-80"]}>{slots[20] ?? "24–48"}</span>
              {" "}
              <span className={styles["span-81"]}>{slots[21] ?? "hours,"}</span>
              {" "}
              <span className={styles["span-82"]}>{slots[22] ?? "every"}</span>
              {" "}
              <span className={styles["span-83"]}>{slots[23] ?? "time"}</span>
            </div>
          </div>
        </div>
        <div className={styles["div-43"]} />
        <div className={styles["div-44"]} />
        <div className={styles["div-45"]} />
      </div>
  )
}

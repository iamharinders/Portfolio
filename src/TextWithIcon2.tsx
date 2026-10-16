import styles from "./styles.module.css"

export default function TextWithIcon2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-7"]}>
        <div className={styles["div-46"]}>
          <div className={styles["div-36"]}>
            <img className={styles["img-5"]} src={slots[0] ?? "https://framerusercontent.com/images/tYs8CH6mIeXgX8zj4SrXZvjgUM.png?width=48&height=48"} alt="" />
          </div>
        </div>
        <div className={styles["div-37"]}>
          <div className={styles["div-38"]}>
            <div className={styles["div-39"]} />
            <div className={styles["div-47"]} />
          </div>
          <div className={styles["div-41"]}>
            <div className={styles["div-39"]} />
            <div className={styles["div-48"]} />
          </div>
        </div>
        <div className={styles["div-49"]} />
        <div className={styles["description-section-2"]}>
          <div className={styles["title-text-5"]}>
            <h6 className={styles["h6"]}>
              <div className={styles["span-65"]}>
                <span className={styles["span-84"]}>{slots[1] ?? "B"}</span>
                <span className={styles["span-67"]}>{slots[2] ?? "u"}</span>
                <span className={styles["span-71"]}>{slots[3] ?? "i"}</span>
                <span className={styles["span-71"]}>{slots[4] ?? "l"}</span>
                <span className={styles["span-69"]}>{slots[5] ?? "t"}</span>
              </div>
              {" "}
              <div className={styles["span-65"]}>
                <span className={styles["span-69"]}>{slots[6] ?? "f"}</span>
                <span className={styles["span-66"]}>{slots[7] ?? "o"}</span>
                <span className={styles["span-72"]}>{slots[8] ?? "r"}</span>
              </div>
              {" "}
              <div className={styles["span-65"]}>
                <span className={styles["span-66"]}>{slots[9] ?? "g"}</span>
                <span className={styles["span-72"]}>{slots[10] ?? "r"}</span>
                <span className={styles["span-66"]}>{slots[11] ?? "o"}</span>
                <span className={styles["span-85"]}>{slots[12] ?? "w"}</span>
                <span className={styles["span-69"]}>{slots[13] ?? "t"}</span>
                <span className={styles["span-67"]}>{slots[14] ?? "h"}</span>
              </div>
            </h6>
          </div>
          <div className={styles["reviews-text-20"]}>
            <div className={styles["p-48"]}>
              <span className={styles["span-86"]}>{slots[15] ?? "Built"}</span>
              {" "}
              <span className={styles["span-87"]}>{slots[16] ?? "to"}</span>
              {" "}
              <span className={styles["span-88"]}>{slots[17] ?? "Perform"}</span>
              {" "}
              <span className={styles["span-75"]}>{slots[18] ?? "—"}</span>
              {" "}
              <span className={styles["span-82"]}>{slots[19] ?? "Every"}</span>
              {" "}
              <span className={styles["span-89"]}>{slots[20] ?? "edit"}</span>
              {" "}
              <span className={styles["span-90"]}>{slots[21] ?? "is"}</span>
              {" "}
              <span className={styles["span-91"]}>{slots[22] ?? "engineered"}</span>
              {" "}
              <span className={styles["span-92"]}>{slots[23] ?? "for"}</span>
              {" "}
              <span className={styles["span-93"]}>{slots[24] ?? "hooks,"}</span>
              {" "}
              <span className={styles["span-94"]}>{slots[25] ?? "retention,"}</span>
              {" "}
              <span className={styles["span-77"]}>{slots[26] ?? "and"}</span>
              {" "}
              <span className={styles["span-95"]}>{slots[27] ?? "platform"}</span>
              {" "}
              <span className={styles["span-96"]}>{slots[28] ?? "reach"}</span>
            </div>
          </div>
        </div>
        <div className={styles["div-50"]} />
        <div className={styles["div-51"]} />
        <div className={styles["div-52"]} />
      </div>
  )
}

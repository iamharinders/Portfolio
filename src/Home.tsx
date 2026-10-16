import { useState } from "react"
import styles from "./styles.module.css"
import States from "./States"
import RevealWatcher from "./RevealWatcher"
import { SvgGraphic } from "./RichText"
import Navbar from "./Navbar"
import VideoCarousel3D from "./VideoCarousel3D"
import CinemaModal, { CinemaVideoData } from "./CinemaModal"
import ContactButton from "./ContactButton"
import SubText from "./SubTextBanner"
import PrimaryButton from "./PrimaryButton"
import SecondaryButton from "./SecondaryButton"
import Video from "./Video"
import Video2 from "./Video2"
import Video3 from "./Video3"
import Video4 from "./Video4"
import Video5 from "./Video5"
import Video6 from "./Video6"
import Video7 from "./Video7"
import Video8 from "./Video8"
import Subtext from "./Subtext"
import Card1 from "./Card1"
import AnimatedNumberCounter from "./AnimatedNumberCounter"
import Vector from "./Vector"
import Card2 from "./Card2"
import AnimatedNumberCounter2 from "./AnimatedNumberCounter2"
import Circle from "./Circle"
import PlayButton from "./PlayButton"
import Card3 from "./Card3"
import Vector2 from "./Vector2"
import NumberCard from "./NumberCard"
import AnimatedNumberCounter3 from "./AnimatedNumberCounter3"
import AnimatedNumberCounter4 from "./AnimatedNumberCounter4"
import AnimatedNumberCounter5 from "./AnimatedNumberCounter5"
import SarviceCard from "./SarviceCard"
import PrimaryButton2 from "./PrimaryButton2"
import TextWithIcon from "./TextWithIcon"
import TextWithIcon2 from "./TextWithIcon2"
import SocialMedia from "./SocialMedia"
import Video9 from "./Video9"
import Subtext2 from "./Subtext2"
import ResaltCard from "./ResaltCard"
import ResaltCard2 from "./ResaltCard2"
import Subtext3 from "./Subtext3"
import UploadYourContent from "./UploadYourContent"
import WeCraftYourContent from "./WeCraftYourContent"
import AudioWave from "./AudioWave"
import WatchYourContentCard from "./WatchYourContentCard"
import Video10 from "./Video10"
import Vector3 from "./Vector3"
import Vector4 from "./Vector4"
import Testimonial from "./Testimonial"
import ImageTab from "./ImageTab"
import PricingCard from "./PricingCard"
import SecondaryButton2 from "./SecondaryButton2"
import PrimaryButton3 from "./PrimaryButton3"
import Subtext4 from "./Subtext4"
import Subtext5 from "./Subtext5"
import LightTickerForToolsWeUse from "./LightTickerForToolsWeUse"
import SmoothScroll from "./SmoothScroll"
import CTAFooter from "./CTAFooter"
import NavbarFooterCTA2 from "./NavbarFooterCTA2"
import SocialMedia2 from "./SocialMedia2"
import Video11 from "./Video11"
import Framer from "./Framer"
import Text from "./Text"
import LetSTalkAnimtaion from "./LetSTalkAnimtaion"
import OvalsAnimation from "./OvalsAnimation"
import FormButton from "./FormButton"

export default function Home({ slots = [] }: { slots?: string[] }) {
  const [activeVideo, setActiveVideo] = useState<CinemaVideoData | null>(null)
  return (
    <>
      <RevealWatcher />
      <CinemaModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      <div className={styles["div-143"]}>
        <div className={styles["div-144"]}>
          <div className={styles["div-145"]}>
            <div className={styles["div-146"]}>
              <Navbar slots={["Harinder.mp4","Services","Work","Pricing","Contact","Hire me","Get Started"]} />
            </div>
          </div>
          <div className={styles["div-147"]}>
            <header className={styles["hero-section"]}>
              <div className={styles["containar"]}>
                <div className={styles["heading"]}>
                  <div className={styles["title-5"]}>
                    <div className={styles["div-145"]}>
                      <div className={styles["div-148"]}>
                        <SubText slots={["Harinder Singh • Filmmaker & Short-Form Video Editor"]} />
                      </div>
                    </div>
                    <div className={styles["title-text-20"]}>
                      <h1 className={styles["h1"]}>
                        <span className={styles["span-181"]}>{slots[0] ?? "Short-form"}</span>
                        {" "}
                        <span className={styles["span-182"]}>{slots[1] ?? "video"}</span>
                        {" "}
                        <span className={styles["span-183"]}>{slots[2] ?? "editing"}</span>
                        {" "}
                        <span className={styles["span-184"]}>{slots[3] ?? "that"}</span>
                        {" "}
                        <span className={styles["span-185"]}>{slots[4] ?? "actually"}</span>
                        {" "}
                        <span className={styles["span-186"]}>{slots[5] ?? "gets"}</span>
                        {" "}
                        <span className={styles["span-187"]}>{slots[6] ?? "results"}</span>
                      </h1>
                    </div>
                  </div>
                  <div className={styles["div-145"]}>
                    <div className={styles["reviews-text-49"]}>
                      <div className={styles["p-101"]}>
                        <span className={styles["span-188"]}>{slots[7] ?? "We"}</span>
                        {" "}
                        <span className={styles["span-189"]}>{slots[8] ?? "turn"}</span>
                        {" "}
                        <span className={styles["span-190"]}>{slots[9] ?? "your"}</span>
                        {" "}
                        <span className={styles["span-191"]}>{slots[10] ?? "raw"}</span>
                        {" "}
                        <span className={styles["span-192"]}>{slots[11] ?? "clips"}</span>
                        {" "}
                        <span className={styles["span-193"]}>{slots[12] ?? "into"}</span>
                        {" "}
                        <span className={styles["span-194"]}>{slots[13] ?? "high-performing"}</span>
                        {" "}
                        <span className={styles["span-195"]}>{slots[14] ?? "Reels,"}</span>
                        {" "}
                        <span className={styles["span-196"]}>{slots[15] ?? "TikToks,"}</span>
                        {" "}
                        <span className={styles["span-191"]}>{slots[16] ?? "and"}</span>
                        {" "}
                        <span className={styles["span-197"]}>{slots[17] ?? "Shorts"}</span>
                        {" "}
                        <span className={styles["span-198"]}>{slots[18] ?? "—"}</span>
                        {" "}
                        <span className={styles["span-199"]}>{slots[19] ?? "designed"}</span>
                        {" "}
                        <span className={styles["span-200"]}>{slots[20] ?? "to"}</span>
                        {" "}
                        <span className={styles["span-201"]}>{slots[21] ?? "grab"}</span>
                        {" "}
                        <span className={styles["span-202"]}>{slots[22] ?? "attention,"}</span>
                        {" "}
                        <span className={styles["span-203"]}>{slots[23] ?? "boost"}</span>
                        {" "}
                        <span className={styles["span-204"]}>{slots[24] ?? "engagement,"}</span>
                        {" "}
                        <span className={styles["span-191"]}>{slots[25] ?? "and"}</span>
                        {" "}
                        <span className={styles["span-205"]}>{slots[26] ?? "grow"}</span>
                        {" "}
                        <span className={styles["span-190"]}>{slots[27] ?? "your"}</span>
                        {" "}
                        <span className={styles["span-206"]}>{slots[28] ?? "audience"}</span>
                        {" "}
                        <span className={styles["span-207"]}>{slots[29] ?? "faster."}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles["secondary-action-buttons-2"]}>
                    <div className={styles["main-action-buttons-2"]}>
                      <div className={styles["div-145"]}>
                        <div className={styles["div-149"]}>
                          <PrimaryButton slots={["Start a Project","Start a Project"]} />
                        </div>
                      </div>
                    </div>
                    <div className={styles["div-145"]}>
                      <div className={styles["div-150"]}>
                        <SecondaryButton slots={["See Our Works","See Our Works"]} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["video-9"]}>
                  <VideoCarousel3D onSelectVideo={setActiveVideo} />
                  <div className={styles["tags-container"] + " " + styles["rv-23"]} data-reveal>
                    <div className={styles["tag"]}>
                      <div className={styles["play-square"]}>
                        <SvgGraphic className={styles["elements"]} html={"<svg data-framer-name=\"elements\" class=\"framer-u7Bt8 framer-cfmpgf\" role=\"presentation\" viewBox=\"0 0 16 16\" data-f2c-idx=\"210\"><path d=\"M 4.961 3.246 C 4.835 3.768 4.238 4.137 3.045 4.875 C 1.891 5.589 1.315 5.946 0.85 5.802 C 0.658 5.743 0.483 5.63 0.342 5.475 C 0 5.1 0 4.372 0 2.917 C 0 1.461 0 0.733 0.342 0.358 C 0.483 0.203 0.658 0.091 0.85 0.031 C 1.315 -0.112 1.891 0.245 3.045 0.958 C 4.238 1.696 4.835 2.065 4.961 2.588 C 5.013 2.803 5.013 3.03 4.961 3.246 Z\" fill=\"transparent\" height=\"5.833373102182496px\" id=\"bJ2cN_LBj\" stroke=\"rgba(255, 255, 255, 0.9)\" stroke-dasharray=\"17.147768020629883 17.147768020629883\" stroke-linecap=\"butt\" stroke-linejoin=\"round\" stroke-width=\"1.46448\" transform=\"translate(5.422 5)\" width=\"4.999995px\" stroke-dashoffset=\"0\" data-f2c-idx=\"211\"></path><path d=\"M 0 7.917 C 0 4.185 0 2.319 1.159 1.159 C 2.319 0 4.185 0 7.917 0 C 11.649 0 13.515 0 14.674 1.159 C 15.833 2.319 15.833 4.185 15.833 7.917 C 15.833 11.649 15.833 13.515 14.674 14.674 C 13.515 15.833 11.649 15.833 7.917 15.833 C 4.185 15.833 2.319 15.833 1.159 14.674 C 0 13.515 0 11.649 0 7.917 Z\" fill=\"transparent\" height=\"15.8333px\" id=\"fyw21P3HQ\" stroke=\"rgba(255, 255, 255, 0.9)\" stroke-dasharray=\"\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-width=\"1.46448\" width=\"15.8333px\" data-f2c-idx=\"212\"></path></svg>"} />
                      </div>
                      <div className={styles["tag-text"]}>
                        <p className={styles["p-102"]}>{slots[44] ?? "Short Video Editing"}</p>
                      </div>
                    </div>
                    <div className={styles["div-145"]}>
                      <div className={styles["diamond"]}>
                        <div className={styles["div-157"]}>
                          <img className={styles["img-36"]} src={slots[45] ?? "https://framerusercontent.com/images/YEVb64Pj6y4rpUHnvLZtUOI4U.png?width=32&height=32"} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className={styles["tag-2"]}>
                      <SvgGraphic className={styles["dashboard-speed-01"]} html={"<svg data-framer-name=\"dashboard-speed-01\" class=\"framer-5O7Le framer-rqnv91\" role=\"presentation\" viewBox=\"0 0 20 20\" data-f2c-idx=\"220\"><path d=\"M 2.917 3.333 L 5.833 0 M 3.333 5 C 3.333 5.921 2.587 6.667 1.667 6.667 C 0.746 6.667 0 5.921 0 5 C 0 4.08 0.746 3.333 1.667 3.333 C 2.587 3.333 3.333 4.08 3.333 5 Z\" fill=\"transparent\" height=\"6.6667001136779795px\" id=\"ieBfZllD7\" stroke=\"rgba(255, 255, 255, 0.9)\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-width=\"1.25\" transform=\"translate(8.328 7.5)\" width=\"5.833380097579957px\" data-f2c-idx=\"221\"></path><path d=\"M 0 5 C 0 2.239 2.239 0 5 0 C 5.911 0 6.765 0.243 7.5 0.669\" fill=\"transparent\" height=\"5px\" id=\"OQ0ywtdD5\" stroke=\"rgba(255, 255, 255, 0.9)\" stroke-dasharray=\"10.473003387451172 10.473003387451172\" stroke-linecap=\"round\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-width=\"1.25\" transform=\"translate(5 5)\" width=\"7.5px\" stroke-dashoffset=\"0\" data-f2c-idx=\"222\"></path><path d=\"M 0 7.917 C 0 4.185 0 2.319 1.159 1.159 C 2.319 0 4.185 0 7.917 0 C 11.649 0 13.515 0 14.674 1.159 C 15.833 2.319 15.833 4.185 15.833 7.917 C 15.833 11.649 15.833 13.515 14.674 14.674 C 13.515 15.833 11.649 15.833 7.917 15.833 C 4.185 15.833 2.319 15.833 1.159 14.674 C 0 13.515 0 11.649 0 7.917 Z\" fill=\"transparent\" height=\"15.83342px\" id=\"dmmt3xxHp\" stroke=\"rgba(255, 255, 255, 0.9)\" stroke-dasharray=\"56.137237548828125 56.137237548828125\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-width=\"1.25\" transform=\"translate(2.078 2.084)\" width=\"15.83338px\" stroke-dashoffset=\"0\" data-f2c-idx=\"223\"></path></svg>"} />
                      <div className={styles["tag-text-2"]}>
                        <p className={styles["p-103"]}>{slots[46] ?? "Content Strategy"}</p>
                      </div>
                    </div>
                    <div className={styles["diamond2"]} />
                    <div className={styles["tag-3"]}>
                      <SvgGraphic className={styles["dashboard-speed-01"]} html={"<svg data-framer-name=\"analytics-up\" class=\"framer-IMBY9 framer-6k69\" role=\"presentation\" viewBox=\"0 0 20 20\" data-f2c-idx=\"228\"><path d=\"M 3.75 12.917 L 3.75 11.25 M 7.917 12.917 L 7.917 10.417 M 12.083 12.917 L 12.083 8.75 M 0 7.917 C 0 4.185 0 2.319 1.159 1.159 C 2.319 0 4.185 0 7.917 0 C 11.649 0 13.515 0 14.674 1.159 C 15.833 2.319 15.833 4.185 15.833 7.917 C 15.833 11.649 15.833 13.515 14.674 14.674 C 13.515 15.833 11.649 15.833 7.917 15.833 C 4.185 15.833 2.319 15.833 1.159 14.674 C 0 13.515 0 11.649 0 7.917 Z\" fill=\"transparent\" height=\"15.83332px\" id=\"Wy82oMcUu\" stroke=\"rgba(255, 255, 255, 0.9)\" stroke-dasharray=\"64.47124481201172 64.47124481201172\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.25\" transform=\"translate(2.078 2.084)\" width=\"15.83338px\" stroke-dashoffset=\"0\" data-f2c-idx=\"229\"></path><path d=\"M 0 4.586 C 1.796 4.646 5.868 4.375 8.185 0.698 M 6.667 0.254 L 8.23 0.003 C 8.42 -0.022 8.7 0.129 8.769 0.308 L 9.182 1.673\" fill=\"transparent\" height=\"4.592407182476121px\" id=\"GKYRSMHFU\" stroke=\"rgba(255, 255, 255, 0.9)\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.25\" transform=\"translate(4.992 4.984)\" width=\"9.181809899902344px\" data-f2c-idx=\"230\"></path></svg>"} />
                      <div className={styles["tag-text-3"]}>
                        <p className={styles["p-104"]}>{slots[47] ?? "Growth Optimization"}</p>
                      </div>
                    </div>
                    <div className={styles["purple-shade-6"]} />
                  </div>
                </div>
              </div>
              <div className={styles["div-145"]}>
                <div className={styles["bg"]}>
                  <div className={styles["div-158"]}>
                    <img className={styles["img-37"]} src={slots[48] ?? "https://framerusercontent.com/images/Yj3GaGIgiUtReXezAWtN44r4E4.png?scale-down-to=2048&width=5760&height=4924"} alt="" />
                  </div>
                  <div className={styles["glow"]}>
                    <div className={styles["div-159"]}>
                      <img className={styles["img-38"]} src={slots[49] ?? "https://framerusercontent.com/images/jUnpN2EytJiPr07qKACPKMZMt4.png?scale-down-to=1024&width=5945&height=5945"} alt="" />
                    </div>
                  </div>
                  <div className={styles["glow-2"]}>
                    <div className={styles["glow-3"]}>
                      <div className={styles["div-160"]}>
                        <SvgGraphic className={styles["svg-29"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 809 570\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"244\"><use href=\"#svg-575539373_1972\" data-f2c-idx=\"245\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-161"]}>
                    <div className={styles["div-145"]}>
                      <div className={styles["div-162"]}>
                        <div className={styles["div-163"]}>
                          <img className={styles["img-39"]} src={slots[50] ?? "https://framerusercontent.com/images/89UcbH3CxjnkHJzglwBdOE0glU.png?scale-down-to=1440&width=2880&height=800"} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <section className={styles["the-problem-section"]} id="problem">
              <div className={styles["containar-2"]}>
                <div className={styles["heading-2"]}>
                  <div className={styles["title-6"]}>
                    <div className={styles["div-145"]}>
                      <div className={styles["div-164"] + " " + styles["rv-23"]} data-reveal>
                        <Subtext slots={["The Problem"]} />
                      </div>
                    </div>
                    <div className={styles["title-text-21"]}>
                      <h2 className={styles["h2-4"]}>
                        <span className={styles["span-208"] + " " + styles["rv-24"]} data-reveal>{slots[51] ?? "Great"}</span>
                        {" "}
                        <span className={styles["span-209"] + " " + styles["rv-24"]} data-reveal>{slots[52] ?? "content,"}</span>
                        {" "}
                        <div className={styles["span-210"] + " " + styles["rv-24"]} data-reveal />
                        <br className={styles["br"]} />
                        <span className={styles["span-211"] + " " + styles["rv-24"]} data-reveal>{slots[53] ?? "but"}</span>
                        {" "}
                        <span className={styles["span-212"] + " " + styles["rv-24"]} data-reveal>{slots[54] ?? "no"}</span>
                        {" "}
                        <span className={styles["span-213"] + " " + styles["rv-24"]} data-reveal>{slots[55] ?? "real"}</span>
                        {" "}
                        <span className={styles["span-214"] + " " + styles["rv-24"]} data-reveal>{slots[56] ?? "growth?"}</span>
                      </h2>
                    </div>
                  </div>
                  <div className={styles["div-145"]}>
                    <div className={styles["reviews-text-49"]}>
                      <div className={styles["p-101"]}>
                        <span className={styles["span-215"] + " " + styles["rv-24"]} data-reveal>{slots[57] ?? "You’re"}</span>
                        {" "}
                        <span className={styles["span-216"] + " " + styles["rv-24"]} data-reveal>{slots[58] ?? "spending"}</span>
                        {" "}
                        <span className={styles["span-217"] + " " + styles["rv-24"]} data-reveal>{slots[59] ?? "hours"}</span>
                        {" "}
                        <span className={styles["span-218"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "373ms" }}>{slots[60] ?? "creating"}</span>
                        {" "}
                        <span className={styles["span-219"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "373ms" }}>{slots[61] ?? "videos,"}</span>
                        {" "}
                        <span className={styles["span-220"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "373ms" }}>{slots[62] ?? "but"}</span>
                        {" "}
                        <span className={styles["span-221"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "373ms" }}>{slots[63] ?? "the"}</span>
                        {" "}
                        <span className={styles["span-219"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "373ms" }}>{slots[64] ?? "results"}</span>
                        {" "}
                        <span className={styles["span-222"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "373ms" }}>{slots[65] ?? "just"}</span>
                        {" "}
                        <span className={styles["span-223"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "373ms" }}>{slots[66] ?? "don’t"}</span>
                        {" "}
                        <span className={styles["span-224"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "373ms" }}>{slots[67] ?? "match"}</span>
                        {" "}
                        <span className={styles["span-221"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "373ms" }}>{slots[68] ?? "the"}</span>
                        {" "}
                        <span className={styles["span-207"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "373ms" }}>{slots[69] ?? "effort."}</span>
                        {" "}
                        <span className={styles["span-225"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "373ms" }}>{slots[70] ?? "The"}</span>
                        {" "}
                        <span className={styles["span-226"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "373ms" }}>{slots[71] ?? "problem"}</span>
                        {" "}
                        <span className={styles["span-227"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "373ms" }}>{slots[72] ?? "isn’t"}</span>
                        {" "}
                        <span className={styles["span-228"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "373ms" }}>{slots[73] ?? "consistency"}</span>
                        {" "}
                        <span className={styles["span-198"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "373ms" }}>{slots[74] ?? "—"}</span>
                        {" "}
                        <span className={styles["span-229"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[75] ?? "it’s"}</span>
                        {" "}
                        <span className={styles["span-230"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[76] ?? "what"}</span>
                        {" "}
                        <span className={styles["span-231"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[77] ?? "happens"}</span>
                        {" "}
                        <span className={styles["span-192"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[78] ?? "after"}</span>
                        {" "}
                        <span className={styles["span-232"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[79] ?? "people"}</span>
                        {" "}
                        <span className={styles["span-233"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[80] ?? "hit"}</span>
                        {" "}
                        <span className={styles["span-192"] + " " + styles["rv-24"]} data-reveal>{slots[81] ?? "play."}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["problem-cards"]}>
                  <div className={styles["problem-card"] + " " + styles["rv-23"]} data-reveal>
                    <div className={styles["content-wrapper"]}>
                      <div className={styles["div-145"]}>
                        <div className={styles["div-165"]}>
                          <Card1 slots={["V","i","e","w","s","120K","120K","-","6","8","%","r","e","t","e","n","t","i","o","n","d","r","o","p","J","A","N","F","E","B","M","A","R","A","P","R","M","A","Y","J","U","N","50% Viewers dropped"]} />
                        </div>
                      </div>
                      <div className={styles["description"]}>
                        <div className={styles["div-145"]}>
                          <div className={styles["title-text-22"]}>
                            <p className={styles["p-105"]}>{slots[82] ?? "Views that don’t convert"}</p>
                          </div>
                        </div>
                        <div className={styles["reviews-text-50"]}>
                          <p className={styles["p-106"]}>{slots[83] ?? "Your videos get views, but no real engagement or business impact."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["problem-card"] + " " + styles["rv-23"]} data-reveal>
                    <div className={styles["content-wrapper"]}>
                      <div className={styles["div-145"]}>
                        <div className={styles["div-165"]}>
                          <Card2 slots={["Growth","Likes","E","n","g","a","g","e","m","e","n","t","88K","88K","G","r","o","w","t","h","03%","03%"]} />
                        </div>
                      </div>
                      <div className={styles["description"]}>
                        <div className={styles["div-145"]}>
                          <div className={styles["title-text-22"]}>
                            <p className={styles["p-105"]}>{slots[84] ?? "Likes don't pay the bills"}</p>
                          </div>
                        </div>
                        <div className={styles["reviews-text-50"]}>
                          <p className={styles["p-106"]}>{slots[85] ?? "Viral moments feel good, but they don’t build a sustainable audience."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["problem-card"] + " " + styles["rv-23"]} data-reveal>
                    <div className={styles["content-wrapper"]}>
                      <div className={styles["div-145"]}>
                        <div className={styles["div-165"]}>
                          <Card3 slots={["C","o","n","s","i","s","t","e","n","c","y","I","n","c","o","n","s","i","s","t","e","n","t","p","o","s","t","i","n","g","P","o","s","t","i","n","g","A","c","t","i","v","i","t","y","TUE","WED","THU","FRI","SAT","SUN","MON","C","O","N","T","E","N","T","O","U","T","P","U","T","3","/","1","0","p","o","s","t","s","t","h","i","s","w","e","e","k","3","2","%","https://framerusercontent.com/images/Xev5qTTVxAJ94dX7xvX6aaSis.png?scale-down-to=512&width=1244&height=28","https://framerusercontent.com/images/FNqPzQ1WIB15zuFqjyx07R9v1QI.png?width=468&height=32","https://framerusercontent.com/images/9C9lsqRoEeMOBcjgjDsqBBnKSDo.png?width=296&height=32"]} />
                        </div>
                      </div>
                      <div className={styles["description"]}>
                        <div className={styles["div-145"]}>
                          <div className={styles["title-text-22"]}>
                            <p className={styles["p-105"]}>{slots[86] ?? "No system, no consistency"}</p>
                          </div>
                        </div>
                        <div className={styles["reviews-text-50"]}>
                          <p className={styles["p-106"]}>{slots[87] ?? "Posting randomly without a system leads to inconsistent results and no real growth."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["div-145"]}>
                <div className={styles["particles"]}>
                  <div className={styles["div-166"]}>
                    <img className={styles["img-40"]} src={slots[88] ?? "https://framerusercontent.com/images/eniJQAMqnRPxOxWz4rljycyy8M.png?scale-down-to=2048&width=2867&height=791"} alt="" />
                  </div>
                  <div className={styles["div-167"] + " " + styles["rv-29"]} data-reveal>
                    <div className={styles["div-145"]}>
                      <div className={styles["div-168"]} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["how-we-fix-section"]} id="about">
              <div className={styles["containar-3"]}>
                <div className={styles["heading-button"]}>
                  <div className={styles["heading-3"]}>
                    <div className={styles["div-145"]}>
                      <div className={styles["div-169"] + " " + styles["rv-23"]} data-reveal>
                        <Subtext slots={["How We Fix It"]} />
                      </div>
                    </div>
                    <div className={styles["title-7"]}>
                      <div className={styles["title-text-23"]}>
                        <h2 className={styles["h2-5"]}>
                          <span className={styles["span-234"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "76ms" }}>{slots[89] ?? "A"}</span>
                          {" "}
                          <span className={styles["span-235"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "76ms" }}>{slots[90] ?? "done-for-you"}</span>
                          {" "}
                          <span className={styles["span-236"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "76ms" }}>{slots[91] ?? "editing"}</span>
                          {" "}
                          <span className={styles["span-237"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "161ms" }}>{slots[92] ?? "system"}</span>
                          {" "}
                          <span className={styles["span-238"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "208ms" }}>{slots[93] ?? "that"}</span>
                          {" "}
                          <span className={styles["span-239"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "261ms" }}>{slots[94] ?? "delivers"}</span>
                          {" "}
                          <span className={styles["span-240"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "315ms" }}>{slots[95] ?? "results"}</span>
                        </h2>
                      </div>
                      <div className={styles["div-145"]}>
                        <div className={styles["reviews-text-51"]}>
                          <div className={styles["p-107"]}>
                            <span className={styles["span-241"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "208ms" }}>{slots[96] ?? "We"}</span>
                            {" "}
                            <span className={styles["span-242"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "261ms" }}>{slots[97] ?? "don't"}</span>
                            {" "}
                            <span className={styles["span-243"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "315ms" }}>{slots[98] ?? "just"}</span>
                            {" "}
                            <span className={styles["span-244"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "365ms" }}>{slots[99] ?? "cut"}</span>
                            {" "}
                            <span className={styles["span-245"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "421ms" }}>{slots[100] ?? "footage"}</span>
                            {" "}
                            <span className={styles["span-246"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "421ms" }}>{slots[101] ?? "—"}</span>
                            {" "}
                            <span className={styles["span-247"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "482ms" }}>{slots[102] ?? "we"}</span>
                            {" "}
                            <span className={styles["span-248"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "539ms" }}>{slots[103] ?? "engineer"}</span>
                            {" "}
                            <span className={styles["span-249"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "593ms" }}>{slots[104] ?? "each"}</span>
                            {" "}
                            <span className={styles["span-250"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "644ms" }}>{slots[105] ?? "video"}</span>
                            {" "}
                            <span className={styles["span-251"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "693ms" }}>{slots[106] ?? "for"}</span>
                            {" "}
                            <span className={styles["span-252"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "749ms" }}>{slots[107] ?? "retention,"}</span>
                            {" "}
                            <span className={styles["span-253"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "796ms" }}>{slots[108] ?? "reach,"}</span>
                            {" "}
                            <span className={styles["span-254"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "872ms" }}>{slots[109] ?? "and"}</span>
                            {" "}
                            <span className={styles["span-255"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "872ms" }}>{slots[110] ?? "results."}</span>
                            {" "}
                            <span className={styles["span-254"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "919ms" }}>{slots[111] ?? "You"}</span>
                            {" "}
                            <span className={styles["span-256"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "979ms" }}>{slots[112] ?? "send"}</span>
                            {" "}
                            <span className={styles["span-244"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "1024ms" }}>{slots[113] ?? "the"}</span>
                            {" "}
                            <span className={styles["span-257"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "1071ms" }}>{slots[114] ?? "clips,"}</span>
                            {" "}
                            <span className={styles["span-247"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "1118ms" }}>{slots[115] ?? "we"}</span>
                            {" "}
                            <span className={styles["span-258"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "1180ms" }}>{slots[116] ?? "handle"}</span>
                            {" "}
                            <span className={styles["span-259"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "1242ms" }}>{slots[117] ?? "everything"}</span>
                            {" "}
                            <span className={styles["span-260"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "1328ms" }}>{slots[118] ?? "else."}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["secondary-action-buttons-3"]} />
                  <div className={styles["div-145"]}>
                    <div className={styles["div-149"]}>
                      <PrimaryButton slots={["See Our Works","See Our Works"]} />
                    </div>
                  </div>
                </div>
                <div className={styles["line-13"]}>
                  <div className={styles["div-170"]}>
                    <SvgGraphic className={styles["svg-30"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 1314 3\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"772\"><use href=\"#svg1357048387_522\" data-f2c-idx=\"773\"></use></svg>"} />
                  </div>
                </div>
                <div className={styles["number-cards"]}>
                  <div className={styles["div-145"]}>
                    <div className={styles["div-171"] + " " + styles["rv-23"]} data-reveal style={{ transitionDelay: "1242ms" }}>
                      <NumberCard slots={["Avg. Retention Rate","68%","68%","Hook-driven edits that keep viewers watching past the first 3 seconds."]} />
                    </div>
                  </div>
                  <div className={styles["div-145"]}>
                    <div className={styles["div-171"] + " " + styles["rv-23"]} data-reveal style={{ transitionDelay: "1328ms" }}>
                      <NumberCard slots={["Videos Delivered","500+","500+","From solo creators to full agencies — delivered on time, every time."]} />
                    </div>
                  </div>
                  <div className={styles["div-145"]}>
                    <div className={styles["div-171"] + " " + styles["rv-23"]} data-reveal style={{ transitionDelay: "1405ms" }}>
                      <NumberCard slots={["Avg. Engagement Increased","3X","3X","More comments, shares, and saves — not just views."]} />
                    </div>
                  </div>
                  <div className={styles["div-145"]}>
                    <div className={styles["div-171"] + " " + styles["rv-23"]} data-reveal style={{ transitionDelay: "1566ms" }}>
                      <NumberCard slots={["Turnaround Time","48hr","48hr","Send clips today. Get your video back tomorrow."]} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["sarvices-section"]} id="services">
              <div className={styles["div-145"]}>
                <div className={styles["bg-2"] + " " + styles["rv-30"]} data-reveal>
                  <div className={styles["div-172"]}>
                    <img className={styles["img-41"]} src={slots[119] ?? "https://framerusercontent.com/images/K1U7UdR0YRj1iLilFiy7enxP0.png?scale-down-to=1024&width=4068&height=4030"} alt="" />
                  </div>
                </div>
              </div>
              <div className={styles["containar-4"]}>
                <div className={styles["heading-4"]}>
                  <div className={styles["div-145"]}>
                    <div className={styles["div-173"] + " " + styles["rv-23"]} data-reveal>
                      <Subtext slots={["What We Do"]} />
                    </div>
                  </div>
                  <div className={styles["title-8"]}>
                    <div className={styles["title-text-23"]}>
                      <h2 className={styles["h2-6"]}>
                        <span className={styles["span-261"] + " " + styles["rv-24"]} data-reveal>{slots[120] ?? "Short-form"}</span>
                        {" "}
                        <span className={styles["span-262"] + " " + styles["rv-24"]} data-reveal>editing —</span>
                        {" "}
                        <span className={styles["span-262"] + " " + styles["rv-24"]} data-reveal>from</span>
                        {" "}
                        <span className={styles["span-263"] + " " + styles["rv-24"]} data-reveal>{slots[122] ?? "raw"}</span>
                        {" "}
                        <span className={styles["span-264"] + " " + styles["rv-24"]} data-reveal>{slots[123] ?? "clips"}</span>
                        {" "}
                        <span className={styles["span-139"] + " " + styles["rv-24"]} data-reveal>{slots[124] ?? "to"}</span>
                        {" "}
                        <span className={styles["span-265"] + " " + styles["rv-24"]} data-reveal>{slots[125] ?? "ready"}</span>
                        {" "}
                        <span className={styles["span-139"] + " " + styles["rv-24"]} data-reveal>{slots[126] ?? "to"}</span>
                        {" "}
                        <span className={styles["span-266"] + " " + styles["rv-24"]} data-reveal>{slots[127] ?? "post"}</span>
                      </h2>
                    </div>
                    <div className={styles["div-145"]}>
                      <div className={styles["reviews-text-52"]}>
                        <div className={styles["p-108"]}>
                          <span className={styles["span-267"] + " " + styles["rv-24"]} data-reveal>{slots[128] ?? "Whether"}</span>
                          {" "}
                          <span className={styles["span-268"] + " " + styles["rv-24"]} data-reveal>{slots[129] ?? "you're"}</span>
                          {" "}
                          <span className={styles["span-269"] + " " + styles["rv-24"]} data-reveal>{slots[130] ?? "an"}</span>
                          {" "}
                          <span className={styles["span-270"] + " " + styles["rv-24"]} data-reveal>{slots[131] ?? "agency"}</span>
                          {" "}
                          <span className={styles["span-271"] + " " + styles["rv-24"]} data-reveal>{slots[132] ?? "managing"}</span>
                          {" "}
                          <span className={styles["span-272"] + " " + styles["rv-24"]} data-reveal>{slots[133] ?? "multiple"}</span>
                          {" "}
                          <span className={styles["span-273"] + " " + styles["rv-24"]} data-reveal>{slots[134] ?? "clients"}</span>
                          {" "}
                          <span className={styles["span-274"] + " " + styles["rv-24"]} data-reveal>{slots[135] ?? "or"}</span>
                          {" "}
                          <span className={styles["span-275"] + " " + styles["rv-24"]} data-reveal>{slots[136] ?? "a"}</span>
                          {" "}
                          <span className={styles["span-276"] + " " + styles["rv-24"]} data-reveal>{slots[137] ?? "solo"}</span>
                          {" "}
                          <span className={styles["span-277"] + " " + styles["rv-24"]} data-reveal>{slots[138] ?? "editor"}</span>
                          {" "}
                          <span className={styles["span-272"] + " " + styles["rv-24"]} data-reveal>{slots[139] ?? "building"}</span>
                          {" "}
                          <span className={styles["span-190"] + " " + styles["rv-24"]} data-reveal>{slots[140] ?? "your"}</span>
                          {" "}
                          <span className={styles["span-217"] + " " + styles["rv-24"]} data-reveal>{slots[141] ?? "brand"}</span>
                          {" "}
                          <span className={styles["span-198"] + " " + styles["rv-24"]} data-reveal>{slots[142] ?? "—"}</span>
                          {" "}
                          <span className={styles["span-278"] + " " + styles["rv-24"]} data-reveal>{slots[143] ?? "we"}</span>
                          {" "}
                          <span className={styles["span-189"] + " " + styles["rv-24"]} data-reveal>{slots[144] ?? "give"}</span>
                          {" "}
                          <span className={styles["span-279"] + " " + styles["rv-24"]} data-reveal>{slots[145] ?? "you"}</span>
                          {" "}
                          <span className={styles["span-221"] + " " + styles["rv-24"]} data-reveal>{slots[146] ?? "the"}</span>
                          {" "}
                          <span className={styles["span-280"] + " " + styles["rv-24"]} data-reveal>{slots[147] ?? "editing"}</span>
                          {" "}
                          <span className={styles["span-281"] + " " + styles["rv-24"]} data-reveal>{slots[148] ?? "muscle"}</span>
                          {" "}
                          <span className={styles["span-200"] + " " + styles["rv-24"]} data-reveal>{slots[149] ?? "to"}</span>
                          {" "}
                          <span className={styles["span-282"] + " " + styles["rv-24"]} data-reveal>{slots[150] ?? "deliver"}</span>
                          {" "}
                          <span className={styles["span-283"] + " " + styles["rv-24"]} data-reveal>{slots[151] ?? "more,"}</span>
                          {" "}
                          <span className={styles["span-207"] + " " + styles["rv-24"]} data-reveal>{slots[152] ?? "faster."}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["cards"]}>
                  <div className={styles["sarvice-cards"]}>
                    <div className={styles["div-145"]}>
                      <div className={styles["div-174"] + " " + styles["rv-23"]} data-reveal>
                        <SarviceCard slots={["YoutubeShots","https://framerusercontent.com/images/FBvGy9tsK1ioQBIfQO63uhtj2pQ.png?scale-down-to=512&width=1920&height=1920","Hook-driven edits sized and optimized for Shorts' algorithm"]} />
                      </div>
                    </div>
                    <div className={styles["div-145"]}>
                      <div className={styles["div-174"] + " " + styles["rv-23"]} data-reveal>
                        <SarviceCard slots={["Instagram Reels","https://framerusercontent.com/images/7E5HzJhCQPWFzUMfSWXRbpBu14.png?scale-down-to=1024&width=1621&height=1686","Trend-aware edits with captions, pacing, and hooks built for Reels reach"]} />
                      </div>
                    </div>
                    <div className={styles["div-145"]}>
                      <div className={styles["div-174"] + " " + styles["rv-23"]} data-reveal>
                        <SarviceCard slots={["TikTok  Videos","https://framerusercontent.com/images/FvcuYP8EbfRkKmYbOnOUmkgTY.png?scale-down-to=1024&width=1832&height=1902","Fast-cut edits built around trending sounds, formats, and native behaviors"]} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["containar-5"]}>
                <div className={styles["div-145"]}>
                  <div className={styles["grow-text"]}>
                    <div className={styles["div-175"]}>
                      <img className={styles["img-42"]} src={slots[153] ?? "https://framerusercontent.com/images/4A7H44p2qAP7SzaoLNf4hPpOees.png?scale-down-to=2048&width=2624&height=1512"} alt="" />
                    </div>
                    <div className={styles["grow-card"]}>
                      <div className={styles["grow"]}>
                        <div className={styles["title-text-24"]}>
                          <h3 className={styles["h3-2"]}>
                            <span className={styles["span-284"] + " " + styles["rv-24"]} data-reveal>{slots[154] ?? "More"}</span>
                            {" "}
                            <span className={styles["span-285"] + " " + styles["rv-24"]} data-reveal>{slots[155] ?? "content,"}</span>
                            <br className={styles["br-2"]} />
                            <span className={styles["span-286"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "65ms" }}>{slots[156] ?? "Less"}</span>
                            {" "}
                            <span className={styles["span-287"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "110ms" }}>{slots[157] ?? "chaos"}</span>
                          </h3>
                        </div>
                        <div className={styles["reviews-text-53"]}>
                          <div className={styles["p-109"]}>
                            <span className={styles["span-288"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "174ms" }}>{slots[158] ?? "Hand"}</span>
                            {" "}
                            <span className={styles["span-92"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "174ms" }}>{slots[159] ?? "off"}</span>
                            {" "}
                            <span className={styles["span-289"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "240ms" }}>{slots[160] ?? "the"}</span>
                            {" "}
                            <span className={styles["span-290"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "311ms" }}>{slots[161] ?? "editing."}</span>
                            {" "}
                            <span className={styles["span-291"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "380ms" }}>{slots[162] ?? "We"}</span>
                            {" "}
                            <span className={styles["span-292"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "380ms" }}>{slots[163] ?? "deliver"}</span>
                            {" "}
                            <span className={styles["span-293"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "452ms" }}>{slots[164] ?? "polished,"}</span>
                            {" "}
                            <span className={styles["span-294"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "519ms" }}>{slots[165] ?? "platform-ready"}</span>
                            {" "}
                            <span className={styles["span-295"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "519ms" }}>{slots[166] ?? "videos"}</span>
                            {" "}
                            <span className={styles["span-296"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "590ms" }}>{slots[167] ?? "while"}</span>
                            {" "}
                            <span className={styles["span-297"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "660ms" }}>{slots[168] ?? "you"}</span>
                            {" "}
                            <span className={styles["span-82"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "730ms" }}>{slots[169] ?? "focus"}</span>
                            {" "}
                            <span className={styles["span-298"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "730ms" }}>{slots[170] ?? "on"}</span>
                            {" "}
                            <span className={styles["span-88"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "799ms" }}>{slots[171] ?? "growing"}</span>
                            {" "}
                            <span className={styles["span-299"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "870ms" }}>{slots[172] ?? "your"}</span>
                            {" "}
                            <span className={styles["span-300"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "870ms" }}>{slots[173] ?? "business"}</span>
                            {" "}
                            <span className={styles["span-87"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "934ms" }}>{slots[174] ?? "or"}</span>
                            {" "}
                            <span className={styles["span-301"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "999ms" }}>{slots[175] ?? "serving"}</span>
                            {" "}
                            <span className={styles["span-299"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "1072ms" }}>{slots[176] ?? "your"}</span>
                            {" "}
                            <span className={styles["span-302"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "1072ms" }}>{slots[177] ?? "clients."}</span>
                          </div>
                        </div>
                      </div>
                      <div className={styles["div-176"]}>
                        <PrimaryButton2 slots={["Start Growing Today","Start Growing Today"]} />
                      </div>
                    </div>
                    <div className={styles["text-cards"]}>
                      <div className={styles["div-177"] + " " + styles["rv-23"]} data-reveal>
                        <TextWithIcon slots={["https://framerusercontent.com/images/S5QFXKHVBvoJeboXib59reUzx0.png?width=48&height=48","F","a","s","t","D","e","l","i","v","e","r","y","Fast","Turnaround","—","Edited","and","delivered","in","24–48","hours,","every","time"]} />
                      </div>
                      <div className={styles["div-178"] + " " + styles["rv-23"]} data-reveal style={{ transitionDelay: "65ms" }}>
                        <TextWithIcon2 slots={["https://framerusercontent.com/images/tYs8CH6mIeXgX8zj4SrXZvjgUM.png?width=48&height=48","B","u","i","l","t","f","o","r","g","r","o","w","t","h","Built","to","Perform","—","Every","edit","is","engineered","for","hooks,","retention,","and","platform","reach"]} />
                      </div>
                      <div className={styles["div-179"] + " " + styles["rv-23"]} data-reveal>
                        <div className={styles["variant-1-7"]}>
                          <div className={styles["div-46"]}>
                            <div className={styles["div-36"]}>
                              <img className={styles["img-5"]} src={slots[178] ?? "https://framerusercontent.com/images/AfMRcPaURys8LPkQYk9urol9Vk.png?width=48&height=48"} alt="" />
                            </div>
                          </div>
                          <div className={styles["div-37"]}>
                            <div className={styles["div-38"]}>
                              <div className={styles["div-39"]} />
                              <div className={styles["div-48"]} />
                            </div>
                            <div className={styles["div-41"]}>
                              <div className={styles["div-39"]} />
                              <div className={styles["div-48"]} />
                            </div>
                          </div>
                          <div className={styles["div-180"]} />
                          <div className={styles["description-section-2"]}>
                            <div className={styles["title-text-5"]}>
                              <h6 className={styles["h6"]}>
                                <div className={styles["span-65"]}>
                                  <span className={styles["span-303"]}>{slots[179] ?? "E"}</span>
                                  <span className={styles["span-68"]}>{slots[180] ?? "x"}</span>
                                  <span className={styles["span-66"]}>{slots[181] ?? "p"}</span>
                                  <span className={styles["span-67"]}>{slots[182] ?? "e"}</span>
                                  <span className={styles["span-72"]}>{slots[183] ?? "r"}</span>
                                  <span className={styles["span-69"]}>{slots[184] ?? "t"}</span>
                                </div>
                                {" "}
                                <div className={styles["span-65"]}>
                                  <span className={styles["span-66"]}>{slots[185] ?? "T"}</span>
                                  <span className={styles["span-67"]}>{slots[186] ?? "e"}</span>
                                  <span className={styles["span-67"]}>{slots[187] ?? "a"}</span>
                                  <span className={styles["span-304"]}>{slots[188] ?? "m"}</span>
                                </div>
                              </h6>
                            </div>
                            <div className={styles["reviews-text-20"]}>
                              <div className={styles["p-48"]}>
                                <span className={styles["span-76"]}>{slots[189] ?? "Expert"}</span>
                                {" "}
                                <span className={styles["span-305"]}>{slots[190] ?? "Editors"}</span>
                                {" "}
                                <span className={styles["span-75"]}>{slots[191] ?? "—"}</span>
                                {" "}
                                <span className={styles["span-288"]}>{slots[192] ?? "Work"}</span>
                                {" "}
                                <span className={styles["span-83"]}>{slots[193] ?? "with"}</span>
                                {" "}
                                <span className={styles["span-305"]}>{slots[194] ?? "editors"}</span>
                                {" "}
                                <span className={styles["span-306"]}>{slots[195] ?? "who"}</span>
                                {" "}
                                <span className={styles["span-307"]}>{slots[196] ?? "know"}</span>
                                {" "}
                                <span className={styles["span-308"]}>{slots[197] ?? "what"}</span>
                                {" "}
                                <span className={styles["span-309"]}>{slots[198] ?? "makes"}</span>
                                {" "}
                                <span className={styles["span-310"]}>{slots[199] ?? "short-form"}</span>
                                {" "}
                                <span className={styles["span-311"]}>{slots[200] ?? "content"}</span>
                                {" "}
                                <span className={styles["span-312"]}>{slots[201] ?? "convert"}</span>
                              </div>
                            </div>
                          </div>
                          <div className={styles["div-181"]} />
                          <div className={styles["div-182"]} />
                          <div className={styles["div-52"]} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["div-183"]}>
                <div className={styles["div-145"]}>
                  <div className={styles["div-168"]} />
                </div>
              </div>
            </section>
            <section className={styles["client-results-section"]} id="work">
              <div className={styles["div-184"]}>
                <div className={styles["div-145"]}>
                  <div className={styles["div-168"]} />
                </div>
              </div>
              <div className={styles["content-12"]}>
                <div className={styles["project-2"]}>
                  <div className={styles["title-9"]}>
                    <div className={styles["div-145"]}>
                      <div className={styles["div-185"] + " " + styles["rv-23"]} data-reveal>
                        <Subtext slots={["Client Results"]} />
                      </div>
                    </div>
                    <div className={styles["text-17"]}>
                      <div className={styles["title-text-23"]}>
                        <h2 className={styles["h2-6"]}>
                          <span className={styles["span-266"] + " " + styles["rv-24"]} data-reveal>{slots[202] ?? "Real"}</span>
                          {" "}
                          <span className={styles["span-313"] + " " + styles["rv-24"]} data-reveal>{slots[203] ?? "videos,"}</span>
                          <br className={styles["br-3"]} />
                          <span className={styles["span-266"] + " " + styles["rv-24"]} data-reveal>{slots[204] ?? "Real"}</span>
                          {" "}
                          <span className={styles["span-314"] + " " + styles["rv-24"]} data-reveal>{slots[205] ?? "numbers"}</span>
                        </h2>
                      </div>
                      <div className={styles["div-145"]}>
                        <div className={styles["reviews-text-29"]}>
                          <div className={styles["p-110"]}>
                            <span className={styles["span-203"] + " " + styles["rv-24"]} data-reveal>{slots[206] ?? "Every"}</span>
                            {" "}
                            <span className={styles["span-315"] + " " + styles["rv-24"]} data-reveal>{slots[207] ?? "video"}</span>
                            {" "}
                            <span className={styles["span-316"] + " " + styles["rv-24"]} data-reveal>{slots[208] ?? "below"}</span>
                            {" "}
                            <span className={styles["span-317"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "338ms" }}>{slots[209] ?? "was"}</span>
                            {" "}
                            <span className={styles["span-318"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "338ms" }}>{slots[210] ?? "edited,"}</span>
                            {" "}
                            <span className={styles["span-319"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "338ms" }}>{slots[211] ?? "optimized,"}</span>
                            {" "}
                            <span className={styles["span-191"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "338ms" }}>{slots[212] ?? "and"}</span>
                            {" "}
                            <span className={styles["span-320"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "338ms" }}>{slots[213] ?? "delivered"}</span>
                            {" "}
                            <span className={styles["span-321"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "338ms" }}>{slots[214] ?? "by"}</span>
                            {" "}
                            <span className={styles["span-322"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "338ms" }}>{slots[215] ?? "our"}</span>
                            {" "}
                            <span className={styles["span-315"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "338ms" }}>{slots[216] ?? "team."}</span>
                            {" "}
                            <span className={styles["span-225"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "338ms" }}>{slots[217] ?? "The"}</span>
                            {" "}
                            <span className={styles["span-323"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "338ms" }}>{slots[218] ?? "numbers"}</span>
                            {" "}
                            <span className={styles["span-316"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "338ms" }}>{slots[219] ?? "speak"}</span>
                            {" "}
                            <span className={styles["span-324"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "338ms" }}>{slots[220] ?? "for"}</span>
                            {" "}
                            <span className={styles["span-325"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "338ms" }}>{slots[221] ?? "themselves."}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-145"]}>
                    <div className={styles["div-149"]}>
                      <PrimaryButton slots={["See More Works","See More Works"]} />
                    </div>
                  </div>
                </div>
                <div className={styles["div-145"]}>
                  <div className={styles["social-medias"] + " " + styles["rv-31"]} data-reveal>
                    <ul className={styles["ul-2"] + " " + styles["rv-32"]} data-reveal>
                      <li className={styles["li-6"]}>
                        <div className={styles["div-145"]}>
                          <div className={styles["div-186"]}>
                            <SocialMedia slots={["https://framerusercontent.com/images/rQlIHNZIJGIWJ6HwPA2PlcsVfT4.png?width=192&height=192","758K Views","2.3x engagement growth","Optimized content structure for better watch time","https://framerusercontent.com/images/ik99JHM0iRogYcwROk6KaId1b0.png?width=400&height=300","wearnova","https://framerusercontent.com/images/mH9AO6fIaF2UQcO2TXV19Fuk.png?width=350&height=350"]} />
                          </div>
                        </div>
                      </li>
                      <li className={styles["li-6"]}>
                        <div className={styles["div-145"]}>
                          <div className={styles["div-186"]}>
                            <SocialMedia slots={["https://framerusercontent.com/images/OXLRfTyfIyoN11NA7Wvvb247eZU.png?width=192&height=192","1.2M Views","+10K followers in 30 days","Consistent reels strategy with high retention edits","https://framerusercontent.com/images/V5gLYoUFdqXcg9R2VlvvFdbmw.png?width=128&height=128","wearnova","https://framerusercontent.com/images/mH9AO6fIaF2UQcO2TXV19Fuk.png?width=350&height=350"]} />
                          </div>
                        </div>
                      </li>
                      <li className={styles["li-6"]}>
                        <div className={styles["div-145"]}>
                          <div className={styles["div-186"]}>
                            <SocialMedia slots={["https://framerusercontent.com/images/rQlIHNZIJGIWJ6HwPA2PlcsVfT4.png?width=192&height=192","487K Views","2.3x engagement growth","Optimized content structure for better watch time","https://framerusercontent.com/images/ik99JHM0iRogYcwROk6KaId1b0.png?width=400&height=300","wearnova","https://framerusercontent.com/images/mH9AO6fIaF2UQcO2TXV19Fuk.png?width=350&height=350"]} />
                          </div>
                        </div>
                      </li>
                      <li className={styles["li-6"]}>
                        <div className={styles["div-145"]}>
                          <div className={styles["div-186"]}>
                            <SocialMedia slots={["https://framerusercontent.com/images/xQBNOf0SxgG6D1sO75bxOXwVHec.png?width=192&height=192","1.2M Views","1M+ views on a single reel","Hook-driven edits that boosted reach over the time","https://framerusercontent.com/images/wZqiNXA0chj4W6pBOZ6GZqlg0cw.png?width=128&height=128","productbrand","https://framerusercontent.com/images/mH9AO6fIaF2UQcO2TXV19Fuk.png?width=350&height=350"]} />
                          </div>
                        </div>
                      </li>
                      <li className={styles["li-7"]}>
                        <div className={styles["div-145"]}>
                          <div className={styles["div-186"]}>
                            <SocialMedia slots={["https://framerusercontent.com/images/rQlIHNZIJGIWJ6HwPA2PlcsVfT4.png?width=192&height=192","623K Views","+5K followers in 1 month","Content system built for consistency and growth","https://framerusercontent.com/images/46cY1cDaOLF0FyyQyWnQm1BQPu8.png?width=128&height=128","wearnova","https://framerusercontent.com/images/mH9AO6fIaF2UQcO2TXV19Fuk.png?width=350&height=350"]} />
                          </div>
                        </div>
                      </li>
                      <li className={styles["li-7"]}>
                        <div className={styles["div-186"]}>
                          <SocialMedia slots={["https://framerusercontent.com/images/rQlIHNZIJGIWJ6HwPA2PlcsVfT4.png?width=192&height=192","758K Views","2.3x engagement growth","Optimized content structure for better watch time","https://framerusercontent.com/images/ik99JHM0iRogYcwROk6KaId1b0.png?width=400&height=300","wearnova","https://framerusercontent.com/images/mH9AO6fIaF2UQcO2TXV19Fuk.png?width=350&height=350"]} />
                        </div>
                      </li>
                      <li className={styles["li-7"]}>
                        <div className={styles["div-186"]}>
                          <SocialMedia slots={["https://framerusercontent.com/images/OXLRfTyfIyoN11NA7Wvvb247eZU.png?width=192&height=192","1.2M Views","+10K followers in 30 days","Consistent reels strategy with high retention edits","https://framerusercontent.com/images/V5gLYoUFdqXcg9R2VlvvFdbmw.png?width=128&height=128","wearnova","https://framerusercontent.com/images/mH9AO6fIaF2UQcO2TXV19Fuk.png?width=350&height=350"]} />
                        </div>
                      </li>
                      <li className={styles["li-7"]}>
                        <div className={styles["div-186"]}>
                          <SocialMedia slots={["https://framerusercontent.com/images/rQlIHNZIJGIWJ6HwPA2PlcsVfT4.png?width=192&height=192","487K Views","2.3x engagement growth","Optimized content structure for better watch time","https://framerusercontent.com/images/ik99JHM0iRogYcwROk6KaId1b0.png?width=400&height=300","wearnova","https://framerusercontent.com/images/mH9AO6fIaF2UQcO2TXV19Fuk.png?width=350&height=350"]} />
                        </div>
                      </li>
                      <li className={styles["li-7"]}>
                        <div className={styles["div-186"]}>
                          <SocialMedia slots={["https://framerusercontent.com/images/xQBNOf0SxgG6D1sO75bxOXwVHec.png?width=192&height=192","1.2M Views","1M+ views on a single reel","Hook-driven edits that boosted reach over the time","https://framerusercontent.com/images/wZqiNXA0chj4W6pBOZ6GZqlg0cw.png?width=128&height=128","productbrand","https://framerusercontent.com/images/mH9AO6fIaF2UQcO2TXV19Fuk.png?width=350&height=350"]} />
                        </div>
                      </li>
                      <li className={styles["li-7"]}>
                        <div className={styles["div-186"]}>
                          <SocialMedia slots={["https://framerusercontent.com/images/rQlIHNZIJGIWJ6HwPA2PlcsVfT4.png?width=192&height=192","623K Views","+5K followers in 1 month","Content system built for consistency and growth","https://framerusercontent.com/images/46cY1cDaOLF0FyyQyWnQm1BQPu8.png?width=128&height=128","wearnova","https://framerusercontent.com/images/mH9AO6fIaF2UQcO2TXV19Fuk.png?width=350&height=350"]} />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["results-section"]}>
              <div className={styles["containar-6"]}>
                <div className={styles["project-3"]}>
                  <div className={styles["title-10"]}>
                    <div className={styles["div-145"]}>
                      <div className={styles["div-187"] + " " + styles["rv-23"]} data-reveal style={{ transitionDelay: "304ms" }}>
                        <Subtext2 slots={["Results"]} />
                      </div>
                    </div>
                    <div className={styles["text-18"]}>
                      <div className={styles["div-145"]}>
                        <div className={styles["title-text-25"]}>
                          <h2 className={styles["h2-7"]}>
                            <span className={styles["span-326"] + " " + styles["rv-24"]} data-reveal>{slots[222] ?? "We"}</span>
                            {" "}
                            <span className={styles["span-327"] + " " + styles["rv-24"]} data-reveal>{slots[223] ?? "don't"}</span>
                            {" "}
                            <span className={styles["span-328"] + " " + styles["rv-24"]} data-reveal>{slots[224] ?? "just"}</span>
                            {" "}
                            <span className={styles["span-329"] + " " + styles["rv-24"]} data-reveal>{slots[225] ?? "make"}</span>
                            {" "}
                            <span className={styles["span-330"] + " " + styles["rv-24"]} data-reveal>{slots[226] ?? "it"}</span>
                            {" "}
                            <span className={styles["span-331"] + " " + styles["rv-24"]} data-reveal>{slots[227] ?? "look"}</span>
                            {" "}
                            <span className={styles["span-332"] + " " + styles["rv-24"]} data-reveal>{slots[228] ?? "good"}</span>
                            {" "}
                            <span className={styles["span-333"] + " " + styles["rv-24"]} data-reveal>{slots[229] ?? "-"}</span>
                            {" "}
                            <span className={styles["span-334"] + " " + styles["rv-24"]} data-reveal>{slots[230] ?? "we"}</span>
                            {" "}
                            <span className={styles["span-329"] + " " + styles["rv-24"]} data-reveal>{slots[231] ?? "make"}</span>
                            {" "}
                            <span className={styles["span-330"] + " " + styles["rv-24"]} data-reveal>{slots[232] ?? "it"}</span>
                            {" "}
                            <span className={styles["span-335"] + " " + styles["rv-24"]} data-reveal>{slots[233] ?? "work"}</span>
                          </h2>
                        </div>
                      </div>
                      <div className={styles["div-145"]}>
                        <div className={styles["reviews-text-54"]}>
                          <div className={styles["p-111"]}>
                            <span className={styles["span-127"] + " " + styles["rv-24"]} data-reveal>{slots[234] ?? "Here's"}</span>
                            {" "}
                            <span className={styles["span-128"] + " " + styles["rv-24"]} data-reveal>{slots[235] ?? "what"}</span>
                            {" "}
                            <span className={styles["span-336"] + " " + styles["rv-24"]} data-reveal>{slots[236] ?? "happens"}</span>
                            {" "}
                            <span className={styles["span-337"] + " " + styles["rv-24"]} data-reveal>{slots[237] ?? "when"}</span>
                            {" "}
                            <span className={styles["span-338"] + " " + styles["rv-24"]} data-reveal>{slots[238] ?? "editing"}</span>
                            {" "}
                            <span className={styles["span-339"] + " " + styles["rv-24"]} data-reveal>{slots[239] ?? "meets"}</span>
                            {" "}
                            <span className={styles["span-340"] + " " + styles["rv-24"]} data-reveal>{slots[240] ?? "strategy."}</span>
                            {" "}
                            <span className={styles["span-341"] + " " + styles["rv-24"]} data-reveal>{slots[241] ?? "Every"}</span>
                            {" "}
                            <span className={styles["span-342"] + " " + styles["rv-24"]} data-reveal>{slots[242] ?? "result"}</span>
                            {" "}
                            <span className={styles["span-343"] + " " + styles["rv-24"]} data-reveal>{slots[243] ?? "below"}</span>
                            {" "}
                            <span className={styles["span-337"] + " " + styles["rv-24"]} data-reveal>{slots[244] ?? "came"}</span>
                            {" "}
                            <span className={styles["span-124"] + " " + styles["rv-24"]} data-reveal>{slots[245] ?? "from"}</span>
                            {" "}
                            <span className={styles["span-344"] + " " + styles["rv-24"]} data-reveal>{slots[246] ?? "a"}</span>
                            {" "}
                            <span className={styles["span-125"] + " " + styles["rv-24"]} data-reveal>{slots[247] ?? "real"}</span>
                            {" "}
                            <span className={styles["span-345"] + " " + styles["rv-24"]} data-reveal>{slots[248] ?? "client"}</span>
                            {" "}
                            <span className={styles["span-132"] + " " + styles["rv-24"]} data-reveal>{slots[249] ?? "working"}</span>
                            {" "}
                            <span className={styles["span-122"] + " " + styles["rv-24"]} data-reveal>{slots[250] ?? "with"}</span>
                            {" "}
                            <span className={styles["span-346"] + " " + styles["rv-24"]} data-reveal>{slots[251] ?? "our"}</span>
                            {" "}
                            <span className={styles["span-347"] + " " + styles["rv-24"]} data-reveal>{slots[252] ?? "team."}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["button"] + " " + styles["rv-23"]} data-reveal style={{ transitionDelay: "304ms" }}>
                    <div className={styles["div-145"]}>
                      <div className={styles["div-149"]}>
                        <PrimaryButton slots={["Start a Project","Start a Project"]} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["results"]}>
                  <div className={styles["top"]}>
                    <div className={styles["div-145"]}>
                      <div className={styles["div-188"] + " " + styles["rv-23"]} data-reveal>
                        <ResaltCard slots={["https://framerusercontent.com/images/5ApYxRnsEjndNIsc1QVmMRbOZ8.png?scale-down-to=1024&width=1200&height=840","https://framerusercontent.com/images/ik99JHM0iRogYcwROk6KaId1b0.png?width=400&height=300","nova.skincare","https://framerusercontent.com/images/mH9AO6fIaF2UQcO2TXV19Fuk.png?width=350&height=350","1.2M+ views on a single reel","We created product-focused short videos with strong hooks and clean visuals, helping the brand reach a wider audience and increase engagement."]} />
                      </div>
                    </div>
                    <div className={styles["div-145"]}>
                      <div className={styles["div-188"] + " " + styles["rv-23"]} data-reveal style={{ transitionDelay: "241ms" }}>
                        <ResaltCard slots={["https://framerusercontent.com/images/Lg3Dog2QnfLwv1CkjcyoQXYKA.png?scale-down-to=1024&width=1200&height=904","https://framerusercontent.com/images/ik99JHM0iRogYcwROk6KaId1b0.png?width=400&height=300","Williams.fast","https://framerusercontent.com/images/mH9AO6fIaF2UQcO2TXV19Fuk.png?width=350&height=350","+8K followers in 30 days","A consistent content strategy combined with high-retention edits helped grow their audience steadily and improve profile reach."]} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["bottom-3-cards"]}>
                    <div className={styles["div-145"]}>
                      <div className={styles["div-189"] + " " + styles["rv-23"]} data-reveal>
                        <ResaltCard2 slots={["https://framerusercontent.com/images/54oTOobVFLPuUGVYj2q3tGK7c5o.png?scale-down-to=512&width=1200&height=933","https://framerusercontent.com/images/ik99JHM0iRogYcwROk6KaId1b0.png?width=400&height=300","Khulna_para","https://framerusercontent.com/images/mH9AO6fIaF2UQcO2TXV19Fuk.png?width=350&height=350","3x engagement increase","Better hooks and tighter storytelling pushed watch time up — and the algorithm noticed."]} />
                      </div>
                    </div>
                    <div className={styles["div-145"]}>
                      <div className={styles["div-190"] + " " + styles["rv-23"]} data-reveal>
                        <ResaltCard2 slots={["https://framerusercontent.com/images/sr75L6Xn86uE4MJI5GRXV82AGg.png?scale-down-to=512&width=1200&height=904","https://framerusercontent.com/images/ik99JHM0iRogYcwROk6KaId1b0.png?width=400&height=300","Urban_sun","https://framerusercontent.com/images/mH9AO6fIaF2UQcO2TXV19Fuk.png?width=350&height=350","2.5x leads from content","Strategy-driven videos with clear messages and CTAs turned views into real business leads."]} />
                      </div>
                    </div>
                    <div className={styles["div-145"]}>
                      <div className={styles["div-190"] + " " + styles["rv-23"]} data-reveal>
                        <ResaltCard2 slots={["https://framerusercontent.com/images/P7oz5ApBBXx3Lr8HDknCPGn6uZ8.png?scale-down-to=512&width=1200&height=960","https://framerusercontent.com/images/ik99JHM0iRogYcwROk6KaId1b0.png?width=400&height=300","Cook.johans","https://framerusercontent.com/images/mH9AO6fIaF2UQcO2TXV19Fuk.png?width=350&height=350","2.8x increase in sales","Conversion-focused edits with clear CTAs turned passive viewers into paying customers."]} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["process-section"]} id="process">
              <div className={styles["containar-7"]}>
                <div className={styles["content-13"]}>
                  <div className={styles["div-145"]}>
                    <div className={styles["div-191"] + " " + styles["rv-23"]} data-reveal>
                      <Subtext3 slots={["Process We  Follow"]} />
                    </div>
                  </div>
                  <div className={styles["text-box"]}>
                    <div className={styles["title-text-26"]}>
                      <h2 className={styles["h2-8"]}>
                        <span className={styles["span-348"] + " " + styles["rv-24"]} data-reveal>{slots[253] ?? "From"}</span>
                        {" "}
                        <span className={styles["span-263"] + " " + styles["rv-24"]} data-reveal>{slots[254] ?? "raw"}</span>
                        {" "}
                        <span className={styles["span-264"] + " " + styles["rv-24"]} data-reveal>{slots[255] ?? "clips"}</span>
                        {" "}
                        <span className={styles["span-139"] + " " + styles["rv-24"]} data-reveal>{slots[256] ?? "to"}</span>
                        {" "}
                        <span className={styles["span-349"] + " " + styles["rv-24"]} data-reveal>{slots[257] ?? "ready-to-post"}</span>
                        {" "}
                        <span className={styles["span-350"] + " " + styles["rv-24"]} data-reveal>{slots[258] ?? "Here's"}</span>
                        {" "}
                        <span className={styles["span-351"] + " " + styles["rv-24"]} data-reveal>{slots[259] ?? "how"}</span>
                        {" "}
                        <span className={styles["span-352"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "341ms" }}>{slots[260] ?? "we"}</span>
                        {" "}
                        <span className={styles["span-353"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "341ms" }}>{slots[261] ?? "do"}</span>
                        {" "}
                        <span className={styles["span-354"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "341ms" }}>{slots[262] ?? "it"}</span>
                      </h2>
                    </div>
                    <div className={styles["div-145"]}>
                      <div className={styles["reviews-text-55"]}>
                        <div className={styles["p-112"]}>
                          <span className={styles["span-355"] + " " + styles["rv-24"]} data-reveal>{slots[263] ?? "From"}</span>
                          {" "}
                          <span className={styles["span-280"] + " " + styles["rv-24"]} data-reveal>{slots[264] ?? "editing"}</span>
                          {" "}
                          <span className={styles["span-200"] + " " + styles["rv-24"]} data-reveal>{slots[265] ?? "to"}</span>
                          {" "}
                          <span className={styles["span-356"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "341ms" }}>{slots[266] ?? "strategy,"}</span>
                          {" "}
                          <span className={styles["span-278"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "341ms" }}>{slots[267] ?? "we"}</span>
                          {" "}
                          <span className={styles["span-232"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "341ms" }}>{slots[268] ?? "handle"}</span>
                          {" "}
                          <span className={styles["span-357"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "341ms" }}>{slots[269] ?? "everything"}</span>
                          {" "}
                          <span className={styles["span-279"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "341ms" }}>{slots[270] ?? "you"}</span>
                          {" "}
                          <span className={styles["span-230"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "341ms" }}>{slots[271] ?? "need"}</span>
                          {" "}
                          <span className={styles["span-200"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "341ms" }}>{slots[272] ?? "to"}</span>
                          {" "}
                          <span className={styles["span-358"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "341ms" }}>{slots[273] ?? "create"}</span>
                          {" "}
                          <span className={styles["span-194"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "341ms" }}>{slots[274] ?? "high-performing"}</span>
                          {" "}
                          <span className={styles["span-359"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "341ms" }}>{slots[275] ?? "reels,"}</span>
                          {" "}
                          <span className={styles["span-196"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "341ms" }}>{slots[276] ?? "TikToks,"}</span>
                          {" "}
                          <span className={styles["span-191"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "341ms" }}>{slots[277] ?? "and"}</span>
                          {" "}
                          <span className={styles["span-360"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "341ms" }}>{slots[278] ?? "shorts."}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["process-cards"]}>
                  <div className={styles["container-2"] + " " + styles["rv-23"]} data-reveal>
                    <div className={styles["div-145"]}>
                      <div className={styles["div-192"]}>
                        <UploadYourContent slots={["https://framerusercontent.com/images/UgxGH35PaDs6F2NERRLs0pfDJw.jpg?scale-down-to=512&width=1500&height=979","https://framerusercontent.com/images/KwGLeoODVNSHXFtx9ixjbZl1s.jpg?scale-down-to=512&width=1500&height=1500","https://framerusercontent.com/images/08ZCimrDgoHerYxshxxXeh8lo.jpg?scale-down-to=512&width=1500&height=1000","3"]} />
                      </div>
                    </div>
                    <div className={styles["text-19"]}>
                      <div className={styles["div-145"]}>
                        <div className={styles["title-text-27"]}>
                          <p className={styles["p-113"]}>{slots[279] ?? "Send your clips"}</p>
                        </div>
                      </div>
                      <div className={styles["div-145"]}>
                        <div className={styles["reviews-text-56"]}>
                          <p className={styles["p-114"]}>{slots[280] ?? "Share your footage and ideas. We review all with performance and platform in mind before"}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles["purple-shade-7"]} />
                    <div className={styles["purple-shade-8"]} />
                  </div>
                  <div className={styles["container-2"] + " " + styles["rv-23"]} data-reveal>
                    <div className={styles["purple-shade-7"]} />
                    <div className={styles["purple-shade-8"]} />
                    <div className={styles["div-145"]}>
                      <div className={styles["div-193"]}>
                        <WeCraftYourContent slots={["Before","After","Hook Added","Effects","Caption","Hook"]} />
                      </div>
                    </div>
                    <div className={styles["text-19"]}>
                      <div className={styles["div-145"]}>
                        <div className={styles["title-text-27"]}>
                          <p className={styles["p-113"]}>{slots[281] ?? "We craft your videos"}</p>
                        </div>
                      </div>
                      <div className={styles["div-145"]}>
                        <div className={styles["reviews-text-56"]}>
                          <p className={styles["p-114"]}>{slots[282] ?? "We add scroll-stopping hooks, punchy captions  to keep viewers watching all the way through."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["container-2"] + " " + styles["rv-23"]} data-reveal>
                    <div className={styles["div-145"]}>
                      <div className={styles["div-194"]}>
                        <WatchYourContentCard slots={["1",".","2","M","V","i","e","w","s","https://framerusercontent.com/images/8Gl8PdjwzpNDgUfc4GEgVKLwh0E.png?width=128&height=128","lifestyle_smma","https://framerusercontent.com/images/mH9AO6fIaF2UQcO2TXV19Fuk.png?width=350&height=350","2",".","4","M","V","i","e","w","s","https://framerusercontent.com/images/oHIMIt9jnEpUoLmqZcmThJUp7gw.jpg?scale-down-to=1024&width=4000&height=6000","fitness_steve","https://framerusercontent.com/images/mH9AO6fIaF2UQcO2TXV19Fuk.png?width=350&height=350"]} />
                      </div>
                    </div>
                    <div className={styles["text-19"]}>
                      <div className={styles["div-145"]}>
                        <div className={styles["title-text-27"]}>
                          <p className={styles["p-113"]}>{slots[283] ?? "Watch your content online"}</p>
                        </div>
                      </div>
                      <div className={styles["div-145"]}>
                        <div className={styles["reviews-text-56"]}>
                          <p className={styles["p-114"]}>{slots[284] ?? "Share your footage and ideas. We review all with performance and platform in mind before"}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles["purple-shade-7"]} />
                    <div className={styles["purple-shade-8"]} />
                  </div>
                </div>
              </div>
              <div className={styles["div-195"]}>
                <div className={styles["div-145"]}>
                  <div className={styles["div-168"]} />
                </div>
              </div>
            </section>
            <section className={styles["testimonial-cards"]}>
              <div className={styles["div-145"]}>
                <div className={styles["div-196"]}>
                  <Testimonial slots={["Testimonials","What","creators","say","after","working","with","us","Real","results","from","real","clients.","Here's","what","they","said","after","working","with","us.","https://framerusercontent.com/images/mQZtn3nU9sPT11tH2MuJSrIPI.png?scale-down-to=1024&width=960&height=1200","https://framerusercontent.com/images/tFCvwLTyLbnI9yS31xRvFOE.png?scale-down-to=512&width=1200&height=1200","https://framerusercontent.com/images/Zh0QSsA0eTf6128afGQ8GkFQlcY.png?scale-down-to=1024&width=904&height=1200","3x","Engagement growth","https://framerusercontent.com/images/2AD1CeSlqFALLgb5WzWKmBD3lFw.png?width=192&height=192","2M+","Engagement growth","https://framerusercontent.com/images/dR7T3HjJRXDWmYqL8Q0lpWqF3Os.png?width=192&height=192","https://framerusercontent.com/images/mQZtn3nU9sPT11tH2MuJSrIPI.png?scale-down-to=1024&width=960&height=1200","https://framerusercontent.com/images/ik99JHM0iRogYcwROk6KaId1b0.png?width=400&height=300","atlas.supply","https://framerusercontent.com/images/mH9AO6fIaF2UQcO2TXV19Fuk.png?width=350&height=350","“Before this, we were just posting randomly. Now every video has a purpose. Our reels started getting real reach, engagement went up, and we finally saw consistent growth.”","Emma Watson","Content Creator"]} />
                </div>
              </div>
            </section>
            <section className={styles["pricing-section"]} id="pricing">
              <div className={styles["containar-8"]}>
                <div className={styles["content-13"]}>
                  <div className={styles["div-145"]}>
                    <div className={styles["div-197"] + " " + styles["rv-23"]} data-reveal>
                      <Subtext2 slots={["Pricing"]} />
                    </div>
                  </div>
                  <div className={styles["text-box"]}>
                    <div className={styles["title-text-28"]}>
                      <h2 className={styles["h2-9"]}>
                        <span className={styles["span-361"] + " " + styles["rv-24"]} data-reveal>{slots[285] ?? "Simple"}</span>
                        {" "}
                        <span className={styles["span-362"] + " " + styles["rv-24"]} data-reveal>{slots[286] ?? "plans"}</span>
                        {" "}
                        <span className={styles["span-363"] + " " + styles["rv-24"]} data-reveal>{slots[287] ?? "built"}</span>
                        {" "}
                        <div className={styles["span-142"] + " " + styles["rv-24"]} data-reveal />
                      </h2>
                      <h2 className={styles["h2-9"]}>
                        <span className={styles["span-139"] + " " + styles["rv-24"]} data-reveal>{slots[288] ?? "to"}</span>
                        {" "}
                        <span className={styles["span-364"] + " " + styles["rv-24"]} data-reveal>{slots[289] ?? "grow"}</span>
                        {" "}
                        <span className={styles["span-141"] + " " + styles["rv-24"]} data-reveal>{slots[290] ?? "your"}</span>
                        {" "}
                        <span className={styles["span-143"] + " " + styles["rv-24"]} data-reveal>{slots[291] ?? "content"}</span>
                      </h2>
                    </div>
                    <div className={styles["div-145"]}>
                      <div className={styles["reviews-text-57"]}>
                        <div className={styles["p-115"]}>
                          <span className={styles["span-365"] + " " + styles["rv-24"]} data-reveal>{slots[292] ?? "Choose"}</span>
                          {" "}
                          <span className={styles["span-275"] + " " + styles["rv-24"]} data-reveal>{slots[293] ?? "a"}</span>
                          {" "}
                          <span className={styles["span-276"] + " " + styles["rv-24"]} data-reveal>{slots[294] ?? "plan"}</span>
                          {" "}
                          <span className={styles["span-366"] + " " + styles["rv-24"]} data-reveal>{slots[295] ?? "that"}</span>
                          {" "}
                          <span className={styles["span-367"] + " " + styles["rv-24"]} data-reveal>{slots[296] ?? "fits"}</span>
                          {" "}
                          <span className={styles["span-190"] + " " + styles["rv-24"]} data-reveal>{slots[297] ?? "your"}</span>
                          {" "}
                          <span className={styles["span-368"] + " " + styles["rv-24"]} data-reveal>{slots[298] ?? "content"}</span>
                          {" "}
                          <span className={styles["span-277"] + " " + styles["rv-24"]} data-reveal>{slots[299] ?? "goals."}</span>
                          {" "}
                          <span className={styles["span-188"] + " " + styles["rv-24"]} data-reveal>{slots[300] ?? "We"}</span>
                          {" "}
                          <span className={styles["span-232"] + " " + styles["rv-24"]} data-reveal>{slots[301] ?? "handle"}</span>
                          {" "}
                          <span className={styles["span-221"] + " " + styles["rv-24"]} data-reveal>{slots[302] ?? "the"}</span>
                          {" "}
                          <span className={styles["span-369"] + " " + styles["rv-24"]} data-reveal>{slots[303] ?? "editing,"}</span>
                          {" "}
                          <span className={styles["span-356"] + " " + styles["rv-24"]} data-reveal>{slots[304] ?? "strategy,"}</span>
                          {" "}
                          <span className={styles["span-191"] + " " + styles["rv-24"]} data-reveal>{slots[305] ?? "and"}</span>
                          {" "}
                          <span className={styles["span-228"] + " " + styles["rv-24"]} data-reveal>{slots[306] ?? "consistency"}</span>
                          {" "}
                          <span className={styles["span-198"] + " " + styles["rv-24"]} data-reveal>{slots[307] ?? "—"}</span>
                          {" "}
                          <span className={styles["span-279"] + " " + styles["rv-24"]} data-reveal>{slots[308] ?? "you"}</span>
                          {" "}
                          <span className={styles["span-370"] + " " + styles["rv-24"]} data-reveal>{slots[309] ?? "focus"}</span>
                          {" "}
                          <span className={styles["span-321"] + " " + styles["rv-24"]} data-reveal>{slots[310] ?? "on"}</span>
                          {" "}
                          <span className={styles["span-368"] + " " + styles["rv-24"]} data-reveal>{slots[311] ?? "growth."}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["pricing-cards"]}>
                  <div className={styles["div-145"]}>
                    <div className={styles["div-198"] + " " + styles["rv-23"]} data-reveal>
                      <PricingCard slots={["Starter","Perfect for creators just getting started","$699","/ month","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Up to 8 short-form videos/month","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Basic editing + captions","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Max 60s video length","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Platform-ready formats (Reels, TikTok, Shorts)","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Standard export quality","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Email support","Get Started Now","Get Started Now"]} />
                    </div>
                  </div>
                  <div className={styles["div-145"]}>
                    <div className={styles["div-199"] + " " + styles["rv-23"]} data-reveal style={{ transitionDelay: "202ms" }}>
                      <PricingCard slots={["Professional","For creators & brands ready to grow consistently","$1,499","/ month","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Up to 20 short-form videos/month","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Advanced editing + captions","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Hook & storytelling optimization","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Priority export (HD 1080p)","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Unlimited revisions","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Performance insights (monthly)","Get Started Now","Get Started Now"]} />
                    </div>
                  </div>
                  <div className={styles["div-145"]}>
                    <div className={styles["div-200"] + " " + styles["rv-23"]} data-reveal style={{ transitionDelay: "443ms" }}>
                      <PricingCard slots={["Business","Best for teams scaling content at volume","$2799","/ month","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","30+ short-form videos/month","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Full editing + content optimization","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Strategy support & content planning","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Priority delivery (48hr)","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Unlimited revisions","https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64","Dedicated support","Get Started Now","Get Started Now"]} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["faq-section"]} id="faq">
              <div className={styles["containar-9"]}>
                <div className={styles["content-14"]}>
                  <div className={styles["content-15"]}>
                    <div className={styles["div-145"]}>
                      <div className={styles["div-201"] + " " + styles["rv-23"]} data-reveal style={{ transitionDelay: "289ms" }}>
                        <Subtext4 slots={["FAQ"]} />
                      </div>
                    </div>
                    <div className={styles["title-and-description"]}>
                      <div className={styles["div-145"]}>
                        <div className={styles["title-text-29"]}>
                          <h2 className={styles["h2-10"]}>
                            <span className={styles["span-371"] + " " + styles["rv-24"]} data-reveal>{slots[312] ?? "Everything"}</span>
                            {" "}
                            <div className={styles["span-372"] + " " + styles["rv-24"]} data-reveal />
                          </h2>
                          <h2 className={styles["h2-10"]}>
                            <span className={styles["span-373"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "127ms" }}>{slots[313] ?? "you"}</span>
                            {" "}
                            <span className={styles["span-374"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "127ms" }}>{slots[314] ?? "need"}</span>
                            {" "}
                            <span className={styles["span-375"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "194ms" }}>{slots[315] ?? "to"}</span>
                            {" "}
                            <span className={styles["span-376"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "249ms" }}>{slots[316] ?? "know"}</span>
                          </h2>
                        </div>
                      </div>
                      <div className={styles["div-145"]}>
                        <div className={styles["reviews-text-58"]}>
                          <div className={styles["p-116"]}>
                            <span className={styles["span-377"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "194ms" }}>{slots[317] ?? "Questions"}</span>
                            {" "}
                            <span className={styles["span-378"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "249ms" }}>{slots[318] ?? "before"}</span>
                            {" "}
                            <span className={styles["span-379"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "289ms" }}>{slots[319] ?? "you"}</span>
                            {" "}
                            <span className={styles["span-380"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "344ms" }}>{slots[320] ?? "commit?"}</span>
                            {" "}
                            <span className={styles["span-341"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "414ms" }}>{slots[321] ?? "We've"}</span>
                            {" "}
                            <span className={styles["span-381"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "454ms" }}>{slots[322] ?? "answered"}</span>
                            {" "}
                            <span className={styles["span-382"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "509ms" }}>{slots[323] ?? "the"}</span>
                            {" "}
                            <span className={styles["span-383"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "567ms" }}>{slots[324] ?? "most"}</span>
                            {" "}
                            <span className={styles["span-384"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "622ms" }}>{slots[325] ?? "common"}</span>
                            {" "}
                            <span className={styles["span-128"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "622ms" }}>{slots[326] ?? "ones"}</span>
                            {" "}
                            <span className={styles["span-385"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "686ms" }}>{slots[327] ?? "below."}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["div-145"]}>
                  <div className={styles["div-202"]}>
                    <div className={styles["1st-faq"]}>
                      <div className={styles["div-203"] + " " + styles["rv-23"]} data-reveal>
                        <div className={styles["variant-2-3"]}>
                          <div className={styles["title-11"]}>
                            <div className={styles["title-text-30"]}>
                              <p className={styles["p-117"]}>{slots[328] ?? "What do you actually do?"}</p>
                            </div>
                            <div className={styles["icon"]}>
                              <div className={styles["div-204"]}>
                                <div className={styles["div-205"]}>
                                  <img className={styles["img-43"]} src={slots[329] ?? "https://framerusercontent.com/images/5bJPKMhbVbg6ku5oleC0xpZMz0I.png?width=80&height=80"} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles["div-206"]}>
                            <p className={styles["p-118"]}>{slots[330] ?? "We specialize in creating high-quality short-form video content for creators and brands. From editing to optimization, we turn raw footage into engaging videos that drive results."}</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles["div-207"] + " " + styles["rv-23"]} data-reveal>
                        <States
                          a={<>
                            <div className={styles["variant-1-19"]}>
                              <div className={styles["title-12"]}>
                                <div className={styles["title-text-31"]}>
                                  <p className={styles["p-119"]}>{"What is this service about?"}</p>
                                </div>
                                <div className={styles["icon-2"]}>
                                  <div className={styles["elements-2"]}>
                                    <div className={styles["div-208"]}>
                                      <SvgGraphic className={styles["svg-31"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 14 14\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"2451\"><use href=\"#svg1028257913_369\" data-f2c-idx=\"2452\"></use></svg>"} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>}
                          b={<>
                            <div className={styles["variant-2-4"]}>
                              <div className={styles["title-11"]}>
                                <div className={styles["title-text-30"]}>
                                  <p className={styles["p-117"]}>{"What is this service about?"}</p>
                                </div>
                                <div className={styles["icon-3"]}>
                                  <div className={styles["div-209"]}>
                                    <div className={styles["div-205"]}>
                                      <img className={styles["img-44"]} src="https://framerusercontent.com/images/5bJPKMhbVbg6ku5oleC0xpZMz0I.png?width=80&height=80" alt="" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["div-210"]}>
                                <p className={styles["p-120"]}>{"We help creators and brands turn raw footage into high-performing short videos — designed to increase views, engagement, and real audience growth."}</p>
                              </div>
                            </div>
                          </>}
                        />
                      </div>
                      <div className={styles["div-207"] + " " + styles["rv-23"]} data-reveal>
                        <States
                          a={<>
                            <div className={styles["variant-1-19"]}>
                              <div className={styles["title-12"]}>
                                <div className={styles["title-text-31"]}>
                                  <p className={styles["p-119"]}>{"Do you only edit videos or help with strategy too?"}</p>
                                </div>
                                <div className={styles["icon-2"]}>
                                  <div className={styles["elements-2"]}>
                                    <div className={styles["div-208"]}>
                                      <SvgGraphic className={styles["svg-31"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 14 14\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"2461\"><use href=\"#svg1028257913_369\" data-f2c-idx=\"2462\"></use></svg>"} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>}
                          b={<>
                            <div className={styles["variant-2-4"]}>
                              <div className={styles["title-11"]}>
                                <div className={styles["title-text-32"]}>
                                  <p className={styles["p-117"]}>{"Do you only edit videos or help with strategy too?"}</p>
                                </div>
                                <div className={styles["icon-4"]}>
                                  <div className={styles["div-211"]}>
                                    <div className={styles["div-205"]}>
                                      <img className={styles["img-44"]} src="https://framerusercontent.com/images/5bJPKMhbVbg6ku5oleC0xpZMz0I.png?width=80&height=80" alt="" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["div-210"]}>
                                <p className={styles["p-120"]}>{"We don’t just edit — we also help with content strategy, including hooks, trends, and formats that perform best on short-form platforms."}</p>
                              </div>
                            </div>
                          </>}
                        />
                      </div>
                      <div className={styles["div-207"] + " " + styles["rv-23"]} data-reveal>
                        <States
                          a={<>
                            <div className={styles["variant-1-19"]}>
                              <div className={styles["title-12"]}>
                                <div className={styles["title-text-31"]}>
                                  <p className={styles["p-119"]}>{"How fast is the delivery?"}</p>
                                </div>
                                <div className={styles["icon-2"]}>
                                  <div className={styles["elements-2"]}>
                                    <div className={styles["div-208"]}>
                                      <SvgGraphic className={styles["svg-31"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 14 14\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"2471\"><use href=\"#svg1028257913_369\" data-f2c-idx=\"2472\"></use></svg>"} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>}
                          b={<>
                            <div className={styles["variant-2-4"]}>
                              <div className={styles["title-11"]}>
                                <div className={styles["title-text-30"]}>
                                  <p className={styles["p-117"]}>{"How fast is the delivery?"}</p>
                                </div>
                                <div className={styles["icon-3"]}>
                                  <div className={styles["div-209"]}>
                                    <div className={styles["div-205"]}>
                                      <img className={styles["img-44"]} src="https://framerusercontent.com/images/5bJPKMhbVbg6ku5oleC0xpZMz0I.png?width=80&height=80" alt="" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["div-210"]}>
                                <p className={styles["p-120"]}>{"Delivery typically takes 24–72 hours depending on the project scope and complexity."}</p>
                              </div>
                            </div>
                          </>}
                        />
                      </div>
                      <div className={styles["div-207"] + " " + styles["rv-23"]} data-reveal>
                        <States
                          a={<>
                            <div className={styles["variant-1-19"]}>
                              <div className={styles["title-12"]}>
                                <div className={styles["title-text-31"]}>
                                  <p className={styles["p-119"]}>{"Can I request revisions?"}</p>
                                </div>
                                <div className={styles["icon-2"]}>
                                  <div className={styles["elements-2"]}>
                                    <div className={styles["div-208"]}>
                                      <SvgGraphic className={styles["svg-31"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 14 14\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"2481\"><use href=\"#svg1028257913_369\" data-f2c-idx=\"2482\"></use></svg>"} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>}
                          b={<>
                            <div className={styles["variant-2-5"]}>
                              <div className={styles["title-11"]}>
                                <div className={styles["title-text-30"]}>
                                  <p className={styles["p-117"]}>{"Can I request revisions?"}</p>
                                </div>
                                <div className={styles["icon-3"]}>
                                  <div className={styles["div-209"]}>
                                    <div className={styles["div-205"]}>
                                      <img className={styles["img-44"]} src="https://framerusercontent.com/images/5bJPKMhbVbg6ku5oleC0xpZMz0I.png?width=80&height=80" alt="" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["div-212"]}>
                                <p className={styles["p-121"]}>{"Yes, we offer revisions to make sure you’re fully satisfied with the final result."}</p>
                              </div>
                            </div>
                          </>}
                        />
                      </div>
                      <div className={styles["div-207"] + " " + styles["rv-23"]} data-reveal>
                        <States
                          a={<>
                            <div className={styles["variant-1-19"]}>
                              <div className={styles["title-12"]}>
                                <div className={styles["title-text-31"]}>
                                  <p className={styles["p-119"]}>{"Which platforms do you optimize for?"}</p>
                                </div>
                                <div className={styles["icon-2"]}>
                                  <div className={styles["elements-2"]}>
                                    <div className={styles["div-208"]}>
                                      <SvgGraphic className={styles["svg-31"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 14 14\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"2491\"><use href=\"#svg1028257913_369\" data-f2c-idx=\"2492\"></use></svg>"} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>}
                          b={<>
                            <div className={styles["variant-2-4"]}>
                              <div className={styles["title-11"]}>
                                <div className={styles["title-text-30"]}>
                                  <p className={styles["p-117"]}>{"Which platforms do you optimize for?"}</p>
                                </div>
                                <div className={styles["icon-3"]}>
                                  <div className={styles["div-209"]}>
                                    <div className={styles["div-205"]}>
                                      <img className={styles["img-44"]} src="https://framerusercontent.com/images/5bJPKMhbVbg6ku5oleC0xpZMz0I.png?width=80&height=80" alt="" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["div-210"]}>
                                <p className={styles["p-120"]}>{"We optimize content for platforms like TikTok, Instagram Reels, YouTube Shorts, and Facebook."}</p>
                              </div>
                            </div>
                          </>}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["tools-used-section"]}>
              <div className={styles["containar-10"]}>
                <div className={styles["content-13"]}>
                  <div className={styles["div-145"]}>
                    <div className={styles["div-213"] + " " + styles["rv-23"]} data-reveal style={{ transitionDelay: "245ms" }}>
                      <Subtext5 slots={["Platforms"]} />
                    </div>
                  </div>
                  <div className={styles["text-box"]}>
                    <div className={styles["title-text-33"]}>
                      <h2 className={styles["h2-11"]}>
                        <span className={styles["span-386"] + " " + styles["rv-24"]} data-reveal>{slots[331] ?? "We're"}</span>
                        {" "}
                        <span className={styles["span-387"] + " " + styles["rv-24"]} data-reveal>{slots[332] ?? "comfortable"}</span>
                        {" "}
                        <span className={styles["span-388"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "45ms" }}>{slots[333] ?? "in"}</span>
                        {" "}
                        <span className={styles["span-389"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "88ms" }}>{slots[334] ?? "every"}</span>
                        {" "}
                        <span className={styles["span-265"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "143ms" }}>{slots[335] ?? "major"}</span>
                        {" "}
                        <span className={styles["span-390"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "202ms" }}>{slots[336] ?? "editing"}</span>
                        {" "}
                        <span className={styles["span-391"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "245ms" }}>{slots[337] ?? "tools"}</span>
                      </h2>
                    </div>
                    <div className={styles["div-145"]}>
                      <div className={styles["reviews-text-29"]}>
                        <div className={styles["p-110"]}>
                          <span className={styles["span-392"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "143ms" }}>{slots[338] ?? "Whatever"}</span>
                          {" "}
                          <span className={styles["span-193"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "202ms" }}>{slots[339] ?? "tool"}</span>
                          {" "}
                          <span className={styles["span-279"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "245ms" }}>{slots[340] ?? "you"}</span>
                          {" "}
                          <span className={styles["span-366"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "296ms" }}>{slots[341] ?? "use,"}</span>
                          {" "}
                          <span className={styles["span-278"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "358ms" }}>{slots[342] ?? "we"}</span>
                          {" "}
                          <span className={styles["span-393"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "418ms" }}>{slots[343] ?? "already"}</span>
                          {" "}
                          <span className={styles["span-394"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "475ms" }}>{slots[344] ?? "know"}</span>
                          {" "}
                          <span className={styles["span-395"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "475ms" }}>{slots[345] ?? "it."}</span>
                          {" "}
                          <span className={styles["span-278"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "532ms" }}>{slots[346] ?? "No"}</span>
                          {" "}
                          <span className={styles["span-219"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "586ms" }}>{slots[347] ?? "delays,"}</span>
                          {" "}
                          <span className={styles["span-321"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "657ms" }}>{slots[348] ?? "no"}</span>
                          {" "}
                          <span className={styles["span-396"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "710ms" }}>{slots[349] ?? "friction"}</span>
                          {" "}
                          <span className={styles["span-198"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "774ms" }}>{slots[350] ?? "—"}</span>
                          {" "}
                          <span className={styles["span-222"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "833ms" }}>{slots[351] ?? "just"}</span>
                          {" "}
                          <span className={styles["span-397"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "833ms" }}>{slots[352] ?? "great"}</span>
                          {" "}
                          <span className={styles["span-398"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "898ms" }}>{slots[353] ?? "edits."}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["div-145"]}>
                  <div className={styles["div-214"]}>
                    <LightTickerForToolsWeUse slots={["https://framerusercontent.com/images/RxRN4dYaIJXRXRICKs9sDxqI8.png?scale-down-to=512&width=2828&height=2784","https://framerusercontent.com/images/Erw35rzxrUKFiFk9noh9vHv9Hw4.png?scale-down-to=512&width=2800&height=2776","https://framerusercontent.com/images/vDUrKOg6oVR52HvQ3e8nqWGDY.png?scale-down-to=1024&width=2780&height=2788","https://framerusercontent.com/images/lijp6D89ayghoHQznbwyPNIV3Y.png?scale-down-to=512&width=946&height=935","https://framerusercontent.com/images/7ZRBRLRod8VYH8EIX6OcgXjs.png?scale-down-to=512&width=2814&height=2778","https://framerusercontent.com/images/3DuzLXpCz1tC2Z2cmQXzLQKDM4Y.png?scale-down-to=512&width=1442&height=1393","https://framerusercontent.com/images/RxRN4dYaIJXRXRICKs9sDxqI8.png?scale-down-to=512&width=2828&height=2784","https://framerusercontent.com/images/Erw35rzxrUKFiFk9noh9vHv9Hw4.png?scale-down-to=512&width=2800&height=2776","https://framerusercontent.com/images/vDUrKOg6oVR52HvQ3e8nqWGDY.png?scale-down-to=1024&width=2780&height=2788","https://framerusercontent.com/images/lijp6D89ayghoHQznbwyPNIV3Y.png?scale-down-to=512&width=946&height=935","https://framerusercontent.com/images/7ZRBRLRod8VYH8EIX6OcgXjs.png?scale-down-to=512&width=2814&height=2778","https://framerusercontent.com/images/3DuzLXpCz1tC2Z2cmQXzLQKDM4Y.png?scale-down-to=512&width=1442&height=1393"]} />
                  </div>
                </div>
              </div>
            </section>
            <div className={styles["div-215"]}>
              <SmoothScroll slots={[]} />
            </div>
          </div>
          <div className={styles["div-124"]} />
          <div className={styles["div-216"]} />
          <div className={styles["div-217"]}>
            <div className={styles["div-145"]}>
              <CTAFooter slots={["https://framerusercontent.com/images/xLLObKPmdqqcuWcYJSGc1cAvQuE.png?scale-down-to=2048&width=4320&height=4722","https://framerusercontent.com/images/cwI1cddQjDGs7ktEQo3mfuyYM.png?scale-down-to=2048&width=5248&height=1984","Ready","to","turn","your","content","into","real","growth?","Stop","guessing","what","works.","Let’s","turn","your","videos","into","consistent","views,","engagement,","and","results","that","actually","matter.","Start Growing Today","Start Growing Today","No","contracts.","Fast","delivery.","Results-focused.","https://framerusercontent.com/images/brpBRmmmugGykxrrMiISrtXFeI.png?scale-down-to=512&width=744&height=166","Quick Links","Services","Works","Pricing","Contact","Socials","Facebook","Instagram","Youtube","X","© 2026 ClipCut. All rights reserved","Sabbir Hossien","Framer","https://framerusercontent.com/images/5EvfpqIZOKKQBkBuwoevBmVUrlU.png?scale-down-to=2048&width=5760&height=1916"]} />
            </div>
          </div>
        </div>
        <NavbarFooterCTA2 slots={[]} />
      </div>
      <div className={styles["div-218"]}>
        <a className={styles["light"]} href="https://www.framer.com">
          <div className={styles["backdrop"]} />
          <div className={styles["content-16"]}>
            <div className={styles["div-219"]}>
              <div className={styles["content-16"]} />
            </div>
            <p className={styles["p-122"]}>{slots[0] ?? "Create a free website with Framer, the website builder loved by startups, designers and agencies."}</p>
            <div className={styles["div-219"]} />
          </div>
          <div className={styles["bottom"]} />
          <div className={styles["border"]} />
        </a>
      </div>
      <div className={styles["div-220"]}>
        <SvgGraphic className={styles["svg-32"]} html={"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" id=\"svg-1084292861_3485\" data-f2c-idx=\"2765\">\n<g clip-path=\"url(#svg-1084292861_3485_clip0_768_15244)\" data-f2c-idx=\"2766\">\n<path d=\"M12.0012 0C18.6288 0 24.0012 5.3724 24.0012 12V20.4C24.0012 21.3548 23.6219 22.2704 22.9468 22.9456C22.2717 23.6207 21.356 24 20.4012 24H12.6012V18.7356C12.6012 17.5344 12.6744 16.29 13.3044 15.2676C13.7555 14.5349 14.3588 13.9078 15.0736 13.4288C15.7883 12.9497 16.5977 12.6301 17.4468 12.4914L17.6766 12.4542C17.7713 12.4218 17.8536 12.3606 17.9119 12.2792C17.9701 12.1978 18.0014 12.1001 18.0014 12C18.0014 11.8999 17.9701 11.8022 17.9119 11.7208C17.8536 11.6394 17.7713 11.5782 17.6766 11.5458L17.4468 11.5086C16.2061 11.3059 15.0604 10.7186 14.1715 9.82974C13.2826 8.94078 12.6953 7.79508 12.4926 6.5544L12.4554 6.3246C12.4231 6.22986 12.3619 6.1476 12.2804 6.0894C12.199 6.03114 12.1013 5.99985 12.0012 5.99985C11.9011 5.99985 11.8035 6.03114 11.7221 6.0894C11.6406 6.1476 11.5794 6.22986 11.547 6.3246L11.5098 6.5544C11.3712 7.40358 11.0515 8.21298 10.5725 8.9277C10.0935 9.64242 9.46638 10.2458 8.7336 10.6968C7.7112 11.3268 6.4668 11.4 5.26563 11.4H0.015625C0.329425 5.0514 5.57523 0 12.0012 0Z\" fill=\"white\" data-f2c-idx=\"2767\"></path>\n<path d=\"M12.0012 0C18.6288 0 24.0012 5.3724 24.0012 12V20.4C24.0012 21.3548 23.6219 22.2704 22.9468 22.9456C22.2717 23.6207 21.356 24 20.4012 24H12.6012V18.7356C12.6012 17.5344 12.6744 16.29 13.3044 15.2676C13.7555 14.5349 14.3588 13.9078 15.0736 13.4288C15.7883 12.9497 16.5977 12.6301 17.4468 12.4914L17.6766 12.4542C17.7713 12.4218 17.8536 12.3606 17.9119 12.2792C17.9701 12.1978 18.0014 12.1001 18.0014 12C18.0014 11.8999 17.9701 11.8022 17.9119 11.7208C17.8536 11.6394 17.7713 11.5782 17.6766 11.5458L17.4468 11.5086C16.2061 11.3059 15.0604 10.7186 14.1715 9.82974C13.2826 8.94078 12.6953 7.79508 12.4926 6.5544L12.4554 6.3246C12.4231 6.22986 12.3619 6.1476 12.2804 6.0894C12.199 6.03114 12.1013 5.99985 12.0012 5.99985C11.9011 5.99985 11.8035 6.03114 11.7221 6.0894C11.6406 6.1476 11.5794 6.22986 11.547 6.3246L11.5098 6.5544C11.3712 7.40358 11.0515 8.21298 10.5725 8.9277C10.0935 9.64242 9.46638 10.2458 8.7336 10.6968C7.7112 11.3268 6.4668 11.4 5.26563 11.4H0.015625C0.329425 5.0514 5.57523 0 12.0012 0Z\" fill=\"white\" data-f2c-idx=\"2768\"></path>\n<path d=\"M0 12.6H5.2644C6.4656 12.6 7.71 12.6732 8.7324 13.3032C9.5316 13.7957 10.2043 14.4684 10.6968 15.2676C11.3268 16.29 11.4 17.5344 11.4 18.7356V24H3.6C2.64522 24 1.72955 23.6207 1.05442 22.9456C0.379285 22.2704 0 21.3548 0 20.4V12.6ZM24 1.2C24 1.51826 23.8736 1.82348 23.6485 2.04853C23.4235 2.27357 23.1182 2.4 22.8 2.4C22.4818 2.4 22.1765 2.27357 21.9515 2.04853C21.7264 1.82348 21.6 1.51826 21.6 1.2C21.6 0.881742 21.7264 0.576515 21.9515 0.351472C22.1765 0.126428 22.4818 0 22.8 0C23.1182 0 23.4235 0.126428 23.6485 0.351472C23.8736 0.576515 24 0.881742 24 1.2Z\" fill=\"white\" data-f2c-idx=\"2769\"></path>\n<path d=\"M0 12.6H5.2644C6.4656 12.6 7.71 12.6732 8.7324 13.3032C9.5316 13.7957 10.2043 14.4684 10.6968 15.2676C11.3268 16.29 11.4 17.5344 11.4 18.7356V24H3.6C2.64522 24 1.72955 23.6207 1.05442 22.9456C0.379285 22.2704 0 21.3548 0 20.4V12.6ZM24 1.2C24 1.51826 23.8736 1.82348 23.6485 2.04853C23.4235 2.27357 23.1182 2.4 22.8 2.4C22.4818 2.4 22.1765 2.27357 21.9515 2.04853C21.7264 1.82348 21.6 1.51826 21.6 1.2C21.6 0.881742 21.7264 0.576515 21.9515 0.351472C22.1765 0.126428 22.4818 0 22.8 0C23.1182 0 23.4235 0.126428 23.6485 0.351472C23.8736 0.576515 24 0.881742 24 1.2Z\" fill=\"white\" data-f2c-idx=\"2770\"></path>\n</g>\n<defs data-f2c-idx=\"2771\">\n<clipPath id=\"svg-1084292861_3485_clip0_768_15244\" data-f2c-idx=\"2772\">\n<rect width=\"24\" height=\"24\" fill=\"white\" data-f2c-idx=\"2773\"></rect>\n</clipPath>\n</defs>\n</svg>"} />
        <SvgGraphic className={styles["svg-32"]} html={"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" id=\"svg1883890042_373\" data-f2c-idx=\"2774\">\n<path d=\"M16.5 7.5L6 18\" stroke=\"#191919\" stroke-width=\"1.5\" stroke-linecap=\"round\" data-f2c-idx=\"2775\"></path>\n<path d=\"M8 6.18791C8 6.18791 16.0479 5.50949 17.2692 6.73079C18.4906 7.95209 17.812 16 17.812 16\" stroke=\"#191919\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"2776\"></path>\n</svg>"} />
        <SvgGraphic className={styles["svg-33"]} html={"<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" id=\"svg-354340360_1767\" data-f2c-idx=\"2777\">\n<path d=\"M9.89625 5.3125L11.3688 9.0475L15.1038 10.5212L11.3688 11.9938L9.89625 15.7288L8.4225 11.9938L4.6875 10.5212L8.4225 9.0475L9.89625 5.3125Z\" fill=\"#FAFD7F\" data-f2c-idx=\"2778\"></path>\n<path d=\"M9.89625 4.79125C10.1087 4.79125 10.3025 4.9225 10.38 5.12125L11.77 8.64625L15.295 10.0363C15.392 10.0748 15.4752 10.1416 15.5338 10.2279C15.5924 10.3143 15.6237 10.4163 15.6237 10.5206C15.6237 10.625 15.5924 10.7269 15.5338 10.8133C15.4752 10.8997 15.392 10.9664 15.295 11.005L11.77 12.395L10.38 15.92C10.3414 16.017 10.2747 16.1002 10.1883 16.1588C10.1019 16.2174 9.99999 16.2487 9.89563 16.2487C9.79126 16.2487 9.6893 16.2174 9.60294 16.1588C9.51658 16.1002 9.44981 16.017 9.41125 15.92L8.02125 12.395L4.49625 11.005C4.39927 10.9664 4.3161 10.8997 4.2575 10.8133C4.1989 10.7269 4.16757 10.625 4.16757 10.5206C4.16757 10.4163 4.1989 10.3143 4.2575 10.2279C4.3161 10.1416 4.39927 10.0748 4.49625 10.0363L8.02125 8.64625L9.41125 5.12125C9.45007 5.02422 9.51696 4.94098 9.60336 4.88219C9.68976 4.8234 9.79174 4.79174 9.89625 4.79125ZM9.89625 6.7325L8.9075 9.2375C8.8811 9.30387 8.84142 9.36416 8.79092 9.41467C8.74041 9.46517 8.68012 9.50485 8.61375 9.53125L6.1075 10.5188L8.61375 11.5087C8.68 11.535 8.74021 11.5745 8.79072 11.6248C8.84122 11.6751 8.88095 11.7351 8.9075 11.8013L9.895 14.3087L10.885 11.8013C10.9114 11.7352 10.9509 11.6753 11.0012 11.625C11.0515 11.5747 11.1115 11.5352 11.1775 11.5087L13.685 10.52L11.1775 9.53125C11.1114 9.5047 11.0513 9.46497 11.001 9.41447C10.9507 9.36397 10.9113 9.30375 10.885 9.2375L9.89625 6.7325ZM5.20875 3.75L5.87125 5.17L7.29125 5.8325L5.87125 6.49625L5.20875 7.91625L4.54625 6.49625L3.125 5.83375L4.545 5.17125L5.20875 3.75Z\" fill=\"#EE741E\" data-f2c-idx=\"2779\"></path>\n</svg>"} />
        <SvgGraphic className={styles["svg-32"]} html={"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" id=\"svg-1609222690_369\" data-f2c-idx=\"2780\">\n<path d=\"M16.5 7.5L6 18\" stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\" data-f2c-idx=\"2781\"></path>\n<path d=\"M8 6.18791C8 6.18791 16.0479 5.50949 17.2692 6.73079C18.4906 7.95209 17.812 16 17.812 16\" stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"2782\"></path>\n</svg>"} />
        <SvgGraphic className={styles["svg-34"]} html={"<svg width=\"809\" height=\"570\" viewBox=\"0 0 809 570\" fill=\"none\" id=\"svg-575539373_1972\" data-f2c-idx=\"2783\">\n<g filter=\"url(#svg-575539373_1972_filter0_f_1180_27570)\" style=\"mix-blend-mode:plus-lighter\" data-f2c-idx=\"2784\">\n<path d=\"M755.748 386.76C726.703 487.594 621.414 545.79 520.58 516.744C419.746 487.699 361.55 382.41 390.596 281.576C419.641 180.742 524.93 122.546 625.764 151.592C726.598 180.638 784.794 285.926 755.748 386.76ZM481.884 307.872C467.361 358.289 496.459 410.933 546.876 425.456C597.293 439.979 649.937 410.881 664.46 360.464C678.983 310.047 649.885 257.403 599.468 242.88C549.051 228.357 496.407 257.455 481.884 307.872Z\" fill=\"#EE741E\" fill-opacity=\"0.5\" data-f2c-idx=\"2785\"></path>\n</g>\n<g filter=\"url(#svg-575539373_1972_filter1_f_1180_27570)\" style=\"mix-blend-mode:plus-lighter\" data-f2c-idx=\"2786\">\n<path d=\"M417.748 287.76C388.703 388.594 283.414 446.79 182.58 417.744C81.746 388.699 23.5499 283.41 52.5956 182.576C81.6413 81.7422 186.93 23.5462 287.764 52.5919C388.598 81.6376 446.794 186.926 417.748 287.76ZM143.884 208.872C129.361 259.289 158.459 311.933 208.876 326.456C259.293 340.979 311.937 311.881 326.46 261.464C340.983 211.047 311.885 158.403 261.468 143.88C211.051 129.357 158.407 158.455 143.884 208.872Z\" fill=\"#EE741E\" fill-opacity=\"0.5\" data-f2c-idx=\"2787\"></path>\n</g>\n<defs data-f2c-idx=\"2788\">\n<filter id=\"svg-575539373_1972_filter0_f_1180_27570\" x=\"183.125\" y=\"-55.881\" width=\"780.094\" height=\"780.098\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\" data-f2c-idx=\"2789\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" data-f2c-idx=\"2790\"></feFlood>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\" data-f2c-idx=\"2791\"></feBlend>\n<feGaussianBlur stdDeviation=\"100\" result=\"effect1_foregroundBlur_1180_27570\" data-f2c-idx=\"2792\"></feGaussianBlur>\n</filter>\n<filter id=\"svg-575539373_1972_filter1_f_1180_27570\" x=\"-154.875\" y=\"-154.881\" width=\"780.094\" height=\"780.098\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\" data-f2c-idx=\"2793\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" data-f2c-idx=\"2794\"></feFlood>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\" data-f2c-idx=\"2795\"></feBlend>\n<feGaussianBlur stdDeviation=\"100\" result=\"effect1_foregroundBlur_1180_27570\" data-f2c-idx=\"2796\"></feGaussianBlur>\n</filter>\n</defs>\n</svg>"} />
        <SvgGraphic className={styles["svg-35"]} html={"<svg width=\"14\" height=\"4\" viewBox=\"-1 -1 14 4\" fill=\"none\" id=\"svg1509122608_205\" data-f2c-idx=\"2797\">\n<path d=\"M10.8672 0.871094H0.867188\" stroke=\"#D26A2C\" stroke-width=\"1.74026\" stroke-linecap=\"round\" data-f2c-idx=\"2798\"></path>\n</svg>"} />
        <SvgGraphic className={styles["svg-36"]} html={"<svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\" id=\"svg-1553521341_511\" data-f2c-idx=\"2799\">\n<path d=\"M10.5 10.5H5C3.35009 10.5 2.52512 10.5 2.01256 9.98745C1.5 9.47485 1.5 8.6499 1.5 7V1.5\" stroke=\"#E7E8E9\" stroke-width=\"0.75\" stroke-linecap=\"round\" data-f2c-idx=\"2800\"></path>\n<path d=\"M3.5 2.99805C5.26576 2.99804 8.95757 3.73018 8.85042 8.28124M7.74576 7.47604L8.68752 8.42449C8.78427 8.52194 8.94136 8.52264 9.03901 8.42614L10 7.47604\" stroke=\"#E7E8E9\" stroke-width=\"0.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"2801\"></path>\n</svg>"} />
        <SvgGraphic className={styles["svg-36"]} html={"<svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\" id=\"svg-555607996_1439\" data-f2c-idx=\"2802\">\n<path d=\"M10.75 6C10.75 8.62335 8.62335 10.75 6 10.75C5.18595 10.75 4.4197 10.5452 3.75 10.1844C2.81589 9.681 2.18731 10.1489 1.63296 10.2329C1.54887 10.2456 1.46512 10.2151 1.40498 10.155C1.3137 10.0637 1.29633 9.92255 1.34675 9.8037C1.56433 9.2909 1.7641 8.3191 1.4917 7.5C1.3349 7.0285 1.25 6.52415 1.25 6C1.25 3.37665 3.37665 1.25 6 1.25C8.62335 1.25 10.75 3.37665 10.75 6Z\" stroke=\"url(#svg-555607996_1439_paint0_linear_2015_732)\" stroke-width=\"0.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"2803\"></path>\n<path d=\"M6.06285 6H6.00035M4.0625 6H4M8.0625 6H8M6.12535 6C6.12535 6.06905 6.0694 6.125 6.00035 6.125C5.93135 6.125 5.87535 6.06905 5.87535 6C5.87535 5.93095 5.93135 5.875 6.00035 5.875C6.0694 5.875 6.12535 5.93095 6.12535 6ZM4.125 6C4.125 6.06905 4.06904 6.125 4 6.125C3.93096 6.125 3.875 6.06905 3.875 6C3.875 5.93095 3.93096 5.875 4 5.875C4.06904 5.875 4.125 5.93095 4.125 6ZM8.125 6C8.125 6.06905 8.06905 6.125 8 6.125C7.93095 6.125 7.875 6.06905 7.875 6C7.875 5.93095 7.93095 5.875 8 5.875C8.06905 5.875 8.125 5.93095 8.125 6Z\" stroke=\"#E7E8E9\" stroke-width=\"0.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"2804\"></path>\n<defs data-f2c-idx=\"2805\">\n<linearGradient id=\"svg-555607996_1439_paint0_linear_2015_732\" x1=\"2.14286\" y1=\"1.14286\" x2=\"9.85714\" y2=\"11.8571\" gradientUnits=\"userSpaceOnUse\" data-f2c-idx=\"2806\">\n<stop stop-color=\"#E7E8E9\" data-f2c-idx=\"2807\"></stop>\n<stop offset=\"1\" stop-color=\"#E66D09\" data-f2c-idx=\"2808\"></stop>\n</linearGradient>\n</defs>\n</svg>"} />
        <SvgGraphic className={styles["svg-37"]} html={"<svg viewBox=\"0 0 70.111 70.111\" overflow=\"visible\" id=\"svg-646521145_472\" data-f2c-idx=\"2809\"><path d=\"M 35.056 70.111 C 15.695 70.111 0 54.416 0 35.056 L 0 35.056 C 0 15.695 15.695 0 35.056 0 L 35.056 0 C 54.416 0 70.111 15.695 70.111 35.056 L 70.111 35.056 C 70.111 54.416 54.416 70.111 35.056 70.111 Z\" fill=\"transparent\" stroke-width=\"0.887486\" stroke=\"rgba(231,166,120,0.2)\" stroke-miterlimit=\"10\" stroke-dasharray=\"\" data-f2c-idx=\"2810\"></path></svg>"} />
        <SvgGraphic className={styles["svg-38"]} html={"<svg width=\"29\" height=\"29\" viewBox=\"0 0 29 29\" fill=\"none\" id=\"svg-1836650747_503\" data-f2c-idx=\"2811\">\n<rect width=\"28.8491\" height=\"28.8491\" rx=\"14.4246\" fill=\"white\" fill-opacity=\"0.12\" data-f2c-idx=\"2812\"></rect>\n<rect width=\"28.8491\" height=\"28.8491\" rx=\"14.4246\" fill=\"url(#svg-1836650747_503_paint0_linear_2015_816)\" fill-opacity=\"0.36\" data-f2c-idx=\"2813\"></rect>\n<defs data-f2c-idx=\"2814\">\n<linearGradient id=\"svg-1836650747_503_paint0_linear_2015_816\" x1=\"14.4246\" y1=\"0\" x2=\"14.4246\" y2=\"28.8491\" gradientUnits=\"userSpaceOnUse\" data-f2c-idx=\"2815\">\n<stop data-f2c-idx=\"2816\"></stop>\n<stop offset=\"1\" stop-color=\"#666666\" data-f2c-idx=\"2817\"></stop>\n</linearGradient>\n</defs>\n</svg>"} />
        <SvgGraphic className={styles["svg-38"]} html={"<svg width=\"29\" height=\"29\" viewBox=\"0 0 29 29\" fill=\"none\" id=\"svg-1776640559_503\" data-f2c-idx=\"2818\">\n<rect width=\"28.8491\" height=\"28.8491\" rx=\"14.4246\" fill=\"white\" fill-opacity=\"0.12\" data-f2c-idx=\"2819\"></rect>\n<rect width=\"28.8491\" height=\"28.8491\" rx=\"14.4246\" fill=\"url(#svg-1776640559_503_paint0_linear_2015_821)\" fill-opacity=\"0.36\" data-f2c-idx=\"2820\"></rect>\n<defs data-f2c-idx=\"2821\">\n<linearGradient id=\"svg-1776640559_503_paint0_linear_2015_821\" x1=\"14.4246\" y1=\"0\" x2=\"14.4246\" y2=\"28.8491\" gradientUnits=\"userSpaceOnUse\" data-f2c-idx=\"2822\">\n<stop data-f2c-idx=\"2823\"></stop>\n<stop offset=\"1\" stop-color=\"#666666\" data-f2c-idx=\"2824\"></stop>\n</linearGradient>\n</defs>\n</svg>"} />
        <SvgGraphic className={styles["svg-38"]} html={"<svg width=\"29\" height=\"29\" viewBox=\"0 0 29 29\" fill=\"none\" id=\"svg-879134701_503\" data-f2c-idx=\"2825\">\n<rect width=\"28.8491\" height=\"28.8491\" rx=\"14.4246\" fill=\"white\" fill-opacity=\"0.12\" data-f2c-idx=\"2826\"></rect>\n<rect width=\"28.8491\" height=\"28.8491\" rx=\"14.4246\" fill=\"url(#svg-879134701_503_paint0_linear_2015_831)\" fill-opacity=\"0.36\" data-f2c-idx=\"2827\"></rect>\n<defs data-f2c-idx=\"2828\">\n<linearGradient id=\"svg-879134701_503_paint0_linear_2015_831\" x1=\"14.4246\" y1=\"0\" x2=\"14.4246\" y2=\"28.8491\" gradientUnits=\"userSpaceOnUse\" data-f2c-idx=\"2829\">\n<stop data-f2c-idx=\"2830\"></stop>\n<stop offset=\"1\" stop-color=\"#666666\" data-f2c-idx=\"2831\"></stop>\n</linearGradient>\n</defs>\n</svg>"} />
        <SvgGraphic className={styles["svg-38"]} html={"<svg width=\"29\" height=\"29\" viewBox=\"0 0 29 29\" fill=\"none\" id=\"svg-41639031_503\" data-f2c-idx=\"2832\">\n<rect width=\"28.8491\" height=\"28.8491\" rx=\"14.4246\" fill=\"white\" fill-opacity=\"0.12\" data-f2c-idx=\"2833\"></rect>\n<rect width=\"28.8491\" height=\"28.8491\" rx=\"14.4246\" fill=\"url(#svg-41639031_503_paint0_linear_2015_836)\" fill-opacity=\"0.36\" data-f2c-idx=\"2834\"></rect>\n<defs data-f2c-idx=\"2835\">\n<linearGradient id=\"svg-41639031_503_paint0_linear_2015_836\" x1=\"14.4246\" y1=\"0\" x2=\"14.4246\" y2=\"28.8491\" gradientUnits=\"userSpaceOnUse\" data-f2c-idx=\"2836\">\n<stop data-f2c-idx=\"2837\"></stop>\n<stop offset=\"1\" stop-color=\"#666666\" data-f2c-idx=\"2838\"></stop>\n</linearGradient>\n</defs>\n</svg>"} />
        <SvgGraphic className={styles["svg-39"]} html={"<svg width=\"1314\" height=\"3\" viewBox=\"-1 -1 1314 3\" fill=\"none\" id=\"svg1357048387_522\" data-f2c-idx=\"2839\">\n<line y1=\"0.360089\" x2=\"1312\" y2=\"0.360089\" stroke=\"url(#svg1357048387_522_paint0_linear_768_15765)\" stroke-width=\"0.721228\" data-f2c-idx=\"2840\"></line>\n<defs data-f2c-idx=\"2841\">\n<linearGradient id=\"svg1357048387_522_paint0_linear_768_15765\" x1=\"0\" y1=\"1.2207\" x2=\"1312\" y2=\"1.2207\" gradientUnits=\"userSpaceOnUse\" data-f2c-idx=\"2842\">\n<stop stop-color=\"#999999\" stop-opacity=\"0.2\" data-f2c-idx=\"2843\"></stop>\n<stop offset=\"0.0626737\" stop-color=\"#FFA15E\" data-f2c-idx=\"2844\"></stop>\n<stop offset=\"1\" stop-color=\"#999999\" stop-opacity=\"0.1\" data-f2c-idx=\"2845\"></stop>\n</linearGradient>\n</defs>\n</svg>"} />
        <SvgGraphic className={styles["svg-40"]} html={"<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" id=\"svg-1276731523_702\" data-f2c-idx=\"2846\">\n<path d=\"M14.3575 7.36398C14.5601 7.64818 14.6615 7.79032 14.6615 8.00065C14.6615 8.21098 14.5601 8.35312 14.3575 8.63732C13.4467 9.91438 11.1209 12.6673 7.99479 12.6673C4.86864 12.6673 2.54286 9.91438 1.63215 8.63732C1.42946 8.35312 1.32812 8.21098 1.32812 8.00065C1.32812 7.79032 1.42946 7.64818 1.63215 7.36398C2.54286 6.08694 4.86864 3.33398 7.99479 3.33398C11.1209 3.33398 13.4467 6.08694 14.3575 7.36398Z\" stroke=\"white\" stroke-opacity=\"0.8\" data-f2c-idx=\"2847\"></path>\n<path d=\"M10 8C10 6.8954 9.1046 6 8 6C6.8954 6 6 6.8954 6 8C6 9.1046 6.8954 10 8 10C9.1046 10 10 9.1046 10 8Z\" stroke=\"white\" stroke-opacity=\"0.8\" data-f2c-idx=\"2848\"></path>\n</svg>"} />
        <SvgGraphic className={styles["svg-37"]} html={"<svg viewBox=\"0 0 32 32\" overflow=\"visible\" id=\"svg510155231_693\" data-f2c-idx=\"2849\"><g data-f2c-idx=\"2850\"><defs data-f2c-idx=\"2851\"><path d=\"M 16 0 C 24.837 0 32 7.163 32 16 C 32 24.837 24.837 32 16 32 C 7.163 32 0 24.837 0 16 C 0 7.163 7.163 0 16 0 Z\" id=\"svg510155231_693_a1000z\" data-f2c-idx=\"2852\"></path><clipPath id=\"svg510155231_693_a1001z\" data-f2c-idx=\"2853\"><use href=\"#svg510155231_693_a1000z\" data-f2c-idx=\"2854\"></use></clipPath></defs><use href=\"#svg510155231_693_a1000z\" fill=\"var(--token-8f73c29a-f931-4e35-bf1d-abf6e1668228, rgb(207, 103, 42)) /* {&quot;name&quot;:&quot;Primary orange solid&quot;} */\" clip-path=\"url(#svg510155231_693_a1001z)\" stroke-width=\"2\" stroke=\"var(--token-9d22cc14-9428-4f32-a631-82e7e5b3c5ff, rgba(255, 255, 255, 0.8)) /* {&quot;name&quot;:&quot;White 80%&quot;} */\" data-f2c-idx=\"2855\"></use></g></svg>"} />
        <SvgGraphic className={styles["svg-37"]} html={"<svg viewBox=\"0 0 18.021 6.737\" overflow=\"visible\" id=\"svg1397918896_856\" data-f2c-idx=\"2856\"><g data-f2c-idx=\"2857\"><path d=\"M 3.705 0 L 0 3.368 L 3.705 6.737\" fill=\"transparent\" stroke-width=\"1.68\" stroke=\"var(--token-857887c0-9486-4a16-b7a3-5457d6a4efbc, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;white 100%&quot;} */\" data-f2c-idx=\"2858\"></path><path d=\"M 4.211 3.368 L 4.211 3.368 L 14.091 3.368\" fill=\"transparent\" stroke-width=\"1.68\" stroke=\"var(--token-857887c0-9486-4a16-b7a3-5457d6a4efbc, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;white 100%&quot;} */\" data-f2c-idx=\"2859\"></path><path d=\"M 3.705 0 L 0 3.368 L 3.705 6.737\" transform=\"translate(14.316 0) rotate(180 1.75 3.25)\" fill=\"transparent\" stroke-width=\"1.68\" stroke=\"var(--token-857887c0-9486-4a16-b7a3-5457d6a4efbc, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;white 100%&quot;} */\" data-f2c-idx=\"2860\"></path></g></svg>"} />
        <SvgGraphic className={styles["svg-37"]} html={"<svg viewBox=\"0 0 105 3\" overflow=\"visible\" id=\"svg419596054_422\" data-f2c-idx=\"2861\"><path d=\"M 0 1.5 C 0 0.672 0.672 0 1.5 0 L 103.5 0 C 104.328 0 105 0.672 105 1.5 L 105 1.5 C 105 2.328 104.328 3 103.5 3 L 1.5 3 C 0.672 3 0 2.328 0 1.5 Z\" fill=\"var(--token-c090c24e-f83c-4b12-b361-30f284142f04, rgba(255, 255, 255, 0.05)) /* {&quot;name&quot;:&quot;White 5 %&quot;} */\" data-f2c-idx=\"2862\"></path></svg>"} />
        <SvgGraphic className={styles["svg-37"]} html={"<svg viewBox=\"0 0 90 3\" overflow=\"visible\" id=\"svg843099033_413\" data-f2c-idx=\"2863\"><path d=\"M 0 1.5 C 0 0.672 0.672 0 1.5 0 L 88.5 0 C 89.328 0 90 0.672 90 1.5 L 90 1.5 C 90 2.328 89.328 3 88.5 3 L 1.5 3 C 0.672 3 0 2.328 0 1.5 Z\" fill=\"var(--token-c090c24e-f83c-4b12-b361-30f284142f04, rgba(255, 255, 255, 0.05)) /* {&quot;name&quot;:&quot;White 5 %&quot;} */\" data-f2c-idx=\"2864\"></path></svg>"} />
        <SvgGraphic className={styles["svg-37"]} html={"<svg viewBox=\"0 0 95 3\" overflow=\"visible\" id=\"svg850952756_413\" data-f2c-idx=\"2865\"><path d=\"M 0 1.5 C 0 0.672 0.672 0 1.5 0 L 93.5 0 C 94.328 0 95 0.672 95 1.5 L 95 1.5 C 95 2.328 94.328 3 93.5 3 L 1.5 3 C 0.672 3 0 2.328 0 1.5 Z\" fill=\"var(--token-c090c24e-f83c-4b12-b361-30f284142f04, rgba(255, 255, 255, 0.05)) /* {&quot;name&quot;:&quot;White 5 %&quot;} */\" data-f2c-idx=\"2866\"></path></svg>"} />
        <SvgGraphic className={styles["svg-37"]} html={"<svg viewBox=\"0 0 74 3\" overflow=\"visible\" id=\"svg-1457747373_413\" data-f2c-idx=\"2867\"><path d=\"M 0 1.5 C 0 0.672 0.672 0 1.5 0 L 72.5 0 C 73.328 0 74 0.672 74 1.5 L 74 1.5 C 74 2.328 73.328 3 72.5 3 L 1.5 3 C 0.672 3 0 2.328 0 1.5 Z\" fill=\"var(--token-c090c24e-f83c-4b12-b361-30f284142f04, rgba(255, 255, 255, 0.05)) /* {&quot;name&quot;:&quot;White 5 %&quot;} */\" data-f2c-idx=\"2868\"></path></svg>"} />
        <SvgGraphic className={styles["svg-37"]} html={"<svg viewBox=\"0 0 84 3\" overflow=\"visible\" id=\"svg1178109524_413\" data-f2c-idx=\"2869\"><path d=\"M 0 1.5 C 0 0.672 0.672 0 1.5 0 L 82.5 0 C 83.328 0 84 0.672 84 1.5 L 84 1.5 C 84 2.328 83.328 3 82.5 3 L 1.5 3 C 0.672 3 0 2.328 0 1.5 Z\" fill=\"var(--token-c090c24e-f83c-4b12-b361-30f284142f04, rgba(255, 255, 255, 0.05)) /* {&quot;name&quot;:&quot;White 5 %&quot;} */\" data-f2c-idx=\"2870\"></path></svg>"} />
        <SvgGraphic className={styles["svg-37"]} html={"<svg viewBox=\"0 0 91 3\" overflow=\"visible\" id=\"svg-1337142952_413\" data-f2c-idx=\"2871\"><path d=\"M 0 1.5 C 0 0.672 0.672 0 1.5 0 L 89.5 0 C 90.328 0 91 0.672 91 1.5 L 91 1.5 C 91 2.328 90.328 3 89.5 3 L 1.5 3 C 0.672 3 0 2.328 0 1.5 Z\" fill=\"var(--token-c090c24e-f83c-4b12-b361-30f284142f04, rgba(255, 255, 255, 0.05)) /* {&quot;name&quot;:&quot;White 5 %&quot;} */\" data-f2c-idx=\"2872\"></path></svg>"} />
        <SvgGraphic className={styles["svg-37"]} html={"<svg viewBox=\"0 0 60 3\" overflow=\"visible\" id=\"svg1525462934_413\" data-f2c-idx=\"2873\"><path d=\"M 0 1.5 C 0 0.672 0.672 0 1.5 0 L 58.5 0 C 59.328 0 60 0.672 60 1.5 L 60 1.5 C 60 2.328 59.328 3 58.5 3 L 1.5 3 C 0.672 3 0 2.328 0 1.5 Z\" fill=\"var(--token-c090c24e-f83c-4b12-b361-30f284142f04, rgba(255, 255, 255, 0.05)) /* {&quot;name&quot;:&quot;White 5 %&quot;} */\" data-f2c-idx=\"2874\"></path></svg>"} />
        <SvgGraphic className={styles["svg-37"]} html={"<svg viewBox=\"0 0 97 8\" overflow=\"visible\" id=\"svg1814204257_398\" data-f2c-idx=\"2875\"><path d=\"M 0 2 C 0 0.895 0.895 0 2 0 L 95 0 C 96.105 0 97 0.895 97 2 L 97 6 C 97 7.105 96.105 8 95 8 L 2 8 C 0.895 8 0 7.105 0 6 Z\" fill=\"var(--token-afb74b33-33b5-405c-993c-bc987d8e5faf, rgba(255, 255, 255, 0.15)) /* {&quot;name&quot;:&quot;White 15 %&quot;} */\" data-f2c-idx=\"2876\"></path></svg>"} />
        <SvgGraphic className={styles["svg-37"]} html={"<svg viewBox=\"0 0 81 8\" overflow=\"visible\" id=\"svg1488914417_396\" data-f2c-idx=\"2877\"><path d=\"M 0 2 C 0 0.895 0.895 0 2 0 L 79 0 C 80.105 0 81 0.895 81 2 L 81 6 C 81 7.105 80.105 8 79 8 L 2 8 C 0.895 8 0 7.105 0 6 Z\" fill=\"var(--token-9d22cc14-9428-4f32-a631-82e7e5b3c5ff, rgba(255, 255, 255, 0.8)) /* {&quot;name&quot;:&quot;White 80%&quot;} */\" data-f2c-idx=\"2878\"></path></svg>"} />
        <SvgGraphic className={styles["svg-37"]} html={"<svg viewBox=\"0 0 32 32\" overflow=\"visible\" id=\"svg439020761_693\" data-f2c-idx=\"2879\"><g data-f2c-idx=\"2880\"><defs data-f2c-idx=\"2881\"><path d=\"M 16 0 C 24.837 0 32 7.163 32 16 C 32 24.837 24.837 32 16 32 C 7.163 32 0 24.837 0 16 C 0 7.163 7.163 0 16 0 Z\" id=\"svg439020761_693_a1002z\" data-f2c-idx=\"2882\"></path><clipPath id=\"svg439020761_693_a1003z\" data-f2c-idx=\"2883\"><use href=\"#svg439020761_693_a1002z\" data-f2c-idx=\"2884\"></use></clipPath></defs><use href=\"#svg439020761_693_a1002z\" fill=\"var(--token-8f73c29a-f931-4e35-bf1d-abf6e1668228, rgb(207, 103, 42)) /* {&quot;name&quot;:&quot;Primary orange solid&quot;} */\" clip-path=\"url(#svg439020761_693_a1003z)\" stroke-width=\"2\" stroke=\"var(--token-9d22cc14-9428-4f32-a631-82e7e5b3c5ff, rgba(255, 255, 255, 0.8)) /* {&quot;name&quot;:&quot;White 80%&quot;} */\" data-f2c-idx=\"2885\"></use></g></svg>"} />
        <SvgGraphic className={styles["svg-41"]} html={"<svg width=\"375\" height=\"3\" viewBox=\"-1 -1 375 3\" fill=\"none\" id=\"svg1093834543_518\" data-f2c-idx=\"2886\">\n<line y1=\"0.360089\" x2=\"373\" y2=\"0.360089\" stroke=\"url(#svg1093834543_518_paint0_linear_938_18625)\" stroke-width=\"0.721228\" data-f2c-idx=\"2887\"></line>\n<defs data-f2c-idx=\"2888\">\n<linearGradient id=\"svg1093834543_518_paint0_linear_938_18625\" x1=\"0\" y1=\"1.2207\" x2=\"373\" y2=\"1.2207\" gradientUnits=\"userSpaceOnUse\" data-f2c-idx=\"2889\">\n<stop stop-color=\"#999999\" stop-opacity=\"0.2\" data-f2c-idx=\"2890\"></stop>\n<stop offset=\"0.0626737\" stop-color=\"#FFA15E\" data-f2c-idx=\"2891\"></stop>\n<stop offset=\"1\" stop-color=\"#999999\" stop-opacity=\"0.1\" data-f2c-idx=\"2892\"></stop>\n</linearGradient>\n</defs>\n</svg>"} />
        <SvgGraphic className={styles["svg-42"]} html={"<svg width=\"96\" height=\"16\" viewBox=\"0 0 96 16\" fill=\"none\" id=\"svg-1812803144_5486\" data-f2c-idx=\"2893\">\n<g clip-path=\"url(#svg-1812803144_5486_clip0_938_18651)\" data-f2c-idx=\"2894\">\n<path d=\"M15.9583 5.8254C15.9071 5.66684 15.8104 5.52686 15.6802 5.42288C15.5501 5.31891 15.3922 5.25555 15.2262 5.24069L10.6082 4.82134L8.78209 0.547169C8.6474 0.233943 8.34077 0.03125 8.00007 0.03125C7.65937 0.03125 7.35271 0.233974 7.21808 0.547951L5.39197 4.82137L0.7732 5.24069C0.607451 5.25588 0.449802 5.31937 0.3198 5.42331C0.189799 5.52725 0.0931609 5.66705 0.0418688 5.8254C-0.0634776 6.14941 0.0338061 6.50476 0.290531 6.72876L3.78125 9.79009L2.75191 14.3243C2.67659 14.6577 2.80597 15.0023 3.0826 15.2022C3.23126 15.3097 3.40524 15.3644 3.58065 15.3644C3.7319 15.3644 3.8819 15.3236 4.01659 15.243L8.00007 12.8622L11.9821 15.243C12.2735 15.4183 12.6408 15.4023 12.9168 15.2022C13.0519 15.1044 13.1553 14.9691 13.2141 14.813C13.2729 14.6569 13.2845 14.4869 13.2475 14.3243L12.2182 9.79009L15.7089 6.72939C15.8345 6.61972 15.925 6.47557 15.9694 6.31485C16.0137 6.15414 16.0099 5.98394 15.9583 5.8254Z\" fill=\"#FFC107\" data-f2c-idx=\"2895\"></path>\n</g>\n<g clip-path=\"url(#svg-1812803144_5486_clip1_938_18651)\" data-f2c-idx=\"2896\">\n<path d=\"M35.9583 5.8254C35.9071 5.66684 35.8104 5.52686 35.6802 5.42288C35.5501 5.31891 35.3922 5.25555 35.2262 5.24069L30.6082 4.82134L28.7821 0.547169C28.6474 0.233943 28.3408 0.03125 28.0001 0.03125C27.6594 0.03125 27.3527 0.233974 27.2181 0.547951L25.392 4.82137L20.7732 5.24069C20.6075 5.25588 20.4498 5.31937 20.3198 5.42331C20.1898 5.52725 20.0932 5.66705 20.0419 5.8254C19.9365 6.14941 20.0338 6.50476 20.2905 6.72876L23.7812 9.79009L22.7519 14.3243C22.6766 14.6577 22.806 15.0023 23.0826 15.2022C23.2313 15.3097 23.4052 15.3644 23.5806 15.3644C23.7319 15.3644 23.8819 15.3236 24.0166 15.243L28.0001 12.8622L31.9821 15.243C32.2735 15.4183 32.6408 15.4023 32.9168 15.2022C33.0519 15.1044 33.1553 14.9691 33.2141 14.813C33.2729 14.6569 33.2845 14.4869 33.2475 14.3243L32.2182 9.79009L35.7089 6.72939C35.8345 6.61972 35.925 6.47557 35.9694 6.31485C36.0137 6.15414 36.0099 5.98394 35.9583 5.8254Z\" fill=\"#FFC107\" data-f2c-idx=\"2897\"></path>\n</g>\n<g clip-path=\"url(#svg-1812803144_5486_clip2_938_18651)\" data-f2c-idx=\"2898\">\n<path d=\"M55.9583 5.8254C55.9071 5.66684 55.8104 5.52686 55.6802 5.42288C55.5501 5.31891 55.3922 5.25555 55.2262 5.24069L50.6082 4.82134L48.7821 0.547169C48.6474 0.233943 48.3408 0.03125 48.0001 0.03125C47.6594 0.03125 47.3527 0.233974 47.2181 0.547951L45.392 4.82137L40.7732 5.24069C40.6075 5.25588 40.4498 5.31937 40.3198 5.42331C40.1898 5.52725 40.0932 5.66705 40.0419 5.8254C39.9365 6.14941 40.0338 6.50476 40.2905 6.72876L43.7812 9.79009L42.7519 14.3243C42.6766 14.6577 42.806 15.0023 43.0826 15.2022C43.2313 15.3097 43.4052 15.3644 43.5806 15.3644C43.7319 15.3644 43.8819 15.3236 44.0166 15.243L48.0001 12.8622L51.9821 15.243C52.2735 15.4183 52.6408 15.4023 52.9168 15.2022C53.0519 15.1044 53.1553 14.9691 53.2141 14.813C53.2729 14.6569 53.2845 14.4869 53.2475 14.3243L52.2182 9.79009L55.7089 6.72939C55.8345 6.61972 55.925 6.47557 55.9694 6.31485C56.0137 6.15414 56.0099 5.98394 55.9583 5.8254Z\" fill=\"#FFC107\" data-f2c-idx=\"2899\"></path>\n</g>\n<g clip-path=\"url(#svg-1812803144_5486_clip3_938_18651)\" data-f2c-idx=\"2900\">\n<path d=\"M75.9583 5.8254C75.9071 5.66684 75.8104 5.52686 75.6802 5.42288C75.5501 5.31891 75.3922 5.25555 75.2262 5.24069L70.6082 4.82134L68.7821 0.547169C68.6474 0.233943 68.3408 0.03125 68.0001 0.03125C67.6594 0.03125 67.3527 0.233974 67.2181 0.547951L65.392 4.82137L60.7732 5.24069C60.6075 5.25588 60.4498 5.31937 60.3198 5.42331C60.1898 5.52725 60.0932 5.66705 60.0419 5.8254C59.9365 6.14941 60.0338 6.50476 60.2905 6.72876L63.7812 9.79009L62.7519 14.3243C62.6766 14.6577 62.806 15.0023 63.0826 15.2022C63.2313 15.3097 63.4052 15.3644 63.5806 15.3644C63.7319 15.3644 63.8819 15.3236 64.0166 15.243L68.0001 12.8622L71.9821 15.243C72.2735 15.4183 72.6408 15.4023 72.9168 15.2022C73.0519 15.1044 73.1553 14.9691 73.2141 14.813C73.2729 14.6569 73.2845 14.4869 73.2475 14.3243L72.2182 9.79009L75.7089 6.72939C75.8345 6.61972 75.925 6.47557 75.9694 6.31485C76.0137 6.15414 76.0099 5.98394 75.9583 5.8254Z\" fill=\"#FFC107\" data-f2c-idx=\"2901\"></path>\n</g>\n<g clip-path=\"url(#svg-1812803144_5486_clip4_938_18651)\" data-f2c-idx=\"2902\">\n<path d=\"M95.9583 5.8254C95.9071 5.66684 95.8104 5.52686 95.6802 5.42288C95.5501 5.31891 95.3922 5.25555 95.2262 5.24069L90.6082 4.82134L88.7821 0.547169C88.6474 0.233943 88.3408 0.03125 88.0001 0.03125C87.6594 0.03125 87.3527 0.233974 87.2181 0.547951L85.392 4.82137L80.7732 5.24069C80.6075 5.25588 80.4498 5.31937 80.3198 5.42331C80.1898 5.52725 80.0932 5.66705 80.0419 5.8254C79.9365 6.14941 80.0338 6.50476 80.2905 6.72876L83.7812 9.79009L82.7519 14.3243C82.6766 14.6577 82.806 15.0023 83.0826 15.2022C83.2313 15.3097 83.4052 15.3644 83.5806 15.3644C83.7319 15.3644 83.8819 15.3236 84.0166 15.243L88.0001 12.8622L91.9821 15.243C92.2735 15.4183 92.6408 15.4023 92.9168 15.2022C93.0519 15.1044 93.1553 14.9691 93.2141 14.813C93.2729 14.6569 93.2845 14.4869 93.2475 14.3243L92.2182 9.79009L95.7089 6.72939C95.8345 6.61972 95.925 6.47557 95.9694 6.31485C96.0137 6.15414 96.0099 5.98394 95.9583 5.8254Z\" fill=\"#FFC107\" data-f2c-idx=\"2903\"></path>\n</g>\n<defs data-f2c-idx=\"2904\">\n<clipPath id=\"svg-1812803144_5486_clip0_938_18651\" data-f2c-idx=\"2905\">\n<rect width=\"16\" height=\"16\" fill=\"white\" data-f2c-idx=\"2906\"></rect>\n</clipPath>\n<clipPath id=\"svg-1812803144_5486_clip1_938_18651\" data-f2c-idx=\"2907\">\n<rect width=\"16\" height=\"16\" fill=\"white\" transform=\"translate(20)\" data-f2c-idx=\"2908\"></rect>\n</clipPath>\n<clipPath id=\"svg-1812803144_5486_clip2_938_18651\" data-f2c-idx=\"2909\">\n<rect width=\"16\" height=\"16\" fill=\"white\" transform=\"translate(40)\" data-f2c-idx=\"2910\"></rect>\n</clipPath>\n<clipPath id=\"svg-1812803144_5486_clip3_938_18651\" data-f2c-idx=\"2911\">\n<rect width=\"16\" height=\"16\" fill=\"white\" transform=\"translate(60)\" data-f2c-idx=\"2912\"></rect>\n</clipPath>\n<clipPath id=\"svg-1812803144_5486_clip4_938_18651\" data-f2c-idx=\"2913\">\n<rect width=\"16\" height=\"16\" fill=\"white\" transform=\"translate(80)\" data-f2c-idx=\"2914\"></rect>\n</clipPath>\n</defs>\n</svg>"} />
        <SvgGraphic className={styles["svg-43"]} html={"<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" id=\"svg1028257913_369\" data-f2c-idx=\"2915\">\n<path d=\"M6.66406 0V13.3333\" stroke=\"white\" stroke-opacity=\"0.9\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"2916\"></path>\n<path d=\"M0 6.66602H13.3333\" stroke=\"white\" stroke-opacity=\"0.9\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"2917\"></path>\n</svg>"} />
        <SvgGraphic className={styles["svg-44"]} html={"<svg width=\"1090\" height=\"762\" viewBox=\"0 0 1090 762\" fill=\"none\" id=\"svg934186603_3345\" data-f2c-idx=\"2918\">\n<g filter=\"url(#svg934186603_3345_filter0_f_1183_27781)\" data-f2c-idx=\"2919\">\n<circle cx=\"558.818\" cy=\"380.959\" r=\"126.185\" fill=\"url(#svg934186603_3345_paint0_linear_1183_27781)\" data-f2c-idx=\"2920\"></circle>\n</g>\n<line x1=\"61.2891\" y1=\"379.157\" x2=\"432.634\" y2=\"379.157\" stroke=\"white\" stroke-opacity=\"0.1\" stroke-width=\"1.20176\" data-f2c-idx=\"2921\"></line>\n<line x1=\"685.008\" y1=\"379.157\" x2=\"1028.71\" y2=\"379.157\" stroke=\"white\" stroke-opacity=\"0.1\" stroke-width=\"1.20176\" data-f2c-idx=\"2922\"></line>\n<circle cx=\"558.819\" cy=\"380.959\" r=\"380.358\" stroke=\"url(#svg934186603_3345_paint1_linear_1183_27781)\" stroke-opacity=\"0.2\" stroke-width=\"1.20176\" data-f2c-idx=\"2923\"></circle>\n<circle cx=\"558.818\" cy=\"380.959\" r=\"228.936\" stroke=\"url(#svg934186603_3345_paint2_linear_1183_27781)\" stroke-opacity=\"0.3\" stroke-width=\"1.20176\" data-f2c-idx=\"2924\"></circle>\n<g filter=\"url(#svg934186603_3345_filter1_n_1183_27781)\" data-f2c-idx=\"2925\">\n<circle cx=\"558.818\" cy=\"380.959\" r=\"126.185\" fill=\"white\" fill-opacity=\"0.05\" data-f2c-idx=\"2926\"></circle>\n<circle cx=\"558.818\" cy=\"380.959\" r=\"125.584\" stroke=\"white\" stroke-opacity=\"0.04\" stroke-width=\"1.20176\" data-f2c-idx=\"2927\"></circle>\n</g>\n<defs data-f2c-idx=\"2928\">\n<filter id=\"svg934186603_3345_filter0_f_1183_27781\" x=\"312.456\" y=\"134.597\" width=\"492.72\" height=\"492.723\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\" data-f2c-idx=\"2929\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" data-f2c-idx=\"2930\"></feFlood>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\" data-f2c-idx=\"2931\"></feBlend>\n<feGaussianBlur stdDeviation=\"60.0882\" result=\"effect1_foregroundBlur_1183_27781\" data-f2c-idx=\"2932\"></feGaussianBlur>\n</filter>\n<filter id=\"svg934186603_3345_filter1_n_1183_27781\" x=\"432.633\" y=\"254.773\" width=\"252.367\" height=\"252.37\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\" data-f2c-idx=\"2933\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" data-f2c-idx=\"2934\"></feFlood>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\" data-f2c-idx=\"2935\"></feBlend>\n<feTurbulence type=\"fractalNoise\" baseFrequency=\"1 1\" stitchTiles=\"stitch\" numOctaves=\"3\" result=\"noise\" seed=\"4781\" data-f2c-idx=\"2936\"></feTurbulence>\n<feColorMatrix in=\"noise\" type=\"luminanceToAlpha\" result=\"alphaNoise\" data-f2c-idx=\"2937\"></feColorMatrix>\n<feComponentTransfer in=\"alphaNoise\" result=\"coloredNoise1\" data-f2c-idx=\"2938\">\n<feFuncA type=\"discrete\" tableValues=\"1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 \" data-f2c-idx=\"2939\"></feFuncA>\n</feComponentTransfer>\n<feComposite operator=\"in\" in2=\"shape\" in=\"coloredNoise1\" result=\"noise1Clipped\" data-f2c-idx=\"2940\"></feComposite>\n<feFlood flood-color=\"#000000\" result=\"color1Flood\" data-f2c-idx=\"2941\"></feFlood>\n<feComposite operator=\"in\" in2=\"noise1Clipped\" in=\"color1Flood\" result=\"color1\" data-f2c-idx=\"2942\"></feComposite>\n<feMerge result=\"effect1_noise_1183_27781\" data-f2c-idx=\"2943\">\n<feMergeNode in=\"shape\" data-f2c-idx=\"2944\"></feMergeNode>\n<feMergeNode in=\"color1\" data-f2c-idx=\"2945\"></feMergeNode>\n</feMerge>\n</filter>\n<linearGradient id=\"svg934186603_3345_paint0_linear_1183_27781\" x1=\"558.818\" y1=\"254.773\" x2=\"558.818\" y2=\"507.144\" gradientUnits=\"userSpaceOnUse\" data-f2c-idx=\"2946\">\n<stop stop-color=\"#D99463\" data-f2c-idx=\"2947\"></stop>\n<stop offset=\"1\" stop-color=\"#D34528\" data-f2c-idx=\"2948\"></stop>\n</linearGradient>\n<linearGradient id=\"svg934186603_3345_paint1_linear_1183_27781\" x1=\"558.769\" y1=\"84.7244\" x2=\"558.769\" y2=\"689.813\" gradientUnits=\"userSpaceOnUse\" data-f2c-idx=\"2949\">\n<stop stop-color=\"#0A0C18\" stop-opacity=\"0\" data-f2c-idx=\"2950\"></stop>\n<stop offset=\"0.519231\" stop-color=\"white\" data-f2c-idx=\"2951\"></stop>\n<stop offset=\"1\" stop-color=\"#0A0C18\" stop-opacity=\"0\" data-f2c-idx=\"2952\"></stop>\n</linearGradient>\n<linearGradient id=\"svg934186603_3345_paint2_linear_1183_27781\" x1=\"558.789\" y1=\"202.47\" x2=\"558.789\" y2=\"567.05\" gradientUnits=\"userSpaceOnUse\" data-f2c-idx=\"2953\">\n<stop stop-color=\"#0A0C18\" stop-opacity=\"0\" data-f2c-idx=\"2954\"></stop>\n<stop offset=\"0.519231\" stop-color=\"white\" data-f2c-idx=\"2955\"></stop>\n<stop offset=\"1\" stop-color=\"#0A0C18\" stop-opacity=\"0\" data-f2c-idx=\"2956\"></stop>\n</linearGradient>\n</defs>\n</svg>"} />
        <SvgGraphic className={styles["svg-39"]} html={"<svg width=\"1314\" height=\"3\" viewBox=\"-1 -1 1314 3\" fill=\"none\" id=\"svg1609844329_503\" data-f2c-idx=\"2957\">\n<line y1=\"0.5\" x2=\"1312\" y2=\"0.5\" stroke=\"url(#svg1609844329_503_paint0_linear_943_18799)\" stroke-opacity=\"0.3\" data-f2c-idx=\"2958\"></line>\n<defs data-f2c-idx=\"2959\">\n<linearGradient id=\"svg1609844329_503_paint0_linear_943_18799\" x1=\"0\" y1=\"1.5\" x2=\"1312\" y2=\"1.5\" gradientUnits=\"userSpaceOnUse\" data-f2c-idx=\"2960\">\n<stop stop-color=\"#999999\" stop-opacity=\"0.2\" data-f2c-idx=\"2961\"></stop>\n<stop offset=\"0.0626737\" stop-color=\"#FFA15E\" data-f2c-idx=\"2962\"></stop>\n<stop offset=\"1\" stop-color=\"#999999\" stop-opacity=\"0.1\" data-f2c-idx=\"2963\"></stop>\n</linearGradient>\n</defs>\n</svg>"} />
        <SvgGraphic className={styles["svg-45"]} html={"<svg id=\"1171430842\" display=\"block\" role=\"presentation\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" data-f2c-idx=\"2964\"><path d=\"M 0 0 L 14.5 0\" fill=\"transparent\" height=\"1px\" id=\"jMF44oNeb\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--1335ju, 1.5)\" stroke=\"var(--18mrqx2, rgb(0, 0, 0))\" transform=\"translate(4.75 5.75)\" width=\"14.5px\" data-f2c-idx=\"2965\"></path><path d=\"M 0 0 L 14.5 0\" fill=\"transparent\" height=\"1px\" id=\"lwuMFFtBI\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--1335ju, 1.5)\" stroke=\"var(--18mrqx2, rgb(0, 0, 0))\" transform=\"translate(4.75 18.25)\" width=\"14.5px\" data-f2c-idx=\"2966\"></path><path d=\"M 0 0 L 14.5 0\" fill=\"transparent\" height=\"1px\" id=\"KKxXbtl64\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--1335ju, 1.5)\" stroke=\"var(--18mrqx2, rgb(0, 0, 0))\" transform=\"translate(4.75 12)\" width=\"14.5px\" data-f2c-idx=\"2967\"></path></svg>"} />
      </div>
    </>
  )
}

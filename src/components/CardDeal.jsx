import React from "react";
import { card } from "../assets";
import Buttons from "./Buttons";
import styles, { layout } from "../styles";

const cardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" />
        in few easy steps
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem Ips is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book
      </p>
      <Buttons styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default cardDeal;

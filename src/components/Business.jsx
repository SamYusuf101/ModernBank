import React from "react";
import { features } from "../constants";
import Buttons from "./Buttons";
import styles, { layout } from "../styles";

const Card = ({ icon, title, index, content }) => {
  <div>
    <div>
      <img src={icon} alt="icon" />
    </div>
    <h4>{title}</h4>
  </div>;
};

function Business() {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" />
          we'll handle the money.{" "}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card we can help you improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards in the market. Yes we can do that for you
        </p>

        <Buttons styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <Card key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Business;

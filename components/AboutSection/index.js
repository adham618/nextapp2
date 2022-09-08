/* eslint-disable @next/next/no-img-element */
import * as React from "react";

export default function AboutSection() {
  return (
    <section className="about page-container" id="about">
      <div className="about-content">
        <h3>3 X 3690 NFTs</h3>
        <h1>
          95<span style={{ fontFamily: "Poppins" }}>%</span> OF PROFITS GOES TO
          HUSTLERS
        </h1>
        <img src="/imgs/coins.png" alt="About" className="about-img" />
        <p>
          More than just a Meme, Hapu is an experimental plan.
          <br />
          Fair Launch, No hype, no pre-sale, pure community and love for our dog
          and peRRo frens and amigos.
          <br />
          No room for arrogance or laziness.
        </p>
      </div>
    </section>
  );
}

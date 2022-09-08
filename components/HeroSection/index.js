/* eslint-disable @next/next/no-img-element */
import * as React from "react";

export default function HeroSection() {
  return (
    <section className="hero page-container" id="hero">
      <div className="img-group">
        <span className="img-container">
          <img
            src="https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/6229a9b8f02d26602ae2ac99_Green%20O.png"
            alt="letter"
          />
          <img
            className="overlay-img"
            src="https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/621f2e39b978735216e2ca6f_OKB-O.svg"
            alt="letter"
          />
        </span>
        <span className="img-container">
          <img
            src="https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/6229a9d35ca27b36b2ad27d5_Blue-K.png"
            alt="letter"
          />
          <img
            className="overlay-img"
            src="https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/621f2eb03586c1ad602f556a_OKB-K.svg"
            alt="letter"
          />
        </span>
        <span className="img-container" style={{ marginLeft: "-50px" }}>
          <img
            src="https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/6229a9f818f7b9952912c89e_Purple-A.png"
            alt="letter"
          />
          <img
            className="overlay-img"
            src="https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/621f2eb4a9cce950b774bfd6_OKB-A.svg"
            alt="letter"
          />
        </span>
        <span className="img-container">
          <img
            src="https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/6229aa571d28bf0b7a90af8f_Yellow_Y.png"
            alt="letter"
          />
          <img
            className="overlay-img"
            src="https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/621f2eb99342fe6cb8cc3083_OKB-Y.svg"
            alt="letter"
          />
        </span>
      </div>
      <div className="hero-content">
        <h3>Top Gs and Frens</h3>
        <h1>
          FUNDING BROKIES
          <br />
          Let&#39;s unite.
        </h1>
        <p>Hapus are going to help you.</p>
      </div>
    </section>
  );
}

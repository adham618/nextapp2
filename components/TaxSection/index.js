/* eslint-disable @next/next/no-img-element */
import * as React from "react";

export default function ServiceArea() {
  return (
    <section className="service-area page-container">
      <div className="section-title">
        <div className="sub-title">
          <h5>Tokenomics</h5>
          <span></span>
        </div>
        <div className="main-title">
          <h3 className="gang">TAX</h3>
          <p>The tax will varies as the project progress</p>
        </div>
      </div>
      <div className="service-boxs">
        <div className="single-service-box">
          <div className="service-content">
            <div className="service-img">
              <img src="/imgs/tok2.png" alt="icon" />
            </div>
            <div className="service-title">
              <h3 className="gang">Reflection/Burn</h3>
              <p>
                1% of every buy and 2% of every sell will go towards the
                reflection and burn.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="single-service-box">
          <div className="service-content">
            <div className="service-img">
              <img src="/imgs/tok3.png" alt="icon" />
            </div>
            <div className="service-title">
              <h3 className="gang">Marketing</h3>
              <p>
                1% of every buy and and 4% of every sell will go towards
                marketing.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="single-service-box">
          <div className="service-content">
            <div className="service-img">
              <img src="/imgs/tok4.png" alt="icon" style={{ width: "55px" }} />
            </div>
            <div className="service-title">
              <h3 className="gang">Auto LP</h3>
              <p>
                1% of every buy and 2% of every sell will go towards Liquidity.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="single-service-box">
          <div className="service-content">
            <div className="service-img">
              <img src="/imgs/tok1.png" alt="icon" />
            </div>
            <div className="service-title">
              <h3 className="gang">Dev Wallet</h3>
              <p>
                1% of every buy and 2% of every sell will go towards dev wallet.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

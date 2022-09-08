/* eslint-disable @next/next/no-img-element */
import * as React from "react";

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us page-container">
      <div className="title">
        <h4>Utilities</h4>
        <h2>Kodachi DEX</h2>
      </div>
      <div className="content">
        <p>
          The Kodachi DEX will revolutionize decentralized exchanges with a
          number of capabilities that have yet to be seen on the same platform.
        </p>
        <p>
          Kodachi DEX has redesigned the traditional function a decentralized
          exchange in that, it will not tax the liquidity of a token. Instead
          taxes will be drawn from transaction fees
        </p>
        <p>
          The vision for Kodachi DEX is to provide a platform for projects to
          launch tokens with a payout in ETH vs. native tokens.
        </p>
        <p>
          In addition, liquidity pools will designed differently. When a trader
          sells, instead of creating a token/ETH pair, it will only cost ETH
          collected from the user&apos;s gas fee. This will prevent &quot;chart
          dumps&quot; that can negatively impact the project.
        </p>
      </div>
    </section>
  );
}

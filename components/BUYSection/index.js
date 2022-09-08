/* eslint-disable @next/next/no-img-element */
import * as React from "react";

export default function BuySection() {
  return (
    <section className="buy page-container" id="buy">
      <div className=" buy-content">
        <h2>Buy Hapu Now</h2>
        

        <div className="eth-mainnet-container">
          <div>
            <div className="eth-mainnet">
              <img src="/imgs/eth.svg" alt="" className="icon" />
              <div>
                <h3>
                  <span>LIVE</span> Ethereum Mainnet
                </h3>
                <p>{process.env.NEXT_PUBLIC_CONTRACTADDRESS}</p>
              </div>
              
            </div>

            <div>
              <div className="flex-container">
              <a href="https://app.uniswap.org/#/swap?outputCurrency=0x5945c9F959a8E1FdAd17B34EFc1577E582354664&use=V2">
                <button className="buy-on-btn">
                  Buy Now On Uniswap
                  <img src="/imgs/eth.svg" alt="" className="icon" />
                  <img src="/imgs/uniswap-uni-logo.png" alt="" className="icon" />
                  
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" buy-content">  <h1>we are only on the Ethereum mainnet, no other chains, watch out for scams.</h1></div>
    
    </section>
  );
}

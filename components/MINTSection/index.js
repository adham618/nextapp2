/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { abi } from "../../constants/abi";
import { useState, useEffect } from "react";
import { ethers,BigNumber } from "ethers";
import { useTimer } from "react-timer-hook";
import { getServerDate } from "./serverDate.js";
//const dotenv = require('dotenv');
export const injected = new InjectedConnector();


function MyTimer(){
  const calculateTimeLeft = () => {
    const difference =
      +new Date('09/12/2022,02:00:00 PM EST') - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      let isMounted = true;
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  return (
   <div>
          {timeLeft.days ||
          timeLeft.hours ||
          timeLeft.minutes ||
          timeLeft.seconds ? (
            <div className="counterholder">
              <span className="counter">{timeLeft.days}d</span>
              <span className="counter">{timeLeft.hours}h</span>
              <span className="counter">{timeLeft.minutes}m</span>
              <span className="counter">{timeLeft.seconds}s</span>
            </div>
   ):(
    <p>Lets Go  </p>
  )}</div>);

}
  





export default function MintSection() {
  

  const [hasMetamask, setHasMetamask] = useState(false);
  const [quantity,setQuantity] =useState(1);
  const handleDecrement =()=>{
    if(quantity<=1) return;
    setQuantity(quantity-1);

  }
  const handleIncrement =()=>{
    if(quantity>=20) return;
    setQuantity(quantity+1);
    
  }


  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  }, []);

  const {
    active,
    activate,
    chainId,
    account,
    library: provider,
  } = useWeb3React();

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await activate(injected);
        setHasMetamask(true);
      } catch (e) {
        console.log(e);
      }
    }
  }

  async function execute() {
    if (active) {
      const signer = provider.getSigner();
      const contractAddress = process.env.NEXT_PUBLIC_NFTCONTRACTADDRESS;
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const nftPrice = process.env.NEXT_PUBLIC_NFTPRICE;
      try {
        // const response = await 
        await contract.mint(BigNumber.from(quantity),{value: ethers.utils.parseEther((nftPrice * quantity ).toString())});
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }
  
  return (
    
    <section className="mint" id="mintNFT">
      
      <div className="mint-grid page-container">
        <div className="mint-content">
          <h2>Mint Hapu NFT</h2>
          <p>
            You can mint upto 20 NFTs with price of a single gas. <br/>
            0.00369 ETH per NFT 
          </p>
          
          <div>
        {hasMetamask ? (
          active ? (
            <div>Connected Address: {account}<br/>
            </div>
            
          ) : (
            <button className="connect-wallet-btn" onClick={() => connect()}>Connect</button>
          )
        ) : (
          "Please install metamask"
        )}

        {active ?(<div>
        <button className="connect-wallet-btn" onClick={handleDecrement}>-</button>
        <input className="connect-wallet-input" type="number" value={quantity} />
        <button className="connect-wallet-btn"  onClick={handleIncrement}>+</button>
          <br/>
        <button className="connect-wallet-btn" onClick={() => execute()}>Mint Now</button>  </div> ): ""}
      </div>
      <div>
      <MyTimer/>
      
      </div>
      
      
        </div>

        <div className="mint-img-container"></div>
      </div>
      
    </section>
   
  );
}

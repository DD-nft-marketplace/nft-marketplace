import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from 'web3modal';
import Image from 'next/image'

// Need to figure out how to exclude default header from this page...
export default function Login() {
  return (
    <>
      <section  className="section-default" style={{gap: "1rem"}}>
        <h1 className="trending-title">Login</h1>
        <div  className="section-option">
          <Image src={"/email.png"} width={50} height={50}/>
          <h2>Login with Email</h2>
        </div>
        <div  className="section-option">
          <Image src={"/metamask.png"} width={50} height={50}/>
          <h2>Login in with MetaMask</h2>
        </div>
        <div  className="section-option">
          <Image src={"/phantom.png"} width={50} height={50}/>
          <h2>Login in with Phantom</h2>
        </div>
      </section>
    </>
  )
}

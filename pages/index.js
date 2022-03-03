import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from 'web3modal';
import Login from './Login';

// import EVM address

// import contracts

export default function Home() {
  const [isLoggedin, setLoginStatus] = useState(true);
  const providerOptions = {
    // https://github.com/Web3Modal/web3modal
  }

  const web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    providerOptions
  })

  const instance = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(instance);
  const signer = provider.getSigner();

  useEffect(() => {
    setLoginStatus(false);
  })

  if (!isLoggedin) {
    return (
      <div className="flex justify-center">
        <Login />
      </div>
    )
  }

  return (
    <div>
      <h1>Logged In!</h1>
    </div>
  )
}

import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from 'web3modal';
import Login from './Login';

// import EVM address

// import contracts

export default function Home() {
  const [isLoggedin, setLoginStatus] = useState(true);

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

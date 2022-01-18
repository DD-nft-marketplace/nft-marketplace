import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from 'web3modal';
import NFTEntries from '../components/NFTEntries'

// import EVM address

// import contracts

export default function Dashboard() {

  // Placeholder for nft data
  const[nftentries] = useState([
    {
      id  : 1,
      img : "/crusader1.png",
      name: "PROTOCRUSADER1",
      price: "1 ETH"
    },
    {
      id : 2,
      img : "/crusader2.png",
      name: "PROTOCRUSADER2",
      price: "1 ETH"
    },
    {
      id: 3,
      img : "/crusader3.png",
      name: "PROTOCRUSADER3",
      price: "1 ETH"
    },
    {
      id : 4,
      img : "/special.png",
      name: "PROTOCRUSADER4",
      price: "1 ETH"
    }
  ])

  return (
    <>
      <section  className="section-default">
        <h1 className="trending-title">Currently Trending</h1>
        <div  className="trending-box">
          {nftentries.length > 0 ? (
            <NFTEntries entries={nftentries}  />
          ): (
            'No NFTS here'
          )
          }
        </div>
      </section>
      <section></section>
      <footer></footer>
    </>
  )
}

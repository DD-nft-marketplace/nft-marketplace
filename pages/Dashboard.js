import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from 'web3modal';
import NFTEntries from '../components/NFTEntries'
import Image from 'next/image'
import { useRouter } from 'next/router';

// import EVM address

// import contracts

export default function Dashboard() {

  const router = useRouter();

  // Placeholder for nft data
  const[nftentries] = useState([
    {
      id  : 1,
      img : "/crusader1.png",
      name: "PROTOCRUSADER1",
      price: "1 ETH",
      owner: "@Anon908",
      creator: "@Crusader",
      description: "Lorem Sum Cum Lade Negus Ave"
    },
    {
      id : 2,
      img : "/crusader2.png",
      name: "PROTOCRUSADER2",
      price: "1 ETH",
      owner: "@Anon888",
      creator: "@Crusader",
      description: "Lorem Sum Cum Lade Negus Ave"
    },
    {
      id: 3,
      img : "/crusader3.png",
      name: "PROTOCRUSADER3",
      price: "1 ETH",
      owner: "@Anon877",
      creator: "@Crusader",
      description: "Lorem Sum Cum Lade Negus Ave"
    },
    {
      id : 4,
      img : "/special.png",
      name: "PROTOCRUSADER4",
      price: "1 ETH",
      owner: "@Anon328",
      creator: "@Crusader",
      description: "Lorem Sum Cum Lade Negus Ave"
    }
  ])

  return (
    <>
      <section  className="section-default">
        <h1 className="trending-title">Currently Trending</h1>
        <div  className="trending-box">
          {nftentries.length > 0 ? (
              nftentries.map((nft) => {
                return (
                  <div className="nft-entry">
                    <Image src={nft.img} width={350} height={350} alt="NFT Image" />
                    <h2>{nft.name}</h2>
                    <h3>{nft.price}</h3>
                    <button className="list-item" onClick={() => {
                              router.push({
                                pathname: "/nft-info",
                                query: { img: nft.img,
                                        name: nft.name,
                                        price: nft.price,
                                        owner: nft.owner,
                                        creator: nft.creator,
                                        description: nft.description
                                      }
                              })
                            }
                      }>MORE</button>
                  </div>
                )
              })
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

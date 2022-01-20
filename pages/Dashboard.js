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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {nftentries.map((nft) => {
                return (
                  <div>
                    <Image src={nft.img} width={100} height={100} alt="NFT Image" />
                    <h2>{nft.name}</h2>
                    <h3>{nft.price}</h3>
                    <button onClick={() => {
                              router.push({
                                pathname: "/nft-info",
                                query: { img: nft.img,
                                        name: nft.name,
                                        price: nft.price
                                      } 
                              })
                            }
                      }>MORE</button>
                  </div>
                )
              })}
            </div>
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

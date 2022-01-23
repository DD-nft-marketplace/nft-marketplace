import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from 'web3modal';
import NFTEntries from '../components/NFTEntries'
import Image from 'next/image'
import { useRouter } from 'next/router';
import Search from '../components/Search'
import {isServer} from '../components/isServer'

export default function Browse(){
  if(isServer()) return null;
  const router = useRouter();
  const [allNfts, getAllNfts] = useState([]);
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filterNfts = (allNfts, query) => {
    if (!query) {
      return allNfts;
    }

    return allNfts.filter((nft) => {
      const nftName = nft.name.toLowerCase();
      const nftPrice = nft.price.toLowerCase();
      const nftDescription = nft.description.toLowerCase();
      const nftOwner = nft.owner.toLowerCase();
      const nftCreator = nft.creator.toLowerCase();

      return nftName.includes(query) || nftPrice.includes(query) || nftDescription.includes(query) || nftOwner.includes(query) || nftCreator.includes(query);
    })
  }

  const filteredNfts = filterNfts(allNfts, searchQuery);
  let items = [
    {
      id  : 1,
      img : "/crusader1.png",
      name: "PROTOCRUSADER1",
      price: "2 ETH",
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
      price: "5 ETH",
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
  ]

  // Need to call function in smart contract to gather all NFTs
  
  
  
  useEffect(() => {
    getAllNfts(items);
    // use load NFTS function from smart contract
  }, [])
  
  return(
    <>
    <section>
      <Search 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className="trending-box">
        {filteredNfts.map((nft, i) => {
          return (
          <div key={i} className="nft-entry">
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
        })}
      </div>
    </section>
    </>
  )
}

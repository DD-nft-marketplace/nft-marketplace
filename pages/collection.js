import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"

// import addresses for deployed contracts here
// import {
//     nftcontractaddress
// } from '../somefilewithaddresses'

// import contract JSON object here
// import Market from '../artifacts/contracts/Market.sol/NFTMarket.json'
// import NFT from '../artifacts/contracts/NFT.sol/NFT.json'

export default function Collection() {
    const [nfts, setNfts] = useState([])
    const [loadingState, setLoadingState] = useState('not-loaded')

    useEffect(() => {
        loadNFTs()
    }, [])

    async function loadNFTs() {
        // logic to load NFTs from contract
        let items = [];
        setNfts(items)
        setLoadingState('loaded')
    }

    if (loadingState === 'loaded' && !nfts.length) return (<h1 className='py-10 px-20 text-3xl'>You don't have any NFTs yet!</h1>)
    return (
        <div>
          <div>
            <div>
              {
                nfts.map((nft, i) => {
                  <div key={i}>
                    <img src={nft.image} className="rounded" />
                    <div>
                      <p>Price - {nft.price} ETH</p>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </div>
    )
}

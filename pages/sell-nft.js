import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from 'web3modal';
import { useRouter } from "next/router";
import Image from 'next/image'

export default function SellableNFTs({query}) {
    return (
        <div className="trending-box" style={{marginTop: "2rem"}}>
            <div className="market-page nft-entry">
              <h1>{query.name}</h1>
              <Image src={query.img} width={350} height={350} alt="NFT Image" />
              <h2>&nbsp;</h2>
              <button className="market-button">Sell</button>
            </div>
            <div  className="column-box">
              <div className="market-box">
                <h3>Owner: {query.owner}</h3>
                <h3>Creator: {query.creator}</h3>
              </div>
              <div  className="market-box">
                <h3>Description: {query.description}</h3>
              </div>
              <div  className="market-box" style={{justifyContent: "center"}}>
                <h3>Price: {query.price}</h3>
              </div>
            </div>
        </div>
    )
}

SellableNFTs.getInitialProps = ({query}) => {
    return {query}
}

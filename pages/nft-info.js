import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from 'web3modal';
import { useRouter } from "next/router";
import Image from 'next/image';

// import {
//     nftaddress
// } from 'address/file/path'

import NFT from '../backEnd/abis/NFT.json';

export default function NFTinfo({query}) {

    async function buyNft(nft) {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.signer();
      const contract = new ethers.Contract(nftaddress, NFT.abi, signer)

      const price = ethers.utils.parseUnits(nft.price.toString(), 'ether');

    }

    return (
        <div className="trending-box" style={{marginTop: "2rem"}}>
            <div className="market-page nft-entry">
              <h1>{query.name}</h1>
              <Image src={query.img} width={350} height={350} alt="NFT Image" />
              <h2>&nbsp;</h2>
              <button className="market-button">BUY</button>
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

NFTinfo.getInitialProps = ({query}) => {
    return {query}
}

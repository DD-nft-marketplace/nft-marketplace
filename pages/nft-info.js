import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from 'web3modal';
import { useRouter } from "next/router";
import Image from 'next/image'

export default function NFTinfo({query}) {
    return (
        <div className="trending-box">
            <div className="">
            <Image src={query.img} width={100} height={100} alt="NFT Image" />
            <h2>{query.name}</h2>
            <h3>{query.price}</h3>
            <button>BUY</button>
            </div>
        </div>
    )
}

NFTinfo.getInitialProps = ({query}) => {
    return {query}
}
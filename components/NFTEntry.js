//import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link';

// img, name, and price are given by each NFTentry
export default function NFTEntry({img, name, price}){
  // Make sure to create functions for components in local scope!
  // If not, pass the function as a prop

  // Kody TODO: create function for button that links to specificly clicked NFT to sell page

  function onClick() {
    // Option 1: Route to a new page specific to each NFT
    // Option 2: Change rendering of current clicked button to sell on the same page
  }

  return (
    <div>
      <Image src={img} width={100} height={100} alt="NFT Image" />
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>MORE</button>
    </div>
  )
}

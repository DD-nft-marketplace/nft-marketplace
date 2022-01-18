//import PropTypes from 'prop-types'
import Image from 'next/image'

// img, name, and price are given by each NFTentry
export default function NFTEntry({img, name, price}){
  // Make sure to create functions for components in local scope!
  // If not, pass the function as a prop
  return (
    <div>
      <Image src={img} width={100} height={100} alt="NFT Image" />
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>MORE</button>
    </div>
  )
}

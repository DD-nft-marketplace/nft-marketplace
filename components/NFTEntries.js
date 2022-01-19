import NFTEntry from './NFTEntry'


const NFTEntries = ({entries}) => {

  return(
    <>
      {entries.map((nftentry) => (
        <NFTEntry img={nftentry.img}  name={nftentry.name}  price={nftentry.price}/>)
      )}
    </>
  )
}

export default NFTEntries

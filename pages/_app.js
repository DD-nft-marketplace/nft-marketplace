import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <nav>
        <p>PulseMarket</p>
        <div>
          <Link href="/">
            <a>
              Browse NFTs
            </a>
          </Link>
          <Link href="/collection">
            <a>
              Your Collection
            </a>
          </Link>
          <Link href="/wallet-connect">
            <a>
              Connect Wallet
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
    ) 
}

export default MyApp

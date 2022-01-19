import '../styles/globals.css'
import '../styles/master.css'
import Image from 'next/image'
import Link from 'next/link'
/*
 Connect Wallet Link should not exist.
 This header should only apply when user has CONNECTED their wallet

 Our page flow should be like this, imo

 Home (Landing page for users to submit their wallet)
                      |
                      V
  Dashboard(General page, second page of the mockup)
                      /\
                     /  \
                    V    V
              (Browse)  (Usercollection)
                |           |
                V           V
              (BUY)       (SELL)

(Browse) page and (Usercollection) must be made!


// is loggedin
// if user logedin == true
// render( whatever)
// else
// give (genericlandingpage)

*/

function MyApp({ Component, pageProps }) {

  return(
    <div>
      <header className='main-header'>
        <Link href="/Dashboard">
          <Image src={"/costanza.jpg"} width={50} height={50} className='profile-photo' alt="Profile Image" />
        </Link>
        <h1>@AnonAnonson</h1>
        <nav  className="header-nav">
          <ul>
            <Link href="/">
              <li className='list-item'>Browse NFTs</li>
                </Link>
            <Link href="/collection">
              <li className='list-item'>Your Collection</li>
            </Link>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
    </div>
    )
}

export default MyApp

// global css can ONLY be imported here
// why? to avoid namespace clashes 
// as global CSS affects ALL elements on the paeg
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // component prop is the active 'page'
  // this means that when you navigate between routes, 'Component' will change to that new page
  // props are thereby accessible to the page when sent through Component

  // pageProps contains the initial props obtained through next.js data fetching methods
  // it will be an empty object if no fetch was made
  return <Component {...pageProps} />
}

export default MyApp

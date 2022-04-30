




// page template
import { useEffect } from 'react';
import { cloudExample } from '../lib/cloud.example';
import LandingPage from '../pagetemplates/landingpage'
const Home = ({example}) => {
  
  return (
    <LandingPage />
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const res = await fetch('https://myawesomeappdotorg.web.app/hello-world')
  // const res = await fetch('/api/cloud')
  // const example = await res.json()
  const example = await cloudExample();


  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      example,
    },
  }
}

export default Home;

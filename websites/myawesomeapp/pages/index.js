




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
  const example = await cloudExample();
  return {
    props: {
      example,
    },
  }
}

export default Home;

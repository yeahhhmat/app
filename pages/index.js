import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
import ProductGrid from '../components/products/productgrid'

const Home = () => {
  const user = useUser()

  return (
    <Layout>
      <ProductGrid />
    </Layout>
  )
}

export default Home

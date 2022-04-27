import { useUser } from '../lib/hooks'
import { appConfig } from '../lib/appconfig'

import Layout from '../components/layout'
import ProductGrid from '../components/products/productgrid'

import { AdminLayout } from '../components/admin/adminlayout'
import AdminLandingPage from '../components/landingpage'
const Home = () => {
  const user = useUser()
  const currentUser = user && (user.role === appConfig.role_type__APP_ADMIN || user.role === appConfig.role_type__ADMIN)

  return (
    <>
    {
      currentUser
      ? (<AdminLayout><AppConfig /></AdminLayout>)
      : (<AdminLandingPage />)
    }
    </>
  )
}

export default Home

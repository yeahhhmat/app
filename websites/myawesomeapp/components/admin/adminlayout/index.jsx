import AdminSideNav from './adminsidenav'
import AdminGrid from './admingrid'
import Secondary from './secondary'

export const AdminLayout = ({children}) => (
  <AdminGrid 
    nav={<AdminSideNav />}
    primary={children}
    secondary={<Secondary />}
  />    
)

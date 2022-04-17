import Delegator from '../../delegator'
import AdminFooter from '../adminfooter'
import AdminHeader from '../adminheader'

export default function AdminGrid ({nav,primary,secondary}) {
  return(
    <Delegator>
      <AdminHeader />
      <main className='w-full flex'>
        <div className='hidden md:block md:w-3/12 lg:w-2/12'>{nav && nav}</div>
        <div className='w-full mx-auto md:mx-0 md:w-6/12 lg:w-7/12'>{primary && primary}</div>
        <div className='hidden md:block md:w-3/12 border-l'>{secondary && secondary}</div>
      </main>
      <AdminFooter />
    </Delegator>
  )
}
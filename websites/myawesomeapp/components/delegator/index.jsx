import { useUser } from '../../lib/hooks'

export default function Delegator ({children}) {
  const user = useUser({ redirectTo: '/login' })

  return(
    <>{user && children}</>
  )
}
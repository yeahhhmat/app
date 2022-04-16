import Link from 'next/link'
import { useUser } from '../../lib/hooks'
import { LogoutIcon, UserIcon } from '../icons'
import { Message } from '../message'
import { appConfig } from '../../lib/app.config';

export const Header = () => {
  const user = useUser()
  const { debug_strings } = appConfig;

  return (
    <header className='my-8 container mx-auto lg:px-20 md:px-6 px-4'>
      <nav>
        <ul className='flex justify-between'>
          <li>
            <Link href="/">
              <Message
                className={''}
                message={'Home'}
                origin={'location.test'}
              />
            </Link>
          </li>

          <li>
            {user ? (
              <div className='flex'>
                <Link href="/profile" >
                  <a><UserIcon /></a>
                </Link>
                <Link href='/api/logout'>
                  <a><LogoutIcon /></a>
                </Link>
              </div>
            ) : (
              <div>
                <Link href="/login">
                  <a><UserIcon /></a>
                </Link>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

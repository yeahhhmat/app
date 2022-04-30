import Link from 'next/link'
import { messages } from '../../lib/messages'
import { FormSubtitleText, FormTitleText, TextWrapper } from './styles.signupform'

export const SignupForm = ({ isLogin, errorMessage, onSubmit }) => {  
  const DelegateLoginMessage = (
    <TextWrapper>
      <FormTitleText>{ isLogin ? 'Login' : 'Sign up' }</FormTitleText>
      <FormSubtitleText>{ isLogin ? 'Welcome Back!' : 'It\'s free to join!'}</FormSubtitleText>
    </TextWrapper>
  )
  return (
    <section className=''>
      {DelegateLoginMessage}
      
      <form onSubmit={onSubmit}>    
        <label>
          <span>Username</span>
          <input type="text" name="username" required />
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="password" required />
        </label>
        {!isLogin && (
          <label>
            <span>Repeat password</span>
            <input type="password" name="rpassword" required />
          </label>
        )}

        <div className="submit">
          {isLogin ? (
            <>
              <Link href="/signup">
                <a>I don't have an account</a>
              </Link>
              <button type="submit">Login</button>
            </>
          ) : (
            <>
              <Link href="/login">
                <a>I already have an account</a>
              </Link>
              <button type="submit">Signup</button>
            </>
          )}
        </div>

        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
    </section>
  )
}

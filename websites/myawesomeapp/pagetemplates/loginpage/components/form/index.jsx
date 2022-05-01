import Link from 'next/link';
import { 
  ErrorMessage,
  FormAltButton,
  FormSubmitButton,
  FormSubtitleText,
  FormTitleText,
  Input,
  InputLabel,
  InputLabelWrapper,
  ItemsCentered,
  TextWrapper,
  FormWrapper, 
  SectionWrapper
} from './styles.form'
import { useUser } from '../../../../lib/hooks';

export const Form = ({ isLogin, errorMessage, onSubmit }) => {  
  useUser({ redirectIfFound: '/dashboard' }); // redirect user if they've already logged in 
  const DelegateLoginMessage = (
    <TextWrapper>
      <FormTitleText>{ isLogin ? 'This Is A Log In Form' : 'This Is A Sign Up Form' }</FormTitleText>
      <FormSubtitleText>{ isLogin ? 'Welcome Back! 🙂' : 'Go ahead and try it out! We\'ll never share your information.'}</FormSubtitleText>
    </TextWrapper>
  )
  const DelegateLoginButtons = (
    <ItemsCentered>
      <FormSubmitButton type="submit">
        {isLogin ? 'Log in' : 'Sign up'}
      </FormSubmitButton>
      <Link href={isLogin ? "/signup" : "/login"}>
        <FormAltButton>
          {isLogin ? 'I don\'t have an account yet.' : 'I already have an account.'}
        </FormAltButton>
      </Link>
    </ItemsCentered>
  )
  return (
    <SectionWrapper>
      {DelegateLoginMessage}
      <FormWrapper onSubmit={onSubmit}>    
        <InputLabelWrapper>
          <InputLabel>{'Email'}</InputLabel>
          <Input type="email" name="email" placeholder={'Enter your email here..'} required />
        </InputLabelWrapper>
        <InputLabelWrapper>
          <InputLabel>{'Password'}</InputLabel>
          <Input type="password" name="password" placeholder={'Create a password here..'} required />
        </InputLabelWrapper>
        {DelegateLoginButtons}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </FormWrapper>
    </SectionWrapper>
  )
}

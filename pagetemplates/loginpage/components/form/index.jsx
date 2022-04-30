import Link from 'next/link'
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

export const Form = ({ isLogin, errorMessage, onSubmit }) => {  
  const DelegateLoginMessage = (
    <TextWrapper>
      <FormTitleText>{ isLogin ? 'Login' : 'Sign up' }</FormTitleText>
      <FormSubtitleText>{ isLogin ? 'Welcome Back!' : 'It\'s free to join!'}</FormSubtitleText>
    </TextWrapper>
  )
  const DelegateLoginButtons = (
    <ItemsCentered>
      <Link href={isLogin ? "/signup" : "/login"}>
        <FormAltButton>
          {isLogin ? 'I don\'t have an account' : 'I already have an account'}
        </FormAltButton>
      </Link>
      <FormSubmitButton type="submit">
        {isLogin ? 'Login' : 'Sign up'}
      </FormSubmitButton>
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

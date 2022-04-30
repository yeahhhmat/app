/* deps */
import Link from "next/link";
/* DEPRECATED components */
import { Button } from "../../components/general/button";
/* hooks */
import { useWindowSize } from "./hook.windowsize";
import { useUser } from "../../lib/hooks";
/* styles */
import {
  LoginPageWrapper,
  LoginPageTitleWrapper,
  LoginPageTitle,
  LoginPageSubtitle,
  PageWrapper,
  SignInButton, 
  Centered
} from "./styles.landingpage";
import { Form } from "./components/form";

export default function LoginPage() {
  const { width, height } = useWindowSize();
  const user = useUser({
    redirectIfFound: '/dashboard'
  });

  const DelegateButton = (
    <Link href={ !user ? '/login' : '/dashboard' }>
      <SignInButton>{ !user ? 'Get Started' : 'Go to your Dashboard'}</SignInButton>
    </Link>
  );

  return (
    <PageWrapper>
      <LoginPageWrapper style={{
        height: height + 'px',
        width: width + 'px'
      }}>
        
        <Form />

        {/* <TableView /> */}
        {/* <ZenText /> */}
      </LoginPageWrapper>
    </PageWrapper>
  )
}
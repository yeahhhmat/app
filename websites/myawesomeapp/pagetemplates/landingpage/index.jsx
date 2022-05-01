/* deps */
import Link from "next/link";
/* DEPRECATED components */
import { Button } from "../../components/general/button";
/* hooks */
import { useWindowSize } from "./hook.windowsize";
import { useUser } from "../../lib/hooks";
/* styles */
import {
  LandingPageWrapper,
  LandingPageTitleWrapper,
  LandingPageTitle,
  LandingPageSubtitle,
  PageWrapper,
  SignInButton, 
  Centered
} from "./styles.landingpage";

export default function LandingPage() {
  const { width, height } = useWindowSize();
  const user = useUser();

  const DelegateButton = (
    <Link href={ !user ? '/signup' : '/dashboard' }>
      <SignInButton>{ !user ? 'Get Started' : 'Go to your Dashboard'}</SignInButton>
    </Link>
  );

  return (
    <PageWrapper>
      <LandingPageWrapper style={{
        height: height + 'px',
        width: width + 'px'
      }}>
        <LandingPageTitleWrapper>
          <LandingPageTitle>
            {'This is just a landing page'}
          </LandingPageTitle>
          <LandingPageSubtitle>
            {'But you can make it anything you want it to be, with your imagination! 🌈'}
          </LandingPageSubtitle>
        </LandingPageTitleWrapper>

        <Centered>
          {DelegateButton}
          <Button theme={'alternative'} type={'button'}>Learn More</Button>
        </Centered>
      </LandingPageWrapper>
    </PageWrapper>
  )
}
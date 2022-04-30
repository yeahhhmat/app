/* deps */
import Link from "next/link";
/* DEPRECATED components */
import { Button } from "../general/button";
/* hooks */
import { useWindowSize } from "./hook.windowsize";
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

export default function AdminLandingPage() {  
  const { width, height } = useWindowSize();

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
            {'But you can make it anything you want it to be, with your imagination!'}
          </LandingPageSubtitle>
        </LandingPageTitleWrapper>

        <Centered>
          <Link href={'/login'}>
            <SignInButton>{'Get Started'}</SignInButton>
          </Link>
          <Button theme={'alternative'} type={'button'}>Learn More</Button>
        </Centered>

        {/* <TableView /> */}
        {/* <ZenText /> */}
      </LandingPageWrapper>
    </PageWrapper>
  )
}
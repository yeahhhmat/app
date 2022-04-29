import { Button } from "../general/button";
import Modal from "../general/modal";
import { Centered } from "../admin/adminlayout/styles.global";
import {
  LandingPageWrapper,
  LandingPageTitleWrapper,
  LandingPageTitle,
  LandingPageSubtitle,
  PageWrapper, 
} from "./styles.landingpage";
import { appConfig, useStore } from "../../lib/appconfig"
import { TableView } from "../tableview";
import { ZenText } from "../zentext";

export default function AdminLandingPage() {
  const state_landingpageModule = useStore((state) => state.state_landingpageModule)
  const setState_landingpageModule = useStore((state) => state.setState_landingpageModule);
  return (
    <PageWrapper>
      <LandingPageWrapper>
        {state_landingpageModule && 
          <Modal handleClose={() => setState_landingpageModule(!state_landingpageModule)}>
            Hello!
          </Modal>
        }
        <LandingPageTitleWrapper>
          <LandingPageTitle />
          <LandingPageSubtitle>
            {'Hello world, '}
          </LandingPageSubtitle>
        </LandingPageTitleWrapper>

        <Centered>
          <Button 
            theme={'info'} 
            type={'button'}
            onClick={() => {
              console.log(!state_landingpageModule)
              setState_landingpageModule(!state_landingpageModule)
            }}
          >
              Get Started
          </Button>
          <Button theme={'alternative'} type={'button'}>Learn More</Button>
        </Centered>

        <TableView />
        <ZenText />
      </LandingPageWrapper>
    </PageWrapper>
  )
}
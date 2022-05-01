/* components */
import { Form } from "./components/form";
/* hooks */
import { useWindowSize } from "./hook.windowsize";
/* styles */
import { LoginPageWrapper, PageWrapper } from "./styles.landingpage";

export default function LoginPage({ isLogin, errorMessage, onSubmit }) {
  const { width, height } = useWindowSize();
  return (
    <PageWrapper>
      <LoginPageWrapper style={{
        height: height + 'px',
        width: width + 'px'
      }}>
        <Form isLogin={isLogin} errorMessage={errorMessage} onSubmit={onSubmit} />
      </LoginPageWrapper>
    </PageWrapper>
  )
}
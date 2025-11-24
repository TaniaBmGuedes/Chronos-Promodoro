import { Container } from '../../../components/container';
import { CountDown } from '../../../components/countDown';
import { MainForm } from '../../../components/mainForm';
import MainTemplate from '../../MainTemplate';

function Home() {
  return (
    <>
      <MainTemplate>
        <Container>
          <CountDown />
        </Container>
        <Container>
          <MainForm />
        </Container>
      </MainTemplate>
    </>
  );
}
export default Home;

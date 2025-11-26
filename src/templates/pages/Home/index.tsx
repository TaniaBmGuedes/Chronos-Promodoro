import { useEffect } from 'react';
import { Container } from '../../../components/container';
import { CountDown } from '../../../components/countDown';
import { MainForm } from '../../../components/mainForm';
import MainTemplate from '../../MainTemplate';

function Home() {
  useEffect(() => {
    document.title = 'Promodo Home';
  }, []);

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

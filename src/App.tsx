import { PlayCircleIcon } from 'lucide-react';
import { Button } from './components/button';
import { Container } from './components/container';
import { CountDown } from './components/countDown';
import { Cycles } from './components/cycles';
import { Input } from './components/input';
import { Logo } from './components/logo';
import { Menu } from './components/menu';
import './styles/global.css';
import './styles/theme.css';
import { Footer } from './components/footer';

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <Input
              type='text'
              id='myInput'
              labelText='task'
              placeholder='Write something'
            />
          </div>
          <div className='formRow'>
            <p>Lorem</p>
          </div>
          <div className='formRow'>
            <Cycles />
          </div>
          <div className='formRow'>
            <Button icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
export default App;

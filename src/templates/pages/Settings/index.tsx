import { SaveIcon } from 'lucide-react';
import { Container } from '../../../components/container';
import { Head } from '../../../components/header';
import { Input } from '../../../components/input';
import MainTemplate from '../../MainTemplate';
import { Button } from '../../../components/button';
import { useTaskContext } from '../../contexts/taskContext/useTaskContext';
import { useEffect, useRef } from 'react';
import { showMessage } from '../../../adapters/showMessage';
import { TaskActionTypes } from '../../contexts/taskContext/taskAction';

function Settings() {
  const { state, dispatch } = useTaskContext();

  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakimeInputRef = useRef<HTMLInputElement>(null);

  function handleSaveForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formsErrors: string[] = [];

    const workTime = Number(workTimeInputRef.current?.value);
    const shortBreakTime = Number(shortBreakTimeInputRef.current?.value);
    const longBreakTime = Number(longBreakimeInputRef.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formsErrors.push('Only number for all fields');
    }
    if (workTime < 1 || workTime > 99) {
      formsErrors.push('Only type number between 1 e 99 to focus time');
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formsErrors.push('Only type number between 1 e 30 to short break time');
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      formsErrors.push('Only type number between 1 e 60 to long break  time');
    }

    if (formsErrors.length > 0) {
      formsErrors.forEach(error => showMessage.error(error));
      return;
    }
    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: { workTime, shortBreakTime, longBreakTime },
    });
    showMessage.success('Settings saved');
  }

  useEffect(() => {
    document.title = 'Promodo Settings';
  }, []);

  return (
    <>
      <MainTemplate>
        <Container>
          <Head>Settings</Head>
        </Container>
        <Container>
          <p style={{ textAlign: 'center' }}>
            Change your seetings to your focues timer, long rest timer and shor
            rest timer
          </p>
        </Container>
        <Container>
          <form onSubmit={handleSaveForm} action='' className='form'>
            <div className='formRow'>
              <Input
                id='workTime'
                labelText='Focus'
                ref={workTimeInputRef}
                type='number'
                defaultValue={state.config.workTime}
              />
            </div>
            <div className='formRow'>
              <Input
                id='shortBreakTime'
                labelText='Short Break Time'
                ref={shortBreakTimeInputRef}
                type='number'
                defaultValue={state.config.shortBreakTime}
              />
            </div>
            <div className='formRow'>
              <Input
                id='longBreakTime'
                labelText='Long Break Time'
                ref={longBreakimeInputRef}
                type='number'
                defaultValue={state.config.longBreakTime}
              />
            </div>
            <div className='formRow'>
              <Button
                icon={<SaveIcon />}
                aria-label='Save Settings'
                title='Save Settings'
              />
            </div>
          </form>
        </Container>
      </MainTemplate>
    </>
  );
}
export default Settings;

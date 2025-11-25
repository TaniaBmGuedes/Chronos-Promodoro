import {
  Apple,
  Rocket,
  Settings,
  RefreshCw,
  Circle,
  BarChart3,
  Dumbbell,
  PersonStanding,
  CheckCircle,
} from 'lucide-react';

import MainTemplate from '../../MainTemplate';
import { Container } from '../../../components/container';
import { GenericHtml } from '../../../components/genericHTML';
import { Head } from '../../../components/header';

import styles from './styles.module.css';
import { RouterLink } from '../../../components/routerLink';

export function AboutPomodoro() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Head>
            The Pomodoro Technique <Apple className={styles.iconTitle} />
          </Head>

          <p>
            The Pomodoro Technique is a productivity methodology created by{' '}
            <strong>Francesco Cirillo</strong>, which consists of dividing work
            into time blocks (the famous “Pomodoros”) interspersed with breaks.
            The goal is to stay fully focused for a short period and ensure rest
            periods to avoid mental fatigue.
          </p>

          <img
            src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop'
            alt='Person working with focus using a laptop and notebook'
            className='rounded-lg shadow-md my-6'
          />

          <h2>How does the traditional Pomodoro work?</h2>
          <ul>
            <li>
              <strong>1. Choose a task</strong> you want to work on.
            </li>
            <li>
              <strong>2. Work on it for 25 minutes</strong> without
              interruptions.
            </li>
            <li>
              <strong>3. Take a short 5-minute break</strong>.
            </li>
            <li>
              <strong>4. After 4 cycles, take a long break</strong> (usually
              15–30 minutes).
            </li>
          </ul>

          <h2>
            But <strong>Chronos Pomodoro</strong> has a special twist{' '}
            <Rocket className={styles.iconRocket} />
          </h2>

          <p>
            Our app follows the original concept but includes enhancements and
            customizations to make the process even more efficient:
          </p>

          <h3>
            <Settings className={styles.iconSection} /> Time customization
          </h3>
          <p>
            You can configure the focus time, short break, and long break
            however you want! Just go to the{' '}
            <RouterLink hRef='/settings'>settings page</RouterLink> and adjust
            the minutes as you prefer.
          </p>

          <h3>
            <RefreshCw className={styles.iconSection} /> Organized cycle
            sequence
          </h3>
          <p>
            Each time you complete a cycle, a new task is automatically added to
            your history, and the app already suggests the next cycle (focus or
            break).
          </p>

          <p>
            <strong>Our default:</strong>
          </p>
          <ul>
            <li>
              <strong>Odd</strong> cycles: Work (focus).
            </li>
            <li>
              <strong>Even</strong> cycles: Short break.
            </li>
            <li>
              Cycle <strong>8</strong>: Special long break to reset the full
              cycle.
            </li>
          </ul>

          <h3>
            <Apple className={styles.iconSection} /> Cycle visualization
          </h3>

          <p>
            Right below the timer, you’ll see colored dots representing the
            cycles:
          </p>

          <ul className='space-y-1'>
            <li className='flex items-center gap-2'>
              <Circle className={styles.focusDot} /> Work cycle (focus)
            </li>
            <li className='flex items-center gap-2'>
              <Circle className={styles.shortBreakDot} /> Short break
            </li>
            <li className='flex items-center gap-2'>
              <Circle className={styles.longBreakDot} /> Long break (every 8
              cycles)
            </li>
          </ul>

          <p>
            This way, you always know where you are in the process and what
            comes next — no need to write things down or track mentally!
          </p>

          <h3>
            <BarChart3 className={styles.iconSection} /> Automatic history
          </h3>
          <p>
            All your completed cycles and tasks are saved in the{' '}
            <RouterLink hRef='/history'>history</RouterLink>, with statuses such
            as completed or interrupted. This helps you track your progress over
            time.
          </p>

          <h2>Why use Chronos Pomodoro?</h2>

          <ul className='space-y-2'>
            <li className='flex items-center gap-2'>
              <CheckCircle className={styles.iconCheck} />
              Organize your focus clearly.
            </li>

            <li className='flex items-center gap-2'>
              <CheckCircle className={styles.iconCheck} />
              Work and rest in the right rhythm.
            </li>

            <li className='flex items-center gap-2'>
              <CheckCircle className={styles.iconCheck} />
              Customize your cycles and times.
            </li>

            <li className='flex items-center gap-2'>
              <CheckCircle className={styles.iconCheck} />
              Track your progress automatically.
            </li>
          </ul>

          <p>
            <strong>Ready to focus?</strong> Let’s{' '}
            <RouterLink hRef='/'>go back to the homepage</RouterLink> and start
            your Pomodoros! <Rocket className={styles.iconRocket} />
          </p>

          <p className='flex items-center gap-2'>
            <em>"Full focus, no rush, no pause — just go!"</em>
            <Dumbbell className={styles.iconEnd} />
            <PersonStanding className={styles.iconEnd} />
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}

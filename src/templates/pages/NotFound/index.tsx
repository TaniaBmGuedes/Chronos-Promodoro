import {
  Rocket,
  Compass,
  HelpCircle,
  AlertTriangle,
} from 'lucide-react';

import MainTemplate from '../../MainTemplate';
import { Container } from '../../../components/container';
import { GenericHtml } from '../../../components/genericHTML';
import { Head } from '../../../components/header';

import styles from './styles.module.css';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Head>
            404 - Page Not Found
            <Rocket className={styles.iconTitle} />
          </Head>

          <p className="flex items-start gap-3">
            <AlertTriangle className={styles.iconError} />
            <span>
              Oops! It seems the page you're trying to access doesn’t exist.
              Maybe it took a vacation, decided to explore the universe, or got
              lost somewhere between two black holes.
            </span>
          </p>

          <p className="flex items-start gap-3">
            <Compass className={styles.iconCompass} />
            <span>
              But don’t worry — you're not lost in space (yet). You can safely
              return to the <a href="/">homepage</a> or to your{' '}
              <a href="/history">history</a>. Or stay here pretending you’ve
              found a secret page only the coolest explorers can access.
            </span>
          </p>

          <p>
            If you believe this page <em>should</em> exist (or if you just want
            to talk about time travel or wormholes), feel free to reach out.
            Otherwise, use the menu to go back to the real world.
          </p>

          <p className="flex items-start gap-3">
            <HelpCircle className={styles.iconHelp} />
            <span className="flex items-center gap-1">
              Meanwhile, here’s a thought: “If a page doesn’t exist on the
              internet, did it ever truly exist?”
            </span>
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}

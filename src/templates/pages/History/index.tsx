import { TrashIcon } from 'lucide-react';
import { Button } from '../../../components/button';
import { Container } from '../../../components/container';
import { Head } from '../../../components/header';
import MainTemplate from '../../MainTemplate';
import styles from './sytles.module.css';
import { useTaskContext } from '../../contexts/taskContext/useTaskContext';
import { formattedDate } from '../../../utils/formatedDate';

function History() {
  const { state } = useTaskContext();
  return (
    <>
      <MainTemplate>
        <Container>
          <Head>
            <span>History</span>
            <span className={styles.buttonContainer}>
              <Button
                icon={<TrashIcon />}
                color='red'
                aria-label='Delete all history'
                title='Delete all history'
              />
            </span>
          </Head>
        </Container>
        <Container>
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Duration</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {state.tasks.map((task) => {
                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration}min</td>
                      <td>{formattedDate(task.startDate)}</td>
                      <td>{task.interruptDate}</td>
                      <td>{task.type}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Container>
      </MainTemplate>
    </>
  );
}
export default History;

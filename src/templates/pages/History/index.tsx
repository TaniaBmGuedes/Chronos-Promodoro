import { TrashIcon } from 'lucide-react';
import { useTaskContext } from '../../contexts/taskContext/useTaskContext';
import { useState } from 'react';
import { sortTasks, type SortTasksOptions } from '../../../utils/sortTasks';
import { TaskActionTypes } from '../../contexts/taskContext/taskAction';
import MainTemplate from '../../MainTemplate';
import { Container } from '../../../components/container';
import { Head } from '../../../components/header';
import styles from './sytles.module.css';
import { Button } from '../../../components/button';
import { getTaskStatus } from '../../../utils/getTaskStatus';
import { formattedDate } from '../../../utils/formatedDate';

export function History() {
  const { state, dispatch } = useTaskContext();
  const hasTasks = state.tasks.length > 0;

  const [sortTasksOptions, setSortTaskOptions] = useState<
    Pick<SortTasksOptions, 'field' | 'direction'>
  >({
    field: 'startDate',
    direction: 'desc',
  });

  const sortedTasks = sortTasks({
    tasks: state.tasks,
    field: sortTasksOptions.field,
    direction: sortTasksOptions.direction,
  });

  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    setSortTaskOptions(prev => ({
      field,
      direction: prev.direction === 'desc' ? 'asc' : 'desc',
    }));
  }
  function handleResetHistory() {
    if (!confirm('Tem certeza')) return;

    dispatch({ type: TaskActionTypes.RESET_STATE });
  }

  return (
    <MainTemplate>
      <Container>
        <Head>
          <span>History</span>
          {hasTasks && (
            <span className={styles.buttonContainer}>
              <Button
                icon={<TrashIcon />}
                color='red'
                aria-label='Apagar todo o histórico'
                title='Apagar histórico'
                onClick={handleResetHistory}
              />
            </span>
          )}
        </Head>
      </Container>

      <Container>
        {hasTasks && (
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th
                    onClick={() => handleSortTasks({ field: 'name' })}
                    className={styles.thSort}
                  >
                    Tarefa ↕
                  </th>
                  <th
                    onClick={() => handleSortTasks({ field: 'duration' })}
                    className={styles.thSort}
                  >
                    Duração ↕
                  </th>
                  <th
                    onClick={() => handleSortTasks({ field: 'startDate' })}
                    className={styles.thSort}
                  >
                    Data ↕
                  </th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>

              <tbody>
                {sortedTasks.map(task => {
                  const taskTypeDictionary = {
                    workTime: 'Foco',
                    shortBreakTime: 'Descanso curto',
                    longBreakTime: 'Descanso longo',
                  };

                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration}min</td>
                      <td>{formattedDate(task.startDate)}</td>
                      <td>{getTaskStatus(task, state.activeTask)}</td>
                      <td>{taskTypeDictionary[task.type]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {!hasTasks && (
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
            Ainda não existem tarefas criadas.
          </p>
        )}
      </Container>
    </MainTemplate>
  );
}

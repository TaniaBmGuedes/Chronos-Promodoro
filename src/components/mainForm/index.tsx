import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Input } from '../input';
import { Cycles } from '../cycles';
import { Button } from '../button';
import { useRef } from 'react';
import type { TaskModel } from '../../models/taskModel';
import { useTaskContext } from '../../templates/contexts/taskContext/useTaskContext';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../templates/contexts/taskContext/taskAction';

export function MainForm() {
  const { state, dispatch } = useTaskContext();

  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycleType = getNextCycleType(state.currentCycle);

  function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      //TODO:toast
      return;
    }
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  }

  function handleStopTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  return (
    <form className='form' action='' onSubmit={handleCreateNewTask}>
      <div className='formRow'>
        <Input
          labelText='Task'
          id='myInout'
          type='text'
          placeholder='Write something...'
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>

      <div className='formRow'>
        <p>The next break is a 25-minute interval.</p>
      </div>

      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}

      <div className='formRow'>
        {!state.activeTask && (
          <Button
            aria-label='Init new task'
            title='Init new Task'
            type='submit'
            icon={<PlayCircleIcon />}
          />
        )}
        {!!state.activeTask && (
          <Button
            aria-label='Stop current task'
            title='Stop current task'
            type='button'
            color='red'
            onClick={handleStopTask}
            icon={<StopCircleIcon />}
          />
        )}
      </div>
    </form>
  );
}

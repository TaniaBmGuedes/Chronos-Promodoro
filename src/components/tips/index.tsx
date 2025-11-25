import { useTaskContext } from '../../templates/contexts/taskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCyleType = getNextCycleType(nextCycle);

  const tipsForWhenActiveTask = {
    workTime: <span>Focus for {state.config.workTime}minutes</span>,
    shortBreakTime: <span>Rest for {state.config.shortBreakTime}minutes</span>,
    longBreakTime: <span>Long rest mode</span>,
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Next cycle is <b>{state.config.workTime}minutes</b>
      </span>
    ),
    shortBreakTime: (
      <span>Next rest time is {state.config.shortBreakTime}minutes</span>
    ),
    longBreakTime: <span>Next rest is long</span>,
  };

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCyleType]}
    </>
  );
}

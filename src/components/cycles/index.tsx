import { useTaskContext } from '../../templates/contexts/taskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css';
export function Cycles() {
  const { state } = useTaskContext();

  const cyclesSteps = Array.from({ length: state.currentCycle });

  const cycleDescriptionMap = {
    workTime: 'focus',
    shortBreakTime: 'resting in progress',
    longBreakTime: 'long rest',
  };

  return (
    <div className={styles.cycles}>
      <span>Cycles:</span>

      <div className={styles.cycleDots}>
        {cyclesSteps.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={nextCycle}
              aria-label={`Cycle indicator ${cycleDescriptionMap[nextCycleType]}`}
              title={`Cycle Indicator ${cycleDescriptionMap[nextCycleType]}`}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

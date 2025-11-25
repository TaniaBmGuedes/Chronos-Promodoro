import { createContext } from 'react';
import type { TaskStateModel } from '../../../models/taskStateModel';
import type { TaskActionModel } from './taskAction';
import { initialState } from './initialTaskState';

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

const initialContextValue = {
  state: initialState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

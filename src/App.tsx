import { MessageContainer } from './messagesContainer';
import { MainRouter } from './routers/mainRouter';
import './styles/global.css';
import './styles/theme.css';
import { TaskContextProvider } from './templates/contexts/taskContext/taskContextProvider';

export default function App() {
  return (
    <TaskContextProvider>
      <MessageContainer>
        <MainRouter />
      </MessageContainer>
    </TaskContextProvider>
  );
}

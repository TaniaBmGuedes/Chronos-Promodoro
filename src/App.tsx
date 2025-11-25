import { MessageContainer } from './messagesContainer';
import './styles/global.css';
import './styles/theme.css';
import { TaskContextProvider } from './templates/contexts/taskContext/taskContextProvider';
import Home from './templates/pages/Home';

export default function App() {
  return (
    <TaskContextProvider>
      <MessageContainer>
        <Home />
      </MessageContainer>
    </TaskContextProvider>
  );
}

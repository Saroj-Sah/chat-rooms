import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';
import './App.css';

const projectID = '9eb1143d-cad2-4a5b-8804-0cd41c411e88';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};


export default App;

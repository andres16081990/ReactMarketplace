import './styles/App.css';
import AppRouter from './router/AppRouter'
import { AuthContextProvider } from './Context/AuthContext';

function App() {
  return (<>
      <AuthContextProvider>
          <AppRouter/>
      </AuthContextProvider>
  </>);
}

export default App;

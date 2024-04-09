import Routes from './Routes/routes';
import './App.css'
import { AuthProvider } from './Contexts/Auth';


function App() {
  return (
    <AuthProvider>
    <div> 
      <Routes />
    </div>
    </AuthProvider>
    
  );
}

export default App;

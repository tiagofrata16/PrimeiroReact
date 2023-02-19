import Principal from './components/Principal'
import Cabecalho from './components/Cabecalho'
import Topicos from './components/Topicos';
import './App.css';

function App() {
  return (
    <div className="App">
        <Cabecalho/>
        <Principal/>
        <Topicos/>
    </div>
  );
}

export default App;

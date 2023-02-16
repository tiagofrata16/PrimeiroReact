import Frase from './components/Frase1'
import './App.css';

function App() {
  const url = "https://s2.glbimg.com/_pteQAhIBz6Sq3IQcmc5jxJficI=/0x0:695x643/640x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/r/H/SXAEmQSG2GbN8WT6Bp7Q/2016-03-21-991304-placa-de-som-asus-xonar-essence-st-3.jpg"
  return (
    <div className="App">
        <h1>Placa de Som</h1>
        <img alt="Placa de Video" src={url}/>
        <Frase/>
    </div>
  );
}

export default App;

import BarraLateral from './BarraLateral'
import Main from './Main'
import styles from './Principal.module.css'

function Principal() {
  return (
    <section className = {styles.mainBarraLateral}>
    <Main/>
    <BarraLateral/>
    </section>    
  );
}

export default Principal;
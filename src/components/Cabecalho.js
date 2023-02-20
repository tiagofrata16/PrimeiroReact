import Logo from './Logo';
import Nav from './Nav';
import styles from "./Cabecalho.module.css";

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
        <Logo/>
        <Nav/>
    </header>
  );
}

export default Cabecalho;
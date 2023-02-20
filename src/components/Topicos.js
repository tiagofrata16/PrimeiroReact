import ImagemGaming from './img/image-gaming-growth.jpg'
import RetroPCs from './img/image-retro-pcs.jpg'
import TopLaptop from './img/image-top-laptops.jpg'
import styles from './Topicos.module.css'

function Topicos () {
  return (
    <section className = {styles.containerTopicos}>
      <div className = {styles.topico}>
        <img alt="RetroPCs" src={RetroPCs}/>
        <div>
            <h1 className = {styles.numero}>01</h1>
            <h1 className = {styles.topicoTitulo}>Reviving Retro PCs</h1>
            <p>What happens when old PCs <br/>
            are given modern upgrades?
            </p>
        </div>
      </div>
      <div className = {styles.topico}>
        <img alt="TopLaptop" src={TopLaptop}/>
        <div>
            <h1 className = {styles.numero}>02</h1>
            <h1 className = {styles.topicoTitulo}>Top 10 Laptops of 2022</h1>
            <p>Our best picks for various <br/>
            needs and budgets.
            </p>
        </div>
      </div>
      <div className = {styles.topico}>
        <img alt="Gaming" src={ImagemGaming}/>
        <div>
            <h1 className = {styles.numero}>03</h1>
            <h1 className = {styles.topicoTitulo}>The Growth of Gaming</h1>
            <p>How the pandemic has sparked <br/>
            fresh opportunities.
            </p>
        </div>
      </div>
    </section>
  );
}

export default Topicos;

import ImagemGaming from './img/image-gaming-growth.jpg'
import RetroPCs from './img/image-retro-pcs.jpg'
import TopLaptop from './img/image-top-laptops.jpg'

function Topicos () {
  return (
    <section>
      <div>
        <img alt="RetroPCs" src={RetroPCs}/>
        <div>
            <h1>Reviving Retro PCs</h1>
            <h2>What happens when old PCs <br/>
            are given modern upgrades?
            </h2>
        </div>
      </div>
      <div>
        <img alt="TopLaptop" src={TopLaptop}/>
        <div>
            <h1>Top 10 Laptops of 2022</h1>
            <h2>Our best picks for various <br/>
            needs and budgets.
            </h2>
        </div>
      </div>
      <div>
        <img alt="Gaming" src={ImagemGaming}/>
        <div>
            <h1>The Growth of Gaming</h1>
            <h2>How the pandemic has sparked <br/>
            fresh opportunities.
            </h2>
        </div>
      </div>
    </section>
  );
}

export default Topicos;

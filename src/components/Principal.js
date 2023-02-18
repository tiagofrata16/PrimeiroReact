import ImagemWeb from './img/image-web-3-desktop.jpg'
import ImagemGaming from './img/image-gaming-growth.jpg'
import RetroPCs from './img/image-retro-pcs.jpg'
import TopLaptop from './img/image-top-laptops.jpg'

function Principal() {
  return (
        <main>
             <aside>
                <h1>New</h1>
                <h2>Hydrogen VS Electric Cars</h2>
                <h3>Will hydrogen-fueled cars ever catch up to EVs?</h3>
                <h2>The Downsides of Al Artistry</h2>
                <h3>What are the possible adverse effects of on-demand AI image generation?</h3>
                <h2>Is VC Funding Drying Up?</h2>
                <h3>Private funding by VC firms is down 50% YOY. We take a look at what that means</h3>
            </aside>
        <section>
            <img alt="Imagem Web" src={ImagemWeb}/>
            <div>
                <h1>The Bright Future of Web 3.0?</h1>
                <div>
                    <h2>We dive into the next evolution of web that<br/>
                    claims to put the power of the platforms back<br/>
                    into the hands of the people. But is it really<br/>
                    fulfilling its promise?
                    </h2>
                    <button>READ MORE</button>
                </div>
            </div>
        </section>
        <section>
                <img alt="RetroPCs" src={RetroPCs}/>
                <div>
                    <h1>Reviving Retro PCs</h1>
                    <h2>What happens when old PCs <br/>
                    are given modern upgrades?
                    </h2>
                </div>
                <img alt="TopLaptop" src={TopLaptop}/>
                <div>
                    <h1>Top 10 Laptops of 2022</h1>
                    <h2>Our best picks for various <br/>
                    needs and budgets.
                    </h2>
                </div>
                <img alt="Gaming" src={ImagemGaming}/>
                <div>
                    <h1>The Growth of Gaming</h1>
                    <h2>How the pandemic has sparked <br/>
                    fresh opportunities.
                    </h2>
                </div>
        </section>
        </main>
  );
}

export default Principal;
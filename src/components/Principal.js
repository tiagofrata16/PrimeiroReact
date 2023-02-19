import ImagemWeb from './img/image-web-3-desktop.jpg'
import BarraLateral from './BarraLateral'

function Principal() {
  return (
    <section>
        <main>
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
        </main>
       <BarraLateral/>
    </section>    
  );
}

export default Principal;
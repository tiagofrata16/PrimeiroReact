import ImagemWeb from './img/image-web-3-desktop.jpg'
import styles from './main.module.css'

function Main() {
    return (
        <main className = {styles.main}>
            <img alt="Imagem Web" src={ImagemWeb}/>
            <div className = {styles.mainText}>
                <h1>The Bright<br/>
                     Future of<br/>
                      Web 3.0?</h1>
                <div>
                    <p>We dive into the next evolution of the web that<br/>
                    claims to put the power of the platforms back<br/>
                    into the hands of the people. But is it really<br/>
                    fulfilling its promise?
                    </p>
                    <button>READ MORE</button>
                </div>
            </div>
        </main>
    )
}

export default Main;
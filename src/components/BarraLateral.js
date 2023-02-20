import styles from './BarraLateral.module.css'

function BarraLateral() {
    return (
        <div className = {styles.barraLateral}>
            <h1>New</h1>
            <h2>Hydrogen VS Electric Cars</h2>
            <p>Will hydrogen-fueled cars ever catch up<br/>
             to EVs?</p>
            <h2>The Downsides of Al Artistry</h2>
            <p>What are the possible adverse effects of<br/>
             on-demand AI image generation?</p>
            <h2>Is VC Funding Drying Up?</h2>
            <p>Private funding by VC firms is down 50%<br/>
             YOY. We take a look at what that means</p>
        </div>
    );
}

export default BarraLateral;
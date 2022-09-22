import "./Descubre.scss";

const Descubre = () => {
  return(
    <section className="descubre">
        <h2 className="descubre_title">Descubre</h2>
        <div className="descubre_container">
            <div className="descubre_innerContainer descubre_extra">
                <div className="descubre_textContainer">
                    <div>
                        <h4 className="descubre_category">Especial Primavera</h4>
                        <p className="descubre_promotion">Hasta 25% OFF<br/> en entretenimiento</p>
                    </div>
                    <button className="descubre_button">Ver más</button>
                </div>
                <div>
                    <img className="descubre_image" src="https://http2.mlstatic.com/D_NQ_941275-MLA51576491680_092022-C.webp" alt="Cerveza y guirnalda de flores."/>
                </div>
            </div>

            <div className="descubre_innerContainer">
                <div className="descubre_textContainer">
                    <div>
                        <h4 className="descubre_category">Sube el volumen</h4>
                        <p className="descubre_promotion">Hasta 20% OFF<br/> y 6 cuotas sin interés</p>
                    </div>
                    <button className="descubre_button">Descubre</button>
                </div>
                <div>
                    <img className="descubre_image" src="https://http2.mlstatic.com/D_NQ_772193-MLA51576767876_092022-C.webp" alt="Cerveza y guirnalda de flores."/>
                </div>
            </div>
        </div>
    </section>
  ) 
};

export default Descubre;

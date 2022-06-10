
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='bg_animate'>
        <div className='header_nav'>
            <div className='contenedor'>
              <h1> Proyecto 3</h1>
              <nav>
                <a href='#'>Inicio </a>
                <a href='#'>Servicios </a>
                <a href='#'>Contacto </a>
              </nav>
            </div>
          </div>


          <div className="banner contenedor">
            <div className="banner_title">
              <h2>Necesitas ayuda con tu pagina web?</h2>
              <a href="#" className="llamanos">Llamanos Ya!</a>
            </div>
            <div className="banner_img">
                <img 
                src={require("./imagenes/buzo.png")}
                alt="">
                  
                </img>
            </div>
          </div>

          <div className="burbujas">

            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>

          </div>
        </div>
      </div> 

    
  );
}

export default App;

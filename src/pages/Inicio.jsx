export default function Inicio() {
  return (
    <div className="w3-container w3-content" style={{ maxWidth: '1400px', marginTop: '80px' }}>
      <div className="w3-row">
        {/* Columna izquierda */}
        <div className="w3-col m3">
          <div className="w3-card w3-round w3-white">
            <div className="w3-container">
              <h4 className="w3-center">Mi perfil</h4>
              <p className="w3-center">
                <img src="https://www.w3schools.com/w3images/avatar3.png" className="w3-circle" style={{ height: '106px', width: '106px' }} alt="Avatar" />
              </p>
              <hr />
              <p><i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i> Diseñador UI</p>
              <p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> Londres, Reino Unido</p>
              <p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> 1 de abril, 1988</p>
            </div>
          </div>
          <br />
          <div className="w3-card w3-round">
            <div className="w3-white">
              <button onClick={() => {
                const el = document.getElementById('Demo1')
                el.className.indexOf('w3-show') === -1 ? el.className += ' w3-show' : el.className = el.className.replace(' w3-show', '')
              }} className="w3-button w3-block w3-theme-l1 w3-left-align">
                <i className="fa fa-circle-o-notch fa-fw w3-margin-right"></i> Mis Grupos
              </button>
              <div id="Demo1" className="w3-hide w3-container"><p>Algunos grupos...</p></div>
              <button onClick={() => {
                const el = document.getElementById('Demo2')
                el.className.indexOf('w3-show') === -1 ? el.className += ' w3-show' : el.className = el.className.replace(' w3-show', '')
              }} className="w3-button w3-block w3-theme-l1 w3-left-align">
                <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i> Mis Eventos
              </button>
              <div id="Demo2" className="w3-hide w3-container"><p>Algunos eventos...</p></div>
            </div>
          </div>
          <br />
          <div className="w3-card w3-round w3-white w3-hide-small">
            <div className="w3-container">
              <p>Intereses</p>
              <p>
                <span className="w3-tag w3-small w3-theme-d5">Noticias</span>{' '}
                <span className="w3-tag w3-small w3-theme-d3">Diseño</span>{' '}
                <span className="w3-tag w3-small w3-theme-d2">Juegos</span>{' '}
                <span className="w3-tag w3-small w3-theme-l2">Comida</span>{' '}
                <span className="w3-tag w3-small w3-theme-l3">Arte</span>{' '}
                <span className="w3-tag w3-small w3-theme-l4">Fotos</span>
              </p>
            </div>
          </div>
        </div>

        {/* Columna central */}
        <div className="w3-col m7">
          <div className="w3-row-padding">
            <div className="w3-col m12">
              <div className="w3-card w3-round w3-white">
                <div className="w3-container w3-padding">
                  <h6 className="w3-opacity">¿Qué estás pensando?</h6>
                  <p contentEditable="true" className="w3-border w3-padding">Estado: Sintiéndome bien</p>
                  <button type="button" className="w3-button w3-theme"><i className="fa fa-pencil"></i> Publicar</button>
                </div>
              </div>
            </div>
          </div>

          {/* Post 1 */}
          <div className="w3-container w3-card w3-white w3-round w3-margin"><br />
            <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: '60px' }} />
            <span className="w3-right w3-opacity">Hace 1 min</span>
            <h4>John Doe</h4><br />
            <hr className="w3-clear" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
              <div className="w3-half">
                <img src="https://www.w3schools.com/w3images/lights.jpg" style={{ width: '100%' }} alt="Luces" className="w3-margin-bottom" />
              </div>
              <div className="w3-half">
                <img src="https://www.w3schools.com/w3images/nature.jpg" style={{ width: '100%' }} alt="Naturaleza" className="w3-margin-bottom" />
              </div>
            </div>
            <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up"></i> Me gusta</button>
            <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment"></i> Comentar</button>
          </div>

          {/* Post 2 */}
          <div className="w3-container w3-card w3-white w3-round w3-margin"><br />
            <img src="https://www.w3schools.com/w3images/avatar5.png" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: '60px' }} />
            <span className="w3-right w3-opacity">Hace 16 min</span>
            <h4>Jane Doe</h4><br />
            <hr className="w3-clear" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up"></i> Me gusta</button>
            <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment"></i> Comentar</button>
          </div>

          {/* Post 3 */}
          <div className="w3-container w3-card w3-white w3-round w3-margin"><br />
            <img src="https://www.w3schools.com/w3images/avatar6.png" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: '60px' }} />
            <span className="w3-right w3-opacity">Hace 32 min</span>
            <h4>Angie Jane</h4><br />
            <hr className="w3-clear" />
            <p>¿Viste esto?</p>
            <img src="https://www.w3schools.com/w3images/nature.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Naturaleza" />
            <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up"></i> Me gusta</button>
            <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment"></i> Comentar</button>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="w3-col m2">
          <div className="w3-card w3-round w3-white w3-center">
            <div className="w3-container">
              <p>Próximos Eventos:</p>
              <img src="https://www.w3schools.com/w3images/forest.jpg" alt="Bosque" style={{ width: '100%' }} />
              <p><strong>Vacaciones</strong></p>
              <p>Viernes 15:00</p>
              <p><button className="w3-button w3-block w3-theme-l4">Info</button></p>
            </div>
          </div>
          <br />
          <div className="w3-card w3-round w3-white w3-center">
            <div className="w3-container">
              <p>Solicitud de amistad</p>
              <img src="https://www.w3schools.com/w3images/avatar6.png" alt="Avatar" style={{ width: '50%' }} /><br />
              <span>Jane Doe</span>
              <div className="w3-row w3-opacity">
                <div className="w3-half">
                  <button className="w3-button w3-block w3-green w3-section" title="Aceptar"><i className="fa fa-check"></i></button>
                </div>
                <div className="w3-half">
                  <button className="w3-button w3-block w3-red w3-section" title="Rechazar"><i className="fa fa-remove"></i></button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="w3-card w3-round w3-white w3-padding-16 w3-center">
            <p>ADS</p>
          </div>
        </div>
      </div>
      <br />
      <footer className="w3-container w3-theme-d3 w3-padding-16">
        <h5>RedSocial © 2025</h5>
      </footer>
    </div>
  )
}

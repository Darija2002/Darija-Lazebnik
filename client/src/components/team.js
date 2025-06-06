import React from 'react';
import '../css/new_style.css';

function Team() {
  const contactMember = (name) => {
    alert(`Kontaktinis asmuo: ${name}`);
  };

  const searchLocation = () => {
    alert('Ieškoma vietos...');
  };

  return (
    <div>
      <header className="bg-primary text-white text-center py-4">
        <h1>Komanda</h1>
        <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item"><a className="nav-link text-white" href="/">Pagrindinis</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="/about">Apie</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="/contact">Kontaktai</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="/projects">Projektai</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="/team">Komanda</a></li>
          </ul>
        </nav>
      </header>

      <main className="container my-5">
        <section>
          <h2 className="text-center mb-4">Mūsų komanda</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card animate">
                <img src="/images/gallery1.jpg" className="card-img-top" alt="Komandos narys 1" />
                <div className="card-body text-center">
                  <h5 className="card-title">Jonas Jonaitis</h5>
                  <button className="btn btn-primary" onClick={() => contactMember('Jonas Jonaitis')}>Daugiau informacijos</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card animate">
                <img src="/images/gallery2.jpg" className="card-img-top" alt="Komandos narys 2" />
                <div className="card-body text-center">
                  <h5 className="card-title">Ona Onaitė</h5>
                  <button className="btn btn-primary" onClick={() => contactMember('Ona Onaitė')}>Daugiau informacijos</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card animate">
                <img src="/images/gallery3.jpg" className="card-img-top" alt="Komandos narys 3" />
                <div className="card-body text-center">
                  <h5 className="card-title">Petras Petraitis</h5>
                  <button className="btn btn-primary" onClick={() => contactMember('Petras Petraitis')}>Daugiau informacijos</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-center my-4">Savanorių centrų vietos</h2>
          <div className="input-group mb-3">
            <input type="text" className="form-control" id="locationSearch" placeholder="Ieškoti vietos..." onInput={searchLocation} />
            <button className="btn btn-primary" onClick={searchLocation}>Ieškoti</button>
          </div>
          <div id="map" style={{ height: 400, borderRadius: 10 }}></div>
        </section>
      </main>

      <footer className="bg-dark text-white text-center py-3">
        <p>© 2025 Darija2002. Visos teisės saugomos.</p>
      </footer>
    </div>
  );
}

export default Team;

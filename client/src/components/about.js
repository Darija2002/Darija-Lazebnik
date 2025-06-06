import React from 'react';
import '../css/styles.css';


function About() {
  return (
    <div>
      <header>
        <h1>Apie mus</h1>
        <nav>
          <ul className="nav">
            <li><a href="/">Pagrindinis</a></li>
            <li><a href="/about">Apie</a></li>
            <li><a href="/contact">Kontaktai</a></li>
            <li><a href="/projects">Projektai</a></li>
            <li><a href="/team">Komanda</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h2>Mūsų istorija</h2>
          <p>
            Mūsų organizacija buvo įkurta 2010 metais su tikslu skatinti savanorystę Lietuvoje.
            Per daugiau nei dešimtmetį mes padėjome tūkstančiams žmonių atrasti savanorystės džiaugsmą
            ir prisidėti prie bendruomenės gerovės. Mūsų komanda tiki, kad kiekvienas gali prisidėti
            prie teigiamų pokyčių, nesvarbu, ar tai būtų pagalba vietinei bendruomenei, ar dalyvavimas
            tarptautiniuose projektuose.
          </p>
        </section>

        <section>
          <h2>Savanorystės nauda</h2>
          <ul>
            <li><strong>Asmeninis augimas:</strong> Savanorystė padeda įgyti naujų įgūdžių, patirties ir pasitikėjimo savimi.</li>
            <li><strong>Bendruomenės stiprinimas:</strong> Prisidėdami prie bendruomenės projektų, jūs padedate kurti stipresnę ir vieningesnę visuomenę.</li>
            <li><strong>Socialiniai ryšiai:</strong> Savanorystė suteikia galimybę susipažinti su naujais žmonėmis ir plėsti savo socialinį tinklą.</li>
            <li><strong>Emocinė gerovė:</strong> Pagalba kitiems suteikia prasmės jausmą ir pagerina emocinę savijautą.</li>
            <li><strong>Karjeros galimybės:</strong> Savanorystė gali būti puikus būdas pradėti karjerą ar atrasti naują profesinę kryptį.</li>
          </ul>
        </section>

        <section>
          <h2>Mūsų projektai</h2>
          <table>
            <thead>
              <tr>
                <th>Projekto pavadinimas</th>
                <th>Metai</th>
                <th>Rezultatai</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pagalba šeimoms</td>
                <td>2023</td>
                <td>500+ šeimų gavo pagalbą</td>
              </tr>
              <tr>
                <td>Vaikų švietimo programa</td>
                <td>2024</td>
                <td>1000+ vaikų dalyvavo</td>
              </tr>
              <tr>
                <td>Bendruomenių stiprinimas</td>
                <td>2025</td>
                <td>200+ projektų įgyvendinta</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      <footer>
        <p>© 2025 Savanorystės komanda. Visos teisės saugomos.</p>
      </footer>
    </div>
  );
}

export default About;

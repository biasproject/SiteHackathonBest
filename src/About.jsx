// src/About.jsx

import './App.css';
import imagineEchipa from './assets/dsb.JPG';
import imagineLogo from './assets/logohkt.png';

export default function AboutSection() {
  return (
    <section id="About">

      <div className="about-hero-section">
        <div className="content-wrapper">
          <div className="sectiune-doua-coloane">
            <div className="about-text-container">
              <h1>About the Hackathon</h1>
              <p>
                Hackathon is a 24-hour coding competition where you can put skills like organisation, teamwork under pressure, and collaboration to the test!
                To participate, your physical presence is required, along with a team of up to 3 members.              </p>
              <p>
                This kind of event gives you and your teammates the chance to turn an idea into a functional prototype in just a day, experiment with new technologies, and gain hands-on experience in a dynamic environment. You’ll also meet other talented programmers and designers, building connections and friendships along the way.
                This experience enriches your CV and shows employers your initiative and real skills!              </p>
            </div>
            <div className="coloana-imagine logo-container">
              <img src={imagineLogo} alt="Hackathon Logo" />
            </div>
          </div>

          <div className="info-box-container">
            <div className="info-box">
              <div className="info-item">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#A020F0">
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z" />
                </svg>
                <span>28 February 2026</span>
              </div>

              <div className="info-item">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#A020F0">
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>Coresi Business Camp, 5 Turnului street, N2 Office</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="content-wrapper" style={{ paddingTop: '60px' }}>
        <div className="sectiune-doua-coloane">
          <div className="coloana-imagine">
            <img src={imagineEchipa} alt="Echipa BEST Brașov" />
          </div>
          <div className="about-text-container text-align-right">
            <h2>Who are we?</h2>
            <p>
              BEST, or Board of European Students of Technology is a constantly growing non-profit and non-political organisation.
              Established in 1997 under the Transylvania University of Brașov, BEST Brașov deals both with facilitating communication between the University, students and companies, but also with the professional and personal development of the organization’s members and students.            </p>
            <a href="https://bestbrasov.ro/" target="_blank" rel="noopener noreferrer" className="buton-best">
              LEARN MORE ABOUT BEST
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
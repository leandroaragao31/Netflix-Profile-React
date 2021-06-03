import React, { Component } from "react";
import "./styles.css";
import Profile1 from "./assets/profile-bolado.png";
import Profile2 from "./assets/profile-pinguin.png";
import Profile3 from "./assets/profile-minion.png";
import Profile4 from "./assets/profile-smile.jpg";
import Profile5 from "./assets/profile-robo.jpg";

class Main extends Component {
  render() {
    return (
      <main>
        <section>
          <h2>Quem está assistindo?</h2>
          <div className="perfil-container">
            <figure>
              <img className="box-img" src={Profile1} alt="bolado" />
              <p>Luan</p>
            </figure>
            <figure>
              <img className="box-img" src={Profile2} alt="pinguin" />
              <p>Rhayssa</p>
            </figure>
            <figure>
              <img className="box-img" src={Profile3} alt="minion" />
              <p>Paula</p>
            </figure>
            <figure>
              <img className="box-img" src={Profile4} alt="smile" />
              <p>Roberto</p>
            </figure>
            <figure>
              <img className="box-img" src={Profile5} alt="robo" />
              <p>João</p>
            </figure>
          </div>

          <div className="box-button">
            <button>gerenciar perfis</button>
          </div>
        </section>
      </main>
    );
  }
}

export default Main;

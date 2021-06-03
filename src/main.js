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
            <img src={Profile1} alt="bolado" />
            <img src={Profile2} alt="pinguin" />
            <img src={Profile3} alt="pinguin" />
            <img src={Profile4} alt="pinguin" />
            <img src={Profile5} alt="pinguin" />
          </div>
        </section>
      </main>
    );
  }
}

export default Main;

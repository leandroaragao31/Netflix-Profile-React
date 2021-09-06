import React, { Component } from "react";
import "../styles.css";
import styled, { keyframes } from "styled-components";
import Logo from "../assets/logo-netflix.jpg";
import Profile1 from "../assets/profile-bolado.png";
import Profile2 from "../assets/profile-pinguin.png";
import Profile3 from "../assets/profile-minion.png";
import Profile4 from "../assets/profile-smile.jpg";
import Profile5 from "../assets/profile-robo.jpg";

const title = keyframes`
      from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(40deg);
  }
`;

const Title = styled.h1`
  font-size: 2.5vw;
  text-align: center;
  letter-spacing: 0.3vw;
  padding-bottom: 1vh;
  color: white;
  cursor: pointer;
  font-family: "Helvetica Neue ME";
  &:hover {
    animation: ${title} 0.2s linear;
  }
`;

class Home extends Component {
  state = {
    Profiles: [
      {
        nome: "Luan",
        Photo: Profile1
      },
      {
        nome: "Leandro",
        Photo: Profile2
      },
      {
        nome: "Dandara",
        Photo: Profile3
      },
      {
        nome: "Pamela",
        Photo: Profile4
      },
      {
        nome: "Evelyn",
        Photo: Profile5
      }
    ]
  };

  render() {
    return (
      <>
        <header>
          <div className="container-logo">
            <img className="logo" src={Logo} alt="netflix-logo" />
          </div>
        </header>
        <main>
          <section>
            <Title>Quem está assistindo?</Title>

            {this.state.Profiles.map((item) => (
              <div className="perfil-container">
                <img
                  className="box-img"
                  src={item.Photo}
                  alt="foto de perfil"
                />
                <h3 className="subtext">{item.nome}</h3>
              </div>
            ))}
            <div className="box-button">
              <button>gerenciar perfis</button>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Home;

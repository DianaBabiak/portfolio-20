import "./App.css";
import { Header } from "./layout/header/Header.tsx";
import { Main } from "./layout/section/main/Main.tsx";
import { Skills } from "./layout/section/skills/Skills.tsx";
import { Projects } from "./layout/section/projects/Projects.tsx";
import { Contacts } from "./layout/section/contacts/Contacts.tsx";
import { Footer } from "./layout/footer/Footer.tsx";
import {UserPhoto} from "./layout/userPhoto/UserPhoto.tsx";
import { S } from "./components/App_Styles.ts";
import { Particle } from "./components/particle/Particle.tsx";


function App() {
  return (
      <S.AppContainer>
        <S.PositionContainer>
          <Header />
          <UserPhoto />
        </S.PositionContainer>
        <Main />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
        <Particle />
      </S.AppContainer>
  );
}

export default App;

import "./App.css";
import { Header } from "./layout/header/Header.tsx";
import { Main } from "./layout/section/main/Main.tsx";
import { Skills } from "./layout/section/skills/Skills.tsx";
import { Projects } from "./layout/section/projects/Projects.tsx";
import { Contacts } from "./layout/section/contacts/Contacts.tsx";
import { Footer } from "./layout/footer/Footer.tsx";
import {AppContainer} from "./components/appContainer/AppContainer.ts";

function App() {
  return (
    <AppContainer>
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Contacts/>
      <Footer />
    </AppContainer>
  );
}

export default App;

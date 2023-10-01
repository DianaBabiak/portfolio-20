import "./App.css";
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/section/main/Main.tsx";
import {Skills} from "./layout/section/skills/Skills.tsx";
import {Projects} from "./layout/section/projects/Projects.tsx";
import {Contacts} from "./layout/section/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {DesktopUserPhoto} from "./layout/userPhoto/desktopUserPhoto/DesktopUserPhoto.tsx";
import {MobileUserPhoto} from "./layout/userPhoto/mobileUserPhoto/MobileUserPhoto.tsx";
import {S} from "./components/App_Styles.ts";
import {Particle} from "./components/particle/Particle.tsx";

function App() {
    return (
            <S.AppContainer >
                <Particle/>
                <S.PositionContainer>
                    <Header/>
                    <DesktopUserPhoto/>
                    <MobileUserPhoto/>
                </S.PositionContainer>
                <Main/>
                <Skills/>
                <Projects/>
                <Contacts/>
                <Footer/>
            </S.AppContainer>
    );
}

export default App;


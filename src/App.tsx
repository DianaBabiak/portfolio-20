import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from "styled-components";
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/section/main/Main.tsx";
import {Skills} from "./layout/section/skills/Skills.tsx";
import {Projects} from "./layout/section/projects/Projects.tsx";
import {Contacts} from "./layout/section/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

function App() {


    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    )
}

export default App




import axios from 'axios';
import {useEffect, useState, createContext} from 'react';
import './App.css';
import {Container, IconButton} from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';
import Footer from "./components/Footer/Footer";

export const ThemeModeContext = createContext(null);

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const[word, setWord] = useState("");
  const[meanings, setMeanings] = useState([]);
  const[language, setLanguage] = useState("");

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`);
      //console.log('data:', data);
      setMeanings(data.data);
    } catch (error) {
      console.log('error:', error);
    }
  }
  //console.log('meanings:',meanings);
  
  useEffect(() => {
    dictionaryApi();
  }, [word,language]);

  const toggleTheme = () => {
    setThemeMode((currentMode) => (currentMode === "light" ? "dark" : "light"))
  }

  return (
      <div className="App" style={{
        height: "100vh",
        backgroundColor: themeMode === "light" ? "white" : "black",
        color: themeMode === "light"  ? "black" : "white",
        transition: "all 0.5s linear",
      }}>
        <Container className="container" maxWidth="md">
          <div style={{position:"absolute", top:0, right:15, paddingTop:10}}>
            {themeMode} mode
            <IconButton onClick={toggleTheme} color="inherit">
              {themeMode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </div>
          <Header language={language} setLanguage={setLanguage} word={word} setWord={setWord} themeMode={themeMode} />
          {meanings && (<Definitions word={word} meanings={meanings}  language={language} themeMode={themeMode} />)}
        </Container>
        <Footer />
      </div>
  );
}

export default App;

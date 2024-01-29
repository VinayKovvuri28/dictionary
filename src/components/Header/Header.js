import React from 'react';
import './Header.css';
import {MenuItem, TextField, ThemeProvider, createTheme} from "@mui/material";
import languages from '../../data/language';

const Header = ({language,setLanguage,word,setWord,themeMode}) => {
    const darkTheme = createTheme({
        palette: {
            primary:{
                main: themeMode === "dark" ? "#fff" : "#000",
            },
          mode: `${themeMode}`,
        },
    });

    const handleChange = (language) => {
        setLanguage(language);
        setWord("");
    };

    const handleSearch =(word) => {
        setWord(word);
    };

    return (
        <div className='header'>
            <span className='title'>{word ? word : "Dictionary"}</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                    className='search'
                    label="Search a word" 
                    variant="standard" 
                    value={word} 
                    onChange={(event)=>handleSearch(event.target.value)} 
                    helperText="Please Search a word" >
                    </TextField>
                    <TextField
                    className='select'
                    select
                    label="Language"
                    value={language}
                    helperText="Please select your Language"
                    variant="standard"
                    onChange={(event)=>handleChange(event.target.value)}
                    >
                    {languages.map((option) => (
                        <MenuItem key={option.code} value={option.code}>
                        {option.name}
                        </MenuItem>
                    ))}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
